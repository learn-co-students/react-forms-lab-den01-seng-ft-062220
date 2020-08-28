import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: '',
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(event) => this.handleInputChange(event)}
        />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }

  handleInputChange({target: { value }}) {
    this.setState({
      message: value,
    })
  }
}

export default TwitterMessage;
