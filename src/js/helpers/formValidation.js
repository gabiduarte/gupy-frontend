const validateFieldArray = (fieldArrayPropertyValue, fieldsToValidateInsideArray) => {
    const fieldArrayErrors = [];

    fieldArrayPropertyValue.forEach((item, index) => {
        const itemErrors = {};

        fieldsToValidateInsideArray.forEach((field) => {
            if (!item[field]) {
                itemErrors[field] = 'Required';
                fieldArrayErrors[index] = itemErrors;
            }
        });
    });

    return fieldArrayErrors.length ? fieldArrayErrors : {};
}


const validate = values => {
    const errors = {};

    ['name', 'phone', 'email', 'address', 'birthDate', 'picture'].forEach((field) => {
        if (!values[field]) errors[field] = 'Required';
    })
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid e-mail address';
    }

    if (values.professionalExperiences) {
        errors.professionalExperiences = validateFieldArray(values.professionalExperiences, ['companyName', 'role', 'startDate', 'endDate']);
    }

    if (values.formations) {
        errors.formations = validateFieldArray(values.formations, ['institution', 'course', 'startDate', 'endDate']);
    }

    return errors;
}

export default validate;
