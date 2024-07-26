import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../api';
import { Box, IconButton, Typography, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UserDetailPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getUser = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await fetchUserById(id);
            setUser(data);
        } catch (error) {
            setError("Error Fetching");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUser();
    }, [id]);

    const handleBack = () => {
        window.history.back();
    };

    const handleRetry = () => {
        getUser();
    };

    return (
        <Box sx={{ bgcolor: "primary.main", height: "100vh" }}>
            {loading ? (
                <Box sx={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
                    <Box component="span" className="loader"></Box>
                </Box>
            ) : (
                <>
                    {user ? (
                        <>
                            <Typography variant='h4'>{user.name}</Typography>
                            <Box component="p">
                                <Box className='fw-bold' component="span">
                                    <IconButton><MailIcon /></IconButton>
                                    Email:
                                </Box>
                                {user.email}
                            </Box>

                            <Box component="p">
                                <Box className='fw-bold' component="span">
                                    <IconButton><LocalPhoneIcon /></IconButton>
                                    Phone:
                                </Box>
                                {user.phone}
                            </Box>

                            <Box component="p">
                                <Box className='fw-bold' component="span">
                                    <IconButton><LanguageIcon /></IconButton>
                                    Website:
                                </Box>
                                {user.website}
                            </Box>

                            <Button
                                variant='text'
                                sx={{ margin: "10px", padding: "10px 20px", color: "white" }}
                                onClick={handleBack}
                            >
                                <IconButton><ArrowBackIcon /></IconButton>
                                Back
                            </Button>
                        </>
                    ) : (
                        <Box
                            component="h2"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh"
                            }}
                        >
                            <Typography variant="h6">{error}</Typography>
                            <Button
                                sx={{ color: "white", border: "1px solid", marginTop: "20px" }}
                                variant="text"
                                onClick={handleRetry}
                            >
                                Try Again
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
};

export default UserDetailPage;
