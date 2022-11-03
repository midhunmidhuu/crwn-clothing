import { useState } from "react";
import { signInAuthUserWithUserAndPassword, createUserFromAuth , signInWithGooglePopup} from "../../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../../button-component/button.component";

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        await createUserFromAuth(user);
    }

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value } )
    };

    const clearForms = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithUserAndPassword(email, password);
            console.log(response);
            clearForms();
        } catch(error){
            console.log(error.code)
            if(error.code === 'auth/wrong-password') 
            { alert('Incorrect Password') }
            else if(error.code === 'auth/user-not-found') 
            { alert('Incorrect Mail Id') }
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an Account?</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email'
                 type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password'
                type='password' required onChange={handleChange} name='password' value={password}/>
                <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button type='button' onClick={logGoogleUser} buttonType='google'>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;