import React from 'react'

function SearchCard(props) {
    const {image,title,price}=props.book;
  return (
    <div className=' rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[red] group
    flex flex-row justify-around items-center w-[100%]  h-[200px] m-5 ml-5'>
       <img className=' h-[150px] ' src={image}></img>
       <div className='ml-5'>
       <p className='pt-3 text-3xl font-bold group-hover:text-white'>{title}</p>
       
       <p className='text-[red] font-bold group-hover:text-white'>{`$${price}`}<span className='line-through text-sm font-light pl-1'>{`$${parseInt(price)+100}`}</span></p>
       </div>
       
   </div>
  )
}

export default SearchCard