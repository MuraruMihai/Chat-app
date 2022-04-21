import React,{useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // username | password ask chatengine for messages
        // works ? login : error

        const authObject = {
            'Project-ID' : "97d664bf-6671-410e-8c78-e659134fe974",
            'User-Name' : username,
            'User-Secret' : password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError("Ups credentiale gresite :))")
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>
                    MTZ Design - Chat Login
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input'
                        placeholder='Username'
                        required
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                        placeholder='Password'
                        required
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Login</span>
                        </button>
                    </div>
                    <h3 className='error'>{error}</h3>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;