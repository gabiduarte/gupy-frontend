import React from 'react';
import { Link } from 'react-router-dom';

export default props => {

    const renderCandidates = (candidateList) => {
        return (
            candidateList.map(candidate => (
                <div key={candidate.name}>
                    <p>{candidate.name}</p>
                    <p>{candidate.email}</p>
                </div>
            ))
        )
    }

    return (
        <section className="container">
            <h2> Candidate Details </h2>
            {renderCandidates(props.candidate)}

            <Link to="/">Go to home page</Link>
        </section>
    )
}