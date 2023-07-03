import { Formik, useFormik } from 'formik'
import React from 'react'

const Form2 = () => {

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

      
    return (
        <div className='container'>
            <div className="col-md-5 mx-auto">
                <div className="card">
                    <div className="card-header">Todos</div>
                    <form onSubmit={handleSubmit} className='card-body'>
                        <div class="input-group mb-3">
                            <input value={values.name} onChange={handleChange} type="text" name='name' class="form-control" placeholder="Add a new item" />
                            <button class="btn btn-outline-primary" type="submit">Button</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form2