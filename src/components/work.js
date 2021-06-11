import React, { useState } from 'react';
import SearchBar from './searchBar'
import TopViewed from './TopViewed'
import Footer from './Footer'
import Chart from './Chart'
import '../styles/work.css'
const Work = () => {
    const [Dates, setDates] = useState([]);
    const [Data, setData] = useState([]);
    const TrigerEvent = (Search) => {
        const KeyValues = [];
        const DataValues = [];

        const CallApi = () => {
            console.log(Search);
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Search}&outputsize=compact&apikey=QQLX1CAPFH8SSV4I`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    for (const key in data['Time Series (Daily)']) {
                        console.log(key);
                        KeyValues.push(key);
                        DataValues.push(data['Time Series (Daily)'][key]['1. open']);
                    }
                    setDates(KeyValues);
                    setData(DataValues);
                });
        }
        CallApi();
    };
    return (
        <>
            <div className='container'>
                <SearchBar triger={TrigerEvent} />
                <div className='row'>
                    <div className='offset-lg-1 col-lg-10 col-12'>
                        <Chart Dates={Dates} Data={Data} />
                    </div>
                </div>
                <TopViewed />
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default Work;