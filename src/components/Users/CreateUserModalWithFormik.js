import * as Yup from "yup";
import * as React from "react";
import {useUserElement} from "../api/usersApi";
import {Alert, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar} from "@mui/material";
import {Field, Formik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const userValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2)
        .required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .required()
        .min(5)
});
const CreateUserModalWithFormik = ({fetchUsers, open, onClose, user}) => {
    const [alertOpen, setAlertOpen] = React.useState(false);
    const addNewUser = useUserElement() ;

    const initialValues = user ? {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        joined: user.joined
    } : {
        id: null,
        name: '',
        email: '',
        password: '',
        joined: ''
    }

    const title = user ? "Edit user" : "Create new user"

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>

                <Formik initialValues={initialValues}
                        onSubmit={async (user, {setSubmitting}) => {
                            await addNewUser(user)

                            setSubmitting(false)
                            onClose()
                            fetchUsers()
                            setAlertOpen(true)
                        }}
                        validationSchema={userValidationSchema}>
                    {(props) => {
                        return (
                            <>
                                {/*<PropState {...props}/>*/}
                                <DialogContent>
                                    <Field label="Email"
                                           name="email"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.email && props.touched.email}
                                           helperText={props.touched.email && props.errors["email"]}
                                           as={TextField}
                                    />

                                    <Field label="Name"
                                           name="name"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.name && props.touched.name}
                                           helperText={props.touched.name && props.errors["name"]}
                                           as={TextField}
                                    />

                                    <Field label="Password"
                                           name="password"
                                           variant="standard"
                                           fullWidth
                                           error={!!props.errors.password && props.touched.password}
                                           helperText={props.touched.password && props.errors["password"]}
                                           as={TextField}
                                    />

                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button disabled={props.isSubmitting} onClick={props.submitForm}>Add</Button>
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
                    User created!!!
                </Alert>
            </Snackbar>
        </>
    )
}

export default CreateUserModalWithFormik;
