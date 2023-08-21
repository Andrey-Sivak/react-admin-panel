import {Box, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header";

const phoneRegEx = /^((\+[1.9]{1,4}[ -]?)|(\([0.9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[0 -]?[0-9]{3,4}$/;

const formFields = {
    firstName: {
        label: 'First Name',
        validation: yup.string().required('required'),
        sx: { gridColumn: 'span 2' }
    },
    lastName: {
        label: 'Last Name',
        validation: yup.string().required('required'),
        sx: { gridColumn: 'span 2' }
    },
    email: {
        label: 'Email',
        validation: yup.string().email('Invalid email').required('required'),
        sx: { gridColumn: 'span 4' }
    },
    contact: {
        label: 'Contact number',
        validation: yup
            .string()
            .matches(phoneRegEx, 'Phone number is not valid')
            .required('required'),
        sx: { gridColumn: 'span 4' }
    },
    address1: {
        label: 'Address 1',
        validation: yup.string().required('required'),
        sx: { gridColumn: 'span 4' }
    },
    address2: {
        label: 'Address 2',
        validation: yup.string(),
        sx: { gridColumn: 'span 4' }
    },
}

const initialValues = Object.fromEntries(
    Object.keys(formFields).map(
        (fieldName) => [fieldName, '']
    )
);

const userSchema = yup.object(
    Object.fromEntries(
        Object.entries(formFields).map(
            ([fieldName, settings]) => [fieldName, settings.validation]
        )
    )
);

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid"
                             gap="30px"
                             gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                             sx={{
                                 "& > div": {
                                     gridColumn: isNonMobile ? null : 'span 4'
                                 }
                            }}
                        >
                            {
                                Object.entries(formFields).map(([fieldName, settings]) => (
                                    <TextField
                                        key={fieldName}
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label={settings.label}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values[fieldName]}
                                        name={fieldName}
                                        error={!!touched[fieldName] && !!errors[fieldName]}
                                        helperText={touched[fieldName] && errors[fieldName]}
                                        sx={settings.sx}
                                    />
                                ))
                            }
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="end"
                            mt="20px"
                        >
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;