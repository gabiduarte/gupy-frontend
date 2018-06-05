import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CandidateForm from './candidateForm';

import { addCandidate } from './candidateActions';

class Candidate extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(candidate) {
        this.props.addCandidate(candidate)
    }

    render() {
        return (
            <section>
                <h2>Add new Candidate</h2>

                <CandidateForm onSubmit={this.handleSubmit}/>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({addCandidate}, dispatch);
export default connect(null, mapDispatchToProps)(Candidate);