const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

const validateUser = (userName, email, password, repeatPassword, setError) => {
    if (!userName || userName.length < 3) {
        setError('Username is required and minimum 3 characters');
        return false;
    }

    if (!email || !validateEmail(email)) {
        setError('Email is required. Please enter a valid email');
        return false;
    }

    if (password.length < 5 || password !== repeatPassword) {
        setError('Passwords do not match or is less than 5 characters');
        return false;
    }
    setError('');
    return true;
}

const validateLogin = (userName, password, setError) => {
    if (!userName || userName.length < 3) {
        setError('Username is required and minimum 3 characters');
        return false;
    }

    if (password.length < 5) {
        setError('Password is required and minimum 5 characters');
        return false;
    }
    setError('');
    return true;
}



export { validateUser, validateLogin };