import styled from "styled-components";
import { useState } from "react";
import aboutImg from "../images/about-img3.jpg";

const About = () => {
  return (
    <Wrapper>
      <div className="about-info">
        <h1>A food knowledge sharing community</h1>
        <p className="text">
          Who ever said that making dinner had to be stressful? With the help of
          a few kitchen essentials like your sheet pan or casserole dish, a
          time-saving gadget or two (we’re looking at you Instant Pot!)= and the
          right recipes, you can whip up a delicious meal in no time. These
          recipes will help you get started. We’ve got ideas for everyone's
          favorites: stuffed peppers, simple pastas, plenty of ideas for chicken
          breast and even more. One of our speediest recipes? These mini
          meatballs, which cook up in a matter of minutes thanks to their
          smaller size. That leaves you plenty of time to make a simple,
          homemade pasta sauce — and get dinner on the table fast!
        </p>
      </div>
      <img src={aboutImg} alt="food" className="about-img" />

    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  max-width:1300px;
  margin: 0 auto;
  padding: 4rem 3rem;



  .about-img {
    width: 100%;
   object-fit: cover;
    height:30rem;
    
  }



  .about-info{
      text-align: center;

      h1{
          font-size:2.3rem;
          margin-bottom:1.2rem;
      }

      .text{
          font-size:1.1rem;
          margin-bottom:1rem;
      }
  }

  @media screen and (min-width:1000px) {

    display:grid;
    grid-template-columns: 1fr 1fr;
   column-gap:4rem;

   .about-img{
       height:50rem;
       position: cover;
   }

   .about-info{
       text-align: left;

       .text{
           font-size:1.2rem;
       }
   }

      
  }
  
`;

export default About;
