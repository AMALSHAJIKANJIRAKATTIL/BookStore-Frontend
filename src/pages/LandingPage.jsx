import {React,useEffect} from 'react';

import axios from 'axios';
import Booklist from '../components/booklist/Booklist';
import Banner from '../components/banner/Banner';
import Corousel from '../components/corousel/Corousel';
import SiteHeader from '../components/header/header';
import Footer from '../components/footer/Footer';
import {useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/productsActions'

function LandingPage() {
    useEffect(()=>{
        fetchBooks();
    },[]);
    const url=process.env.REACT_APP_BASE_URL;
    const dispatch=useDispatch();
    const fetchBooks=async ()=>{
    const response=await axios.get(`${url}/books`).catch(e=>console.log(e));
    dispatch(setProducts(response.data));
    }
  return (
    <div>
        <SiteHeader></SiteHeader>
<Banner></Banner>
<Corousel></Corousel>
<Booklist></Booklist>
    <Footer></Footer>
    </div>
  )
}

export default LandingPage