import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function AccountSummary({ accountSummary }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'#51aa7c'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'account summary'}
      data={accountSummary}
    />
  );
}
