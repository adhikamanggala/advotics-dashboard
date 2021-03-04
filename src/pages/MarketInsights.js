import React, {useState, useEffect} from 'react';
import { Line, CartesianGrid, XAxis, YAxis, ComposedChart, Tooltip, Legend, Bar } from 'recharts';
import { DateRangePicker } from 'react-date-range';
import Modal from 'react-modal';
import { addDays } from 'date-fns';
import moment from 'moment';
import 'moment/locale/id';
import '../css/MarketInsights.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

//assets
import Product2 from '../Assets/Product 2@2x.png'
import Help from '../Assets/Help@2x.png';
import Sales from '../Assets/Group 646 (1).png';
import Calendar from '../Assets/calendar@2x.png';
import CloseIcon from '../Assets/x.svg';
import Down from '../Assets/down.svg';

const data = [
    {
        name: 'Jan 12', uv: 2400, net: 2400, gross:2450 ,amt: 0,
      },
      {
        name: 'Tue', uv: 3000, net: 1398, gross:2450 ,amt: 2210,
      },
      {
        name: 'Wed', uv: 2000, net: 2800, gross:2450 ,amt: 2290,
      },
      {
        name: 'Thu', uv: 2780, net: 3908, gross:2450 ,amt: 2000,
      },
      {
        name: 'Fri', uv: 1890, net: 4800, gross:2450 ,amt: 2181,
      },
      {
        name: 'Sat', uv: 2390, net: 3800, gross:2450 ,amt: 2500,
      },
      {
        name: 'Sun', uv: 3490, net: 4300, gross:2450 ,amt: 2100,
      },
];

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

function MarketInsights() {
    const [period, setPeriod] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
    const [time, setTime] = useState('');
    const [modalIsOpen,setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const getDate = () => {
        const start = period[0].startDate;
        const end = period[0].endDate;
        const nowDate = moment(start).format('LL')
        const endDate = moment(end).format('LL')

        const chosenPeriod = nowDate + '-' + endDate

        setTime(chosenPeriod);
    }

    useEffect(() => {
        Modal.setAppElement('body');
        getDate();
    })

    return(
        <div className="content">
            <div className="container-fluid p-0">
                <div className="dashboard-period-con">
                    <div className="p-0 dash-con">
                        <p className="dashboard-text">Dashboard</p>
                    </div>
                    <div className="p-0">
                        <div className="period-tab" onClick={() => openModal()}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <img src={Calendar} className="period-icon" alt="period-icon"/>
                                <p className="m-0" style={{fontSize: 16, alignSelf:'center', marginLeft: 10}}>Period</p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p className="period-text m-0">{time}</p>
                            <img src={Down} alt="down-icon" className="period-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="market-insight">
                    <div className="market-con">
                        <p className="market-text">MARKET INSIGHTS</p>
                    </div>
                    <div className="help-con">
                        <img src={Help} alt="help-icon" className="help-icon"/>
                        <a href="/help">
                            <p className="help-text">Click here for help</p>
                        </a>
                    </div>
                </div>
                <div className="sales-turnover-con">
                    <img src={Sales} alt="sales-turnover" className="sales-turnover"/>
                </div>
                <div className="chart-con">
                    <div className="col-md-6 charts">
                        <div className="title-con">
                            <p>AVERAGE PURCHASE VALUE</p>
                        </div>
                        <div className="chart-comp">
                        <ComposedChart width={525} height={285} data={data}>
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Bar dataKey="net" barSize={20} fill="#37B04C" />
                            <Bar dataKey="gross" barSize={20} fill="#289E45" />
                            <Line type="monotone" dataKey="net" stroke="#FFE854" />
                        </ComposedChart>
                        </div>
                    </div>
                    <div className="col-md charts">
                        <div className="title-con">
                            <p>BEST SELLING SKU</p>
                        </div>
                        <div className="prod-card">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                        <div className="prod-card2">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                        <div className="prod-card2">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                        <div className="prod-card2">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md charts1">
                        <div className="title-con">
                            <p>TOP COMPETITOR SKU</p>
                        </div>
                        <div className="prod-card">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                        <div className="prod-card2">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                        <div className="prod-card2">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                        <div className="prod-card2">
                            <img src={Product2} alt="product-img" className="product-img"/>
                            <div className="sub-card">
                                <p className="prod-text m-0">Product Name</p>
                                <div className="price-con">
                                    <p className="price-text">Rp XXX</p>
                                    <p className="price-text">[jml terjual]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className="period-table">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img src={Calendar} className="period-icon2" alt="period-icon"/>
                    <p className="period-text2">Period</p>
                </div>
                <img src={CloseIcon} className="close-icon" alt="close-icon" onClick={() => closeModal()}/>
            </div>
                <DateRangePicker
                    onChange={item => setPeriod([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={period}
                    direction="horizontal"
                    rangeColors={"#37B04C"}
                    color={"#37B04C"}
                />
            <div>
                <button className="apply-button" onClick={() => closeModal()}>Apply</button>
            </div>
        </Modal>
        </div>
    )
}
export default MarketInsights;