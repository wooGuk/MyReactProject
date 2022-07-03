import React, {useEffect, userState, Component} from "react";
import '../common.css';


const service = ['NFT 대출', '우리WON직장인 대출', '우리 스페셜론', '우리WON전세대출'];

const LoanService = () =>{
    
    let returnElement = [];
    service.forEach(e => {
        returnElement.push(<div className="accordion_btn loan-text" key={service.indexOf(e)}>{e}</div>)
    });

    return(
        <>
            <div className = "loan_item">
                <div className="each">
                    { returnElement }
                </div>
            </div>
        </>
    )
}

export default LoanService;