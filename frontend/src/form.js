import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";

//must specify two props for form
//formElements: js object
//form elements must have label, name
//handleSubmit function

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var target = event.target;

    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <div>
        {this.props.formElements.map(elementData => {
          return (
            <div className="field">
              <label className="label">{elementData[0]}</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name={elementData[1]}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          );
        })}
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              onClick={this.props.handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
