import React from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import {AiOutlineArrowRight} from 'react-icons/ai'



const ProductConfigStage1 = () => {


  return (
    <DashboardLayout>
      <ConfigStages
        countBg1="#E1B17D"
        countBg2="#ABABAB"
        countBg3="#ABABAB"
        clr1="#300508"
        clr2="#A2A2A2"
        clr3="#A2A2A2"
        stageHead="Vehicle Details"
      />
      <div className="row">
        <div className="col-md-9">
          <div className="FormBox">
            <div className="bramdName">Brand Name</div>

            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
            >
              <option>Select Brand name</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="bramdName">Vehicle Name</div>

            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
            >
              <option>Select Vehicle name</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="bramdName">Model </div>

            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
            >
              <option>Select Model</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className='Submit'>Next&nbsp;&nbsp;&nbsp;<AiOutlineArrowRight color="#FCFCFD" size={20}/></div>
          </div>
        </div>
        <div className="col-md-3">
          <ProductDetail />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default ProductConfigStage1;
