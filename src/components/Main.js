import React from "react";
import {Button} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';



function Main() {

    return (
        <div style={{
            backgroundImage: `url("https://www.bunko.pet/__export/1643048611139/sites/debate/img/2022/01/24/13_caracteristicas_que_te_indican_que_un_perro_labrador_retriever_es_original.jpg_554688468.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <PetsIcon/>
            <Button onClick={event => window.location.href = '/signup'} className="btn btn-primary">Sign up</Button>
            <Button onClick={event => window.location.href = '/login'} className="btn btn-primary">Login</Button>

        </div>
    );
}

export default Main