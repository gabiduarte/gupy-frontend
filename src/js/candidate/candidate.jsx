import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CandidateForm from './candidateForm';
import CandidateDetails from './candidateDetails';

import { addCandidate } from './candidateActions';

import { cleanArrayOfEmptyObjects, cleanArrayOfUndefinedValues } from '../helpers/cleanArray';

export class Candidate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(candidate) {
        const cleanCandidate = {...candidate,
            tags: cleanArrayOfUndefinedValues(candidate.tags),
            professionalExperiences: cleanArrayOfEmptyObjects(candidate.professionalExperiences),
            formations: cleanArrayOfEmptyObjects(candidate.formations)}
        
        this.props.addCandidate(cleanCandidate);
    }

    render() {
        const hasCandidateAdded = this.props.candidateList.length > 0;

        if (hasCandidateAdded) {
            return (
                <CandidateDetails candidate={this.props.candidateList}/>
            )
        }

        return (
            <CandidateForm onSubmit={this.handleSubmit}/>
        )
    }
}

const mapStateToProps = state => ({candidateList: state.candidate.list});
const mapDispatchToProps = dispatch => bindActionCreators({addCandidate}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Candidate);