import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const balance = useSelector((state) => state.amount);
  const dispatch=useDispatch()
  const action=bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h1>deposit/withdraw money </h1>
      <div className="container my-2">
      {/* <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      update balance
      <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      <button className="btn btn-primary" onClick={()=>{action.withdrawMoney(100)}}>-</button>
      update balance({balance})
      <button className="btn btn-primary" onClick={()=>{action.depositMoney(100)}}>+</button>
      </div>
    </div>
    
  );
};

export default Shop;
