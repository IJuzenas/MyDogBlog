import HTTP from "./index"
import {useMutation, useQuery} from "react-query";


// http://localhost:8080/users/all
const getUsers = () => HTTP.get("users/all")
    .then(response =>
    new Promise ((resolve) => {
        setTimeout( () => resolve(response.data), 2000)
    }))

// http://localhost:8080/products/create
const createUser = (user) => HTTP.post("users/create", user)

const createUserJson = (user) => HTTP.post("users/create1", {user})
const changeUser = (user) => HTTP.put("users/update", {user})

// const deleteUser = (id) => HTTP.delete("users/delete", id)
const useUserElement = (config) => {
    const mutation = useMutation(createUserJson, config)
    return mutation.mutateAsync
}

const useUsers = () => {
    const context = useQuery('getUsers', getUsers)
    return {...context, users: context.data}}

export {getUsers, createUser, useUsers, useUserElement, changeUser}
