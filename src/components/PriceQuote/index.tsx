import React from 'react';
import {
    StyledButton,
    StyledContainer,
    StyledIcon,
    StyledIconSection,
    StyledInfoSection,
    StyledInfoSpan,
    StyledInfoSubSpan
} from './styles';
import { IQuote } from './types';

function PriceQuote({ onClick }: IQuote) {
    return (
        <StyledContainer>
            <StyledInfoSection>
                <StyledInfoSpan>Selling a car? We’re buying!</StyledInfoSpan>
                <StyledInfoSubSpan>
                    Get up to <b>₹20,000</b> when you sell and buy your next car from us.
                </StyledInfoSubSpan>
                <StyledButton onClick={onClick}>GET CAR PRICE</StyledButton>
            </StyledInfoSection>
            <StyledIconSection>
                <StyledIcon src="https://assets.cars24.com/production/c2b-website/240415181852/js/88440a417a25b2afa28eaf1fe1be3d94.png" />
            </StyledIconSection>
        </StyledContainer>
    );
}

export default PriceQuote;