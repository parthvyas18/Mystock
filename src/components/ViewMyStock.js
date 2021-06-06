import React from 'react';
import {Button} from 'reactstrap'
const View= (props)=>{
    return(
        <div className="stockView">
            <span className="Company_Name">{props.CName}</span>
           
            <Button className="CheckBtn">Check</Button>
        </div>
    );
}
export default View;