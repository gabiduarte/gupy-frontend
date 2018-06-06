import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from '../helpers/formValidation';

const renderField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
    <div className={className}>
        <label className="form__label">{label}</label>
        <input {...input} type={type} className="form__input"/>
        {touched &&
        (error && <span className="form__error">{error}</span>)}
    </div>
)

const renderProfessionalExperience = ({ fields }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>Add Experience</button>
        </li>

        {fields.map((experience, index) =>
            <li key={index}>
                <button type="button" onClick={() => fields.remove(index)}>Remove Experience</button>

                <h4>Experiencia #{index+1}</h4>
                <Field name={`${experience}.companyName`} type="text" component={renderField} placeholder="Company Name"/>
                <Field name={`${experience}.role`} type="text" component={renderField} placeholder="Role"/>
                <Field name={`${experience}.startDate`} type="date" component={renderField} placeholder="Start Date"/>
                <Field name={`${experience}.endDate`} type="date" component={renderField} placeholder="End Date"/>
            </li>
        )}
    </ul>
)

const renderFormation = ({ fields }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>Add Formation</button>
        </li>

        {fields.map((formation, index) =>
            <li key={index}>
                <button type="button" onClick={() => fields.remove(index)}>Remove Formation</button>

                <h4>Education #{index+1}</h4>
                <Field name={`${formation}.institution`} type="text" component={renderField} placeholder="Institution"/>
                <Field name={`${formation}.course`} type="text" component={renderField} placeholder="Course"/>
                <Field name={`${formation}.isConcluded`} type="checkbox" component={renderField} placeholder="Finish"/>
                <Field name={`${formation}.startDate`} type="date" component={renderField} placeholder="Start Date"/>
                <Field name={`${formation}.endDate`} type="date" component={renderField} placeholder="End Date"/>
            </li>
        )}
    </ul>
)

const renderTags = ({ fields }) => (
    <div className="form__input-wrapper">
        <label className="form__label">Tags</label>

        <div className="tag">
            <button type="button" className="tag__button tag__button--add" onClick={() => fields.push()}>Add new tag</button>

            {fields.map((tag, index) =>
                <div className="tag__unit" key={index}>
                    <Field name={tag} type="text" component={renderField} placeholder={`Tag #${index + 1}`} className="tag__input"/>
                    <button type="button" className="tag__button" onClick={() => fields.remove(index)}>Remove Tag</button>
                </div>
            )}
        </div>
    </div>
  )

const CandidateForm = props => {
    return (
        <section className="container"> 
            <h2 className="container__title"> Add a new Candidate </h2>
            <form onSubmit={props.handleSubmit} className="form">
                    <Field name="name" component={renderField} label="Full Name" type="text" className="form__input-wrapper"/>
                    <Field name="email" component={renderField} label="Email" type="email" className="form__input-wrapper"/>

                    <Field name="picture" component={renderField} label="Picture" type="text" className="form__input-wrapper"/>

                <div className="form__2-col">
                    <Field name="birthDate" component={renderField} label="Birth Date" type="date" className="form__input-wrapper"/>

                    <div className="form__input-wrapper">
                        <label className="form__label form__label--radio">Gender</label>                
                        <label><Field name="gender" component={renderField} type="radio" value="male" className="form__radio-unit"/>Male</label>
                        <label><Field name="gender" component={renderField} type="radio" value="female" className="form__radio-unit"/> Female</label>
                    </div>
                </div>

                    <Field name="phone" component={renderField} label="Telephone" type="number" className="form__input-wrapper"/>

                    <Field name="address" component={renderField} label="Address" type="text" className="form__input-wrapper"/>

                <div className="form__2-col">
                    <Field name="latitude" component={renderField} label="Latitude" type="text" className="form__input-wrapper"/>

                    <Field name="longitude" component={renderField} label="Longitude" type="text" className="form__input-wrapper"/>
                </div>

                    <FieldArray name="tags" component={renderTags}/>

                    <FieldArray name="professionalExperience" component={renderProfessionalExperience}/>

                    <FieldArray name="formation" component={renderFormation} />

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


export default reduxForm({
    form: 'candidate',
    validate
})(CandidateForm)