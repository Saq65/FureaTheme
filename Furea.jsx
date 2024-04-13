import React, { useState } from "react";
import 'flag-icons';
import './Furea.css';
import { Cash } from "react-bootstrap-icons"
import { IoReorderThree } from "react-icons/io5";
import { Add, ArrowUpward, Close, FavoriteBorderOutlined, Home, KeyboardArrowDown, LocalShipping, PersonOutlineRounded, Search, SecurityRounded, Shop2Rounded, ShoppingBagOutlined, ShoppingCart, SupportAgentTwoTone } from "@mui/icons-material"
import Modal from "react-modal";
import sofa from "./Images/banner-bg1.webp";
import sofa2 from "./Images/banner-bg1.webp";
import sofa3 from "./Images/banner-bg1.webp";
import sofa4 from "./Images/banner-bg1.webp";
import sofa5 from "./Images/banner-bg1.webp";
import logo from "./Images/nav-log.webp";
import s1 from "./Images/banner1.webp";
import s2 from "./Images/banner2.webp";
import s3 from "./Images/banner3.webp";
import s4 from "./Images/banner4.webp";
import s5 from "./Images/banner5.webp";
import b from "./Images/banner6.webp";
import b2 from "./Images/banner7.webp";
import b3 from "./Images/banner8.webp";
import p1 from "./Images/product1.webp";
import p2 from "./Images/product2.webp";
import p3 from "./Images/product3.webp";
import p4 from "./Images/product4.webp";
import p5 from "./Images/product5.webp";
import p6 from "./Images/product6.webp";
import Client from "./Images/client.webp";
import thumb from "./Images/testimonial-thumb1 (1).webp";
import headingImg from "./Images/heading-shape-img.webp";
import furniture from "./Images/Furniture tree.webp"
import 'slick-carousel/slick/slick.css';
import { ChairFun } from "./chair";
import 'slick-carousel/slick/slick-theme.css';
import { Sofa } from "./sofa";
import { MonitorFun } from "./monitor";
import { Table } from "./table";
import { Lamp } from "./lamp";
import Slider from "react-slick"
import { AboutPage } from "./about";


