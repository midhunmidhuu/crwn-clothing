import { useState } from "react";
import { createAuthUserWithUserAndPassword, createUserFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../../button-component/button.component";

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value } )
    };

    const clearForms = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (password !== confirmPassword){
            alert("Password Do Not Match")
            return;
        }

        try {
            const {user} = await createAuthUserWithUserAndPassword(email,password);
            await createUserFromAuth (user,{displayName});
            clearForms();
        } catch(error){
            if( error.code === 'auth/weak-password') {
                alert('Password should be at least 6 characters length')
            }
            else if ( error.code === 'auth/email-already-in-use' )
            {
                alert('This Email already Exists. Try to sign in instead')
            }
            else{
                console.log('User creation encountered an Error',error);
            }
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name'
                type='text' required onChange={handleChange} name='displayName' value={displayName}
                />
                <FormInput label='Email'
                 type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password'
                type='password' required onChange={handleChange} name='password' value={password}/>
                 <FormInput label='Confirm Password'
                type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;