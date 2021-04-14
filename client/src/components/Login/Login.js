import { Form, Button } from "react-bootstrap";
import { auth } from "../../utils/firebase";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  debugger;
  const onLoginSubmitForm = (e) => {
    e.preventDefault();

    debugger;
    const username = e.target.username.value;
    const password = e.target.password.value;

    auth
      .signInWithEmailAndPassword(username, password)
      .then((userCredentials) => {
        history.push("/fixtures");
      });
  };

  return (
    <Form onSubmit={onLoginSubmitForm}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="username" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Form.Text className="text-muted">
        Don't have an account? <Link to="/register">Register</Link>
      </Form.Text>
    </Form>
  );
};

export default Login;
