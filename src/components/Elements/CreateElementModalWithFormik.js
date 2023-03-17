import * as React from "react";
import {
    Alert,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Snackbar,
    TextField,
} from "@mui/material";
import {Field, Formik} from "formik";
import * as Yup from 'yup'
import {useCreateElement, useElements} from "../api/elementsApi";
import {Input} from "@mui/icons-material";
import {useRef} from "react";
import PrieviewImage from "./PrieviewImage";
const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg"];


const elementValidationSchema = Yup.object().shape({
    productName: Yup.string()
        .min(3, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(50)
        .required()
        .label("Product name"),
    price: Yup.number()
        .positive("Price must be positive")
        .required(),
    description: Yup.string()
        .min(1)
        .max(255)
        .required(),
    file: Yup
        .mixed()
        .nullable()
        .required()
        .test(
            "FILE SIZE",
            "Upload size is too big.",
            (value) => !(value) || (value && value.size <= 1024 * 1024))
        .test(
            "FILE FORMAT",
            "Upload file has unsupported format.",
            (value) => !(value) || (value && SUPPORTED_FORMATS.includes(value?.type)))
})

const CreateElementModalWithFormik = ({fetchElements, open, onClose, element}) => {
    const [alertOpen, setAlertOpen] = React.useState(false);
    const createElement = useCreateElement()
    const fileRef = useRef(null);

    const initialValues = element ? {
        id: element.id,
        name: element.name,
        price: element.price,
        description: element.description,
        photo: element.photo

    } : {
        id: null,
        name: '',
        price: '',
        description: '',
        photo: null
    }

    const title = element ? "Edit element" : "Create new element"

    return (

        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>

                <Formik initialValues={initialValues}
                        onSubmit={async (element, {setSubmitting}) => {
                            await createElement(element)

                            setSubmitting(false)
                            onClose()
                            fetchElements()
                            setAlertOpen(true)
                        }}
                        validationSchema={elementValidationSchema}>
                    {(props) => {
                        return (
                            <>
                                <DialogContent>
                                    <input ref={fileRef}
                                           type="file"
                                           name="photo"
                                           onChange={(event) => props.setFieldValue("photo", event.target.files[0])}

                                    />

                                    <Field label="Name"
                                           name="name"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.name && props.touched.name}
                                           helperText={props.touched.name && props.errors["name"]}
                                           as={TextField}
                                    />
                                    <Field label="Description"
                                           name="description"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.description && props.touched.description}
                                           helperText={props.touched.description && props.errors["description"]}
                                           as={TextField}
                                    />
                                    <Field label="Price"
                                           name="price"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.price && props.touched.price}
                                           helperText={props.touched.price && props.errors["price"]}
                                           as={TextField}
                                    />

                                    {props.isSubmitting && <CircularProgress color="inherit"/>}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button disabled={props.isSubmitting} onClick={props.submitForm}>Add</Button>
                                    <KErrorMessage name="file" />
                                    {values.file && <PrieviewImage file={values.file}/>}
                                    <Button onClick={() => {
                                        fileRef.current.click()
                                    }}>Upload</Button>
                                </DialogActions>
                            </>
                        )
                    }
                    }
                </Formik>
            </Dialog>
            <Snackbar open={alertOpen}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                      autoHideDuration={6000}
                      onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{width: '100%'}}>
                    Element created!!!
                </Alert>
            </Snackbar>
        </>
    )
}

export default CreateElementModalWithFormik;
