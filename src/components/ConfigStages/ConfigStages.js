import React from "react";
import Classes from "./ConfigStages.module.css";
import { FaAngleRight } from "react-icons/fa";
const ConfigStages = (props) => {
  return (
    <div className={Classes.StageLay}>
      <div className="d-flex pad-30 border">
        <div
          className={Classes.StageCount}
          style={{ backgroundColor: props.countBg1 }}
        >
          1
        </div>
        <p className={Classes.StageName} style={{ color: props.clr1 }}>
          &nbsp;&nbsp;Vehicle Details
        </p>
        <FaAngleRight color="#929292" size={20} style={{ marginTop: "7px" }} />
        <div
          className={Classes.StageCount}
          style={{ backgroundColor: props.countBg2 }}
        >
          2
        </div>
        <p className={Classes.StageName} style={{ color: props.clr2 }}>
          &nbsp;&nbsp;Design Specifications
        </p>
        <FaAngleRight color="#929292" size={20} style={{ marginTop: "7px" }} />
        <div
          className={Classes.StageCount}
          style={{ backgroundColor: props.countBg3 }}
        >
          3
        </div>
        <p className={Classes.StageName} style={{ color: props.clr3 }}>
          &nbsp;&nbsp;Order{" "}
        </p>
       
      </div>
      <div className={Classes.head}>{props.stageHead}</div>

    </div>
  );
};
export default ConfigStages;
