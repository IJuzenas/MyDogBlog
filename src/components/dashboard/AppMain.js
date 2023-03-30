import * as React from 'react';
import {Home, Info} from "@mui/icons-material";
import MenuItem from "./MenuItem";
import PetsIcon from "@mui/icons-material/Pets";


export const AppMain = (
    <>
        <MenuItem label="Main" link="/" icon={<Home/>}/>
        <MenuItem label="FoodReview" link="/elementsPreview" icon={<PetsIcon/>}/>
        <MenuItem label="About" link="/about" icon={<Info/>}/>
    </>
);
