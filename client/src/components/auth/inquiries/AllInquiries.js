import { useEffect } from "react";
import { SubmissionConsumer } from '../../../providers/SubmissionProvider';
import { Table } from 'react-bootstrap';
import SingleInquiry from "./SingleInquiry";

const AllInquiries = ({ getAllSubmissions, submissions }) => {
  useEffect( () => {
    getAllSubmissions()
  }, [])

  return (
    <>
      <h1 className="text-center">All Orders</h1>
      <Table bordered hover style={{ fontSize: '24px'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date Inquired</th>
            <th>Name</th>
            <th>Date Needed By</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          
          { submissions.map( s => 
            <SingleInquiry 
              key={s.id} 
              {...s} 
            />  
          )}
        </tbody>
      </Table>
    </>
  )
}

const ConnectedAllInquiries = (props) => (
  <SubmissionConsumer>
    { value => <AllInquiries {...props} {...value} />}
  </SubmissionConsumer>
)

export default ConnectedAllInquiries;