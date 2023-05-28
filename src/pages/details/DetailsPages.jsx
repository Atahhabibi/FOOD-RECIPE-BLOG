import React, { useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FetchFood } from "../../API";
import { GetFoodObject } from "../../GetFoodObject";
import { useAppContext } from "../../Context";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const { setIsLoading, isLoading } = useAppContext();

  useEffect(() => {
    setIsLoading(true);

    FetchFood(`/detail`, "", id).then((resp) => {
      setBlog(resp.results.feed);
      setIsLoading(false);
    });
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div className="single-food">
        <div className="loading"></div>
      </div>
    );
  }

  const food = GetFoodObject(blog);

  const directionsUrl = food?.[0]?.directionsUrl;
  const displayName = food?.[0]?.displayName;
  const images = food?.[0]?.images;
  const name = food?.[0]?.name;
  const totalTime = food?.[0]?.totalTime;
  const type = food?.[0]?.type;
  const desc = food?.[0]?.desc;

  const img = images?.[0]?.hostedLargeUrl;

  return (
    <div className="single-food">
      <img src={img} alt={displayName} className="single-food-img" />

      <div className="single-food-info">
        <div className="single-title">{name}</div>

        <div className="single-type">{type}</div>

        <div className="single-time">{totalTime}</div>
        <p className="desc">{desc}</p>
        <a href={directionsUrl} className="single-btn" target="_blank" rel="noreferrer">
          How to make this recipe
        </a>
      </div>
    </div>
  );
};
