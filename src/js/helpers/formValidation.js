const validate = values => {
    const errors = {};

    ['name', 'phone', 'email', 'address', 'birthDate', 'picture'].forEach((field) => {
        if (!values[field]) errors[field] = 'Required';
    })
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid e-mail address';
    }

    if (values.professionalExperiences) {
        const professionalExperiencesErrors = [];

        values.professionalExperiences.forEach((experience, experienceIndex) => {
            const experienceErrors = {};

            if (!experience || !experience.companyName) {
              experienceErrors.companyName = 'Required';
              professionalExperiencesErrors[experienceIndex] = experienceErrors;
            }
            if (!experience || !experience.role) {
              experienceErrors.role = 'Required'
              professionalExperiencesErrors[experienceIndex] = experienceErrors;
            }
    
            if (!experience || !experience.startDate) {
                experienceErrors.startDate = 'Required'
                professionalExperiencesErrors[experienceIndex] = experienceErrors;
              }
    
              if (!experience || !experience.endDate) {
                experienceErrors.endDate = 'Required'
                professionalExperiencesErrors[experienceIndex] = experienceErrors;
              }
          })
    
          if (professionalExperiencesErrors.length) {
            errors.professionalExperiences = professionalExperiencesErrors;
          }
    }

    if (values.formations) {
        const formationsErrors = [];

        values.formations.forEach((formation, formationIndex) => {
            const formationErrors = {};

            if (!formation || !formation.institution) {
              formationErrors.institution = 'Required';
              formationsErrors[formationIndex] = formationErrors;
            }
            if (!formation || !formation.course) {
              formationErrors.course = 'Required'
              formationsErrors[formationIndex] = formationErrors;
            }
    
            if (!formation || !formation.startDate) {
                formationErrors.startDate = 'Required'
                formationsErrors[formationIndex] = formationErrors;
              }
    
              if (!formation || !formation.endDate) {
                formationErrors.endDate = 'Required'
                formationsErrors[formationIndex] = formationErrors;
              }
          })
    
          if (formationsErrors.length) {
            errors.formations = formationsErrors;
          }
    }

    return errors;
}

export default validate;