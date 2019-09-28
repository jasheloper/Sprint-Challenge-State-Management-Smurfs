import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import "../App.css"



const AddSmurfForm = ({ errors, touched, values, status }) => {
   const [smurf, setSmurf] = useState ([]);


   useEffect(() => {
      if (status) {
         setSmurf([...smurf, status]);
      }
  }, [status]);


  return(

 <>
  
  <Form>

  <Field
                    className="field"
                    component="input"
                    type="text"
                    name="name"
                    placeholder="Smurf name"
                />


<Field
                    className="field"
                    component="input"
                    type="text"
                    name="age"
                    placeholder="Age"
                />



<Field
                    className="field"
                    component="input"
                    type="text"
                    name="height"
                    placeholder="Height"
                />

  </Form>

 <br />

 {smurf.map(x => {

    return (<>{x.name}</>)
    
 })}

</>
  )
}





const formikHOC = withFormik({
   mapPropsToValues({ name, age, height }) {
       return {
           name: name || "",
           age: age || "",
           height: height || "",

       };
      },


      handleSubmit(values, { setStatus, resetForm }) {
            axios
               .post("http://localhost:3333/smurfs", values)
               .then(res => {
                  console.log("handleSubmit: then: res: ", res);
                  setStatus(res.data);
                  resetForm();
               })
               .catch(err => console.error("handleSubmit: catch: err: ", err));
}
});

const UserFormWithFormik = formikHOC(AddSmurfForm);
export default UserFormWithFormik;