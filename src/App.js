import React, { useState } from 'react';
import PasswordStrength from './PasswordStrength';
import './App.css';

function App() {
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
console.log('Submitting password:', password);
}

return (
<div className="login-container">
<form onSubmit={handleSubmit}>
<h1>Login</h1>
<label>
Password:
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</label>
<button type="submit" disabled={password.length < 3}>Submit</button>
</form>
<PasswordStrength password={password} />
</div>
);
}

export default App;