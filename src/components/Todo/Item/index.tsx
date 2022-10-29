import React from 'react'
import { todoApi } from './../../../services'
interface IProp {
    title: string
    description: string,
    id: string
    refetch: () => void
}
export const Item: React.FC<IProp> = ({ description, title, id, refetch }) => {
    const [deleteTodo] = todoApi.useDeleteTodoMutation()
    const handleClick = async () => {
        await deleteTodo(id)
        refetch()
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <div>
                <h2>{title}</h2>
                <h5>{description}</h5>
            </div>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}