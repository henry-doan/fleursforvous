import { Modal } from "react-bootstrap";
import { useState } from 'react'; 
import Moment from 'react-moment';

const SingleInquiry = ({ id, fullName, occasion, phone, email, dateNeeded, timeNeeded, colors, specialRequirements, priceRange, flowers, complete, created_at }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <tr onClick={() => setShow(true)}>
        <td>{id}</td>
        <td>
          <Moment format=" MMMM Do YYYY">
            {created_at}
          </Moment>
        </td>
        <td>{fullName}</td>
        <td>
        <Moment format="MMMM Do YYYY">
          {dateNeeded}
        </Moment>
        </td>
        <td>{complete ? 'Completed' : 'Incomplete'}</td>
      </tr>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order #{id} {complete ? 'Completed' : 'Incomplete'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Customer Information:</h2>
          <p style={{ fontSize: '20px' }}>Name: {fullName}</p>
          <p style={{ fontSize: '20px' }}>Email: {email}</p>
          <p style={{ fontSize: '20px' }}>Phone: {phone}</p>
          <hr />
          <h2>Order Details</h2>
          <p style={{ fontSize: '20px' }}>Occasion: {occasion}</p>
          <p style={{ fontSize: '20px' }}>
            Date Needed By: 
            <Moment format=" MMMM Do YYYY">
              {dateNeeded}
            </Moment>
          </p>
          <p style={{ fontSize: '20px' }}>
            Time Needed By: 
            <Moment format=" h:mm a">
              {timeNeeded}
            </Moment>
          </p>
          <p style={{ fontSize: '20px' }}>Colors: {colors}</p>
          <p style={{ fontSize: '20px' }}>Flowers: {flowers}</p>
          <p style={{ fontSize: '20px' }}>Size: {priceRange}</p>
          <p style={{ fontSize: '20px' }}>Special Requirements: {specialRequirements}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SingleInquiry;