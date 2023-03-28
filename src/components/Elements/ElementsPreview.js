import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React from "react";
import {useElements} from "../api/elementsApi";



const ElementsPreview = () => {

    const navigate = useNavigate();
    const {elements = []} = useElements();
    const [name, setName] = React.useState("");
    const [imageData, setImageData] = React.useState("");
    const [imagePreview, setImagePreview] = React.useState(null);

    const noElementsFound = !elements.length && (
            <TableRow>
                <TableCell colSpan={3} align="center">
                    No elements found
                </TableCell>
            </TableRow>
        )
        const elementsPreview = (
        elements.map((elementList, i) => (
                <TableRow key={i}>
                    <TableCell>{elementList.name}</TableCell>
                    <TableCell>
                    <img src={`data:image/jpeg;base64,${elementList.imageData}`}
                         height="150"
                         weight="150"
                         loading="lazy"
                         alt="picture"
                    />
                    </TableCell>

                        {/*<Button variant="contained">*/}
                        {/*    Preview*/}
                        {/*</Button>*/}

                </TableRow>
            ))
        )

        return (
            <>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pavadinimas</TableCell>
                            <TableCell>Nuotrauka</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {noElementsFound || elementsPreview}
                    </TableBody>
                </Table>

                {/*<div style={{marginTop: "10px", textAlign: "center"}}>*/}
                {/*    <Button variant="outlined">*/}
                {/*        FETCH*/}
                {/*    </Button>*/}
                {/*</div>*/}

            </>
        );
}

export default ElementsPreview;
