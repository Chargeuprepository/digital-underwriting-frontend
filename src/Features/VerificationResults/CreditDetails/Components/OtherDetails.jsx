import AllVerificationAllCategoryTabs from '../../UI/AllVerificationAllCategoryTabs';

export default function OtherDetails({ otherDetails }) {
  return (
    <AllVerificationAllCategoryTabs
      height={''}
      backgroundcolor={'var(--color-verification-credit-dark)'}
      padding={'3rem 4rem 6rem 4rem'}
      categoryName={'other details'}
      data={otherDetails}
    />
  );
}
