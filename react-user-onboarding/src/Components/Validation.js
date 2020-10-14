import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('A name is required')
    .min(3, 'Name must be at least 3 characters'),

    last_name: yup
    .string()
    .required('A name is required')
    .min(3, 'Name must be at least 3 characters'),

    password: yup
    .string()
    .min(3, 'password must be at least 3 characters')
    .required('Password field is required'),

    email: yup
    .string()
    .required('An email is required')
    .min(3, 'email must be at least 3 characters'),

    role: yup
    .string()
    .oneOf(['tl', 'instructor', 'aspirant', 'student'], 'role is required'),

    terms: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms and Conditions')

})