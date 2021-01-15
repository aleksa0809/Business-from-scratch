import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react'
import {Context} from './BasketContext'

export default function(props){

    const basketContext = useContext(Context)
    const {setBasket} = basketContext

    const SignupSchema = Yup.object().shape({

       firstName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),

       lastName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),

       email: Yup.string().email('Invalid email').required('Required'),
    })

    return (
        <Formik

           initialValues={{
             firstName: '',
             lastName: '',
             email: '',
           }}

           validationSchema={SignupSchema}

           onSubmit={values => {
                console.log(values);
                window.location = '#/congrats'                
                setBasket([])
                localStorage.removeItem('basket')
           }}

         >

           {({ errors, touched }) => (

             <Form>

               <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label><b>First name:</b></label>
                      </div>
                      <div className="col-3">
                        <Field name="firstName" />
                        {errors.firstName && touched.firstName ? ( <div>{errors.firstName}</div> ) : null}
                      </div>
                    </div>
               </div>

               <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label><b>Last name:</b></label>
                      </div>
                      <div className="col-3">
                         <Field name="lastName" />
                         {errors.lastName && touched.lastName ? ( <div>{errors.lastName}</div> ) : null}
                      </div>
                    </div>
               </div>

               <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label><b>Last name:</b></label>
                      </div>
                      <div className="col-3">
                           <Field name="email" type="email" />
                           {errors.email && touched.email ? <div>{errors.email}</div> : null}
                      </div>
                    </div>
               </div>

               <hr />
               <div className="basket-bottom">
                    <button className="btn btn-primary" type="submit">
                        Please confirm your order
                    </button>
               </div>

             </Form>

           )}

        </Formik>
    )
}

/*
 import React from 'react';

 import { Formik, Form, Field } from 'formik';

 import * as Yup from 'yup';

 

 const SignupSchema = Yup.object().shape({

   firstName: Yup.string()

     .min(2, 'Too Short!')

     .max(50, 'Too Long!')

     .required('Required'),

   lastName: Yup.string()

     .min(2, 'Too Short!')

     .max(50, 'Too Long!')

     .required('Required'),

   email: Yup.string().email('Invalid email').required('Required'),

 });

 

 export const ValidationSchemaExample = () => (

   <div>

     <h1>Signup</h1>

     <Formik

       initialValues={{

         firstName: '',

         lastName: '',

         email: '',

       }}

       validationSchema={SignupSchema}

       onSubmit={values => {

         // same shape as initial values

         console.log(values);

       }}

     >

       {({ errors, touched }) => (

         <Form>

           <Field name="firstName" />

           {errors.firstName && touched.firstName ? (

             <div>{errors.firstName}</div>

           ) : null}

           <Field name="lastName" />

           {errors.lastName && touched.lastName ? (

             <div>{errors.lastName}</div>

           ) : null}

           <Field name="email" type="email" />

           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <button type="submit">Submit</button>

         </Form>

       )}

     </Formik>

   </div>

 );
            <Form>
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label><b>First name:</b></label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="firstName"/>
                      </div>
                      <div className="col-3">
                        <label><b>Last name:</b></label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="lastName"/>
                      </div>
                    </div>  
                </div>  
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label><b>E-mail:</b></label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="email"/>
                      </div>
                      <div className="col-3">
                        <label>Telephone:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="telephone"/>
                      </div>
                    </div>  
                </div>  
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label>Street:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="street"/>
                      </div>
                      <div className="col-3">
                        <label>Number:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="number"/>
                      </div>
                    </div>  
                </div>  
                <div className="form-group">
                    <div className="row">  
                      <div className="col-3">
                        <label>Postal code:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="postalCode"/>
                      </div>
                      <div className="col-3">
                        <label>City:</label>
                      </div>
                      <div className="col-3">
                        <input className="form-control" name="city"/>
                      </div>
                    </div>  
                </div>  
                <div className="showcase-bottom">
                   <button type="submit">Submit</button>
                </div>  
            </Form>
 */
