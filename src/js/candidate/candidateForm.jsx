import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {};

    ['name', 'phone', 'email', 'address'].forEach((field) => {
        if (!values[field]) errors[field] = 'Required';
    })
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid e-mail address';
    }

    return errors;
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const CandidateForm = props => {
    return (
        <div> 
            <h2> Add a new Candidate </h2>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="name" component={renderField} label="Full Name" type="text" />
                </div>
                <div>
                    <Field name="email" component={renderField} label="Email" type="email" />
                </div>

                <div>
                    <Field name="picture" component={renderField} label="Picture" type="text" />
                </div>

                <div>
                    <Field name="birthDate" component={renderField} label="Birth Date" type="date" />
                </div>

                <div>
                    <label>Gender</label>
                    <label><Field name="gender" component={renderField} type="radio" value="male"/> Male</label>
                    <label><Field name="gender" component={renderField} type="radio" value="female"/> Female</label>
                </div>

                <div>
                    <Field name="phone" component={renderField} label="Telephone" type="number" />
                </div>

                <div>
                    <Field name="address" component={renderField} label="Address" type="text" />
                </div>

                <div>
                    <Field name="latitude" component={renderField} label="Latitude" type="text" />
                </div>

                <div>
                    <Field name="longitude" component={renderField} label="Longitude" type="text" />
                </div>

                <div>
                    <Field name="tags" component={renderField} label="Tags" type="text" />
                </div>

                <div>
                    <Field name="professionalExperience" component={renderField} label="Professional Experiences" type="text" />
                </div>

                <div>
                    <Field name="formation" component={renderField} label="Education" type="text" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default reduxForm({
    form: 'candidate',
    validate
})(CandidateForm)