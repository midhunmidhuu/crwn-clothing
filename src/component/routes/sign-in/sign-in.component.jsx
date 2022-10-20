
import { signInWithGooglePopup, createUserFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user);
    }
    return(
        <div>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}>
                Sign In with Google
            </button>
        </div>
    )
}

export default SignIn;