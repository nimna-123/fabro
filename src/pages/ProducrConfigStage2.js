import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLay/DashboardLay";
import ConfigStages from "../components/ConfigStages/ConfigStages";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Material from "../assets/images/material.png";
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
  const [subDesignList,setSubDesignList] = useState([])
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
    console.log(pColor);
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
    console.log(sColor);
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
  const designHandler = (design) =>{
    console.log(design);
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
              {materialList.map((item, index) => {
                return (
                  <div className="col-md-1 materials " key={index}>
                    <img
                      src={item.image_url}
                      alt="material"
                      className="materialImg"
                      onClick={() => materialSel(item.material_code)}
                    />
                  </div>
                );
              })}

              <div className="bramdName">Material Spec</div>

              <select
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
              </select>
             {pColor.length !== 0 && <div className="bramdName">Primary Colour</div>} 
                <div className="row">
                  {pColor.map((item,index)=>{
                    return(
                      <div className="col-md-2 clrImg" key={index} onClick={()=>pColorHandler(JSON.stringify(item))}>
                      <p className="color">{item.name}</p>
      
                    </div>

                    )
                  })}

              </div>
              {sColor.length !== 0 && <div className="bramdName">Secondary Colour</div>} 
              <div className="row">
              {sColor.map((item,index)=>{
                    return(
                      <div className="col-md-2 clrImg" key={index} onClick={()=>sColorHandler(JSON.stringify(item))}>
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
                      <p className="color">{item.name}</p>
      
                    </div>

                    )
                  })}
                </div>
                {subDesignList.length !== 0 && <div className="bramdName">Sub Design</div>} 
              <div className="row">
              {subDesignList.map((item,index)=>{
                    return(
                      <div className="col-md-2 clrImg" key={index}>
                      <p className="color">{item.name}</p>
      
                    </div>

                    )
                  })}
                </div>
             
             
            </div>

            <div className="Submit">
              Add to Cart&nbsp;&nbsp;&nbsp;
              <AiOutlineShoppingCart color="#FCFCFD" size={25} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ProductDetail
            BrndName={props.location.state.data.bName}
            vehName={props.location.state.data.vName}
            model={props.location.state.data.model}
            vehSize={props.location.state.data.vSize}
            prodType={props.location.state.data.pType}
            seatLay={props.location.state.data.seat}
            mat={material}
            matSpec={specName}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default ProductConfigStage2;
