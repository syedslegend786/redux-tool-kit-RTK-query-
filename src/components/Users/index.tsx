import React, { useEffect } from 'react'
import { AsynFetchUsers } from './../../slices/users.slices'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
const Users = () => {
    const dispatch = useAppDispatch()
    const { users } = useAppSelector(s => s)
    useEffect(() => {
        dispatch(AsynFetchUsers())
        console.log('useeffect')
    }, [dispatch])
    if (users.loading) {
        return <div>Loading</div>
    }
    return (
        <div>
            <button>Fetch Users</button>
            {
                users.users.length > 0 &&
                users.users.map((val, index) => (
                    <div key={index}>{val}</div>
                ))
            }
        </div>
    )
}
export default Users