import React from 'react'
import '../App.css'
import Add from './addStock'
import Display from './displayStockList'
const Mystocks=() =>{
    return(
        <div className="container">
            <span className="PageTitle">My Stocks</span>
            <hr></hr>
            <div className="stocksContent">
                <div className="addStocks">
                    <Add />
                </div>
                <div className="stockList">
                    <Display />
                </div>
            </div>
        </div>
    );
}
export default Mystocks;