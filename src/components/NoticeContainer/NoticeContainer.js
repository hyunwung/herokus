import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'

const NoticeContainer = () => {
  return (
    <div>
        <noticeBox></noticeBox>
    </div>
  )
}

export default NoticeContainer

const noticeBox = styled.div`
    width: 800px;
    height: 30px;
    border: 1px solid black;
`

