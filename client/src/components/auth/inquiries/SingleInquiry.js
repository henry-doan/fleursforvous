

const SingleInquiry = ({ id, fullName, occasion, phone, email, dateNeeded, timeNeeded, colors, specialRequirements, priceRange, flowers, complete }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{fullName}</td>
        <td>{dateNeeded}</td>
        <td>{complete ? 'Completed' : 'incomplete'}</td>
      </tr>
    </>
  )
}

export default SingleInquiry;