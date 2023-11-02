
import Data from "./Data"
import { useState } from "react"
import Card from "./Card";
import Categories from "./Categories";
import styled from "styled-components";




const Wrapper = styled.section`

.next{
  position: absolute;
  left: 92em;
  top: 369px;
  cursor: pointer;
}

.previous{
  position: absolute;
  left: 24.5em;
  top: 369px;
  cursor: pointer
}

.mobilePagination{
  display: none;
}

@media (max-width: 480px) {

  .next{
    width: 100%;
  }

  .previous{
    width: 100%;
  }

  .mobilePagination{
    display: inline;
    top: 182em;
    left: 186px;
    position: absolute;
  }

}

`

function App() {

  const [item, setItem] = useState(Data);
  const [category, setCategory] = useState('ALL');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems = item.filter((val) =>
    category === "ALL" ? true : val.category === category
  );
  console.log(filteredItems);


  // Calculate the range of products to display based on the current page
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage
  const displayedProducts = filteredItems.slice(startIndex, endIndex);
  const npages = Math.ceil(filteredItems.length / itemsPerPage)


  const listItem = [...new Set(Data.map((val) => val.category))]
  // const listItem = [...new Set(displayedProducts.map((val) => val.category))]


  const filterCategory = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
    // console.log("Hello");
    // console.log(category);
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      <Categories filterCategory={filterCategory} item={item} setItem={setItem} listItem={listItem} category={category} setCategory={setCategory} displayedProducts={displayedProducts} />
      <Card displayedProducts={displayedProducts} item={item}/>
    
      <Wrapper>
        <div className="pagination">
          <i class="fa-solid fa-chevron-down fa-rotate-270 next" onClick={nextPage}></i>
          <i class="fa-solid fa-chevron-down fa-rotate-90 previous" onClick={prevPage}></i>
        </div>
      
      <nav className="mobilePagination">
                        <ul className='pagination'>
                            <li className="page-item">
                                <a className='page-link' onClick={prevPage} style={{"cursor" : "pointer"}}><b>Prev</b></a>
                            </li>

                            <li className="page-item">
                                <a className='page-link' onClick={nextPage} style={{"cursor" : "pointer"}}><b>Next</b></a>
                            </li>
                        </ul>
                    </nav>
                    </Wrapper>
    </>
  )
}

export default App
