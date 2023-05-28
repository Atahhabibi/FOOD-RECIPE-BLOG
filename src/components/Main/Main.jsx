import styled from "styled-components";
import { useEffect } from "react";
import { useAppContext } from "../../Context";
import { FetchFood } from "../../API";
import SingleBlog from "../SingleBlog";
import { GetFoodObject } from "../../GetFoodObject";

const Main = () => {
  const { foods, setFoods, setIsLoading, isLoading } = useAppContext();
  useEffect(() => {
    setIsLoading(true);

    FetchFood("/explore", "", "", 3)
      .then((resp) => {
        setFoods(resp.results.feed);
        setIsLoading(false);
      })
      .catch((error) => error);
      // eslint-disable-next-line
  }, []);

  const newFoods = GetFoodObject(foods);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <Wrapper>
      {newFoods?.slice(0, 6).map((item, index) => {
        return <SingleBlog key={index} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  column-gap: 1.5rem;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default Main;
