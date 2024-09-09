import {
  Back,
  GreaterThan,
  Header,
  Logo,
  LogoVerificationContainer,
  Mobile,
  Name,
  NameMobileContainer,
  SingleDetailContainer,
  VerificationName,
  VerificationNav,
} from './Header';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoMdCall } from 'react-icons/io';
import { FaIdCard } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa6';

export default function VerificationHeader({ verification, data }) {
  return (
    <Header>
      <LogoVerificationContainer>
        <Logo to={'/dashboard'}>
          <img src="/img/logo-plug.webp" />
        </Logo>
        <VerificationNav>
          <Back to={'/verification'}>verifiction</Back>
          <GreaterThan>
            <FaGreaterThan />
          </GreaterThan>
          <VerificationName>{verification}</VerificationName>
        </VerificationNav>
      </LogoVerificationContainer>
      <NameMobileContainer>
        <SingleDetailContainer color="var(--color-gray-700)">
          <IoPersonCircleOutline />
          <Name>{data.name}</Name>
        </SingleDetailContainer>
        <SingleDetailContainer color="var(--color-gray-500)">
          {data.secondIcon === 'mobile' ? <IoMdCall /> : <FaIdCard />}
          <Mobile>{data[Object.keys(data)[1]]}</Mobile>
        </SingleDetailContainer>
      </NameMobileContainer>
    </Header>
  );
}
