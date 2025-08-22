import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    Surname: Yup.string().required('Name is required'),
    Firstname: Yup.string().required('First name is required'),
    Username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const FormikForm = () => (
    <Formik
        initialValues={{ Surname: '', Firstname: '', Username: '', email: '', password: '',}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {() => (
            <Form>
                <Field type="text" name="surname" />
                <ErrorMessage name="surname" component="div" />
                <Field type="text" name="firstname" />
                <ErrorMessage name="firstname" component="div" />
                <Field type="text" name="Username" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);

export default FormikForm;