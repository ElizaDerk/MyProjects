import {useState} from "react";
import ReactModal from "react-modal";
import exit from './exit.png'

export default function LoanList() {
    const data = [
        {
            "id": "1",
            "title": "Voluptate et sed tempora qui quisquam.",
            "tranche": "A",
            "available": "11,959",
            "annualised_return": "8.60",
            "term_remaining": "864000",
            "ltv": "48.48",
            "amount": "88,888"
        },
        {
            "id": "5",
            "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
            "tranche": "B",
            "available": "31,405",
            "annualised_return": "7.10",
            "term_remaining": "1620000",
            "ltv": "80.80",
            "amount": "777,77"
        },
        {
            "id": "12",
            "title": "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
            "tranche": "C",
            "available": "12,359",
            "annualised_return": "4.80",
            "term_remaining": "879000",
            "ltv": "66.66",
            "amount": "6,666"
        }
    ];
    const [popup, setpopup] = useState([]);
    const [showpopup, setshowpopup] = useState(false);
    const getdata = (item) => {
        setpopup([item]);
        setshowpopup(!showpopup);
    };
    const closemodel = () => {
        setshowpopup(!showpopup);
    };

    return (
        <div>
            {data.map((item) => {
                return (
                    <div key={item.id} id={item.id} className="list-item">
                        <div className="item-content">
                            <div>
                                <h2 className='title'>{item.title}</h2>
                                <p className="item-text">Loan details and values:</p>
                                <span className="item-span">Tranche:{item.tranche},
                                    Annualised return:{item.annualised_return},
                                    LTV: {item.ltv}
                            </span>
                            </div>
                            <button className="main-btn" onClick={() => getdata(item)}>
                                Invest
                            </button>
                        </div>
                    </div>
                );
            })}
            <div className="pop-up-container">
                <div className="pop-up-content">
                    {popup.map((item) => {
                        return (
                            <ReactModal
                                isOpen={showpopup}
                                onRequestClose={closemodel}
                                className="Modal"
                                overlayClassName="Overlay"
                                key={item.id}
                            >
                                <button
                                    className="exit-btn"
                                    onClick={(showpopup) => setshowpopup(!showpopup)}
                                >
                                    <img src={exit} alt="exit-btn"/>
                                </button>
                                <>
                                        <h2 className='title'>
                                            {item.title}
                                        </h2>
                                        <p className='title-name'>{item.title}</p>
                                        <p className='text-modal'>Amount available: ${item.available}</p>
                                        {/*<p>Loan ends in: {item.term_remaining}</p>*/}
                                        <p>Loan ends in:{item.term_remaining}
                                        </p>
                                        <h3 className="title-modal">Investment amount</h3>
                                        <form>
                                            <input key={item.id} name={item.id} className="input-invest" type="number"/>
                                            <button className="main-btn">Invest</button>
                                        </form>
                                </>
                            </ReactModal>
                        );
                    })}
                </div>
            </div>
            <div style={{display: 'flex', alignItems:"center", justifyContent:"space-between", margin: "0 64px", paddingTop: '60px' }}>
                <h2>Total amount available for investment: </h2>
                <span className='item-text'></span>
            </div>
        </div>
    );
}
