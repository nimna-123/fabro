import React,{useState} from "react";
import ForgotLay from '../components/Login/ForgotLay';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Classes from '../components/Login/Auth.module.css'
import { useFormik } from "formik";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {ClipLoader} from 'react-spinners'
import * as Yup from "yup";
import axios from "axios";
import * as Urls from "../Urls";
const ForgotPaswd = () =>{
    const history = useHistory()
    const [loading,setLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
          email: "",
        
        },
        validationSchema: Yup.object({
          email: Yup.string().required("Enter your email"),
       
        }),
        onSubmit: (values, onSubmitprops) => {
          let emailTrim = values.email;
        
          const inputs = { email: emailTrim};
          setLoading(true)
          axios
            .post(Urls.sendOtp, inputs)
            .then((response1) => {
                setLoading(false)
                if(response1.data.results.data.message === 'Otp sent successfully'){
                  history.push('/verify_otp')
                }
                console.log(response1);
             
            })
            .catch((error) => {
              console.log(error);
            });
    
          console.log(inputs);
    
          onSubmitprops.resetForm();
        },
      });
      const backLogin = () =>{
        history.push('/')
      }
      
    return(
        <ForgotLay head='Forgot Password?' 
        subHead='Enter the email address associated with your account and we’ll send you a link to reset your password'
        >
             {loading?
                <div className='d-flex justify-content-center align-items-center pad-20'><ClipLoader color="#300508" /></div>: <form autoComplete="off">
              <label className={Classes.Label}>Email</label>
              <br />
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={Classes.Input}
                placeholder="Enter your email id"
              />
              {formik.touched.email && formik.errors.email && (
                <div className={Classes.ErrorMsg}>{formik.errors.email}</div>
              )}
            
             
              <div className={Classes.Submit} onClick={formik.handleSubmit} style={{marginTop:'15px'}}>
                Send
              </div>
              <p className={Classes.Back} onClick={backLogin}><AiOutlineArrowLeft color="#838383" size={20}/>Back to Sign-in</p>
            </form>
}
            </ForgotLay>

    )
}
export default ForgotPaswd