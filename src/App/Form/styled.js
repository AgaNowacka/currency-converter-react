import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 10px;
    display: block;

`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.primaryColor};
    text-align: center;
    
`;

export const LabelText = styled.span`
    display: inline-block;
    padding: 15px;
    width: 100%;
    max-width: 200px;
    margin-right: 5px;

`;

export const Field = styled.input`
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    width: 100%;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.primaryColor};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primaryColor};
    border-radius: 5px;
    width: 100%;
    font-weight: 700;
    padding: 15px 0;
    transition: 0.3s;


    &:hover {
        filter: brightness(115%);
    }

    &:active {
        filter: brightness(120%);
    }
`;  

export const Info = styled.p`
    color: ${({ theme }) => theme.color.gray};
    font-size: smaller;
    text-align: center;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.primaryColor}
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson}
`;
