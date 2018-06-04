import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchResumes } from './resumeActions';

class ResumeList extends Component {
    componentWillMount() {
        this.props.fetchResumes();
    }
    
    renderResumes(list) {
        return (
            list.map(resume => (
                <div key={resume._id}>
                    <p>{resume.name}</p>
                    <p>{resume.email}</p>
                </div>
            ))
        )
    }
    
    render() {
        return (
            <div>
                {this.renderResumes(this.props.list)}
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.resume.list });
const mapDispatchToProps = dispatch => bindActionCreators({fetchResumes}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ResumeList);