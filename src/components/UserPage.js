import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api';
import { Box, Typography, Button } from '@mui/material';

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getUsers = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await fetchUsers();
            setUsers(data);
        } catch (error) {
            setError("Error Fetching");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleRetry = () => {
        getUsers();
    };

    return (
        <Box sx={{ bgcolor: "primary.main", height: "100vh" }}>
            <Typography className='text-decoration-underline' variant='h4'>Users List</Typography>

            {loading ? (
                <Box sx={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                    <Box component="span" className="loader"></Box>
                </Box>
            ) : (
                <>
                    {users.length ? (
                        <div>
                            <ol>
                                {users.map(user => (
                                    <li key={user.id}>
                                        <Link style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} to={`/user/${user.id}`}>{user.name}</Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ) : (
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                            <Typography variant='h6'>{error}</Typography>
                            <Button sx={{
                                color:"white",
                                border:"1px solid"
                            }} variant="text" onClick={handleRetry}>
                                Try Again
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
};

export default UserPage;
