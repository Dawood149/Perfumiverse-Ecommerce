import React from 'react'
import Layout from '../components/Layouts/layout'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <Layout>
    <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading mb-4">Oops ! Page Not Found</h2>
        <Link to="/" className="btn btn-secondary">
          Go Back
        </Link>
      </div>
    </Layout>
  )
}

export default Pagenotfound