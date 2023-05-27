import styled from "styled-components"
import { useState } from "react"
import personImg from '../assets/images/cheif2.jpg'

const Person = () => {

  return <Wrapper>
       <img src={personImg} alt="" />
  </Wrapper>
}


const Wrapper=styled.div`

img{
    width:100%;
}
    

`

export default Person;