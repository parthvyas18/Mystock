import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2'
import 'font-awesome/css/font-awesome.min.css';
import '../css/work.css'

const SearchBar = () => {
    const [Search, setSearch] = useState("");
    const [Dates, setDates] = useState([]);
    const [Data, setData] = useState([]);
    const KeyValues = [];
    const DataValues = [];
    const LChart = useRef();
    useEffect(() => {
        console.log(LChart);
    }, [Data]);
    const CallApi = (event) => {
        event.preventDefault();
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Search}&outputsize=compact&apikey=R6DG5NS8ZUUQXIV7`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                for (const key in data['Time Series (Daily)']) {
                    KeyValues.push(key);
                    DataValues.push(data['Time Series (Daily)'][key]['1. open']);
                }
                // KeyValues.reverse();
                setDates(KeyValues);
                setData(DataValues);
            });
    };
    return (
        <div className="SearchBar">
            <input className="inputSearch" type="text" placeholder="Search to view stocks ..." onChange={(event) => setSearch(event.target.value)} />
            <button className="fa fa-search searchBtn" onClick={CallApi}></button>

            <div className="row">
                <hr className='hrB col-12' />
                <div className="Chart col-12">
                    <Line
                        className="Graph"
                        ref={LChart}
                        data={{
                            labels: Dates,
                            datasets: [{
                                label: 'Stock Price',
                                data: Data,
                                backgroundColor: 'rgb(0,255,0)',
                                borderColor: ['black'],
                                borderWidth: 2,
                                fill: true
                            }]
                        }}
                        options={{

                        }}
                        height={500}
                        width={1000}

                    // options={{maintainAspectRatio:false}}
                    />
                </div>
            </div>
            <hr className='hr col-12' />    
        </div>
    );
}
export default SearchBar