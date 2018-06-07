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
    <div className="form__input-wrapper">
        <label className="form__label">Professional Experiences</label>

        <div>
            <button type="button" className="form__dynamic-button form__dynamic-button--add" onClick={() => fields.push({})}>Add Experience</button>
            
            {fields.map((experience, index) =>
                <div className="form__dynamic-unit form__dynamic-unit--highlight" key={index}>

                    <h4 className="form__dynamic-unit-label">Experience #{index+1}</h4>
                    <Field name={`${experience}.companyName`} label="Company Name" type="text" component={renderField} className="form__input-wrapper"/>
                    <Field name={`${experience}.role`} label="Role" type="text" component={renderField} className="form__input-wrapper"/>

                    <div className="form__2-col">
                        <Field name={`${experience}.startDate`} label="Start Date" type="date" component={renderField} className="form__input-wrapper"/>
                        <Field name={`${experience}.endDate`} label="End Date" type="date" component={renderField} className="form__input-wrapper"/>
                    </div>

                    <button type="button" className="form__dynamic-button form__dynamic-button--remove" onClick={() => fields.remove(index)}>Remove this experience</button>
                </div>
            )}
        </div>
    </div>
)

const renderFormation = ({ fields }) => (
    <div className="form__input-wrapper">
        <label className="form__label">Education</label>

        <div>
            <button type="button" className="form__dynamic-button form__dynamic-button--add" onClick={() => fields.push({})}>Add Education</button>
            
            {fields.map((formation, index) =>
                <div className="form__dynamic-unit form__dynamic-unit--highlight" key={index}>

                    <h4 className="form__dynamic-unit-label">Education #{index+1}</h4>
                    <Field name={`${formation}.institution`} label="Institution" type="text" component={renderField} className="form__input-wrapper"/>
                    <Field name={`${formation}.course`} label="Course" type="text" component={renderField} className="form__input-wrapper"/>
                    
                    <div className="form__2-col">
                        <Field name={`${formation}.startDate`} label="Start Date" type="date" component={renderField} className="form__input-wrapper"/>
                        <Field name={`${formation}.endDate`} label="End Date" type="date" component={renderField} className="form__input-wrapper"/>
                    </div>

                    <Field name={`${formation}.isConcluded`} label="Finished" type="checkbox" component={renderField} className="form__input-wrapper"/>

                    <button type="button" className="form__dynamic-button form__dynamic-button--remove" onClick={() => fields.remove(index)}>Remove Education</button>

                </div>
            )}
        </div>
    </div>
    
)

const renderTags = ({ fields }) => (
    <div className="form__input-wrapper">
        <label className="form__label">Tags</label>

        <div>
            <button type="button" className="form__dynamic-button form__dynamic-button--add" onClick={() => fields.push()}>Add new tag</button>

            {fields.map((tag, index) =>
                <div className="form__dynamic-unit form__dynamic-unit--tags" key={index}>
                    <Field name={tag} type="text" component={renderField} placeholder={`Tag #${index + 1}`} className="form__tag-input"/>
                    <button type="button" className="form__dynamic-button form__dynamic-button--remove" onClick={() => fields.remove(index)}>Remove Tag</button>
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
                <Field name="picture" component={renderField} label="Picture (URL)" type="text" className="form__input-wrapper"/>

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
                <FieldArray name="professionalExperiences" component={renderProfessionalExperience}/>
                <FieldArray name="formations" component={renderFormation} />

                <button type="submit" className="form__submit">Submit</button>
            </form>
        </section>
    )
}


export default reduxForm({
    form: 'candidate',
    validate
})(CandidateForm)