import React from "react";
import produce from "immer";
import { Form, Icon, Input, Button } from "antd";

class NormalSignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    email: null,
    password: null,
    firstName: null,
    lastName: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleChange(e) {
    e.persist();
    this.setState(
      produce(draft => {
        draft[e.target.name] = e.target.value;
      })
    );
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 8, offset: 8 }}
      >
        <Form.Item>
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            value={this.state.password}
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            value={this.state.firstName}
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            value={this.state.firstName}
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Signup
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalSignupForm
);

export default WrappedNormalLoginForm;
