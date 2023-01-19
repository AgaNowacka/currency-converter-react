import styled, { ThemeProvider } from "styled-components";

export const StyledClock = styled.div`
    text-align: right;
    color: ${({ theme }) => theme.color.boulder};
    padding: 10px;
    font-family: 'Titillium Web', sans-serif;
    
`;