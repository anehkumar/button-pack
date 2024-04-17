import React from 'react';
import { StyledBannerContainer, StyledHeading, StyledText, StyledTextContainer } from './styles';

const Banner: React.FunctionComponent = () => {
    return (
        <StyledBannerContainer>
            <StyledTextContainer>
                <StyledText>Certified cars with</StyledText>
                <StyledHeading>
                    up to 12-month <br />
                    Certified cars with
                </StyledHeading>
            </StyledTextContainer>
        </StyledBannerContainer>
    );
};

export default Banner;
