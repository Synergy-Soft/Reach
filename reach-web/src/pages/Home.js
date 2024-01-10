import React, { useState} from "react"
import { Grid, Box, Typography, Button } from "@mui/material"

const Home = () => {
    // logic

    // jsx
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box
                    sx={{
                        flexShrink: 0,
                        backgroundColor: '#032F73',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'white',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontSize: '3vw',
                            fontWeight: 'bold',
                            m: 4,
                            t: 1,
                        }}
                    >
                        Your Gateway to Amplified Brand Exposure
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            position: 'relative',
                            top: '-20px',
                            right: '-20px',
                        }}
                    >
                        Learn More
                    </Button>
                </Box>
            </Grid>
            <Grid container>
                <Box 
                    sx={{
                        backgroundColor: '#FFF1EE',
                        marginLeft: 'auto',
                        marginRight: '32px',
                        l: '16px', 
                        r: '16px', 
                        height: '40vh',
                        width: '60vh',                      
                    }}
                >
                    <Typography sx  ={{
                        color: '#FF7F63',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 'Bold',
                    }}>Reach</Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Home;