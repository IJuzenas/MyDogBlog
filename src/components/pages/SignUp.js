import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {createUser} from "../api/usersApi";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";



const signUpValidationSchema = Yup.object().shape({
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


const SignUp = () => {

    return (
    <>
        <Box
            noValidate
            autoComplete="off"
            sx={{mt: 3}}
            //TODO backround image
        >
            {/*<div style={{*/}
            {/*    backgroundImage: loginpic,*/}
            {/*    backgroundPosition: 'center',*/}
            {/*    backgroundSize: 'cover',*/}
            {/*    backgroundRepeat: 'no-repeat',*/}
            {/*    width: '100vw',*/}
            {/*    height: '100vh'*/}
            {/*}}>*/}
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                    // alert(JSON.stringify(values, null, 2));
                    createUser(values)
                }}
                validationSchema={signUpValidationSchema}>
                {(props) => {
                    return (
                        <Form>
                            <Field
                                id="name"
                                name="name"
                                label="Name"
                                variant="standard"
                                value={props.values.name}
                                fullWidth
                                error={!!props.name && props.name}
                                helperText={props.name && props.name}
                                as={TextField}
                            />
                            <Field
                                id="email"
                                name="email"
                                label="Email"
                                variant="standard"
                                value={props.values.email}
                                fullWidth
                                error={!!props.email && props.email}
                                helperText={props.email && props.email}
                                as={TextField}
                            />

                            <Field
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                variant="standard"
                                value={props.values.password}
                                fullWidth
                                error={!!props.password && props.password}
                                helperText={props.password && props.password}
                                as={TextField}
                            />

                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Sign Up
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
            <Link href="http://localhost:3000/login" variant="body2">
                Already have an account? Sign in
            </Link>
        </Box>
    </>
    )
}
export default SignUp