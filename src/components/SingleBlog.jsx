import styled from "styled-components";
import { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import noImg from "../images/no-image2.jpeg";

const SingleBlog = ({
  directionsUrl,
  displayName,
  id,
  images,
  name,
  rating,
  totalTime,
  type,
  desc,
  index,
}) => {
  const img = images?.[0]?.hostedLargeUrl;

  const para =
    "Pressed Pesto Picnic Sandwich With Barilla® Creamy Genovese Pesto, Artisan Bread, Large Tomato, Basil, Salami, Prosciutto, Provolone Cheese, Mozzarella Cheese";

  return (
    <Wrapper href={directionsUrl} className={`item-${index}`} target='_blank'>
      <img src={img || noImg} alt={displayName} className="food-img" />

      <div className="food-info">
        <div className="title">{name || " Rustic Beef"}</div>

        <div className="type">{type || "single Recipe"}</div>

        <div className="time">{totalTime || "20 min"}</div>
        <p>{desc?.slice(0, 300) || para}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  text-align: center;
  margin-bottom: 2rem;
  display: block;
  cursor: pointer;
  border: 5px solid white;
  margin-top:2rem;
  box-shadow:0px 0px 10px grey;
  padding:1rem;
  padding-bottom:3rem;
  border-radius:8px;


  &:hover{
    box-shadow:0px 0px 40px grey;
  }

  .food-img {
    width: 100%;
    object-fit: cover;
  }

  .title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom:1.4rem;
    color: black;
  }

  .type {
    text-transform: capitalize;
    color: brown;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .time {
    font-weight: bold;
    color: black;
  }

  .rating {
    border: 2px solid red;
    margin: 0.4rem auto;
  }
`;

export default SingleBlog;
