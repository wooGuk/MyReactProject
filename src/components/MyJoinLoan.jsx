import React,{useState} from "react";
const myLoan = [
    { id : 1, joinName : "NFT 대출"},
    { id : 2, joinName : "우리 스페셜론"},
];

const MyJoinLoan = ({myLoan, index}) => {
    return(
        <div>
            <b>{myLoan.id}</b><span>({myLoan.joinName})</span>
        </div>
    );
}

const MyJoinLoanList = () => {
    return(
        <div>
            {myLoan.map((loan) =>(
                // 배열 랜더링 시에는 값과 인덱스가 꼭 필요하다
                <MyJoinLoan myLoan={loan} index={loan.index}/>
            ))}
        </div>
    );
}

export default MyJoinLoanList;