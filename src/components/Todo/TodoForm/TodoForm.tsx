import React, { useState } from 'react'
import { todoApi } from '../../../services'
import { IForm } from './types'

const TodoForm = () => {
    const [createTodo] = todoApi.useCreateTodoMutation()
    const [formData, setformData] = useState<IForm>({
        title: "",
        description: ""
    })
    const { title, description } = formData
    const handleSubmit = async () => {
        // const data = await createTodo(formData).unwrap()

        createTodo(formData).unwrap()
            .then(() => { })
            .catch((error) => console.log(error.data.message))

    }
    return (
        <div>
            <input value={title} onChange={(e) => setformData((prev) => ({ ...prev, title: e.target.value }))} placeholder='title...' type={'text'} />
            <input value={description} onChange={(e) => setformData((prev) => ({ ...prev, description: e.target.value }))} placeholder='description...' type={'text'} />
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default TodoForm
