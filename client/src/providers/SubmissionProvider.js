import React, { useState } from 'react';
import axios from 'axios';

export const SubmissionContext = React.createContext();

export const SubmissionConsumer = SubmissionContext.Consumer;

const SubmissionProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([])

  const getAllSubmissions = () => {
    axios.get('/api/submissions')
      .then( res => setSubmissions(res.data) )
      .catch( err => console.log(err) )
  }

  const addSubmission = (submission) => {
    axios.post('/api/submissions', { submission })
    .then( res => setSubmissions([...submissions, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateSubmission = (id, submission) => {
    axios.put(`/api/submissions/${id}`, { submission })
      .then( res => {
        const newUpdatedSubmissions = submissions.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setSubmissions(newUpdatedSubmissions)
      })
      .catch( err => console.log(err) )
  }

  const deleteSubmission = (id) => {
    axios.delete(`/api/submissions/${id}`)
      .then( res => {
        setSubmissions(submissions.filter(s => s.id !== id))
      })
      .catch( err => console.log(err) )
  }

  return (
    <SubmissionContext.Provider value={{
      submissions,
      getAllSubmissions, 
      addSubmission,
      updateSubmission,
      deleteSubmission,
    }}>
      { children }
    </SubmissionContext.Provider>
  )
}

export default SubmissionProvider;