import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 10px;
    display: block;

`;

export const Header = styled.h1`
    color: teal;
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
    border: 1px solid rgb(202, 198, 198);
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    width: 100%;
`;

export const Button = styled.button`
    background-color: teal;
    color: white;
    border: 1px solid teal;
    border-radius: 5px;
    width: 100%;
    font-weight: 700;
    padding: 15px 0;
    transition: 0.3s;


    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(110%);
    }
`;  

export const Info = styled.p`
    color: rgb(148, 145, 145);
    font-size: smaller;
    text-align: center;
`;

