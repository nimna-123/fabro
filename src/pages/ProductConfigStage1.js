import React,{useEffect,useState} from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from "axios";
import * as Urls from '../Urls'
import Seat from '../assets/images/seat.png'



const ProductConfigStage1 = (props) => {
  const [userId,setUserId] = useState('')
  const [countryId,setCountryId] = useState('')
  const [brandNameList,setBrandNameList] = useState([])
  const [brandId,setBrandId] = useState('')
  const [brandName,setBrandName] = useState('')
  const [vehicleList,setVehicleList] = useState([])
  const [vehicleId,setVehicleId] = useState('')
  const [vehcleName,setVehicleName] = useState('')
  const [vehicleSize,setVehicleSize] = useState({id:'',name:''})
  const [productType,setProductType] = useState({id:'',name:''})

  const [modelList,setModelList] = useState([])
  const [model,setModel] = useState('')
  const token = localStorage.getItem('fabroToken')
  useEffect(()=>{
     setUserId(props.location.state.userId);
     setCountryId(props.location.state.countryId);
     axios
              .get(Urls.brandName+'?country_id='+props.location.state.countryId+'&token='+token)
              .then((response1) => {
                if(response1.data.msg='Success'){
                  setBrandNameList(response1.data.vehicle_brand)

                }
               
                console.log(response1);
               
                
              })
              .catch((error) => {
                console.log(error);
              });
              axios
              .get(Urls.model+'?token='+token)
              .then((response2) => {
                if(response2.data.msg='Success'){
                  setModelList(response2.data.vehicle_year)
                 

                }
               
                console.log(response2);
               
                
              })
              .catch((error) => {
                console.log(error);
              });

  },[])
  const brandNameChange = (e) =>{
    console.log(JSON.parse(e.target.value).name);
    const selObj = JSON.parse(e.target.value)
    setBrandId(selObj.id);
    setBrandName(selObj.name)
    axios
    .get(Urls.vehicleName+'?country_id='+props.location.state.countryId+'&token='+token+'&brand_name='+selObj.id)
    .then((response1) => {
      console.log(response1);
      if(response1.data.msg='Success'){
        setVehicleList(response1.data.vehicle_name)
       

      }
     
      console.log(response1);
     
      
    })
    .catch((error) => {
      console.log(error);
    });

  }
  const vehicleNameHandler = (e) =>{
    console.log(JSON.parse(e.target.value));
    const selObj = JSON.parse(e.target.value)
    setVehicleId(selObj.id);
    setVehicleName(selObj.brand_vehicle_eng_name)
    setVehicleSize({id:selObj.vehicle_size_id,name:'test'})
    setProductType({id:selObj.product_type_id,name:'test'})
   

  }
  const modelChnge = (e) =>{
    setModel(e.target.value)

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
                  <option value={JSON.stringify(item)} key={index} >{item.name}</option>

                )
              })}
            
            
            </select>
            <div className="bramdName">Vehicle Name</div>

            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
              onChange={vehicleNameHandler}
             
            >
              <option>Select Vehicle name</option>
             {vehicleList.map((item,index)=>{
              return(
                <option key={index} value={JSON.stringify(item)} >{item.brand_vehicle_eng_name}</option>
              )
             })}
            </select>
            <div className="bramdName">Model </div>

            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
              onChange={modelChnge}
            >
              <option>Select Model</option>
             {modelList.map((item,index)=>{
              return(
                <option key={index} value={item.year_code}>{item.year_code}</option>
              )
             })}
            </select>
            <h5 className="seatLay">Select Seat Layout</h5>
            <div className="row">
              <div className="col-md-4 layBox">
                <img src={Seat} alt='seat' className="img-fluid"/>
                <p>WF-1573<br/>
                2019-23<br/>
                NO.1  BT.-1<br/>
                NO.1</p>

              </div>
              <div className="col-md-4 layBox">
                <img src={Seat} alt='seat' className="img-fluid"/>
                <p>WF-1573<br/>
                2019-23<br/>
                NO.1  BT.-1<br/>
                NO.1</p>

              </div>
 
              

            </div>
            <div className='Submit'>Next&nbsp;&nbsp;&nbsp;<AiOutlineArrowRight color="#FCFCFD" size={20}/></div>
          </div>
        </div>
        <div className="col-md-3">
          <ProductDetail BrndName={brandName} vehName={vehcleName} model={model} 
          vehSize={vehicleSize.name}
          prodType={productType.name}/>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default ProductConfigStage1
