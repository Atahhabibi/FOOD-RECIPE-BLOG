import React from "react";
import "./category.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { useAppContext } from "../../Context";
import { GetFoodObject } from "../../GetFoodObject";
import Noimg from "./../../images/no-image2.jpeg";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
};
export const Category = () => {
  const { foods } = useAppContext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const newFoods = GetFoodObject(foods);

  return (
    <>
      <section className="category">
        <div className="content">
          <Slider {...settings}>
            {newFoods.map((item, index) => (
              <div className="boxs" key={index}>
                <a
                  className="box"
                  key={item.id}
                  style={{ marginRight: "1rem", display: "block" }}
                  href={item?.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item?.images?.[0]?.hostedLargeUrl || Noimg}
                    alt="cover"
                  />
                  <div className="overlay">
                    <h4
                      style={{
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        letterSpacing: "3px",
                      }}
                    >
                      {item?.name?.slice(0, 15)}
                    </h4>

                    <p style={{ fontSize: "1.2rem" }}>{item?.totalTime}</p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
