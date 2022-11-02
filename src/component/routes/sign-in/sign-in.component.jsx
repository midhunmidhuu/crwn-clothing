import { signInWithGooglePopup, createUserFromAuth, signInWithGoogleRedirect, auth } from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user);
    }
    return(
        <div>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;