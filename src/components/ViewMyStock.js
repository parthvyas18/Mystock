import React from 'react';
const ViewMyStock= (props)=>{
    return(
        <div className="stockView d-flex  justify-content-between">
            <span className="Company_Name"><h5>{props.CName}</h5></span>
            <button className="Checkibtn">Check</button>
        </div>
    );
}
export default ViewMyStock;