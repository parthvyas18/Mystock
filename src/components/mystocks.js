import React, { useState, useEffect } from 'react'
import AddStock from './addStock'
import Footer from "./Footer";
import DisplayStockList from './displayStockList'
import '../styles/mystocks.css'


const MyStocks = ({ User }) => {
    // const [stData, setStData] = useState([]);


    // const callData = async () => {

    //     let res = await fetch(`${User}/stocksList`);
    //     let data = await res.json();
    //     return data;
    // }
    // useEffect(() => {
    //     const func = async () => {
    //         const data = await callData();
    //         setStData(data);
    //     }
    //     func();
    // }, [User]);

    const [user,setUser] =useState(User)
    useEffect(()=>{
        setUser(User)
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <span className="col-12"><h1 className='PageTitle'>My Stocks</h1></span>
                    <hr></hr>
                </div>
                <div className="row stocksContent d-flex justify-content-around align-items-center">
                    <div className=" col-lg-3  col-12   d-flex justify-content-between align-items-center addStocks">
                        <AddStock User={User} />
                    </div>
                    <div className=" col-lg-5 col-12 stockList">
                        <DisplayStockList User={user}  />
                    </div>
                </div>
                <div className='row mt-5'>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default MyStocks;