import { useEffect, useState } from 'react'
import Form from './Form';

const Todos = () => {
    const [todos, setTodos] = useState([])

   useEffect(() => {
    getTodosFromLS()
   }, [])
   
   const getTodosFromLS = () => {
    const todosLS = JSON.parse(localStorage.getItem("todos"))
    if(todosLS) 
        setTodos(todosLS)
   }

    return (
        <div className='container my-5'>
            <div className="col-md-5 mx-auto">
                <div className="card">
                    <div className="card-header">Todos</div>
                    <div className="card-body">
                        <Form todos={todos} setTodos={setTodos} />

                        { todos.length > 0 && (
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { todos.map((todo, index) => (
                                        <tr key={index}>
                                            <td>{todo.name}</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm me-2"></button>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos