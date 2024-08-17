import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()



    // googleLogin 
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location.state : "/")
            })
    }



    return (
        <div>
            <div className="divider">
                continue with
            </div>
            <div className="flex justify-around">
                <button
                    onClick={handleGoogleLogin}
                    className="btn  btn-outline btn-success">Continue with Google</button>

            </div>

        </div>
    );
};

export default SocialLogin;