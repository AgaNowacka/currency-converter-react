import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    flex-basis: 700px;
    margin: 20px;
    color: ${({ theme }) => theme.color.black};
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 30px ${({ theme }) => theme.color.black};
`;