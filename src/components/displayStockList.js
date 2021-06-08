import React from 'react'
import ViewMyStock from './ViewMyStock'
const DisplayStockList = () =>{
    return(
        <div className="Stocks">
            <span className="PageSubTitle">Your Listed Stocks</span>
            <hr></hr>
            <div id="AddStocksList">
                    <div className="ListHeaders">
                        <div className='PageSubSubTitle'><u>Stock Name</u></div>
                     
                        <div className='PageSubSubTitle'><u>Current Status</u></div>
                    </div>
                    <ViewMyStock CName='Company'/>
                    <ViewMyStock CName='Company'/>
                    <ViewMyStock CName='Company' />
            </div>
        </div>
    );
}
export default DisplayStockList;
