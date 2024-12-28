// import OnboardedHeader from './Components/OnboardedHeader';
// import OnboardedBody from './Components/OnboardedBody';
// import Pagination from '../../UI/Pagination';
// import GridMaker from '../../UI/GridMaker';
// import PrePostOnboarding from './Components/PrePostOnboarding';
// import { useEffect, useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useOnboardedDriversQueryManager } from './GraphQL/queryManager';

// export default function OnboardedDriversLayout() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   // const [searchId, setSearchId] = useState('');

//   const { fetchOnboardedDriversData, loading, error, driverData } =
//     useOnboardedDriversQueryManager('getOnboardedData');

//   useEffect(
//     function () {
//       const updatedVariables = {
//         credit: queryParams.get('credit') || '',
//         risk: queryParams.get('risk') || '',
//         karma: queryParams.get('karma') || '',
//         offset: +queryParams.get('offset') || 0,
//       };

//       fetchOnboardedDriversData({
//         variables: {
//           input: updatedVariables,
//         },
//       });
//     },
//     [location.search, fetchOnboardedDriversData]
//   );

//   function handleSearch(id) {
//     setSearchId(id);
//   }

//   console.log(driverData);

//   return (
//     <GridMaker column="1fr" row="1rem 5rem 1fr 3rem" gap="2rem" height={'82vh'}>
//       <PrePostOnboarding></PrePostOnboarding>
//       <OnboardedHeader
//         length={
//           driverData?.onboarded?.length || driverData?.searchDrivers?.length
//         }
//         handleSearch={handleSearch}
//       />
//       <OnboardedBody
//         driverData={driverData?.onboarded || driverData?.searchDrivers}
//       />
//       {driverData?.onboarded && (
//         <Pagination
//           count={driverData?.onboarded?.length || driverData?.onboarded?.length}
//         />
//       )}
//     </GridMaker>
//   );
// }

import OnboardedHeader from './Components/OnboardedHeader';
import OnboardedBody from './Components/OnboardedBody';
import Pagination from '../../UI/Pagination';
import GridMaker from '../../UI/GridMaker';
import PrePostOnboarding from './Components/PrePostOnboarding';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useOnboardedDriversQueryManager } from './GraphQL/queryManager';
import TryAgain from '../../UI/TryAgain';
import toast from 'react-hot-toast';

export default function OnboardedDriversLayout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { fetchOnboardedDriversData, loading, error, driverData } =
    useOnboardedDriversQueryManager('getOnboardedData');

  useEffect(
    function () {
      const updatedVariables = {
        credit: queryParams.get('credit') || '',
        risk: queryParams.get('risk') || '',
        karma: queryParams.get('karma') || '',
        offset: +queryParams.get('offset') || 0,
      };

      fetchOnboardedDriversData({
        variables: {
          input: updatedVariables,
        },
      });
    },
    [location.search, fetchOnboardedDriversData]
  );

  useEffect(
    function () {
      if (driverData?.onboarded?.error?.message) {
        toast.error(
          `${driverData?.onboarded?.error?.status}: ${driverData?.onboarded?.error?.message}`
        );
      }
    },
    [driverData?.onboarded?.error?.message]
  );

  useEffect(
    function () {
      if (
        driverData?.onboarded?.settingGoogleSheetDataInfo?.dataSet === false
      ) {
        toastWarning(
          driverData?.onboarded?.settingGoogleSheetDataInfo?.error?.message
        );
      }
      if (driverData?.onboarded?.gettingGoogleSheetDataInfo?.status) {
        toastWarning(
          driverData?.onboarded?.gettingGoogleSheetDataInfo?.message
        );
      }
    },
    [
      driverData?.onboarded?.settingGoogleSheetDataInfo?.dataSet,
      driverData?.onboarded?.gettingGoogleSheetDataInfo?.status,
    ]
  );

  function handleSearch(id) {
    console.log(id);
    fetchOnboardedDriversData({
      variables: {
        input: {
          searchId: id,
        },
      },
    });
  }

  console.log(driverData);

  return (
    <GridMaker column="1fr" row="1rem 5rem 1fr 3rem" gap="2rem" height={'82vh'}>
      {driverData?.onboarded.data === null ? (
        <TryAgain />
      ) : (
        <>
          <PrePostOnboarding></PrePostOnboarding>
          <OnboardedHeader
            length={driverData?.onboarded.data.length}
            handleSearch={handleSearch}
          />
          <OnboardedBody driverData={driverData?.onboarded.data} />
          <Pagination count={driverData?.onboarded.data.length} />
        </>
      )}
    </GridMaker>
  );
}
