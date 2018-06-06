import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchResumes } from './resumeActions';

export class ResumeList extends Component {
    componentWillMount() {
        this.props.fetchResumes();
    }
    
    renderResumes(list) {
        const isResumeListEmpty = this.props.list.length == 0;

        if (isResumeListEmpty) {
            return (
                <div className="resumes">No Resumes</div>
            )

        } else {
            return (
                <div className="resumes">
                    {list.map(resume => (
                        <div key={resume._id} className="resume" data-id={resume._id}>
                            <p>{resume.name}</p>
                            <p>{resume.email}</p>
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