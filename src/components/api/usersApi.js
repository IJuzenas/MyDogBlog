import HTTP from "./index"
import {useQuery} from "react-query";


// http://localhost:8080/users/all
const getUsers = () => HTTP.get("users/all")
    .then(response =>
    new Promise ((resolve) => {
        setTimeout( () => resolve(response.data), 4000)
    }))

// http://localhost:8080/products/create
const createUser = (user) => HTTP.post("users/create", user)

const useUsers = () => {
    const context = useQuery('getUsers', getUsers)
    return {...context, users: context.data}}

export {getUsers, createUser, useUsers}
