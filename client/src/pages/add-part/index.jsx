import React from 'react'
import { Formik, Form, Field } from 'formik';

import './index.scss'
import { AddProductSchema } from './schema';
import axios from 'axios';
const AddProduct = () => {
  return (
    <div className='addPart'>
     <h1>ADD NEW PRODUCT</h1>
     <Formik
       initialValues={{
        catacory:'',
        title:'',
        name:'',
        price:'',
        img:'',
       }}
       validationSchema={AddProductSchema}
       onSubmit={(values ,{resetForm})=> {
        axios.post('http://localhost:8000/products',values)
         resetForm()
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="catacory" placeholder='Enter yout product catacory'/>
           {errors.catacory && touched.catacory ? (
             <div className='error'>{errors.catacory}</div>
           ) : null}
           <br /><br />

           <Field name="title" placeholder='Enter yout product title'/>
           {errors.title && touched.title ? (
             <div className='error'>{errors.title}</div>
           ) : null}
           <br /><br />
           
           <Field name="name" placeholder='Enter yout product name'/>
           {errors.name && touched.name ? (
             <div className='error'>{errors.name}</div>
           ) : null}
           <br /><br />

           <Field name="price" placeholder='Enter yout product price'/>
           {errors.price && touched.price ? (
             <div className='error'>{errors.price}</div>
           ) : null}
           <br /><br />

           <Field name="img" placeholder='Enter yout product image (Just link and 255x271 px !!!'/>
           {errors.img && touched.img ? (
             <div className='error'>{errors.img}</div>
           ) : null}
          <br /><br />
          
           <button type="submit" className='submitBtn'>Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default AddProduct