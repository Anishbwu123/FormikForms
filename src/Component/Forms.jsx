import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './App.css'
const Forms = () => {
    const formikobj=useFormik({
        initialValues:{
            name:'',
            pass:'',
            email:'',
            username:'',
            cp:''
        },
        validationSchema:Yup.object({
            name:Yup.string()
            .required('**Name is required')
            .min(3,'**Name must be at least 3 characters'),
            pass:Yup.string()
            .required('Password is required')
            .min(6,'**Password must be at least 6 characters')
            .matches(/[A-Z]/,"**OneUppercase")
            .matches(/[a-z]/,"**One Lowercase"),
            email:Yup.string()
            .required('')
            .email("**invalid-mail"),
            username:Yup.string()
            .required('**Required')
            .min(3,'**Username must be at least 3 characters'),
            cp:Yup.string()
            .required('**Required')
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <>
    <form onSubmit={formikobj.handleSubmit}>
    <div id="main">
  <div class="h-tag">
  <h2>Create Your Account</h2>
  </div>

  <div class="login">
  <table cellspacing="2" align="center" cellpadding="8" border="0">
  <tr>
  <td align="right">Enter Name :</td>
  <td><input type="text" placeholder="Enter user here" name='name' style={{paddingTop:"10px",paddingRight:"10px",borderRadius:"30px", paddingBottom:"10px"}}value={formikobj.values.name} onChange={formikobj.handleChange} />
  {formikobj.errors.name && <div style={{color:'red'}}><em>{formikobj.errors.name}</em></div>}
  </td>
  </tr>
  <tr>
  <td align="right">Enter Email ID :</td>
  <td><input type="text" placeholder="Enter Email ID here" name='email' style={{paddingTop:"10px",paddingRight:"10px",borderRadius:"30px", paddingBottom:"10px"}}value={formikobj.values.email} onChange={formikobj.handleChange}/>
  {formikobj.errors.email && <div style={{color:'red'}}><em>{formikobj.errors.email}</em></div>}
  </td>
  </tr>
  <tr>
  <td align="right">Enter Username :</td>
  <td><input type="text" placeholder="Enter Username here" name='username'style={{paddingTop:"10px",paddingRight:"10px",borderRadius:"30px", paddingBottom:"10px"}} value={formikobj.values.username} onChange={formikobj.handleChange} />
  {formikobj.errors.username && <div style={{color:'red'}}><em>{formikobj.errors.username}</em></div>}
  </td>
  </tr>
  <tr>
  <td align="right">Enter Password :</td>
  <td><input type="password" placeholder="Enter Password here"  name='pass' style={{paddingTop:"10px",paddingRight:"10px",borderRadius:"30px", paddingBottom:"10px"}}value={formikobj.values.pass} onChange={formikobj.handleChange}/>
  {formikobj.errors.pass && <div style={{color:'red'}}><em>{formikobj.errors.pass}</em></div>}
  </td>
  </tr>
  <tr>
  <td align="right">Enter Confirm Password :</td>
  <td><input type="password" placeholder="Enter Password here" name='cp' style={{paddingTop:"10px",paddingRight:"10px",borderRadius:"30px", paddingBottom:"10px"}}value={formikobj.values.cp} onChange={formikobj.handleChange} />
  {formikobj.errors.cp && <div style={{color:'red'}}><em>{formikobj.errors.cp}</em></div>}
  </td>
  </tr>
  <tr>
  <td></td>
  <td>
    <button className='btn btn-success m-2' type="submit">Submit</button>
    <button className='btn btn-danger'onClick={formikobj.handleReset}>Reset</button>
  </td>
  </tr>
  </table>
  </div>
  
  </div>
    </form>
    </>
       
  )
}

export default Forms
