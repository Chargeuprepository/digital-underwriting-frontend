import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function Insurance({ insuranceData }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'var(--color-verification-vehicle-dark)'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'insurance data'}
      data={insuranceData}
    />
  );
}
