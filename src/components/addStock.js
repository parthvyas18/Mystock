import React from 'react'
const AddStock = () => {
    return (
        <div class="Stocks">
            <span ><h2 className="PageSubTitle">Add New Stock</h2></span>
            <hr></hr>
            <div id="AddStocks">
                    <form>
                        <div className="FormGroup d-flex  justify-content-between form-group">
                            <label for="CompanyName">Stock Name</label>
                            <input className="Input" type="text" id="CompanyName" />
                        </div>
                        <div className="FormGroup d-flex justify-content-between form-group">
                            <label for="BuyPrice">Buy Price</label>
                            <input className="Input" type="text" id="BuyPrice" />
                        </div>
                        <button className="Addbtn">Add</button>
                    </form>
            </div>
        </div>
    );
}
export default AddStock;