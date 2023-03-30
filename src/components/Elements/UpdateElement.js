import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {createElement} from "../api/elementsApi";



const UpdateElement = (element) => {
    const [name, setName] = React.useState(element.name);
    const [imageData, setImageData] = React.useState(element.imageData)
    const [id, setId] = React.useState(element.id)
    const [imagePreview, setImagePreview] = React.useState()


    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleFileUpload = (event) => {
        const imageData = event.target.files[0];
        setImageData(imageData);
        setImagePreview(URL.createObjectURL(imageData));
    };

     const updateElement = (newElement) => {
        if (newElement)
        createElement(getFormData());
    }
    const getFormData = () => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("imageData", imageData);
        formData.append("imagePreview", imagePreview)
        console.log(formData)
        return formData;
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit Element
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit element</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To change the name and picture, just write a new name and upload a new photo
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Change name"
                        type="name"
                        fullWidth
                        variant="standard"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <img src={`data:image/jpeg;base64,${imageData}`}
                         height="150"
                         weight="150"
                         loading="lazy"
                         alt="pic"
                    />
                    <input accept="image/*"
                           onChange={handleFileUpload}
                           type="file"
                           id="product-image"
                           style={{ display: "none" }} />
                        <div style={{ textAlign: "center" }}>
                        <label htmlFor="product-image">
                            <Button variant="raised" component="span">
                                Upload
                            </Button>
                        </label>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={
                        () => {
                            console.log("Hello from Edit from")
                            console.log(id, name, imageData)
                            updateElement(id,name, imageData)
                            handleClose()
                        }
                    }>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default UpdateElement