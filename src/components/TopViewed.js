import React from 'react';
import View from './ViewMyStock'
const TopViewed = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>

                <div className='viewed justify-content-around col-md-5 col-12'>
                    <h1>Mostly viewed Stocks</h1>
                    <View CName="AMZN" />
                    <View CName="IBM" />
                    <View CName="MSFT" />
                </div>
            </div>
        </div>
    );
}
export default TopViewed;