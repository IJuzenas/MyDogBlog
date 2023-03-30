import HTTP from "./index"
import {useMutation, useQuery} from "react-query";


// http://localhost:8080/elements/all

const getAllElements = () => HTTP.get("elements/all")
    .then(response =>
    new Promise(resolve => {
        setTimeout(()=> resolve(response.data), 2000)
    }))
// http://localhost:8080/elements/create
const createElement = (element) => HTTP.post("elements/create", element)

const createElementJson = (element) => HTTP.post("/elements", {element}).then(response =>
    new Promise((resolve) => {
        setTimeout(() => resolve(response.data), 3000)
    }))
const deleteElement = (id) => HTTP.delete("/elements/delete", id)

const updateElement = (element) => HTTP.put("/elements/delete", element)
const useElements = () => {
    const context = useQuery('getElements', getAllElements)
    return {...context, elements: context.data}}

const useCreateElement = (config) => {
    const mutation = useMutation(createElementJson, config)
    return mutation.mutateAsync
}

export {getAllElements, createElement, useElements, useCreateElement, deleteElement, updateElement}
