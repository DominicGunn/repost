import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

class PostForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field component="textarea" name="content" />
        <input type="submit" />
      </form>
    )
  }
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

PostForm = reduxForm({
  form: 'post'
})(PostForm)

export default PostForm
