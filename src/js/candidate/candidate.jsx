import React from 'react';

import CandidateForm from './candidateForm';

export default class Candidate extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(candidate) {
        console.log(candidate);
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
