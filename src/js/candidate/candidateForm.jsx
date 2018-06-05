import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CandidateForm extends Component {
    render() {
        return(
            <div> 
                <h2> Add a new Candidate </h2>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <label htmlFor="Name">Full name</label>
                        <Field name="name" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>

                    <div>
                        <label htmlFor="picture">picture</label>
                        <Field name="picture" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="birthDate">Birth Date</label>
                        <Field name="birthDate" component="input" type="date" />
                    </div>

                    <div>
                        <label htmlFor="gender">Gender</label>
                        <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
                        <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Field name="phone" component="input" type="number" />
                    </div>

                    <div>
                        <label htmlFor="address">Address</label>
                        <Field name="address" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="latitude">Latitude</label>
                        <Field name="latitude" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="longitude">Longitude</label>
                        <Field name="longitude" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="tags">Tags</label>
                        <Field name="tags" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="professionalExperience">Professional Experiences</label>
                        <Field name="professionalExperience" component="input" type="text" />
                    </div>

                    <div>
                        <label htmlFor="formation">Education</label>
                        <Field name="formation" component="input" type="text" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


CandidateForm = reduxForm({
    form: 'candidate'
})(CandidateForm)

export default CandidateForm;
