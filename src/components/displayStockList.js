import React from 'react'
import ViewMyStock from './ViewMyStock'
const DisplayStockList = () =>{
    return(
        <div className="Stocks">
            <span><h2 className="PageSubTitle">Your Listed Stocks</h2></span>
            <hr></hr>
            <div id="AddStocksList">
                    <div className="ListHeaders d-flex justify-content-around">
                        <div className=' d-flex  justify-content-between'><u><h4 className='PageSubSubTitle'>Stock Name</h4></u></div>
                     
                        <div className=' d-flex  justify-content-between'><u><h4 className='PageSubSubTitle'>Current Status</h4></u></div>
                    </div>
                    <ViewMyStock CName='Company'/>
                    <ViewMyStock CName='Company'/>
                    <ViewMyStock CName='Company' />
            </div>
        </div>
    );
}
export default DisplayStockList;
