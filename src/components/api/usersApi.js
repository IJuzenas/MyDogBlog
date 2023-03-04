import HTTP from "./index"

// http://localhost:8080/users/all
const getUsers = () => HTTP.get("/users/all")
    .then(response =>
    new Promise ((resolve) => {
        setTimeout( () => resolve(response.data), 4000)
    }))

// http://localhost:8080/products/create
const createUser = (user) => HTTP.post("/users/create", user)

export {getUsers, createUser}
