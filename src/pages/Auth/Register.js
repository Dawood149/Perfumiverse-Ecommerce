import React, { useState } from 'react'
import Layout from '../../components/Layouts/layout'
import { toast } from 'react-toastify'
const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  // this function takes input data from form and print it on console.
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password, phone, address);
    toast.success('Register Successfull')
  }

  return (
    <Layout>
      <div className='register'>
        <h1 className='mb-5'>Registration</h1>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input required placeholder='Enter your name' type="Name" className="form-control" id="exampleInputEmail1"
              value={name} onChange={(event) => setName(event.target.value)} />
          </div>

          <div className="mb-3">
            <input required placeholder='email' type="email" className="form-control" id="exampleInputPassword1"
              value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>

          <div className="mb-3">
            <input required placeholder='Password' type="password" className="form-control" id="exampleInputPassword1"
              value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div className="mb-3">
            <input required placeholder='Phone#' type="tel" className="form-control" id="exampleInputPassword1"
              value={phone} onChange={(event) => setPhone(event.target.value)} />
          </div>

          <div className="mb-3">
            <input required placeholder='Address' type="address" className="form-control" id="exampleInputPassword1"
              value={address} onChange={(event) => setAddress(event.target.value)} />
          </div>

          <button class="btn btn-dark ">Register</button>
        </form>



      </div>
    </Layout>

  )
}

export default Register