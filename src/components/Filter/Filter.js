import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import Classes from './Filter.module.css'
const Filter = () =>{
    return(
        <div className={Classes.filter_section}>
        <div className='filter'>
            <div className='tabFilter'>Filter<FaAngleDown/></div>
        </div>
     
        <div className={Classes.myDIV}>
            <div className={Classes.status}>Status</div>
            <div className={Classes.status_list}>
                <div className={Classes.status_b1}>
                    <label for="">Select All</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                </div>
                <div className={Classes.status_b1}>
                    <label for="">Drafted</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                </div>
                <div className={Classes.status_b1}>
                    <label for="">Dispatched</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                </div>
                <div className={Classes.status_b1}>
                    <label for="">Processing</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                </div>
                <div className={Classes.status_b1}>
                    <label for="">Completed</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                </div>
                <div className={Classes.status_b2}>
                    <button className={Classes.clear}>Clear All</button>
                    <button className={Classes.apply}>Apply</button>
                </div>
            </div>
        </div>
      
    </div>

    )
}
export default Filter