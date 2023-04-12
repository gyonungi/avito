import styled from "styled-components";


export const Wrapper = styled.div`
width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #F4F5F6;
`

export const RegDiv = styled.div`
    width: 100vw;
    height: 100vh;
      background-color: #F4F5F6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 650px;
`

export const ModalBlock = styled.div`
position: absolute;
  z-index: 2;
  left: calc(50% - (366px/2));
  top: calc(50% - (647px/2));
  opacity: 1;
`
export const RegBox = styled.div`
width: 366px;
height: 647px;
background-color: #FFFFFF;
border-radius: 12px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
padding: 43px 42px 47px;
`
export const RegForm = styled.form`
display: flex;
    flex-direction: column;
    background-color: #ffffff;
    gap: 35px;
    margin-top: 40px;
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
    height: 62px;
    background-color: #009EE4;
    border-radius: 6px;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    letter-spacing: -0.05px;
    border: none;
    margin-top: 15px;
    transition: 0.3s;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }

    :hover {
        background-color: #3F007D;
    }
    
   :active {
        background-color: #271A58;
    }
    
`