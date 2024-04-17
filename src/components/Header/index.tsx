import React from 'react';
import {
  StyledContainer,
  StyledDropdown,
  StyledHeaderContainer,
  StyledLogo,
  StyledSignInButton,
  StyledWrapper,
} from './styles';
import { IHeader } from './types';

const Header: React.FunctionComponent<IHeader> = ({ iconSrc }) => {
  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledWrapper>
          <StyledLogo src={iconSrc ?? "https://fastly-production.24c.in/cars24/seo/static/1_20230830_1693395013.png"} />
          <StyledDropdown>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Chandigarh">Chandigarh</option>
          </StyledDropdown>
        </StyledWrapper>

        <StyledWrapper>
          <StyledDropdown>
            <option value="buy">Buy Car</option>
          </StyledDropdown>
          <StyledDropdown>
            <option value="sell">Sell Car</option>
          </StyledDropdown>
        </StyledWrapper>

        <StyledSignInButton onClick={() => alert('Sign In here')}>
          Sign In
        </StyledSignInButton>
      </StyledHeaderContainer>
    </StyledContainer>
  );
};

export default Header;
