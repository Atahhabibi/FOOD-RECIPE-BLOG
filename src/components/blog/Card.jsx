import React from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useAppContext } from "../../Context"
import { GetFoodObject } from "../../GetFoodObject"

export const Card = () => {

  const {foods,isLoading}=useAppContext();

  const tempFoods=GetFoodObject(foods);
  if(isLoading){
    return <div className="loading"></div>
  }

  return (
    <>
      <section className='blog'>
        <h1 className="cart-title"> Special Recipes</h1>
        <div className='container '>
          {tempFoods.map((item) => (
            <Link className='box boxItems' key={item.id} style={{display:'block'}} to={`/details/${item.id}`}>
              <div className='img'>
                <img src={item.images[0].hostedLargeUrl} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <span>#{item.name.slice(0,8)}</span>
                </div>
                <div  className='link'>
                  <h3>{item.name}</h3>
                </div>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
