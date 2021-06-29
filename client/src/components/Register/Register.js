import { auth } from "../../utils/firebase";
import { Form, Button } from "react-bootstrap";
import Card from "../Common/Card/Card";

const Register = ({ history }) => {
  const onRegisterSubmitForm = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    auth
      .createUserWithEmailAndPassword(username, password)
      .then((userCredentials) => {
        history.push("/fixtures");
      });
  };

  return (
    <Card>
      <Form className="mt-3" onSubmit={onRegisterSubmitForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            name="username"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default Register;
