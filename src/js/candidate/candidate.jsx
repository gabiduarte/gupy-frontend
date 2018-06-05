import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CandidateForm from './candidateForm';
import CandidateDetails from './candidateDetails';
import If from '../template/if';

import { addCandidate } from './candidateActions';

class Candidate extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hasCandidateAdded = this.hasCandidateAdded.bind(this);
    }
    
    handleSubmit(candidate) {
        this.props.addCandidate(candidate)
    }

    hasCandidateAdded() {
        return this.props.candidateList.length > 0;
    }

    render() {
        return (
            <section>
                <If show={!this.hasCandidateAdded()}>
                    <CandidateForm onSubmit={this.handleSubmit}/>
                </If>

                <If show={this.hasCandidateAdded()}>
                    <CandidateDetails candidate={this.props.candidateList}/>
                </If>
            </section>
        )
    }
}

const mapStateToProps = state => ({candidateList: state.candidate.list});
const mapDispatchToProps = dispatch => bindActionCreators({addCandidate}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Candidate);