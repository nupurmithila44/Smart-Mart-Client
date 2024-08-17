

import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const { singInUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            toast('Length must be at least 6 character')
        }
        else if (!/[a-z]/.test(password)) {
            toast('Must have a Lowercase letter in the password')
        }
        else if (!/[A-Z]/.test(password)) {
            toast('Must have an Uppercase letter in the password')
        }
        console.log(email, password)
        singInUser(email, password)
            .then((result) => {
                console.log(result.user)
                toast('your login successfully')
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
                toast('Invalid email or password')
            })
    }
    return (
        <div className="border mb-5 lg:w-[500px] w-[300px] mx-auto py-14 mt-10 bg-slate-100 rounded-lg">
            <h2 className="text-3xl text-center font-bold">Please Login</h2>
            <form onSubmit={handleLogin} className="w-[300] p-5 lg:w-[500px] mx-auto">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <div className="mb-4 relative">
                        <input name="password"
                            type='password'
                            placeholder="password"
                            className="input input-bordered w-full" required />
                    </div>
                    {/* <div className="mb-4 relative">
                <input name="password"
                    type={showpassword ? 'text' : 'password'}
                    placeholder="password"
                    className="input input-bordered w-full" required />
                <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showpassword)}>
                    {
                        showpassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                    }
                </span>
            </div> */}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-xl font-bold">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#e8d4b3] text-2xl">Login</button>
                </div>
                <label className="label font-semibold" >
                    Now here? <Link to="/register" className=" label-text-alt link link-hover  font-semibold">create an account</Link>
                </label>
            </form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;