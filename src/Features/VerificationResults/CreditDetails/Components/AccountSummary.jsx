import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function AccountSummary({ accountSummary }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'var(--color-verification-credit-dark)'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'account summary'}
      data={accountSummary}
    />
  );
}
