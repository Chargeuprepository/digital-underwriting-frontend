import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function ApplicationDetails({ applicationDetails }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'#51aa7c'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'application details'}
      data={applicationDetails}
    />
  );
}
