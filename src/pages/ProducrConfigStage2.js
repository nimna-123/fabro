import React from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Material from '../assets/images/material.png'

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
            <div className="material">Material</div>
            <div className="row">
              <div className="col-md-1 ">
              <img src={Material} alt='material' className="materialImg"/>

              </div>
              <div className="col-md-1">
              <img src={Material} alt='material' className="materialImg"/>

              </div>
              <div className="bramdName">Material Spec</div>

            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
              style={{marginLeft:'5px'}}
            
              
              
            >
              <option>Select Material Spec</option>
            
            
            </select>
             
            </div>
           
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
