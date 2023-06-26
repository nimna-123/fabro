import React, { useState, useEffect } from "react";
import ForgotLay from "../components/Login/ForgotLay";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import * as Urls from "../Urls";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Classes from "../components/Login/Auth.module.css";
const Changepswd = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const history = useHistory();
  useEffect(() => {
    setEmail(props.location.state.email);
    setKey(props.location.state.key);
  }, []);
  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      new_password: Yup.string().required("Enter your new password"),
      // .min(6, "Password should be at least 6 characters "),
      confirm_password: Yup.string()
        .required("Re-enter your password")
        // .min(6, "Password should be at least 6 characters ")
        .oneOf([Yup.ref("new_password")], "Password do not match"),
    }),

    onSubmit: (values, onSubmitprops) => {
      let new_password = values.new_password;

      const body = {
        email: email,
        key: key,
        password: new_password,
      };

      setLoading(true);
      axios
        .post(Urls.changePswd, body)
        .then((response1) => {
          setLoading(false);
          if (response1.data.key === "SUCCESS") {
            history.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      onSubmitprops.resetForm();
    },
  });
  return (
    <ForgotLay head="Create New Password">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center pad-20">
          <ClipLoader color="#300508" />
        </div>
      ) : (
        <form autoComplete="off">
          <label className={Classes.Label}>Password</label>
          <br />
          <input
            type="password"
            name="new_password"
            value={formik.values.new_password}
            onChange={formik.handleChange}
            className={Classes.Input}
            placeholder="Enter your email id"
          />
          {formik.touched.new_password && formik.errors.new_password && (
            <div className={Classes.ErrorMsg}>{formik.errors.new_password}</div>
          )}
          <label className={Classes.Label}>Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            className={Classes.Input}
            placeholder="Enter your password"
          />
          {formik.touched.confirm_password &&
            formik.errors.confirm_password && (
              <div className={Classes.ErrorMsg}>
                {formik.errors.confirm_password}
              </div>
            )}

          <div
            className={Classes.Submit}
            onClick={formik.handleSubmit}
            style={{ marginTop: "15px" }}
          >
            Reset Password
          </div>
        </form>
      )}
    </ForgotLay>
  );
};
export default Changepswd;
