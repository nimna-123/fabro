import React,{useEffect,useState} from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from "axios";
import * as Urls from '../Urls'



const ProductConfigStage1 = (props) => {
  const [userId,setUserId] = useState('')
  const [countryId,setCountryId] = useState('')
  const [brandNameList,setBrandNameList] = useState([])
  const [brandId,setBrandId] = useState('')
  const token = localStorage.getItem('fabroToken')
  useEffect(()=>{
     setUserId(props.location.state.userId);
     setCountryId(props.location.state.countryId);
     axios
              .post(Urls.brandName+'?country_id='+'192'+'&token='+token)
              .then((response1) => {
                if(response1.data.msg='Success'){
                  setBrandNameList(response1.data.vehicle_brand)

                }
               
                console.log(response1);
               
                
              })
              .catch((error) => {
                console.log(error);
              });

  },[])
  const brandNameChange = (e) =>{
    setBrandId(e.target.value);

  }

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
              onChange={brandNameChange}
              
            >
              <option>Select Brand name</option>
              {brandNameList.map((item,index)=>{
                return(
                  <option value={item.id} key={index}>{item.name}</option>

                )
              })}
            
            
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
