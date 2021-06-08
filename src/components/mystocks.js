import React from 'react'
import AddStock from './addStock'
import DisplayStockList from './displayStockList'
import '../css/mystocks.css'
const MyStocks = () => {
    return (
        <div className="container">
            <div className="row">
                <span className="PageTitle col-6">My Stocks</span>
                <hr></hr>
            </div>

            <div className="row stocksContent">
                <div className=" col-md-4  col-12 addStocks">
                    <AddStock />
                </div>
                <div className=" col-md-5  col-12 stockList">
                    <DisplayStockList />
                </div>
            </div>
        </div>
    );
}
export default MyStocks;