import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firbase.config";


// social Auth 
const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setloader] = useState()

    // Google  login 
    const googleLogin = () => {
        setloader(true)
        return signInWithPopup(auth, googleProvider)
    }



    // Register 
    const registerUser = (email, password) => {
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login SignUser 
    const singInUser = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //   LogOut 
    const logOut = () => {
        setloader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curentUser) => {
            setUser(curentUser)
            setloader(false)

        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        registerUser,
        singInUser,
        googleLogin,
        logOut,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;