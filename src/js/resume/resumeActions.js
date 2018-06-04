import axios from 'axios';

const URL = 'http://localhost:8080/api/sample.json'

export const fetchResumes = () => {
    return dispatch => {
        axios.get(URL)
            .then(res => dispatch({ type: 'RESUMES_FETCHED', payload: res.data}))
    }
}