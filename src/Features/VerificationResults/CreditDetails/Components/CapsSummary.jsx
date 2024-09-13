import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function CapsSummary({ capsSummary }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'var(--color-verification-credit-light)'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'CAPS summary'}
      data={capsSummary}
    />
  );
}
