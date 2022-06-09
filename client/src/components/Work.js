import React, { useState ,useEffect,useContext} from 'react';
import {useHistory} from "react-router-dom";
import SearchBar from './SearchBar'
import TopViewed from './TopViewed'
import { users } from "../App";
import Footer from './Footer'
import Chart from './Chart'
import Search from "./Search";
import '../Styles/Work.css'
const Work = () => {

    const history =useHistory();
    const { state, dispatch } = useContext(users)

    const checking = async (e) => {
        try {
            const res = await fetch('/About', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            })
            if (res.status!=401) {
                dispatch({ type: "USER", payload: true });
            }
            else
            {
                dispatch({ type: "USER", payload: false })
                history.push("/MyStock");
            }
            // main code goes here of authentication for massage

        } catch (err) {
            dispatch({ type: "USER", payload: false });
            history.push("/MyStock");
        }
    }
    useEffect(() => {
         checking();
    }, [])




    const [DatesO, setDatesO] = useState([]);
    const [DataO, setDataO] = useState([]);
    const [DataC,setDataC]=useState([]);
    const [DataH,setDataH]=useState([]);
    const [DataL,setDataL]=useState([]);

    const TrigerEvent = (Search) => {
        const KeyValuesO = [];
        const DataValuesO = [];
        const DataValuesC=[];
        const DataValuesH=[];
        const DataValuesL=[];
        const CallApi = () => {
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Search}&outputsize=compact&apikey=QQLX1CAPFH8SSV4I`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    for (const key in data['Time Series (Daily)']) {
                        KeyValuesO.push(key);
                        DataValuesO.push(data['Time Series (Daily)'][key]['1. open']);
                        DataValuesH.push(data['Time Series (Daily)'][key]['2. high']);
                        DataValuesL.push(data['Time Series (Daily)'][key]['3. low']);
                        DataValuesC.push(data['Time Series (Daily)'][key]['4. close']);
                    }
                    setDatesO(KeyValuesO);
                    setDataO(DataValuesO);
                    setDataC(DataValuesC);
                    setDataH(DataValuesH);
                    setDataL(DataValuesL);
                });
        }
        CallApi();
    };
    return (
        <>
        
            <Search triger={TrigerEvent} />
            <div className='container work_con'>
                {/* <SearchBar triger={TrigerEvent} /> */}
                <div className='row'>
                    <div className='offset-lg-1 col-lg-10 col-12'>
                        <Chart Dates={DatesO} DataO={DataO} DataC={DataC} DataH={DataH} DataL={DataL} />
                    </div>
                </div>
                <TopViewed triger={TrigerEvent} />
                <div className="row mt-5"></div>
                <div className="row mt-5"></div>
            </div>
            {/* <div style={{marginTop: 200}}>
            </div> */}
            <Footer />
        </>
    );
}
export default Work;