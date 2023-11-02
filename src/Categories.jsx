import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components"
import Data from './Data'
import Select from 'react-dropdown-select'

const Wrapper = styled.section`

.left{
    width: 20%;
    height: 60vh;
    background-color: #C7C7C7;
    position: relative;
    left: 40px;
    top: 9rem;
    border-radius: 1em;
    box-shadow:  4px 4px 4px 0 rgb(190, 190, 190);
    transition: transform 0.5s ease;
}
.left:hover{
  transform: scale(1.05);
}

.categoryText{
    position: relative;
    width: 100%;
    left: 42px;
    top: 35px;
    font-size: 20px;
    height: 12em;
    padding: 0 1em 1em 1em;
    color: #575a5e;
}

.eachCategory{
    color: #0F1111;
    border-radius: 1em 1em 0 0;
    font-size: 18px;
    position: absolute;
    top: 88px;
    left: 74px;
    column-gap: 1.2em;
    cursor: pointer;
}

.category{
    padding-bottom: 15px;
}

.priceText{
    position: relative;
    width: 100%;
    left: 42px;
    top: 20px;
    font-size: 20px;
    height: 12em;
    padding: 0 1em 1em 1em;
    color: #575a5e;
}

.dropdown{
    position: absolute;
    top: 308px;
    left: 58px;
    width: 10rem;
}


@media (max-width: 480px) {

  .left{
    width: 100%;
    top: 0px;
    left: 57px;
    border: none;
    position: relative;
  }

  .categoryText{
    left: 98px;
    position: relative;
  }

  .eachCategory{
    position: absolute;
    left: 120px;
  }

  .priceText{
    position: relative;
    left: 103px;
  }

  .dropdown{
    position: absolute;
    left: 100px;
  }

}

`

function Categories({ listItem, filterCategory, setItem, item, category, setCategory }) {

  const [value, setValue] = useState([]);

  const options = [
    {
      id: 1,
      name: "Default"
    },
    {
      id: 2,
      name: "Lowest to Highest",
    },
    {
      id: 3,
      name: "Highest to Lowest"
    }
  ]

  // Function to sort by lowest to highest price
  const sortByLowestPrice = () => {
    const sorted = [...item].sort((a, b) => a.price - b.price);
    setItem(sorted);
  };

  // Function to sort by highest to lowest price
  const sortByHighestPrice = () => {
    const sorted = [...item].sort((a, b) => b.price - a.price);
    setItem(sorted);
  };

  const defaultSorting = (currentCategory) => {

    if (currentCategory === "ALL") {
      setItem(Data)
    }
    else {
      const defaultData = Data.filter((item) => item.category === currentCategory);
      setItem(defaultData);
    }

  };


  // Apply the sorting function based on the selected value
  const handleSort = () => {
    const selectedOption = value[0];
    if (selectedOption) {
      if (selectedOption.id === 2) {
        sortByLowestPrice();
      } else if (selectedOption.id === 3) {
        sortByHighestPrice();
      }
      else if (selectedOption.id === 1) {
        defaultSorting(category)
      }
    }
  };

  useEffect(() => {
    handleSort()
  }, [value]);

  return (
    <>
      <Wrapper>
        <div className="left">
          <div style={{ fontFamily: 'Roboto, sans-serif' }} className="categoryText">
            <b>CATEGORIES</b>
          </div>
          <div className="eachCategory">
            <div className="category" style={{ fontFamily: 'Roboto, sans-serif' }} onClick={() => {
              setItem(Data)
              setCategory("ALL")
            }}>ALL</div>
            {listItem.map((val) => (
              <div style={{ fontFamily: 'Roboto, sans-serif' }} className="category" onClick={() => filterCategory(val)} key={val}>{val}</div>
            ))}
          </div>

          <div className="priceText" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <b> PRICE </b>
          </div>

          <div className='dropdown'>
            <Select
              name='select'
              options={options}
              labelField='name'
              valueField='id'
              onChange={value => {
                handleSort()
                setValue(value)
              }}
            >

            </Select>
          </div>
        </div>
      </Wrapper>
      {/* {value.map((val) => console.log(val[0]))} */}
    </>
  )
}

export default Categories
