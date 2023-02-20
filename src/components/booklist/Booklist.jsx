import {React,useEffect} from 'react'
import BookCard from '../bookCard/BookCard';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Booklist() {
  const books=useSelector((state)=> state.allProducts.products);
  return (
    <div>
        <div className='flex mt-10 p-3 m-5 pt-3 flex-col  justify-center border-t'>
          <h3 className='text-3xl text-center'>Now Trending</h3>
          <div className=' flex flex-row flex-wrap mt-3 min-h-[300px] justify-center items-center'>
    {
      books.map((book)=>{
        return(
          <Link to={`/book/${book._id}`}>
          <BookCard book={book}/>
          </Link>
        )
      })
      
      }
          </div>
        </div>
    </div>
  )
}

export default Booklist