import React, { useEffect } from "react"
import { FetchFood } from "../../API"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import Main from "../../components/Main/Main"
import Person from "../../components/Person"

export const Home = () => {

  return  <div>
      <Person/>
      <Category />
       <Main/>
      <Card />
    </div>
  
}
