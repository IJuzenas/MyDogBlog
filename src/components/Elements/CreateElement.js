import React from "react";
import {
    Button,
    CardActionArea,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import TextField from "@mui/material/TextField";
import {createElement} from "../api/elementsApi";


const CreateElement = (element) => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [imagePreview, setImagePreview] = React.useState(null);
    const [imageData, setImageData] = React.useState(null);

    const PLACE_HOLDER_IMG = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";

    const handleClick = () => {
        setOpen(!open);
    };

    const handleFileUpload = (event) => {
        const element = event.target.files[0];
        setImageData(element);
        setImagePreview(URL.createObjectURL(element));
    };

    const addNewElement = () => {
        createElement(getFormData());
        handleClick();
    }
    const getFormData = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("imageData", imageData);
        formData.append("imagePreview", imagePreview)
        return formData;
    };
    return (
        <>
            <Dialog open={open}>
                <DialogTitle>Add new item</DialogTitle>
                <DialogContent>
                    <DialogContentText>To add to this item data, please click 'Add' button</DialogContentText>
                    <TextField autoFocus margin="dense" id="name" label="Item name" type="text" fullWidth variant="standard" value={name} onChange={(event) => setName(event.target.value)} />
                    <CardActionArea sx={{ maxWidth: "300px", maxHeight: "300px", marginLeft: "22%" }}>
                        <CardMedia component="img" image={imagePreview !== null ? imagePreview : PLACE_HOLDER_IMG} />
                    </CardActionArea>
                    <input accept="image/*" onChange={handleFileUpload} type="file" id="product-image" style={{ display: "none" }} />
                    <div style={{ textAlign: "center" }}>
                        <label htmlFor="product-image">
                            <Button variant="raised" component="span">
                                Upload
                            </Button>
                        </label>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>Cancel</Button>
                    <Button onClick={addNewElement}>Add</Button>
                </DialogActions>
            </Dialog>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
                <Button variant="outlined" onClick={handleClick}>
                    Add new file
                </Button>
            </div>
        </>
    );
};

export default CreateElement;

