import React, {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useElements} from "../api/elementsApi";

const Elements = () => {

    const navigate = useNavigate();
    const {elements= []} = useElements();

    const elementView = (
        elements.map((elementList, i) => (
            <TableRow key={i}>
                <TableCell>{elementList.name}</TableCell>
                <img src={`data:image/jpeg;base64,${elementList.imageData}`}
                     height="150"
                     weight="150"
                     loading="lazy"
                     alt="pic"
                />
                <TableCell>
                    <Button variant="contained" onClick={() => navigate(`/elements/${elementList.id}`)}>
                        Preview
                    </Button>
                    />
                </TableCell>
            </TableRow>
        ))
    )

    return (
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Vardas</TableCell>
                        <TableCell>Foto</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {elementView}
                </TableBody>
            </Table>
            <div style={{marginTop: "10px", textAlign: "center"}}>
                <Button variant="outlined">

                </Button>
            </div>
        </>
    );
};

export default Elements
