import React from 'react'
import View from './ViewMyStock'
const Display = () =>{
    return(
        <div className="Stocks">
            <span className="PageSubTitle">Your Listed Stocks</span>
            <hr></hr>
            <div id="AddStocksList">
                    <div className="ListHeaders">
                        <div className='PageSubSubTitle'><u>Stock Name</u></div>
                     
                        <div className='PageSubSubTitle'><u>Current Status</u></div>
                    </div>
                    <View CName='Company 1'/>
                    <View CName='Company 2'/>
                    <View CName='Company 3' />
            </div>
        </div>
    );
}
export default Display;
