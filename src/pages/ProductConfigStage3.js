import React,{useState,useEffect} from 'react'
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import {GrAdd} from 'react-icons/gr'
import {FiMinus} from 'react-icons/fi'
const ProductConfigStage3 = (props) =>{
  console.log(props.location)
    return(
            <DashboardLayout>
                 <ConfigStages
        countBg1="#E1B17D"
        countBg2="#E1B17D"
        countBg3="#E1B17D"
        clr1="#300508"
        clr2="#300508"
        clr3="#300508"
        stageHead="Order"
      />
      <div className="row">
        <div className="col-md-8">
          <div className="FormBox">
          <div className="bramdName">SKU</div>
          <div className='skuVal'>{props.location.state.data}</div>
          <div className="bramdName">Description</div>
          <div className='skuVal'>{props.location.state.data}</div>
          <div className="bramdName">Quantity</div>
          <div className='d-flex'>
            <div className='dec'><FiMinus/></div>
           
            <div className='count'>1</div>
            <div className='inc'><GrAdd/></div>
          </div>
          </div>
          
          </div>
          <div className="col-md-4"></div>
          </div>
            </DashboardLayout>
    )
}
export default ProductConfigStage3