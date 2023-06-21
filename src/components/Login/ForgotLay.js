import React,{useState} from 'react'
import Classes from './Auth.module.css'
import Logo from "../../assets/images/logo.svg";


const ForgotLay = (props) =>{

    return(
        <div className={Classes.BackGrnd}>
            <div className={Classes.Layout}>
                <div className='d-flex justify-content-center'>
                <img src={Logo} alt="logo" />
               

                </div>
                <h3>{props.head}</h3>
                <p>{props.subHead}</p>
                <div className={Classes.FormPartFor}>
            
       
           {props.children}
           
          </div>
        </div>

            </div>


      

    )
}
export default ForgotLay