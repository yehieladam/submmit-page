// PasswordStrength component
import React from 'react';

function PasswordStrength(props) {
const { password } = props;

let strength = '';
if (password.length === 0) {
strength = 'Please enter a password';
} else if (password.length <= 2) {
strength = 'Weak';
} else if (password.length <= 6) {
strength = 'Medium';
} else {
strength = 'Strong';
}

return (
<div>
<p>Password Strength: {strength}</p>
</div>
);
}

export default PasswordStrength;