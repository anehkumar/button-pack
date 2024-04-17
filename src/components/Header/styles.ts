import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    height: 80px;
    background: #fff;
    border-bottom: 3px solid rgba(221, 229, 235, 0.5);
    padding: 0px 80px;
`;

export const StyledHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
`;

export const StyledLogo = styled.img`
    display: flex;
    width: 80px;
`;

export const StyledDropdown = styled.select`
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: #fafafa;
    ::focus-visible {
        border: none !important;
        overflow: hidden;
    }
`;

export const StyledSignInButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    gap: 20px;
`;
