
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Register = () => {
    const { registerUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(registerUser)
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
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
        console.log(name, email, photo, password)
        registerUser(email, password)
        .then( result =>{
            console.log(result.user)
            toast('your register successfully')

            logOut()
            .then(()=>{
                navigate('/login')
            })

            // updateProfile(auth.currentUser, {
            //     displayName: name,
            //     photoURL: photo
            // })
            .then(result =>{
                console.log(result.user)
            })
            .catch(error =>{
                console.log(error)
            })   
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="border mb-5 lg:w-[500px] w-[300px] mx-auto py-14 mt-10 bg-slate-100 rounded-lg ">
            <h2 className="text-3xl text-center">Please Register</h2>
            <form onSubmit={handleRegister} className="w-[300] p-5 lg:w-[500px] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">photoURL</span>
                    </label>
                    <input type="photo" name="photo" placeholder="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
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
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn dark:bg-[#304f47] dark:text-white ">Register</button>
                </div>
            </form>
            <div>
                <p className="text-center mt-2">Already have an account? <Link to='/login' className="  font-bold text-blue-800">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;