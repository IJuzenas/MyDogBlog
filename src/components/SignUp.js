import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

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
        .min(5),
    repeatPassword: Yup.string()
        .required()
        .min(5)
        .oneOf([Yup.ref('password')], "Must be equal to the one above")
})
const SignUp = () => (
    <>
        <Box
            noValidate
            autoComplete="off"
            sx={{mt: 3}}
        >
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                    alert("Registration is sucsessfull!")
                }}
                validationSchema={signUpValidationSchema}>
                {({errors, touched}) => (
                    <Form>
                        <Field
                            id="name"
                            name="name"
                            label="Name"
                            variant="standard"
                            fullWidth
                            error={!!errors.name && touched.name}
                            helperText={touched.name && errors.name}
                            as={TextField}
                        />
                        <Field
                            id="email"
                            name="email"
                            label="Email"
                            variant="standard"
                            fullWidth
                            error={!!errors.email && touched.email}
                            helperText={touched.email && errors.email}
                            as={TextField}
                        />

                        <Field
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="standard"
                            fullWidth
                            error={!!errors.password && touched.password}
                            helperText={touched.password && errors.password}
                            as={TextField}
                        />
                        <Field
                            id="repeatPassword"
                            name="repeatPassword"
                            label="Repeat Password"
                            type="password"
                            variant="standard"
                            fullWidth
                            error={!!errors.repeatPassword && touched.repeatPassword}
                            helperText={touched.repeatPassword && errors.repeatPassword}
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
                )}
            </Formik>
            <Link href="#" variant="body2">
                Already have an account? Sign in
            </Link>
        </Box>
    </>
)
export default SignUp