import React from 'react';
import { Link } from 'react-router-dom';
import convertTimestampToDate from '../helpers/convertTimestampToDate';

export default props => {

    const renderTags = (tags) => {
        return (
            tags.map((tag, index) => <small key={index} className="resume__tag">{tag}</small>)
        )
    }

    const renderKnowledge = (knowledgeList, activity, institution) => {
        if (!knowledgeList.length) return ( <p>No experience</p>);

        return (
            knowledgeList.map((knowledge, index) => 

                <div className="timeline__entry" key={index}>
                    <div className="timeline__date">
                        <p>{convertTimestampToDate(knowledge.startDate)} </p>
                        &#8226;
                        <p>{convertTimestampToDate(knowledge.endDate)}</p>
                    </div>

                    <div className="timeline__information">
                        {knowledge[activity] || ''} at {knowledge[institution] || ''}
                    </div>
                </div>
            )
        )
    }

    const renderCandidates = (candidateList) => {
        return (
            <div className="resume">
                {candidateList.map((candidate, index) => (
                    <div key={index} className="resume__unit">

                        <div className="resume__2-col">
                            <div className="resume__person-detail">
                                <img src={candidate.picture} className="resume__picture"/>
                                <small className="resume__gender">{candidate.gender || ''}</small>
                                <small className="resume__birth-date">{convertTimestampToDate(candidate.birthDate)}</small>
                            </div>
                            
                            <div className="resume__information">
                                <h3 className="resume__name">{candidate.name}</h3>
                                
                                <a className="resume__email" href={`mailto:${candidate.email}`}>{candidate.email}</a>
                                <p className="resume__telephone">{candidate.phone}</p>
                                <p className="resume__address">{candidate.address}</p>
                                <small className="resume__coordinates">{candidate.latitude || ''} {candidate.longitude || ''}</small>

                                <div className="resume__tags">{renderTags(candidate.tags)}</div>

                            </div>
                        </div>

                        <div className="resume__knowledge">
                            <div>
                                <h4 className="resume__heading">Previous Work Experience</h4>
                                {renderKnowledge(candidate.professionalExperiences, 'role', 'companyName')}
                            </div>

                            <div>
                                <h4 className="resume__heading">Education</h4>
                                {renderKnowledge(candidate.formations, 'course', 'institution')}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        )
    }

    return (
        <section className="container">
            <h2 className="container__title"> New Candidate Added! </h2>
            {renderCandidates(props.candidate)}

            <Link to="/">Go to home page</Link>
        </section>
    )
}