import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAppContext } from "../../Context";
import { FetchFood } from "../../API";
import { setItemsToStorage } from "../../LocalStorage";
import SingleBlog from "../SingleBlog";
import { GetFoodObject } from "../../GetFoodObject";

const Main = () => {
  const { foods, setFoods, setIsLoading, isLoading,setFoodsObject,FoodsObject} = useAppContext();
  useEffect(() => {

    setIsLoading(true);

    FetchFood('/explore').then((resp)=>{
      console.log(resp.results.feed);
      setFoods(resp.results.feed);
      setIsLoading(false)
      setItemsToStorage(resp.results.feed,'foods');
    }).catch(error=>error)

  }, [])

  const newFoods=GetFoodObject(foods)

  if(isLoading){
    return <div className="loading"></div>
  }


  console.log(newFoods);


  return (
    <Wrapper>
      {newFoods?.map((item, index) => {

        return <SingleBlog key={index} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
padding:0 2rem;
display: grid;
column-gap:1.5rem;



@media screen and (min-width:700px) {
  grid-template-columns: 1fr 1fr;
}


@media screen and (min-width:900px) {

  display: grid;
  grid-template-columns: 1fr 1fr;

    
}




`;

export default Main;
