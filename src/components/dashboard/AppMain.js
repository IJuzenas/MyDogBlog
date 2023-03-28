import * as React from 'react';
import {Home, Info, Login} from "@mui/icons-material";
import MenuItem from "./MenuItem";
import PetsIcon from "@mui/icons-material/Pets";
import InventoryIcon from '@mui/icons-material/Inventory';

export const AppMain = (
    <>
        <MenuItem label="Login" link="/login" icon={<Login/>}/>
        <MenuItem label="Users" matchSubPaths link="/users" icon={<PetsIcon/>}/>
        <MenuItem label="About" link="/about" icon={<Info/>}/>
        <MenuItem label="Main" link="/" icon={<Home/>}/>
        <MenuItem label="FoodReview" link="/elementsPreview" icon={<InventoryIcon/>}/>


    </>
);
