import React from "react";
import {Box, Grid, Typography} from "@mui/material";

function TextLogo() {
    return (
        <>
            <Box>
                <Grid container direction={'row'}>
                    <Grid item xs={'auto'} sx={{my: 2}}>
                        <Typography
                            variant="h5"
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                fontWeight: 700,
                                margin: 0,
                                padding: 0,
                                fontFamily: 'Inter',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            [K]
                        </Typography>
                    </Grid>
                    <Grid item xs={'auto'} sx={{my: 2}}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                m: 0,
                                flexGrow: 0,
                                fontFamily: 'Inter',
                                color: 'inherit',
                                textDecoration: 'none',
                                marginLeft: '0.5rem',
                            }}
                        >
                            kevinolvera.
                        </Typography>
                    </Grid>
                    <Grid item xs={'auto'} sx={{my: 2}}>
                        <Typography
                            sx={{
                                fontSize: '0.8rem',
                                m: 0,
                                fontFamily: 'Inter',
                                color: 'inherit',
                                textDecoration: 'none',
                                marginTop: '0.6rem',
                            }}
                        >
                            com
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default TextLogo;