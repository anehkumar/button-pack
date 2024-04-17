import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    height: 500px;
    background: #fff;
    border-bottom: 3px solid rgba(221, 229, 235, 0.5);
    padding: 80px 0px 40px 40px;
`;

export const StyledInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
`;

export const StyledIconSection = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
`;
export const StyledIcon = styled.img``;

export const StyledInfoSpan = styled.span`
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 48px;
    line-height: 60px;
    color: rgb(0, 89, 163);
`;

export const StyledInfoSubSpan = styled.span`
    max-width: 416px;
    padding-bottom: 44px;
    font-size: 20px;
    line-height: 28px;
    color: rgb(70, 81, 102);
`;

export const StyledButton = styled.button`
    padding: 15px 40px;
    border-radius: 10px;
    border: none;
    display: flex;
    color: #ffffff;
    background-color: #ef6e0b;
    cursor: pointer;
    font-family: 'Work Sans';
    width: 190px;
    border-radius: 12px;
`;
