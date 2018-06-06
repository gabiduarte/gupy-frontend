import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CandidateForm from './candidateForm';
import CandidateDetails from './candidateDetails';

import { addCandidate } from './candidateActions';

export class Candidate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(candidate) {
        this.props.addCandidate(candidate)
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