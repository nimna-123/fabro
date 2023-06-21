import React from "react";
import Classes from "./Auth.module.css";
import Logo from "../../assets/images/logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import * as Urls from "../../Urls";
import { useHistory } from "react-router-dom";

const LoginComp = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Enter your email"),
      password: Yup.string()
        // .min(6, "Password should be at least 6 characters ")
        .required("Enter your password"),
    }),
    onSubmit: (values, onSubmitprops) => {
      let emailTrim = values.email;
      let passwordTrim = values.password.trim();
      const inputs = { email: emailTrim, password: passwordTrim };
      axios
        .post(Urls.login, inputs)
        .then((response1) => {
          if (response1.data.results.message === "Successfully logged in") {
            const authBody = {
              login: "admin",
              password: "admin",
              db: "fabro_2023",
            };
            axios
              .post(Urls.auth, authBody)
              .then((response2) => {
                localStorage.setItem("fabroToken", response2.data.result.token);
                history.push({
                  pathname: "/config1",
                  state: {
                    userId: response1.data.results.odoo_id,
                    countryId: response1.data.results.data.country_id,
                  },
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(inputs);

      onSubmitprops.resetForm();
    },
  });
  const forgotPasswd = () =>{
    history.push('/forgot_password')
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${"col-md-6"} ${Classes.SideBg}`}>
          <div className={Classes.LogHead}>
            <h3>
              Redefining <br />
              Identity
              <br />
              Redefining
              <br />
              Luxury
            </h3>
          </div>
        </div>
        <div className={`${"col-md-6"} ${Classes.RightBg}`}>
          <div className={Classes.FormPart}>
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="logo" />
            </div>
            <h3>Sign In</h3>
            <form autoComplete="off">
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
              <label className={Classes.Label}>Password</label>
              <br />
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className={Classes.Input}
                placeholder="Enter your password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className={Classes.ErrorMsg}>{formik.errors.password}</div>
              )}
              <div className={Classes.Space}>
              <div className={`${"d-flex"} ${Classes.check}`}>
                <input type="checkbox" />
                <label>&nbsp;&nbsp;Remember Me</label>
              </div>
              <p onClick={forgotPasswd}>Forgot Password?</p>
              </div>

              <div className={Classes.Submit} onClick={formik.handleSubmit}>
                Login
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginComp;
