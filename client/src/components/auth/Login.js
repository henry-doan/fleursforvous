import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Container, Form, Button, Card } from 'react-bootstrap';

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  }
  
  return (
    <Container style={{ display: 'flex', justifyContent: 'center',  }}>
      <Card style={{ width: '24rem', marginTop: 150 }}>
        <Card.Body className='text-center'>
          <Card.Title>Login</Card.Title>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <br />
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  autoFocus
                  required         
                  name='email'
                  value={user.email}
                  placeholder='Email'
                  onChange={(e) => setUser({ ...user, email: e.target.value })} 
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  required
                  name='password'
                  value={user.password}
                  placeholder='Password'
                  type='password'
                  onChange={(e) => setUser({ ...user, password: e.target.value })} 
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )  
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;