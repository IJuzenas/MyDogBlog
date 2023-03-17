import {Component, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import * as PropTypes from "prop-types";
import {createElement, useElements} from "../api/elementsApi";



class CreateElementModalWithFormik extends Component {
    render() {
        return null;
    }
}

CreateElementModalWithFormik.propTypes = {
    onClose: PropTypes.func,
    fetchElements: PropTypes.any,
    open: PropTypes.bool,
    element: PropTypes.bool
};
const Elements = () => {
    // const {addElement} = useElementContext();
    const navigate = useNavigate();
    const {isFetching, elements = [], refetch} = useElements();
    const [openElementModal, setOpenElementModal] = useState(false);
    const [editElement, setEditElement] = useState(false);


    const loadingElement = isFetching && (
        <TableRow>
            <TableCell colSpan={5} align="center">
                <CircularProgress />
            </TableCell>
        </TableRow>
    );
    const noElementsFound = !elements.length && (
        <TableRow>
            <TableCell colSpan={5} align="center">
                No elements found
            </TableCell>
        </TableRow>
    );

    const elementsMap = elements.map((elementList, i) => (
        <TableRow key={i}>
            <TableCell>{elementList.name}</TableCell>
            <TableCell>{elementList.price}</TableCell>
            <TableCell>{elementList.description}</TableCell>
            <TableCell>{elementList.createDate}</TableCell>
            <TableCell>
                        <Button variant="contained" onClick={() => navigate(`/elements/${elementList.id}`)}>
                            Prieview
                        </Button>
                    )}
                <IconButton
                    onClick={() =>
                        createElement({
                            id: elementList.id,
                            name: elementList.name,
                            price: elementList.price,
                            description: elementList.description
                        })
                    }
                >
                </IconButton>
                <IconButton
                    onClick={() => {
                        setOpenElementModal(true);
                        setEditElement(elementList);
                    }}
                >
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    ));

    return (
                <>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{loadingElement || noElementsFound || elementsMap}</TableBody>
                    </Table>
                    <CreateElementModalWithFormik fetchElements={refetch}
                                                  open={openElementModal}
                                                  onClose={() => setOpenElementModal(false)}
                                                  element={editElement} />

                    <div style={{ marginTop: "10px", textAlign: "center" }}>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setOpenElementModal(true);
                                setEditElement(null);
                            }}
                        >
                            Add new element
                        </Button>
                    </div>
                </>
    );
};
export default Elements
