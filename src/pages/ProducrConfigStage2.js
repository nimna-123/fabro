import React from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const ProductConfigStage2 = () => {
  return (
    <DashboardLayout>
      <ConfigStages
        countBg1="#E1B17D"
        countBg2="#E1B17D"
        countBg3="#ABABAB"
        clr1="#300508"
        clr2="#300508"
        clr3="#A2A2A2"
        stageHead="Design Specifications"
      />
      <div className="row">
        <div className="col-md-9">
          <div className="FormBox">
           
            <div className='Submit'>Add to Cart&nbsp;&nbsp;&nbsp;<AiOutlineShoppingCart color="#FCFCFD" size={25}/></div>
          </div>
        </div>
        <div className="col-md-3">
          <ProductDetail />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default ProductConfigStage2;
