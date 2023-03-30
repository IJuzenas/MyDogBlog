import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React from "react";
import {useElements} from "../api/elementsApi";
import CreateElement from "./CreateElement";
import EditElement from "./UpdateElement";
import Rating from "./HoverRating";


const ElementsPreview = () => {

    const navigate = useNavigate();
    const {elements = []} = useElements();


    const noElementsFound = !elements.length && (
        <TableRow>
            <TableCell colSpan={5} align="center">
                No elements found
            </TableCell>
        </TableRow>
    )
    const elementsPreview = (
        elements.map((elementList, i) => (
            <TableRow key={i}>
                <TableCell>{elementList.id}</TableCell>
                <TableCell>{elementList.name}</TableCell>
                <TableCell>
                    <img src={`data:image/jpeg;base64,${elementList.imageData}`}
                         height="150"
                         weight="150"
                         loading="lazy"
                         alt="pic"
                    />
                </TableCell>
            <TableCell>
                <EditElement id={elementList.id} name={elementList.name} imageData={elementList.imageData}/>
            </TableCell>
                <TableCell>
                    <Rating />
                </TableCell>
            </TableRow>
        ))
    )

    return (
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Photo</TableCell>
                        <TableCell>Change</TableCell>
                        <TableCell>Rate the food</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {noElementsFound || elementsPreview}
                </TableBody>
            </Table>
            <CreateElement />

        </>
    );
}

export default ElementsPreview;
