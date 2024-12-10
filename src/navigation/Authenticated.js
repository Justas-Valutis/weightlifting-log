import { React, useContext } from 'react'
import { ThemeProvider } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import UserTab from './UserTab';
import AdminTab from './AdminTab';

const Authenticated = () => {
    const { isAdmin } = useContext(AuthContext);

    return (
        <ThemeProvider>
            {isAdmin ? <AdminTab /> : <UserTab />}
        </ThemeProvider>
    )
}

export default Authenticated