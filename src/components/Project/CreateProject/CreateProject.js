import React from "react";
import produce from "immer";
import { Form, Input, Button } from "antd";

//redux
import { connect } from "react-redux";
import { createProject } from "../../../store/actionCreators/project";

const { TextArea } = Input;

class CreateProject extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    title: null,
    content: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createProject } = this.props;
    const { title, content } = this.state;

    createProject({ title, content });
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
      //<Form onSubmit={this.handleSubmit} className="login-form">
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="Title">
          <Input
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item label="Content">
          <TextArea
            rows={4}
            value={this.state.content}
            placeholder="Content"
            name="content"
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  CreateProject
);

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(WrappedNormalLoginForm);
