import { Skeleton } from "@chakra-ui/react";
import React from "react";

const PaymentMethodsPlaceholder = () => {
  return (
    <div className="payment-methods-list">
      <Skeleton height={189} rounded={10} />
      <Skeleton height={189} rounded={10} />
      <Skeleton height={189} rounded={10} />
    </div>
  );
};

export default PaymentMethodsPlaceholder;
