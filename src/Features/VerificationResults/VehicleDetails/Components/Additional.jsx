import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function Additional({ additionalData }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'#ffe8a9'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'additional data'}
      data={additionalData}
    />
  );
}