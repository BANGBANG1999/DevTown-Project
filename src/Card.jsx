import React from 'react'
import styled from "styled-components"

const Wrapper = styled.section`

.gridBox{
  top: 40px;
  width: 70%;
  position: absolute;
  left: 25%;
  margin: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, 20em);
  justify-content: center;
  column-gap: 2em;
  row-gap: 2em;
}

.grid-item{
  background: rgb(255, 255, 255);
  border-radius: 1em;
  width: 100%;
  height: 19rem;
  transition: transform 0.5s ease;
  box-shadow:  4px 4px 4px 0 rgb(190, 190, 190);
  cursor: pointer
}

.grid-item:hover{
  transform: scale(1.05);
}
.grid-item a{
  text-decoration: none;
}
.grid-img{
  overflow: hidden;
  border-radius: 1em 1em 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 12em;
  padding: 0 1em 1em 1em;
  justify-content: flex-end;
  color: rgb(255, 255, 255);
}


.grid-img-content, .grid-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid-img-content p, .grid-img-content span{
  font-size: 0.9em;
}

.grid-img-content span{
  background: rgb(0, 153, 255);
  border-radius: 5px;
  padding: 0 0.3em;
}
.grid-content{
  padding: 1em;
  font-size: 0.8em;
  color: rgb(0, 0, 0);
}
.grid-item .uil-color{
  color: rgb(255, 255, 255);
}


@media (max-width: 480px) {

  .gridBox {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    display: grid;
    column-gap: 2rem;
    top: 30em;
    
  }

  .grid-item{
    width: 21rem;
    position: relative;
    right: 32px;
    height: 23em;
  }
}
`

function Card({displayedProducts}) {


  return (
    <>
     <Wrapper>
    <div className="gridBox">
    {displayedProducts.map((val) => (
      
         <div className="grid-item" key={val.id}>
         <a href={val.link}>
             <div className="grid-img img-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url("${val.image}")`, // Use the 'link' property as the image URL
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // backgroundSize: '100% 100%', 
                backgroundSize: "contain", 
                width: 'auto',
              }}
             >
                 <h3 style={{ fontFamily: 'Roboto, sans-serif' }}><b>{val.title}</b></h3>
                 <div className="grid-img-content">
                     <p><i className="uil uil-user-md uil-color"></i>
                     &#8377;{val.price}
                     </p>
                     <span>{val.rating}&#9733;</span>
                     {/* <span>&#8377;{val.price}</span> */}
                 </div>
             </div>
             <div className="grid-content">
                 <p style={{ fontFamily: 'Roboto, sans-serif', color: "#0F1111" }}><i className="uil uil-location-point"></i>
                    {val.description}</p>
                 {/* <p>&#8377;{val.price}</p> */}
             </div>
         </a>
     </div>
     
    ))}
    </div>
    </Wrapper>
    </>
  )
}

export default Card
