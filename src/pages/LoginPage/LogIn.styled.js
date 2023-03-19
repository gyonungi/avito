import styled from "styled-components";


export const LogDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #2E2E2E;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogBox = styled.div`
width: 366px;
height: 439px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffff;
border-radius: 12px;
padding-top: 36px;
`
export const LogForm = styled.form`
display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-top: 42px;
`

export const Loginput = styled.input`
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
    margin-top: 18px;

    ::placeholder {
    color: #D0CECE
}
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
export const Regbutton = styled.form`
display: flex;
align-items: center;
justify-content: center;
width: 278px;
height: 52px;
background-color: #ffffff;
border-radius: 6px;
font-family: 'StratosSkyeng';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: #181818;
letter-spacing: -0.05px;
border: none;
margin-top: 20px;
border: solid 1px #D0CECE;
transition: 0.1s;

    :hover {
    background-color: #F4F5F6;
}
    :active {
    background-color: #D0CECE;
}
`

