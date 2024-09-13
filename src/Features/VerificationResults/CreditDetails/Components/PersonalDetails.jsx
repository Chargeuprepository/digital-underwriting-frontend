import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function PersonalDetails({ personalDetails }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'var(--color-verification-credit-light)'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'personal details'}
      data={personalDetails}
    />
  );
}
