import React, { Fragment, useState } from 'react'
import jsonData from './jsonData'

interface IFormData {
  name: string,
  email: string,
  phone: string,
  password: string
}

class Form extends React.Component<IFormData> {

  constructor(props: IFormData) {
    super(props)
    this.state = {
      name: '',
      email: '',
      number: '',
      password: ''
    }

    this.checkName = this.checkName.bind(this)
    this.checkEmail = this.checkEmail.bind(this)
    this.checkPhone = this.checkPhone.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event: any) {
    alert("Form Submitted")
    console.log(jsonData)
    this.state = {

    }
  }

  checkName(event: any) {
    const { name, value } = event.target
    if (value.length < 6)
      console.log('Name should be at least 6 characters')
    else {
      const nameRegex = "/^[A-Za-z]+$/"
      const res:any = nameRegex.match(value)
      if (res != null)
        this.setState({ [name]: value })
      else
        console.log('Only alphabets are allowed')
    }
  }

  checkEmail(event: any) {
    const { name, value } = event.target
    const emailRegex = "/[a-zA-Z]+[.][a-zA-Z]+[.][a-zA-Z]+/"
    if (emailRegex.match(value))
      this.setState({ [name]: value })
    else
      console.log('Please enter valid email')
  }

  checkPhone(event: any) {
    const { name, value } = event.target
    if (value.length < 10)
      console.log('Name should be at least 6 characters')
    else {
      const phoneRegex = "/[0-9]{10}/"
      if (phoneRegex.match(value))
        this.setState({ [name]: value })
      else
        console.log('Please enter 10 digits mobile number')
    }
  }

  checkPassword(event: any) {
    const { name, value } = event.target
    if (value.length < 6)
      console.log('Password should be at least 6 characters')
    else {
      this.setState({ [name]: value })
    }
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="full name (eg: Alpha Zero)" required onChange={this.checkName} />
          <input type="email" placeholder="email" required onChange={this.checkEmail}/>
          <input type="number" placeholder="phone" required onChange={this.checkPhone}/>
          <input type="password" placeholder="******" required onChange={this.checkPassword}/>
          <input type="submit" value="submit" onSubmit={this.handleSubmit}/>
        </form>
        <div></div>
      </Fragment>
    )
  }
}

export default Form
