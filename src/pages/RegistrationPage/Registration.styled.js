import styled from "styled-components";

export const RegDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #2E2E2E;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RegBox = styled.div`
width: 366px;
height: 550px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffff;
border-radius: 12px;
padding-top: 36px;
gap: 40px;
`
export const RegForm = styled.form`
display: flex;
    flex-direction: column;
    background-color: #ffffff;
    gap: 38px;
`

export const Reginput = styled.input`
font-family: 'StratosSkyeng';
height: 35px;
width: 278px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
border: none;
outline: none;
border-bottom: solid 1px #D0CECE;

::placeholder {
    color: #D0CECE;
`
export const LogButton = styled.button`
width: 278px;
    height: 52px;
    background-color: #580EA2;
    border-radius: 6px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    letter-spacing: -0.05px;
    border: none;
    margin-top: 60px;
    transition: 0.3s;

    :hover {
        background-color: #3F007D;
    }
    
   :active {
        background-color: #271A58;
    }
    
`