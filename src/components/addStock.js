import React, { useState,useEffect } from 'react'
// import { useHistory } from "react-router-dom";
const AddStock = ({ User,onTriger}) => {
    const [stockName, setStockName] = useState('')
    const [stockPrice, setStockPrice] = useState(0)
   
    // const history = useHistory();
    const sendData = (event) => {
        event.preventDefault();
        console.log('you are sending data')

        fetch(`${User}/stocksData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                stockName, stockPrice
            })
        }).then(response => response.json())
           .then(data => console.log(data))
        console.log('trigger event is called')
        onTriger();
        // history.push("/MyStocks")
    }
    useEffect(()=> {

    })
    return (
        <div className="Stocks">
            <span ><h2 className="PageSubTitle">Add New Stock</h2></span>
            <hr></hr>
            <div id="AddStocks">
                <form>
                    <div className="FormGroup d-flex  justify-content-between form-group">
                        <label htmlFor="CompanyName">Stock Name</label>
                        <input className="Input" type="text" id="CompanyName" onChange={(event) => setStockName(event.target.value)} />
                    </div>
                    <div className="FormGroup d-flex justify-content-between form-group">
                        <label htmlFor="BuyPrice">Buy Price</label>
                        <input className="Input" type="text" id="BuyPrice" onChange={event => setStockPrice(event.target.value)} />
                    </div>
                    <button className="Addbtn" onClick={sendData}>Add</button>
                </form>
            </div>
        </div>
    );
}
export default AddStock;