import React, { useState, useEffect, createContext } from 'react'
import AddStock from './addStock'
import Footer from "./Footer";
import Chart from "./Chart";
import DisplayStockList from './displayStockList'
import '../styles/mystocks.css'


const MyStocks = ({ User }) => {
    const [Dates, setDates] = useState([]);
    const [Data, setData] = useState([]);
    const [Display,setDisplay] =useState('none');
    const [user, setUser] = useState(User);
    const [usrstdata, setUsrStData] = useState([]);
    const onTriger = () => {
        const Search = async () => {
            setUser(User);
            const res = await fetch(`${user}/stocksList`);
            const data = await res.json();
            console.log(data);
            setUsrStData(data);
            console.log(usrstdata);
        }
        if (user) {
            Search();
        }
    }
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
        setDisplay('block');
        CallApi();
    };
    const Change = () => {
        if(Display=='none')
            setDisplay('block');
        else
            setDisplay('none');
    }
    useEffect(() => {
        const Search = async () => {
            setUser(User);
            const res = await fetch(`${user}/stocksList`);
            const data = await res.json();
            setUsrStData(data);
        }
        if (user) {
            Search();
        }
    }, [user]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <span className="col-12"><h1 className='PageTitle'>My Stocks</h1></span>
                    <hr></hr>
                </div>
                <div className="row stocksContent d-flex justify-content-around align-items-center">
                    <div className=" col-lg-3  col-12   d-flex justify-content-between align-items-center addStocks">
                        <AddStock User={User} onTriger={onTriger} />
                    </div>
                    <div className=" col-lg-5 col-12 stockList">
                        <DisplayStockList User={user} Data={usrstdata} TrigerEvent={TrigerEvent} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <div className='offset-lg-1 col-lg-10 col-12' onClick={Change} style={{display:`${Display}`}}>
                            <Chart Dates={Dates} Data={Data} />
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default MyStocks;