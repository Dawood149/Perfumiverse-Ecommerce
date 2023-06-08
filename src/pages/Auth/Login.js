import React from "react"
import Layout from "../../components/Layouts/layout"

const Login = () => {
    return (
        <Layout>

            <div className="log-in">
                <h1 className='mb-5'>Log In</h1>
                <form>
                    <div class="mb-3">
                        <input placeholder="Email address" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <input placeholder="Password" type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="button" class="btn btn-dark">Log in</button>
                </form>
            </div>

        </Layout>
    )
}

export default Login