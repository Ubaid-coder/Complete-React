import { useEffect, useState } from 'react'
import './App.css'

const getLocalItem = () => {
    const savedData = localStorage.getItem('registration');
    return savedData ? JSON.parse(savedData) : {
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
};



function RegistrationForm() {
    const [input, setInput] = useState(getLocalItem());

    // Update localStorage whenever input state changes
    useEffect(() => {
        localStorage.setItem('registration', JSON.stringify(input));
    }, [input]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({...input, [name]:value})
    };
  

    return (
        <div className='form-container'>
            <h2>Registration Form</h2>
   
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="fullname"
                        required
                        onChange={handleChange}
                        value={input.fullname}
                    />
                </label>

                <label>
                    Email Address:
                    <input
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                        value={input.email}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        required
                        onChange={handleChange}
                        value={input.password}
                    />
                </label>

                <label>
                    ConfirmPassword:
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        onChange={(e) => handleChange(e)}
                        value={input.confirmPassword}
                    />
                </label>

                <button onClick={() => {
                    localStorage.clear('registration');
                    setInput(getLocalItem);
                }}>Submit</button>
        </div>

    )
}

export default RegistrationForm