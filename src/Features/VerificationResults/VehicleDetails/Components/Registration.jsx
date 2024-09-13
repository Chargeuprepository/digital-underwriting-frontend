import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function Registration({ registrationData }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'var(--color-verification-vehicle-light)'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'registration data'}
      data={registrationData}
    />
  );
}
