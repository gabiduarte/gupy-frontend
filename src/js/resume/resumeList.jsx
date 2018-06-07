import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchResumes } from './resumeActions';

export class ResumeList extends Component {
    componentWillMount() {
        this.props.fetchResumes();
    }

    convertTimestampToReadableDate(timestamp) {
        const dateObject = new Date(timestamp.split(" ")[0]);

        return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    renderTags(tags) {
        return (
            tags.map((tag, index) => <small key={index} className="resume__tag">{tag}</small>)
        )
    }

    renderKnowledge(knowledgeList, activity, institution) {
        return (
            knowledgeList.map((knowledge, index) => 

                <div className="timeline__entry" key={index}>
                    <div className="timeline__date">
                        <p>{this.convertTimestampToReadableDate(knowledge.startDate)} </p>
                        &#8226;
                        <p>{this.convertTimestampToReadableDate(knowledge.endDate)}</p>
                    </div>

                    <div className="timeline__information">
                        {knowledge[activity]} at {knowledge[institution]}
                    </div>
                </div>
            )
        )
    }
    
    renderResumes(list) {
        const isResumeListEmpty = this.props.list.length == 0;

        if (isResumeListEmpty) {
            return (
                <div className="resume">No Resumes</div>
            )

        } else {
            return (
                <div className="resume">
                    {list.map(resume => (
                        <div key={resume._id} className="resume__unit" data-id={resume._id}>

                            <div className="resume__2-col">
                                <div className="resume__person-detail">
                                    <img src={resume.picture} className="resume__picture"/>
                                    <small className="resume__gender">{this.capitalize(resume.gender)}</small>
                                    <small className="resume__birth-date">Born in {this.convertTimestampToReadableDate(resume.birthDate)}</small>
                                </div>
                                
                                <div className="resume__information">
                                    <h3 className="resume__name">{resume.name}</h3>
                                    <small className="resume__created-at">Added on {this.convertTimestampToReadableDate(resume.createdAt)}</small>
                                    
                                    <a className="resume__email" href={`mailto:${resume.email}`}>{resume.email}</a>
                                    <p className="resume__telephone">{resume.phone}</p>
                                    <p className="resume__address">{resume.address}</p>
                                    <small className="resume__coordinates">{resume.latitude} &#8226; {resume.longitude}</small>

                                    <div className="resume__tags">{this.renderTags(resume.tags)}</div>

                                </div>
                            </div>

                            <div className="resume__knowledge">
                                <div>
                                    <h4 className="resume__heading">Previous Work Experience</h4>
                                    {this.renderKnowledge(resume.professionalExperiences, 'role', 'companyName')}
                                </div>

                                <div>
                                    <h4 className="resume__heading">Education</h4>
                                    {this.renderKnowledge(resume.formations, 'course', 'institution')}
                                </div>
                            </div>

                        </div>
                    ))}
    
                </div>
            )
        }
    }
    
    render() {
        return (
            this.renderResumes(this.props.list)
        )
    }
}

const mapStateToProps = state => ({ list: state.resume.list });
const mapDispatchToProps = dispatch => bindActionCreators({fetchResumes}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ResumeList);