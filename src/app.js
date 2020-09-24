import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "./store/store";
import { connect } from "react-redux";
import { getUser, typeInForm } from "./User/user.reducer";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.typeInForm = this.typeInForm.bind(this);
    console.log(this.props.user);
  }

  typeInForm(evt) {
    console.log(evt.target.value);
    this.props.typeInForm(evt.target.value);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <label>{this.props.user}</label>
          <input
            type="text"
            value={this.props.user || ""}
            onChange={this.typeInForm}
          />
        </form>
        <style jsx>{`
          form {
            border: 1px solid red;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Form.propTypes = {
  user: PropTypes.string,
  typeInForm: PropTypes.func,
};

export default Form;

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    typeInForm: (input) => dispatch(typeInForm(input)),
  };
};

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);

const wrapper = document.getElementById("minia-match-client");
wrapper
  ? ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <ConnectedForm />
        </React.StrictMode>
      </Provider>,
      wrapper
    )
  : false;
