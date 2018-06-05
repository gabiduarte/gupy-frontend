export const addCandidate = (candidate) => {
    return {
        type: 'CANDIDATE_ADDED',
        payload: candidate
    }
}