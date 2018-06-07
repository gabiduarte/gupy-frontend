const validate = values => {
    const errors = {};

    ['name', 'phone', 'email', 'address', 'birthDate', 'picture'].forEach((field) => {
        if (!values[field]) errors[field] = 'Required';
    })
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid e-mail address';
    }

    return errors;
}

export default validate;