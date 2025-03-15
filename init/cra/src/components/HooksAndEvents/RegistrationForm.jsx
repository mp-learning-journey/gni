import {useState} from "react";

export const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(name + ' ' + email);

        setEmail('');
        setName('')
    }

    return (
        <>
            <form>
                <input type="text" value={name} placeholder="Enter your name"
                       onChange={(e) => setName(e.target.value)}/>
                <input type="email" value={email} placeholder="Enter your email"
                       onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

