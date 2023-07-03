import { useFormik } from 'formik'
import React from 'react'
import validationSchema from '../validations/Validation';

const Form2 = () => {
   const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
    initialValues: {
        name: ''
    },
    onSubmit: values => {
        alert("gönderildi")
    },
    validationSchema
   });

   console.log(errors)
      
    return (
        <div className='container my-5'>
            <div className="col-md-5 mx-auto">
                <div className="card">
                    <div className="card-header">Todos</div>
                    <form onSubmit={handleSubmit}  onReset={handleReset} className='card-body'>
                        <div class="input-group mb-3">
                            <input 
                                value={values.name} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                type="text" 
                                name='name' 
                                class="form-control" 
                                placeholder="Add a new item" 
                            />
                            <button class="btn btn-outline-primary rounded-end" type="submit">Button</button>
                            {errors.name && touched.name && (
                                <div className='w-100 text-danger'>{errors.name}</div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form2