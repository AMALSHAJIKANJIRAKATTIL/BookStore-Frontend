import React, { useEffect } from 'react'
import SiteHeader from '../components/header/header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct, addToCart } from '../redux/actions/productsActions';
import Footer from '../components/footer/Footer';

function BookPage() {

    const cartButton=()=>{
        dispatch(addToCart(book));
        console.log(book);
    }

    const book=useSelector(state=>state.product);
    const {image,title,price,author,publisher}=book;
    const dispatch=useDispatch()
    const url=process.env.REACT_APP_BASE_URL;
    const id=useParams().id;
    
    const fetchBook=async ()=>{
        const response=await axios.get(`${url}/book/${id}`).catch(e=>console.log(e));
        dispatch(selectedProduct(response.data));
        
    }


    useEffect(()=>{
        fetchBook();
        return()=>
            dispatch(removeSelectedProduct());
        
    },[]);


  return (
    <div>
        <SiteHeader/>
        <div className='w-full h-[83vh]  flex flex-row justify-center items-center'>
            <div className='  h-[80%] w-[40%] flex items-center justify-center border mx-auto rounded-lg  bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 ml-10'>
                <img src={image} className='h-[300px] '></img>
            </div>
            <div className='ml-5 p-5 h-full w-[100%] mr-5 flex flex-col justify-center items-center'>
            <div className='  w-[100%]  flex flex-row justify-left items-center '>
                <h3 className='font-light text-[red] text-4xl w-full text-left'>{title}</h3><p className='ml-1 w-full flex justify-left items-left'>(Paperback) | published by : </p> <p className='font-bold ml-1 w-full flex justify-left items-left'>{publisher}</p>
            </div>
            <div className='w-[100%]  flex flex-row justify-left items-center mt-3'>
                <p>By:</p><p className='font-bold ml-3 mr-2'>{author}</p><p>(Author)</p>
            </div>
            <div className='w-[100%]  flex flex-row justify-left items-center mt-3 border-t'>
                <p className='font-bold text-5xl text-[red]'>{`$${price}`}</p>
            </div>
            <div className='w-[100%]  flex flex-row justify-left items-center mt-3'>
                <p className='font-light line-through'>{`$${parseInt(price)+100}`}</p>
            </div>
            <div className='w-[100%]  flex flex-row justify-left items-center mt-3'>
                <p className='font-light text-[green]'>International Edition</p>
            </div>
            <div className='w-[100%]  flex flex-row justify-left items-center mt-3'>
                <p className='font-light'>Ship within</p><p className='font-bold ml-1'>14-16 Business Days</p>
            </div>
            <div className='w-[100%]  flex flex-row justify-left items-center mt-3'>
                <p className='font-light ]'>Free Shipping in India and low cost Worldwide.</p>
            </div>
            <div className=' flex flex-row justify-left items-center  rounded w-[100%]  hover:bg-[white]' onClick={cartButton}>
            <div className='bg-[red] hover:bg-[white] hover:ring-red-500 ring-1 ring-slate-900/5 group flex flex-row justify-center items-center mt-8 rounded w-[300px] h-[50px]'>
                <p className='  text-white text-center group-hover:text-[green]'>Add to cart</p>
                </div>
            </div>
            </div>
            
        </div>
<Footer/>
    </div>
  )
}

export default BookPage