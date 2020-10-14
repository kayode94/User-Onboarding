import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('A name is required')
    .min(3, 'Name must be at least 3 characters'),

    email: yup
    .string()
    .required('A passowrd is required')
    .min(20, 'password must be at least 20 characters'),

    terms: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms and Conditions')

})