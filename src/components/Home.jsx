import React from "react";
import LoanService from "./LoanService";
import MyJoinLoanList from "./MyJoinLoan";
import HorizonLine from "../layout/HorizontalLine";

const Home = () =>{
    return(
        <>
            <HorizonLine text="가입대출상품" />
            <MyJoinLoanList></MyJoinLoanList>
            <HorizonLine text="대출 상품 가입 리스트" />
            <LoanService></LoanService>
        </>
    )
}

export default Home;