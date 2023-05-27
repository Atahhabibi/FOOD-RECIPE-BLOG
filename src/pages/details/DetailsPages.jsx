import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";
import { FetchFood } from "../../API";
import { getItemsFromStorage, setItemsToStorage } from "../../LocalStorage";
import { GetFoodObject } from "../../GetFoodObject";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(getItemsFromStorage('single-food'));

  useEffect(() => {

    FetchFood(`/detail`,"",id).then((resp)=>{
      console.log(resp.results.feed);
      setItemsToStorage(resp.results.feed,'single-food')
      
    })

  }, [])


  const food = GetFoodObject(blog);



  
  const {directionsUrl,
    displayName,
    images,
    name,
    rating,
    totalTime,
    type,
    desc,
  }=food[0]
  
  const img = images?.[0]?.hostedLargeUrl;
  return (
    <div className="single-food">
      <img src={img } alt={displayName} className="single-food-img" />

      <div className="single-food-info">
        <div className="single-title">{name }</div>

        <div className="single-type">{type }</div>

        <div className="single-time">{totalTime }</div>
        <p className="desc">{desc}</p>
        <a href={directionsUrl} className="single-btn">How to make this recipe</a>
      </div>
    </div>
  );
};
