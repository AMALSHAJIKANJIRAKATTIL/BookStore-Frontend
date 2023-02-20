import React, { useEffect, useState } from 'react'
import Header from '../components/header/header'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import SearchCard from '../components/search/SearchCard';
import Footer from '../components/footer/Footer';


function SearchPage() {
  
  const [searchResults,setSearchResults]=useState([]);
  const url=process.env.REACT_APP_BASE_URL;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');
  const fetchSearchResults=async ()=>{
    const response=await axios.get(`${url}/books/search?q=${query}`).catch(e=>console.log(e));
    setSearchResults(response.data);
}
  useEffect(()=>{
    fetchSearchResults();
  }
  ,[query]);
  return (<>
    <Header/>
    <div className='flex flex-col items-center justify-around w-full min-h-[520px]'>
    <p className='mt-3 text-3xl font-bold text-[grey]'>Search results for : '{query}'</p>
    {searchResults.length!=0 ?
     ( searchResults.map((book)=>{
        return(
          <Link to={`/book/${book._id}`}>
        <SearchCard book={book}></SearchCard>
        </Link>
        );
      }))
      :
(<img className='w-[50%] p-5' src='https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png'></img>)
    }
    <Footer/>
    </div>
    
    </>
  )
}

export default SearchPage;