export function Furea() {
    const [modalopen, setmodalopen] = useState(false);
    const [language, setlanguage] = useState(false);
    const [Humburger, setHumburger] = useState(false);
    const [home, sethome] = useState(false);
    const [search, setsearch] = useState(false);
    const [Shop, setshop] = useState(false);
    const [blog, setblog] = useState(false);
    const [page, setpage] = useState(false);
    const [shopping, setshopping] = useState(false);
    const [showpopular, setpopular] = useState();

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    position: "absolute",
                    right: '20px',
                    display: 'flex',
                    background: '#F51C1C',
                    height: '45px',
                    width: '50px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                }}
                onClick={onClick} />
        )
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    left: '20px',
                    zIndex: 1,
                    display: 'flex',
                    background: '#F51C1C',
                    height: '45px',
                    width: '50px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    position: 'absolute',

                }}
                onClick={onClick}
            />
        );
    }
    function About() {
        return (
            <AboutPage />
        )
    }
    const Setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const Setting2 = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    function Chair(e) {
        if (e.target.value === "chair") {
            document.getElementById('jello').style.display = "none"
            setpopular(<ChairFun />)
        } else if (e.target.value === "sofa") {
            document.getElementById('jello').style.display = "none"
            setpopular(<Sofa />)
        } else if (e.target.value === "lamp") {
            document.getElementById('jello').style.display = "none"
            setpopular(<Lamp />)
        } else if (e.target.value === "table") {
            document.getElementById('jello').style.display = "none"
            setpopular(<Table />)
        } else if (e.target.value === "monitor") {
            document.getElementById('jello').style.display = "none"
            setpopular(<MonitorFun />)
        }
        else {
            setpopular(<ChairFun />)
        }
    }

    Modal.setAppElement('#root');
    return (
        <div id="top" className="container-fluid-lg">
            <div id="header" className="header text-white d-flex justify-content-between">
                <div id="heading">
                    <p className="mt-3  mx-5">Get Up To 80% off In your first Offer!</p>
                </div>
                <div className="d-flex align-items-center overflow-hidden mt-3">
                    <p id="currency" style={{ cursor: 'pointer', position: 'relative', left: '52px' }} onClick={() => setmodalopen(true)} className=" mx-5"><span id="flag" style={{ borderRadius: '50%', overflow: 'hidden' }} className="bg-light fi fi-us"></span> Currency <KeyboardArrowDown /></p><span className="mt-1 " id="d"></span>
                    <p id="currency" style={{ cursor: 'pointer' }} onClick={() => { setlanguage(true) }} className="mt-1 mx-5">

                        <span id="flag" style={{ borderRadius: '50%', overflow: 'hidden' }} className="bg-light fi fi-gb"></span> Language <KeyboardArrowDown /></p>
                </div>
                <Modal style={{ content: { width: '12%', height: '200px', marginLeft: '70%', position: 'absolute', zIndex: '2', backgroundColor: 'transparent', border: 'none', }, overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: '3' } }} isOpen={modalopen}>
                    <div onMouseLeave={() => { setmodalopen(false) }}>
                        <ol id="orderlist">
                            <li>CAD</li>
                            <li>CNY</li>
                            <li>EUR</li>
                            <li>GBP</li>
                        </ol>
                    </div>
                </Modal>
                <Modal style={{ content: { width: '12%', height: '200px', marginLeft: '82%', backgroundColor: 'transparent', border: 'none' }, overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: '3' } }} isOpen={language}>
                    <div onMouseLeave={() => { setlanguage(false) }}>
                        <ol id="orderlist">
                            <li>France</li>
                            <li>Russia</li>
                            <li>Spanish</li>
                        </ol>
                    </div>
                </Modal>
            </div>
            {/*Navbar */}
            <div id="navbar" className=" bg-light p-2">
                <div className="row align-items-center ">
                    <div style={{ height: '', position: 'relative', left: '30px', overflow: 'hidden' }} className="col-12 col-md-3 bg-light ">
                        <img className="mx-5" src={logo} alt="navlogo" />
                    </div>
                    <div className="col-12 col-md-6  bg-light">
                        <ul className="d-flex justify-content-around mt-3" style={{ listStyle: 'none', overflow: 'hidden' }}>
                            <li onMouseOver={() => sethome(true)} >Home <Add style={{ fontSize: 'small' }} />
                            </li>
                            <li onMouseEnter={() => { setshop(true) }}>Shop  <Add style={{ fontSize: 'small' }} /></li>
                            <li value="about" onClick={About}>About Us</li>
                            <li onMouseEnter={() => setblog(true)}>Blog <Add style={{ fontSize: 'small' }} /></li>
                            <li onMouseEnter={() => setpage(true)}>Pages <Add style={{ fontSize: 'small' }} /></li>
                            <li>Contact</li>
                        </ul>

                        <Modal style={{ content: { width: '90%', marginLeft: '5%', height: '32%', position: '', top: '', marginTop: '8%' }, overlay: { backgroundColor: 'rgba(0,0,0,0)' } }} isOpen={Shop}>
                            <div onMouseLeave={() => setshop(false)} className="d-flex justify-content-between">
                                <ul id="home" style={{ listStyle: 'none' }} >
                                    <li className="fw-bold">Column One</li>
                                    <li>Shop Right Sidebar</li>
                                    <li>Shop Left Sidebar</li>
                                    <li>Shop Grid</li>
                                    <li>Shop Grid List</li>
                                    <li>Shop List</li>
                                </ul>
                                <ul id="home" style={{ listStyle: 'none' }} >
                                    <li className="fw-bold">Column Two</li>
                                    <li>Standard Product</li>
                                    <li>Video Product</li>
                                    <li>Variable Product</li>
                                    <li>Product Left Sidebar</li>
                                    <li>Product Gallery</li>
                                </ul>
                                <ul id="home" style={{ listStyle: 'none' }} >
                                    <li className="fw-bold">Column Three</li>
                                    <li>Blog Grid</li>
                                    <li>Blog Details</li>
                                    <li>Shop Grid</li>
                                    <li>Blog Left Sidebar</li>
                                    <li>Blog Right Sidebar</li>
                                </ul>
                                <ul id="home" style={{ listStyle: 'none' }}>
                                    <li className="fw-bold">Column Four</li>
                                    <li>My Account</li>
                                    <li>My Account 2</li>
                                    <li>404 Page</li>
                                    <li>Login Page</li>
                                    <li>Faq Page</li>
                                </ul>
                            </div>
                        </Modal>
                        <Modal style={{ content: { width: '16%', height: '25%', marginLeft: '43%', position: '', top: '', marginTop: '8%' }, overlay: { backgroundColor: 'rgba(0,0,0,0)' } }} isOpen={blog}>
                            <ul id="home" style={{ listStyle: 'none' }} onMouseLeave={() => setblog(false)}>
                                <li>Blog Grid</li>
                                <li>Blog Details</li>
                                <li>Blog Left Sidebar</li>
                                <li>Blog Right Sidebar</li>
                            </ul>
                        </Modal>
                        <Modal style={{ content: { width: '16%', height: '32%', marginLeft: '55%', position: '', top: '', marginTop: '8%' }, overlay: { backgroundColor: 'rgba(0,0,0,0)' } }} isOpen={page}>
                            <ul id="home" style={{ listStyle: 'none' }} onMouseLeave={() => setpage(false)}>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Cart Page</li>
                                <li>Wishlist Page</li>
                                <li>Login Page</li>
                                <li>Error Page</li>
                            </ul>
                        </Modal>
                    </div>
                    <div id="icon" style={{ height: '', overflow: 'hidden', position: 'relative', left: '140px' }} className="col-12 col-md-3  bg-light ">
                        <span onClick={() => setsearch(true)} id="hide2"><Search className="m-1" style={{ fontSize: '35px', color: '#666666', cursor: 'pointer' }} />
                            <Modal className="p-1 bg-white " style={{ content: { height: '14%' }, overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: '3' } }} isOpen={search}>
                                <i style={{ cursor: 'pointer', float: 'right' }} onClickCapture={() => setsearch(false)}><Close /></i>
                                <div className="">
                                    <div className="d-flex justify-content-center">
                                        <h3>Search Product</h3>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <input placeholder="Search Here" className="form-control w-50" type="search" name="search" id="search" />
                                    </div>
                                </div>
                            </Modal>
                        </span>
                        <span><PersonOutlineRounded className="m-1" style={{ fontSize: '35px', color: '#666666', cursor: 'pointer' }} /></span>
                        <span id="hide2"><FavoriteBorderOutlined className="m-1" style={{ fontSize: '35px', color: '#666666', cursor: 'pointer' }} /></span>
                        <span onClick={() => setshopping(true)}><ShoppingBagOutlined className="m-1" style={{ fontSize: '35px', color: '#666666', cursor: 'pointer' }} /></span>
                    </div>
                </div>
                <Modal className="p-2 bg-light" style={{ content: { width: '45%', height: '100%', border: 'none', boxShadow: "none", float: 'right' }, overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: '6' } }} isOpen={shopping}>
                    <i><Close style={{ float: 'right', cursor: 'pointer' }} onClick={() => setshopping(false)} /></i>
                    <div>
                        <h4>Shopping Cart</h4>
                    </div>
                </Modal>
            </div>
            <Modal style={{ content: { width: '15%', height: '20%', marginLeft: '20%', marginTop: '8%', position: 'sticky', zIndex: '4' }, overlay: { backgroundColor: 'rgba(0,0,0,0)' } }} isOpen={home}>
                <ul id="home" style={{ listStyle: 'none', position: '' }} onMouseLeave={() => sethome(false)}>
                    <li>Home One</li>
                    <li>Home Two</li>
                    <li>Home Three</li>
                </ul>
            </Modal>
            <div id="hide3">
                <div className="">
                    <div style={{ bottom: '10px', position: 'relative' }} className="d-flex justify-content-between align-items-center w-100 p-1 bg-white">
                        <div className=" bg-white"> <IoReorderThree onClick={() => setHumburger(true)} style={{ fontSize: '55px' }} />
                            <div id="modal" className="z-3">
                                <Modal className="p-2 bg-light" style={{ content: { width: '70%', height: '100%', border: 'none', boxShadow: "none", zIndex: '5' }, overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: '6' } }} isOpen={Humburger}>
                                    <img className="img-fluid mx-2" src={logo} alt="humburgerlogo" /> <i><Close style={{ float: 'right' }} onClick={() => setHumburger(false)} /></i>
                                    <ul className="mt-5" style={{ listStyle: 'none' }}>
                                        <li style={{ borderBottom: '1px inset black' }} className="m-3 d-flex">HOME     +</li>
                                        <li style={{ borderBottom: '1px inset black' }} className="m-3">SHOP     +</li>
                                        <li style={{ borderBottom: '1px inset black' }} className="m-3">BLOG     +</li>
                                        <li style={{ borderBottom: '1px inset black' }} className="m-3">PAGES    +</li>
                                        <li style={{ borderBottom: '1px inset black' }} className="m-3">ABOUT    +</li>
                                        <li style={{ borderBottom: '1px inset black' }} className="m-3">CONTACT+</li>
                                    </ul>
                                </Modal>
                            </div>
                        </div>
                        <div className="">
                            <img className=" h-50" src={logo} alt="navlogo2" />
                        </div>
                        <div className=" ">
                            <PersonOutlineRounded className="m-1" style={{ fontSize: '35px', color: '#666666', cursor: 'pointer' }} />
                            <span onClick={() => setshopping(true)}> <ShoppingBagOutlined className="m-1" style={{ fontSize: '35px', color: '#666666', cursor: 'pointer' }} /></span>
                        </div>
                    </div>
                </div>
            </div>
            {/*carousel*/}
            <div className="container-fluid z-n1 overflow-hidden" id="carousel">
                <div >
                    <Slider {...Setting} >
                        <div className="card ">
                            <img src={sofa} className="img-fluid mx-auto d-block" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body text-white text-center">
                                    <div className="card-title">
                                        Discover our best furniture collection from home
                                    </div>
                                    <div className="card-text">
                                        <h3>Stylish Furniture Bring Beauti</h3>
                                    </div>
                                    <div className="card-btn">
                                        <button className="btn btn-secondary">Start to Buying</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img style={{ marginLeft: '25%' }} src={sofa2} className="img-fluid mx-auto d-block" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body text-white text-center">
                                    <div className="card-title">
                                        Discover our best furniture collection from home
                                    </div>
                                    <div className="card-text">
                                        <h3>Stylish Furniture Bring Beauti</h3>
                                    </div>
                                    <div className="card-btn">
                                        <button className="btn btn-secondary">Start to Buying</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img style={{ marginLeft: '25%' }} src={sofa3} className="img-fluid mx-auto d-block" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body text-white text-center">
                                    <div className="card-title">
                                        Discover our best furniture collection from home
                                    </div>
                                    <div className="card-text">
                                        <h3>Stylish Furniture Bring Beauti</h3>
                                    </div>
                                    <div className="card-btn">
                                        <button className="btn btn-secondary">Start to Buying</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={sofa4} className="img-fluid mx-auto d-block" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body text-white text-center">
                                    <div className="card-title">
                                        Discover our best furniture collection from home
                                    </div>
                                    <div className="card-text">
                                        <h3>Stylish Furniture Bring Beauti</h3>
                                    </div>
                                    <div className="card-btn">
                                        <button className="btn btn-secondary">Start to Buying</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={sofa5} className="img-fluid mx-auto d-block" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body text-white text-center">
                                    <div className="card-title">
                                        Discover our best furniture collection from home
                                    </div>
                                    <div className="card-text">
                                        <h3>Stylish Furniture Bring Beauti</h3>
                                    </div>
                                    <div className="card-btn">
                                        <button className="btn btn-secondary">Start to Buying</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div id="product" style={{ zIndex: '-1', columnGap: '0px' }} className="row  align-items-end h-100 text-center mt-4">

                    <div style={{ height: '100%' }} className="col-12 col-lg-6 col-md-6 ">
                        <div style={{ zIndex: '-1' }} className="card m-2 lg:cursor-pointer ">
                            <img src={s1} className="img-thumbnail w-100 h-100 md:cursor-pointer" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body">

                                    <div className="card-text mt-5">
                                        <h4 style={{ float: 'right' }}>White Minimalist <br />
                                            <span style={{ borderBottom: '1px inset #F52021' }}> Combo</span> Sofa </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '100%' }} className="col-12 col-lg-6 col-md-6">
                        <div style={{ zIndex: '-1' }} className="card m-2">
                            <img src={s2} className="img-thumbnail w-100 h-100" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body">

                                    <div className="card-text mt-5">
                                        <h4 style={{ float: 'left' }}>Modern Stylish <br />
                                            <span style={{ borderBottom: '1px inset #F52021' }}> Single</span> Sofa </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '100%' }} className="col-12 col-lg-6 col-md-6 ">
                        <div style={{ zIndex: '-1' }} className="card m-2">
                            <img src={s3} className="img-thumbnail w-100 h-100" alt="" />
                            <div className="card-img-overlay">
                                <div className="card-body">

                                    <div className="card-text mt-5">
                                        <h4 style={{ float: 'left' }} className="mt-3">Larger Minimal <br />
                                            <span style={{ borderBottom: '1px inset #F52021' }}> Wooden</span> Chair </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '100%' }} className="col-12 col-lg-6 col-md-6 ">
                        <div className="row h-100 px-4">
                            <div style={{ height: '100%', width: '100%' }} className="col-12 col-lg-12">
                                <div style={{ zIndex: '-1' }} className="card m-2">
                                    <img src={s4} className="img-thumbnail w-100 h-100" alt="" />
                                    <div className="card-img-overlay">
                                        <div className="card-body">

                                            <div className="card-text mt-4">
                                                <h4>Family Package <br />
                                                    <span style={{ borderBottom: '1px inset #F52021' }}> Sofa Set</span>  </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '100%' }} className="col-12 col-lg-12">
                                <div style={{ zIndex: '-1' }} className="card m-2">
                                    <img src={s5} className="img-thumbnail w-100 h-100" alt="" />
                                    <div className="card-img-overlay">
                                        <div className="card-body">

                                            <div className="card-text mt-5">
                                                <h4 style={{ float: 'right' }}>White Minimalist <br />
                                                    <span style={{ borderBottom: '1px inset #F52021' }}> Combo</span> Sofa </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="arrow">
                    <a href="#top"><ArrowUpward className="text-white" style={{ position: 'fixed', left: '95%', top: '90%', bottom: '0', borderRadius: '50%', backgroundColor: '#F51C1C', height: '45px', width: '50px', zIndex: '1' }} /></a>
                </div>
                <div style={{ zIndex: '-1' }} className="popular text-center mt-2">
                    <h3 >Most Popular Items</h3>
                    <div style={{ zIndex: '-1' }} className="container d-flex justify-content-around">
                        <button onClick={Chair} style={{ cursor: 'pointer' }} value="chair" className="btn btn-outline-dark ">Chair</button>
                        <button onClick={Chair} value="sofa" className="btn btn-outline-dark">Sofa</button>
                        <button onClick={Chair} value="lamp" className="btn btn-outline-dark">Lamp</button>
                        <button onClick={Chair} value="table" className="btn btn-outline-dark">Table</button>
                        <button onClick={Chair} value="monitor" className="btn btn-outline-dark">Monitor</button>
                    </div>
                    <div style={{ zIndex: '-1' }} className="show">
                        <div id="jello">
                            <ChairFun />
                        </div>
                        {showpopular}
                    </div>
                </div>
                <div className="banner mt-3">
                    <div className="row ">
                        <div className="col-12  col-lg-4">
                            <div className="card first-banner">
                                <img src={b} className="img-fluid" alt="" />
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                        <div style={{ float: 'right' }} className="card-text text-center">
                                            <h4 className="mt-3" >Single Stylish <br /> Mini Chair</h4>
                                            <button style={{ backgroundColor: 'white' }} className="btn">Order now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card first-banner">
                                <img src={b2} className="img-fluid" alt="" />
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                        <div style={{ float: 'right' }} className="card-text text-center">
                                            <h4 className="mt-3" >New Furniture <br /> Tree Planet</h4>
                                            <button style={{ backgroundColor: 'white' }} className="btn">Order now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card first-banner">
                                <img src={b3} className="img-fluid" alt="" />
                                <div className="card-img-overlay">
                                    <div className="card-body">
                                        <div style={{ float: 'left' }} className="card-text text-center">
                                            <h4 className="mt-3" >Single Stylish <br /> Mini Chair</h4>
                                            <button style={{ backgroundColor: 'white' }} className="btn">Order now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wooden mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="head d-flex justify-content-around align-items-center">
                                <h2>Wooden Furniture</h2>
                                <img src={headingImg} alt="" />
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <img src={p1} className="img-fluid" alt="product" />
                                        <div className="card-body">
                                            <div className="card-content">
                                                <p>Fashion Chair</p>
                                                <p>
                                                    <span style={{ color: '#F51C1C', fontWeight: '600' }}>$150.00</span>  <span style={{ color: 'grey', textDecoration: 'line-through', textIndent: '4px' }}>$200.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="card">
                                        <img src={p2} className="img-fluid" alt="product" />
                                        <div className="card-body">
                                            <div className="card-content">
                                                <p>Globe Electric</p>
                                                <p>
                                                    <span style={{ color: '#F51C1C', fontWeight: '600' }}>$160.00</span>  <span style={{ color: 'grey', textDecoration: 'line-through', textIndent: '4px' }}>$210.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="card">
                                        <img src={p3} className="img-fluid" alt="product" />
                                        <div className="card-body">
                                            <div className="card-content">
                                                <p>Swivel Chair</p>
                                                <p>
                                                    <span style={{ color: '#F51C1C', fontWeight: '600' }}>$165.00</span>  <span style={{ color: 'grey', textDecoration: 'line-through', textIndent: '4px' }}>$190.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="card">
                                        <img src={p4} className="img-fluid" alt="product" />
                                        <div className="card-body">
                                            <div className="card-content">
                                                <p>Globe Electric</p>
                                                <p>
                                                    <span style={{ color: '#F51C1C', fontWeight: '600' }}>$160.00</span>  <span style={{ color: 'grey', textDecoration: 'line-through', textIndent: '4px' }}>$210.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="card">
                                        <img src={p5} className="img-fluid" alt="product" />
                                        <div className="card-body">
                                            <div className="card-content">
                                                <p>Plastic Chair</p>
                                                <p>
                                                    <span style={{ color: '#F51C1C', fontWeight: '600' }}>$175.00</span>  <span style={{ color: 'grey', textDecoration: 'line-through', textIndent: '4px' }}>$215.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="card">
                                        <img src={p6} className="img-fluid" alt="product" />
                                        <div className="card-body">
                                            <div className="card-content">
                                                <p>Table Chairs</p>
                                                <p>
                                                    <span style={{ color: '#F51C1C', fontWeight: '600' }}>$170.00</span>  <span style={{ color: 'grey', textDecoration: 'line-through', textIndent: '4px' }}>$220.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <img className="img-fluid" src={furniture} alt="furniture tree" />
                                <div className="card-img-overlay">
                                    <div className="card-body text-center">
                                        <div className="card-text">
                                            <h4>Bring Beauti With <br />Furniture Tree</h4>
                                        </div>
                                        <div className="card-text mt-3">
                                            <span style={{ backgroundColor: '#FFFFFF', borderRadius: '50%', padding: '4px' }} className="m-3 p-2">-544</span>
                                            <span style={{ backgroundColor: '#FFFFFF', borderRadius: '50%', padding: '4px' }} className="m-3 p-2">-16</span>
                                            <span style={{ backgroundColor: '#FFFFFF', borderRadius: '50%', padding: '4px' }} className="m-3 p-2">-15</span>
                                            <span style={{ backgroundColor: '#FFFFFF', borderRadius: '50%', padding: '4px' }} className="m-3 p-2">-49</span>
                                        </div>
                                        <div className="mt-4">
                                            <span className="m-3 p-1">Days</span>
                                            <span className="m-3 p-1">Hrs</span>
                                            <span className="m-3 p-1">Mins</span>
                                            <span className="m-3 p-1">Secs</span>
                                        </div>
                                        <div className="card-btn mt-5">
                                            <button style={{ backgroundColor: 'white' }} className="btn">Order now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid video-file mt-5">
                    <div className="card">
                        <div className="banner__video--thumbnail position__relative">
                            <img className="img-thumbnail banner__video--thumbnail__img display-block" src={sofa} alt="banner-bideo-thumbnail" />
                            <div className="bideo__play">
                                <a className="bideo__play--icon glightbox" href="https://vimeo.com/115041822" data-gallery="video">
                                    <div className="card-img-overlay justify-content-center align-items-center d-flex">
                                        <svg id="play" style={{ backgroundColor: '#ffffff', borderRadius: '50%' }} xmlns="http://www.w3.org/2000/svg" width="46.302" height="46.302" viewBox="0 0 46.302 46.302">
                                            <g id="Group_193" data-name="Group 193" transform="translate(0 0)">
                                                <path id="Path_116" data-name="Path 116" d="M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z" fill="currentColor"></path>
                                                <g id="Group_188" data-name="Group 188" transform="translate(15.588 11.19)">
                                                    <g id="Group_187" data-name="Group 187">
                                                        <path id="Path_117" data-name="Path 117" d="M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Zm-1.033,3.435-13.256,8.964a1.151,1.151,0,0,1-1.8-.953V126.73a1.134,1.134,0,0,1,.611-1.017,1.134,1.134,0,0,1,1.185.063l13.256,8.964a1.151,1.151,0,0,1,0,1.907Z" transform="translate(-172.366 -123.734)" fill="currentColor"></path>
                                                    </g>
                                                </g>
                                                <g id="Group_190" data-name="Group 190" transform="translate(28.593 5.401)">
                                                    <g id="Group_189" data-name="Group 189">
                                                        <path id="Path_118" data-name="Path 118" d="M328.31,70.492a18.965,18.965,0,0,0-10.886-10.708.922.922,0,1,0-.653,1.725,17.117,17.117,0,0,1,9.825,9.664.922.922,0,1,0,1.714-.682Z" transform="translate(-316.174 -59.724)" fill="currentColor"></path>
                                                    </g>
                                                </g>
                                                <g id="Group_192" data-name="Group 192" transform="translate(22.228 4.243)">
                                                    <g id="Group_191" data-name="Group 191">
                                                        <path id="Path_119" data-name="Path 119" d="M249.922,47.187a19.08,19.08,0,0,0-3.2-.27.922.922,0,0,0,0,1.845,17.245,17.245,0,0,1,2.889.243.922.922,0,1,0,.31-1.818Z" transform="translate(-245.801 -46.917)" fill="currentColor"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ marginBottom: '10%', position: 'absoulte', bottom: '150px' }} className="d-flex mb-5 justify-content-center">
                    <div style={{ backgroundColor: '#ffffff' }} className="w-75 mb-5 bg-light d-flex justify-content-evenly rounded">
                        <span className="text-center"><SupportAgentTwoTone style={{ fontSize: '75px' }} /> <br />24/7 Support</span>
                        <span className="text-center"><SecurityRounded style={{ fontSize: '75px' }} /> <br /> Secure Shopping</span>
                        <span className="text-center"> <LocalShipping style={{ fontSize: '75px' }} /> <br /> Free Shipping</span>
                        <span className="text-center"><Cash style={{ fontSize: '75px' }} /> <br /> Return Money</span>
                    </div>
                </div>
                <div className="client">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <img src={Client} className="img-fluid" alt="client" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <h3>Clients Testimonial</h3>
                            <Slider {...Setting2}>
                                <div className="card">
                                    <img src={thumb} alt="" />
                                    <div className="card-body">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eius minus rem!
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div style={{ position: 'fixed', top: '90%', width: '100%', bottom: '0', zIndex: '1' }} className="d-flex bg-white p-2 justify-content-around">
                    <span><Home style={{ fontSize: '35px' }} />  </span>
                    <span><Shop2Rounded style={{ fontSize: '35px' }} /></span>
                    <span onClick={() => setsearch(true)}><Search style={{ fontSize: '35px' }} /></span>
                    <span onClick={() => setshopping(true)}><ShoppingCart style={{ fontSize: '35px' }} /></span>
                    <span><FavoriteBorderOutlined style={{ fontSize: '35px' }} /></span>
                </div>
            </div>

        </div >
    )
}