import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAppContext } from "../Context";
import { GetFoodObject } from "../GetFoodObject";
import { FetchFood } from "../API";

const Gallery = () => {
  const { isLoading, setIsLoading } = useAppContext();
  const [GalleryFood, setGalleryFood] = useState([]);
  const [page, setPage] = useState(1);

  const handlePage = (e) => {
    const value = e.target.dataset.value;

    const galleryDOM = document.getElementById("gallery");

    if (galleryDOM) {
      galleryDOM.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }

    if (value === "next") {
      setPage((old) => {
        let newPage = old + 1;

        if (newPage > 10) {
          newPage = 1;
        }
        return newPage;
      });
    }
    if (value === "prev") {
      setPage((old) => {
        let newPage = old - 1;

        if (newPage < 1) {
          newPage = 10;
        }
        return newPage;
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);

    FetchFood("/explore", "", "", page)
      .then((resp) => {
        setGalleryFood(resp.results.feed);
        setIsLoading(false);
      })
      .catch((error) => error);
      // eslint-disable-next-line
  }, [page]);

  const tempFood = GetFoodObject(GalleryFood);

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading"></div>
      </Wrapper>
    );
  }

  return (
    <Wrapper id="gallery">
      <h1 className="gallery-title">
        Select any recipe to see how to make one
      </h1>
      <div className="images-container">
        {tempFood?.map((item, index) => {
          const img = item.images?.[0]?.hostedLargeUrl;

          return (
            <a
              className="single-photo"
              key={index}
              href={item?.directionsUrl}
              target="_blank"
              rel="noreferrer"

            >
              <img src={img} alt={item.name} className="gallery-img" />
            </a>
          );
        })}
      </div>

      <div className="btn-container">
        <button className="prev" data-value="prev" onClick={handlePage}>
          prev
        </button>
        <button className="next" data-value="next" onClick={handlePage}>
          next
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;

  .gallery-title {
    text-transform: uppercase;
    text-align: center;
    margin-top: 1rem;
    font-size: 1.3rem;
    background: #dbaaaa;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 0.5rem 0;
  }

  .images-container {
    padding: 1.4rem;

    .gallery-img {
      width: 100%;
      object-fit: cover;
      transition: all 0.8s ease;
      padding: 0.2rem;

      &:hover {
        scale: 1.1;
      }
    }
  }

  .btn-container {
    text-align: center;
    padding: 1.4rem;
    margin-bottom: 2rem;
    .next,
    .prev {
      padding: 1rem;
      background: #c06a6a;
      border: 5px solid white;
      font-size: 1rem;
      border-radius: 0.4rem;
      margin: 0 1rem;
      text-transform: capitalize;
    }
  }

  @media screen and (min-width: 700px) {
    .images-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .gallery-title {
      font-size: 2rem;
    }

    .btn-container {
      .next,
      .prev {
        font-size: 2rem;
        margin: 0 4rem;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .images-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Gallery;
