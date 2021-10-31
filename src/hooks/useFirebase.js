// import { useState, useEffect } from "react"
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import initializeAuthentication from "../Firebase/firebase.init";

// initializeAuthentication()

// /*  const [user, setUser] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const auth = getAuth();
//   // google authentication method
//   const googleSignIn = () => {
//     setIsLoading(true);
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };
//   const logOut = () => {
//     s */

// const useFirebase = () =>
// {
//     // const [user, setUser] = useState({});
//     // const [isLoading, setIsLoading] = useState(false);
//     // const auth = getAuth();
//     // const googleProvider = new GoogleAuthProvider();

//     // const signInUsingGoogle = () =>
//     // {

//     //     if (isLoading)
//     //     {
//     //         return signInWithPopup(auth, googleProvider);
//     //     }
//     //     else
//     //     {
//     //         setIsLoading(true);
//     //     }


//     //RAsed vai code
//     const [user, setUser] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const auth = getAuth();
//     // google authentication method
//     const googleSignIn = () =>
//     {
//         setIsLoading(true);
//         signInWithPopup(auth, googleProvider)
//             .then((result) =>
//             {
//                 const user = result.user;
//                 setUser(user);
//             })
//             .catch((error) =>
//             {
//                 console.log(error);
//             })
//             .finally(() =>
//             {
//                 setIsLoading(false);
//             });
//     };


// }


// const logOut = () =>
// {
//     signOut(auth)
//         .then(() =>
//         {
//             setUser({})
//         })
// }

// useEffect(() =>
// {
//     onAuthStateChanged(auth, (user) =>
//     {
//         if (user)
//         {
//             setUser(user)
//         }
//     })
// }, []);


// return {
//     user,
//     signInUsingGoogle,
//     logOut,
//     isLoading,
//     setIsLoading
// }
// }

// export default useFirebase;





import React from "react";
import
    {
        getAuth,
        signInWithPopup,
        GoogleAuthProvider,
        onAuthStateChanged,
        signOut,
    } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () =>
{
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    // google authentication method
    const googleSignIn = () =>
    {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) =>
            {
                const user = result.user;
                setUser(user);
            })
            .catch((error) =>
            {
                console.log(error);
            })
            .finally(() =>
            {
                setIsLoading(false);
            });
    };
    const logOut = () =>
    {
        setIsLoading(true);
        signOut(auth)
            .then(() =>
            {
                // empty user
                setUser({});
            })
            .catch((error) =>
            {
                // setError
                // setError(error.message);
            })
            .finally(() =>
            {
                setIsLoading(false);
            });
    };
    // for supply authentication  above place
    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(auth, (user) =>
        {
            if (user)
            {
                setUser(user);
            } else
            {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribe;
    }, []);
    // retutn authentication methods and veriable
    return {
        user,
        googleSignIn,
        isLoading,
        logOut,
    };
};

export default UseFirebase;