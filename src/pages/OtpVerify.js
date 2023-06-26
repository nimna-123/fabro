import React,{useState,useEffect} from "react";
import ForgotLay from '../components/Login/ForgotLay';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Classes from '../components/Login/Auth.module.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import {ClipLoader} from 'react-spinners'
import axios from "axios";
import * as Urls from '../Urls'



import OtpInput from 'react-otp-input';
const OtpVerify = (props) =>{
    const history = useHistory()
    const [loading,setLoading] = useState(false)
    const[otp,setOtp] = useState('')
    const[error,setError] = useState('')
    const[email,setEmail] = useState('')
    useEffect(()=>{
      setEmail(props.location.state.email)
     

    },[])
    const handleChange = (otp) =>{
       
            setOtp(otp)
           
    }
    const handleSubmit = () =>{
      setLoading(true)
      if(otp.length !== ''){
        const body = {
          "email": email,
           "Otp": otp
        }
       
      
        setError('')
        axios
        .post(Urls.verifyOtp, body)
        .then((response2) => {
         
          setLoading(false)
          if(response2.data.results.message === 'Otp sent successfully'){
            history.push({pathname:'/change_password',state:{email:email,key:response2.data.reults.key}})

          }
         
        })
        .catch((error) => {
          setLoading(false)
         
          if(error.response.data.results.message === 'Otp verification failed'){
            setError('Otp verification failed')
           

          }
        });
    }
    else{
        setError('Please enter valid otp')
    }
        
    }
    const resendOtp = () =>{

    }
    const backLogin = () =>{
      history.push('/')
    }



      
    return(
        <ForgotLay head='Code Verification' 
        subHead={'Please enter One Time Password sent to '+email}
        >
             {loading?
                <div className='d-flex justify-content-center align-items-center pad-20'><ClipLoader color="#300508" /></div>: 
                <>
                 <div className={Classes.ErrorMsg} style={{textAlign:'center'}}>{error}</div>
                <div className='d-flex justify-content-center align-items-center pad-20'>
               
                <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "0.5px solid #8B8B8B",
                  borderRadius: "8px",
                  width: "54px",
                  height: "54px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue"
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none"
                }}
              />
              </div>
              <div className='d-flex justify-content-center align-items-center pad-20'>
               <div className={Classes.Verify} onClick={handleSubmit} style={{marginTop:'15px'}}>
                Send
              </div>
              </div>
              <p className={Classes.Back}>Didn’t receive OTP? <span style={{color:'#926433',fontWeight:600}} onClick={resendOtp}>Resend OTP</span></p>
              <p className={Classes.Back} onClick={backLogin}><AiOutlineArrowLeft color="#838383" size={20}/>Back to Sign-in</p>
              </>

}
            </ForgotLay>

    )
}
export default OtpVerify