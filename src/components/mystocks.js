import React from 'react'
import AddStock from './addStock'
import Footer from "./Footer";
import DisplayStockList from './displayStockList'
import '../styles/mystocks.css'
const MyStocks = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <span className="col-12"><h1 className='PageTitle'>My Stocks</h1></span>
                    <hr></hr>
                </div>
                <div className="row stocksContent d-flex justify-content-around align-items-center">
                    <div className=" col-md-3  col-12   d-flex justify-content-between align-items-center addStocks">
                        <AddStock />
                    </div>
                    <div className=" col-md-5 col-12 stockList">
                        <DisplayStockList />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
export default MyStocks;