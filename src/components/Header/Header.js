import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderContainel>
      <HomeBtn>홈버튼</HomeBtn>
      <UserNameBox>유저 닉네임</UserNameBox>
    </HeaderContainel>
  )
}

export default Header


const HeaderContainel = styled.div`
    background-color: #3b4890;
    width: auto;
    height: 60px;
`

const HomeBtn = styled.button`
    width: 80px;
    height: 30px;
    margin: 10px auto;
`

const UserNameBox = styled.div `
    width: 100px;
    height: 30px;
    border: 1px solid red;
    float: right;
    color: white;
`