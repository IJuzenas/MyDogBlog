import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useElements, createElement} from "../api/elementsApi";
import HoverRating from "../dashboard/HoverRating";
import CreateElement from "./CreateElement";
import UpdateElement from "./EditElement";



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
                <UpdateElement id={elementList.id} name={elementList.name} imageData={elementList.imageData}/>
                <button variant="outlined">
                         Delete
                     </button>
                    {/*<CommentBox />*/}
            </TableCell>
                <TableCell>
                    <HoverRating/>
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
                        <TableCell>Pavadinimas</TableCell>
                        <TableCell>Nuotrauka</TableCell>
                        <TableCell>Make a comment</TableCell>
                        <TableCell>Rate the food</TableCell>
                        <TableCell></TableCell>
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
// TODO Searchbar, kad galima butu ieskoti pagal pavadinima
export default ElementsPreview;
