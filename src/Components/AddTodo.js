import React from "react";

class AddTodo extends React.Component {
  state = {
    content: "",
  };
  handleTextChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleTodoSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.props.addTodo(this.state.content);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            onChange={this.handleTextChange}
            placeholder="New Todo Item"
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
