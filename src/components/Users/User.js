import {useParams} from "react-router-dom";

const User = () => {

    const params = useParams()

    return (
        <>
            <h1>User id: {params.id}</h1>


        </>
    )
}

export default User