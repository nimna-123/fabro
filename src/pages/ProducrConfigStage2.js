import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Material from "../assets/images/material.png";
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as Urls from "../Urls";

const ProductConfigStage2 = (props) => {
  const token = localStorage.getItem("fabroToken");
  const [materialList, setMaterialList] = useState([]);
  const [matSpecList, setMaterialSpecList] = useState([]);
  const [material, setMaterial] = useState("");
  const [specName, setSpecName] = useState("");
  const [pColor,setPcolor] = useState([])
  const [sColor,setScolor] = useState([])
  const [designList,setDesignList] = useState([])
  const [perforation,setPerforation] = useState([])
  const [subDesignList,setSubDesignList] = useState([])
  const [design,setDesign] = useState('')
  const [subDesign,setSubDesign] = useState('')
  const [matSpecCode,setMatSpecCode] = useState()
  const [foamCode,setFoamCode] = useState('')
  const [perforationName,setPerforationname] = useState('')
  const [foamList,setFoamList] = useState([])
  const [foam,setFoam] = useState('')
  const [linearList,setLinear] = useState([])
  const [backLiner,setBackLiner] = useState('')
  const [pColors,setPColors] = useState('')
  const [backCode,setBackCode] = useState('')
  const [designCode,setDesinCode] = useState('')
  const [perfoCode,setPerfCode] = useState('')
  const [pCode,setPCode] = useState('')
  const [sCode,setSCode] = useState('')
  const [moq,setMoq] = useState('')
  const [sku,setSku] = useState('')
  const history = useHistory()
 
  useEffect(() => {
    console.log(props.location.state.data);
    axios
      .get(
        Urls.material +
          "?country_id=" +
          "192" +
          "&token=" +
          token +
          "&product_type=" +
          props.location.state.data.pType
      )
      .then((response1) => {
        if ((response1.data.msg = "Success")) {
          setMaterialList(response1.data.data);
        }

        console.log(response1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const materialSel = (material) => {
    setMaterial(material);
    axios
      .get(
        Urls.matSpec +
          "?country_id=" +
          "192" +
          "&token=" +
          token +
          "&product_type=" +
          props.location.state.data.pType
      )
      .then((response1) => {
        if ((response1.data.msg = "Success")) {
          setMaterialSpecList(response1.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const materialSpecChange = (e) => {
    console.log(JSON.parse(e.target.value).name);
    setSpecName(JSON.parse(e.target.value).name);
    setMatSpecCode(JSON.parse(e.target.value).material_spec_code)
    axios
    .get(
      Urls.primary +
        "?token=" +
        token
    )
    .then((response1) => {
      setPcolor(response1.data.data)
     
    })
    .catch((error) => {
      console.log(error);
    });
  };
  const pColorHandler = (pColor) =>{
    setPColors(pColor.colour);
    setPCode(pColor.colour_code)
    setMoq(pColor.moq)
    axios
    .get(
      Urls.secondary +
        "?token=" +
        token
    )
    .then((response1) => {
      setScolor(response1.data.data)
     
    })
    .catch((error) => {
      console.log(error);
    });

  }
  const sColorHandler = (sColor) =>{
    console.log(sColor.colour_code);
    setSCode(sColor.colour_code);
    axios
    .get(
      Urls.design +
        "?token=" +
        token
    )
    .then((response1) => {
      setDesignList(response1.data.data)
     
    })
    .catch((error) => {
      console.log(error);
    });

  }
  const designHandler = (designs) =>{
    console.log('hgj',JSON.parse(designs));
    setDesign(JSON.parse(designs).name)
    setDesinCode(JSON.parse(designs).design_code)
    axios
    .get(
      Urls.subDesign +
        "?token=" +
        token
    )
    .then((response1) => {
      setSubDesignList(response1.data.data)
     
    })
    .catch((error) => {
      console.log(error);
    });


  }
  const subdesignHandler = (subDesign) =>{
    setSubDesign(subDesign.name)
    axios
    .get(
      Urls.perforation +
        "?token=" +
        token
    )
    .then((response1) => {
      setPerforation(response1.data.seat_perforation)
      
     
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const perforationChange = (e)=>{
    setPerfCode(JSON.parse(e.target.value).perforation_code)
    
    setPerforationname(JSON.parse(e.target.value).name)
    axios
    .get(
      Urls.foramType +
        "?token=" +
        token+
      '&product_type='+props.location.state.data.pType+'&country_id=192'
    )
    .then((response1) => {
     setFoamList(response1.data.data)
      
     
    })
    .catch((error) => {
      console.log(error);
    });

  }
  const foamtypeChange = (e) =>{
    setFoam(JSON.parse(e.target.value).name)
    setFoamCode(JSON.parse(e.target.value).foam_code)
    axios
    .get(
      Urls.backLinear +
        "?token=" +
        token+
      '&product_type='+props.location.state.data.pType+'&country_id=192'+'&product_type='+props.location.state.data.pType
    )
    .then((response1) => {
          setLinear(response1.data.data)
      
     
    })
    .catch((error) => {
      console.log(error);
    });


  }
  const backlineChange = (e) =>{
    setBackLiner(JSON.parse(e.target.value).name)
    setBackCode(JSON.parse(e.target.value).back_liner_type_code)
    let sku = props.location.state.data.bvCode+'-'+props.location.state.data.seatLayCode+matSpecCode+foamCode+backCode+'-'+designCode+perfoCode+pCode+sCode
   
    setSku(sku)
  }
  const nextHandler = () =>{
    history.push({pathname:'/config3',state:{data:sku}})
  
  }
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
        <div className="col-md-8">
          <div className="FormBox">
            <div className="material">Material</div>

            <div className="row">
              {materialList.map((item, index) => {
                return (
                  <div className="col-md-1 materials " key={index}>
                    <img
                      src={`data:image/jpeg;base64,${item.image_url}`}
                      alt="material"
                      className="imgBase"
                      onClick={() => materialSel(item.material_code)}
                    />
                  </div>
                );
              })}

              {matSpecList.length !==0&&<div className="bramdName">Material Spec</div>}

              {matSpecList.length !==0&&<select
                className="form-select form-select-md mb-3"
                aria-label=".form-select-lg example"
                style={{ marginLeft: "5px" }}
                onChange={materialSpecChange}
              >
                <option>Select Material Spec</option>
                {matSpecList.map((item, index) => {
                  return (
                    <option value={JSON.stringify(item)} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>}
             {pColor.length !== 0 && <div className="bramdName">Primary Colour</div>} 
                <div className="row">
                  {pColor.map((item,index)=>{
                    return(
                      <div className="col-md-2 clrImg" key={index} onClick={()=>pColorHandler(item)}>
                          <img
                      src={`data:image/jpeg;base64,${item.image_url}`}
                      alt="material"
                      className="materialImg imgBase"
                     
                    />
                      <p className="color">{item.name}</p>
      
                    </div>

                    )
                  })}

              </div>
              {sColor.length !== 0 && <div className="bramdName">Secondary Colour</div>} 
              <div className="row">
              {sColor.map((item,index)=>{
                    return(
                      <div className="col-md-2 clrImg" key={index} onClick={()=>sColorHandler(item)}>
                          <img
                      src={`data:image/jpeg;base64,${item.image_url}`}
                      alt="material"
                      className="materialImg imgBase"
                     
                      
                    />
                      <p className="color">{item.name}</p>
      
                    </div>

                    )
                  })}
                </div>
                {designList.length !== 0 && <div className="bramdName">Design</div>} 
              <div className="row">
              {designList.map((item,index)=>{
                    return(
                      <div className="col-md-2 clrImg" key={index} onClick={()=>designHandler(JSON.stringify(item))}>
                        <img src={`data:image/jpeg;base64,${item.image_url}`} alt='design' className="imgBase"/>
                      <p className="color">{item.name}</p>
      
                    </div>

                    )
                  })}
                </div>
                {subDesignList.length !== 0 && <div className="bramdName">Sub Design</div>} 
              <div className="row">
                
              {subDesignList.map((item,index)=>{
                    return(
                      <div className="col-md-2 clrImg" key={index} onClick={()=>subdesignHandler(item)}>
                        <img src={`data:image/jpeg;base64,${item.image_url}`} className="imgBase"/>
                      <p className="color">{item.name}</p>
      
                    </div>

                    )
                  })}
                </div>
                <div className="row">
                {perforation.length!==0&&<div className="bramdName">Perforation</div>}
                {perforation.length!==0&&<select
                className="form-select form-select-md mb-3"
                aria-label=".form-select-lg example"
                style={{ marginLeft: "5px" }}
                onChange={perforationChange}
              >
                <option>Perforation</option>
                {perforation.map((item, index) => {
                  return (
                    <option value={JSON.stringify(item)} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>}
                  </div>
                  <div className="row">
                {foamList.length!==0&&<div className="bramdName">Foam Type</div>}
                {foamList.length!==0&&<select
                className="form-select form-select-md mb-3"
                aria-label=".form-select-lg example"
                style={{ marginLeft: "5px" }}
                onChange={foamtypeChange}
              >
                <option>Foam Type</option>
                {foamList.map((item, index) => {
                  return (
                    <option value={JSON.stringify(item)} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>}
                  </div>
                  <div className="row">
                {linearList.length!==0&&<div className="bramdName">Back Liner Type</div>}
                {linearList.length!==0&&<select
                className="form-select form-select-md mb-3"
                aria-label=".form-select-lg example"
                style={{ marginLeft: "5px" }}
                onChange={backlineChange}
              >
                <option>Back Liner Type</option>
                {linearList.map((item, index) => {
                  return (
                    <option value={JSON.stringify(item)} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>}
                  </div>
                  
             
             
            </div>

            <div className="Submit" onClick={nextHandler}>
              Next&nbsp;&nbsp;&nbsp;<AiOutlineArrowRight color="#FCFCFD" size={20}/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ProductDetail
            BrndName={props.location.state.data.bName}
            vehName={props.location.state.data.vName}
            model={props.location.state.data.model}
            vehSize={props.location.state.data.vSize}
            prodType={props.location.state.data.pType}
            seatLay={props.location.state.data.seat}
            mat={material}
            matSpec={specName}
            design={design}
            subDesign={subDesign}
            prefor={perforationName}
            foamType={foam}
            blt={backLiner}
            color={pColors}
            moq={moq}
            sku={sku}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default ProductConfigStage2;
