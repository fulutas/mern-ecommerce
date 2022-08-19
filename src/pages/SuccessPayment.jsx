import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPayment = () => {
  const location = useLocation();

  console.log(location);

  return <div>Success Payment</div>;
};

export default SuccessPayment;
