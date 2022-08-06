import React ,{useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getLoginAsync , postLoginAsync } from "../../redux/modules/login";
import {Link} from "react-router-dom";
import "./Login.css"

function Login() {
  const dispatch = useDispatch();
  const loginget = useSelector((state)=>state.login)

  // useEffect(()=>{
  //   dispatch(getLoginAsync());
  // },[])
  return (
    <div className='Login'>
      <LoginContainer>
        <div className='row-group'>
        <LoginBox >로그인</LoginBox>
        <div>
          <LabelText >아이디</LabelText>
          <IDinput className='input-item' type= "text" placeholder = "아이디를 입력하세요."/>
        </div>
        <div>
          <LabelText>비밀번호</LabelText>
          <PWinput type = "text" placeholder = "패스워드를 입력하세요." className='input-item'/>
        </div>
          <Link to={""}><LoginBtn>로그인</LoginBtn></Link>
          <Link to={"/signup"}><LoginBtn>회원가입</LoginBtn></Link>
        </div>
      </LoginContainer>
    </div>
  )
}

const LoginContainer = styled.div`
    width: 500px;
    height: 600px;
    border: none;
    border-radius:10px;

    background:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginBox = styled.div`

    width: 300px;
    height: 200px;
    border: 0.5px solid gray;
    display: inline-block;
    margin: 10px 95px;
    text-align: center;
    font-size: 50px;
    border-radius:10px;
`

const IDinput = styled.input`
    width: 392px;
    height: 35px;
    display: inline-block;
    border: 0.5px solid gray;
    margin: 5px 50px;
    border-radius:10px;
    opacity:0.7;
`

const PWinput = styled.input`
    width: 392px;
    height: 35px;
    display: inline-block;
    margin: 5px 50px;
    border-radius:10px;
    border: 0.5px solid gray;
    opacity:0.7;
`

const LoginBtn = styled.button`
    width: 400px;
    height: 40px;
    display: inline-block;
    margin: 7px 50px;
    border-radius:20px;
    border: none;
    color:white;
    font-size:18px;
    cursor :pointer;
    background : linear-gradient(to right,rgb(30, 144, 255),rgb(10, 189, 227));
    &:hover{
      background : rgb(39, 60, 117);
    }
`
const LabelText = styled.label`
    margin:0 50px;  
    font-weight: 400;
    font-size: 14px;
    color :rgb(55, 66, 250);
`
export default Login
export {LoginBtn,LabelText,IDinput,LoginContainer};