import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from '../helpers/formValidation';

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
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>Add tag</button>
      </li>
      {fields.map((tag, index) =>
        <li key={index}>
          <button type="button" onClick={() => fields.remove(index)}>Remove Tag</button>
          <Field name={tag} type="text" component={renderField} placeholder={`Tag #${index + 1}`}/>
        </li>
      )}
    </ul>
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
                    <FieldArray name="tags" component={renderTags}/>
                </div>

                <div>
                    <FieldArray name="professionalExperience" component={renderProfessionalExperience}/>
                </div>

                <div>
                    <FieldArray name="formation" component={renderFormation} />
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