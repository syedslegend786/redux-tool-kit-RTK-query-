import React from 'react'
import { Item as IItem } from './../Item'
import { todoApi } from '../../../services'
export const Item = () => {
    const { data, isLoading, error, isSuccess, refetch } = todoApi.useFetchAllTodosQuery({})
    const [createTodo] = todoApi.useCreateTodoMutation()
    if (isLoading) {
        return <div>Loading...</div>
    }
    const handleClick = async () => {
        await createTodo({
            title: "first todo",
            description: "first my long description"
        })
        refetch();
    }
    return (
        <div>
            <button onClick={handleClick}>add todo</button>

            {
                isSuccess &&
                    data.length === 0 ?
                    <div>no data</div>
                    : data.map((val: { title: string, description: string, _id: string }, index: number) => (
                        <IItem refetch={refetch} id={val._id} description={val.description} title={val.title} key={index} />
                    ))
            }
        </div>
    )
}