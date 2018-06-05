import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CandidateForm extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label htmlFor="Name">Full name</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


CandidateForm = reduxForm({
    form: 'candidate'
})(CandidateForm)

export default CandidateForm;