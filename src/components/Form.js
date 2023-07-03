import { useFormik } from 'formik'
import validationSchema from '../validations/Validation';
import { v4 as uuid } from 'uuid';

const Form = ({ todos, setTodos }) => {
   const { handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched } = useFormik({
    initialValues: {
        name: ''
    },
    onSubmit: values => {
        const newTodo = {
            id: uuid(),
            name: values.name,
            completed: false,
            created_at: new Date()
        }

        const newTodos = []

        newTodos.push(newTodo)
        todos.map(todo => {
            newTodos.push(todo)
        })

        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
        
        handleReset()
    },
    validationSchema
   });

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input 
                    value={values.name} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    type="text" 
                    name='name' 
                    className="form-control" 
                    placeholder="Add a new item" 
                />
                <button className="btn btn-outline-primary rounded-end" type="submit">Button</button>
                {errors.name && touched.name && (
                    <div className='w-100 text-danger'>{errors.name}</div>
                )}
            </div>
        </form>
    )
}

export default Form