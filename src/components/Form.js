import React, { useState } from 'react';
import SIgnupForm from './SIgnupForm';
import SignupSuccess from './SignupSuccess';
const Form = () => {
    const [formIsSumbitted,setFormSubmitted]=useState(false);
    const submitForm=()=>{
        setFormSubmitted(true);
    };
    return (
        <div>
           {!formIsSumbitted ? <SIgnupForm submitForm={submitForm}/> : <SignupSuccess/>}
        </div>
    )
}

export default Form

