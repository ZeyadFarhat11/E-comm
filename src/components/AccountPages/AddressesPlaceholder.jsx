import React from "react";
import { Skeleton } from "@chakra-ui/react";

const AddressesPlaceholder = () => {
  return (
    <div className="addresses-list">
      <Skeleton height={187.5} rounded={10} />
      <Skeleton height={187.5} rounded={10} />
      <Skeleton height={187.5} rounded={10} />
    </div>
  );
};

export default AddressesPlaceholder;
