import React from 'react';
import ViewMyStock from './ViewMyStock'

const TopViewed = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>

                <div className='row d-flex justify-content-center'>
                    <div className='viewed  col-md-6 col-12'>
                        <h2>Mostly viewed Stocks</h2>
                        <hr />
                        <ViewMyStock CName="AMZN" />
                        <ViewMyStock CName="GOOGL" />
                        <ViewMyStock CName="MSFT" />
                        <ViewMyStock CName="AAPL" />
                        <ViewMyStock CName="TSLA" />
                        <ViewMyStock CName="FB" />
                        <ViewMyStock CName="PYPL" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopViewed;