import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function Owner({ ownerData }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'#ffe8a9'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'owner data'}
      data={ownerData}
    />
  );
}
