import React from 'react'

function BookCard(props) {
  const {image,title,price}=props.book;
  return (
    <div className='max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-[red] group
     flex flex-col justify-center items-center w-[250px] h-[300px] m-5 ml-5'>
        <img className=' h-[150px]' src={image}></img>
        <p className='pt-3 text-large font-bold group-hover:text-white'>{title}</p>
        
        <p className='text-[red] font-bold group-hover:text-white'>{`$${price}`}<span className='line-through text-sm font-light pl-1'>{`$${parseInt(price)+100}`}</span></p>
       
        
    </div>
  )
}

export default BookCard