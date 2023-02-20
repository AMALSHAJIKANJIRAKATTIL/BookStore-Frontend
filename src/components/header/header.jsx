import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header() {
  const cart=useSelector((state)=> state.cart.cartBooks);
  const [query,setQuery]=useState('')
  const searchInput=(e)=>{
    setQuery(e.target.value)
  }

  return (
    <header className='flex border-b  border-[red] w-full flex-row h-64 h-[100px] justify-around items-center'>
        <div className='w-[50%] pl-5'>
        <Link to={`/`}>
<img src='https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png'></img></Link>
</div>

<div className='flex flex-row border-solid border-2 border-[red]'>
<input type={'text'} placeholder={'Search by Title, Author, Publisher'} 
className='w-[400px] pl-5 focus:outline-0' onChange={searchInput}></input>
<Link to={`/search?q=${query}`}>
<img className='bg-[red] h-[50px] w-[50px]' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'}></img>
</Link>
</div>

<div className='h-[50px] w-[50px] relative ml-1 mr-5'>
<img className='h-[100%] w-[100%]' src={'https://www.pngall.com/wp-content/uploads/5/Empty-Red-Shopping-Cart-PNG-File.png'}></img>
<div className='bg-[red] w-5 h-5 rounded-full m-[-10px]  absolute top-[0] right-0'>
  <p className='text-white flex  justify-center text-xs  items-center pt-[2px]'>{cart.length===0?(0):(cart)}</p>
</div>
</div>
    </header>
  )
}

export default Header