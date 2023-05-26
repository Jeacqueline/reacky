import React, {useState} from "react";

const Contact = () =>{
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [message, setMessage]= useState('');
    const [isSubmitted, setIsSubmitted]= useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        setIsSubmitted(true);
    };

    return (
        <div>
            {isSubmitted ? (
                <p>Your email has been sending correctly! 📧</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='message'>Message: </label>
                        <textarea id='message' value={message} onChange={(e)=> setMessage(e.target.value)}>

                        </textarea>
                    </div>
                    <button type='submit'>Send 📧</button>
                </form>
            )}
        </div>
    );
    
};

export default Contact;