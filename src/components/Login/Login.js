import React from 'react'
import styled from 'styled-components'


function Login() {
  return (
    <LoginContainer>
      <LoginBox>로그인</LoginBox>
      <IDinput type= "text" placeholder = "아이디를 입력하세요."/>
      <PWinput type = "text" placeholder = "패스워드를 입력하세요."/>
      <LoginBtn>로그인</LoginBtn>
      <SignBtn>회원가입</SignBtn>
    </LoginContainer>
  )
}

export default Login


const LoginContainer = styled.div`
    width: 500px;
    height: 600px;
    border: 1px solid black;
    margin: 150px auto;

    
`

const LoginBox = styled.div`
    width: 300px;
    height: 200px;
    border: 1px solid black;
    display: inline-block;
    margin: 20px 95px;
    text-align: center;
    font-size: 50px;
`

const IDinput = styled.input`
    width: 400px;
    height: 40px;
    display: inline-block;
    margin: 20px 50px;
    
`

const PWinput = styled.input`
    width: 400px;
    height: 40px;
    display: inline-block;
    margin: 20px 50px;
    
`

const LoginBtn = styled.button`
    width: 400px;
    height: 40px;
    display: inline-block;
    margin: 20px 50px;
`

const SignBtn = styled.button`
    width: 400px;
    height: 40px;
    display: inline-block;
    margin: 20px 50px;    
`