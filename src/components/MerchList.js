import React from "react";
import Merch from "./Merch";

function MerchList() {
  return(
    <React.Fragment>
    <Merch
    name='Kitten Mitten 1'
    detail='Pattern: pizza print'
    price={29999.99999}
    quanity={10} />
    <Merch
    name='Kitten Mitten 2'
    detail='Pattern: hot dog print'
    price={29999.99999}
    quanity={20} />
    </React.Fragment>
  );
}

export default MerchList;