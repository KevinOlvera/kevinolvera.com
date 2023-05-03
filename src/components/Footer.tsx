import React from "react";
import {Box, Button, Grid, IconButton, Typography} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {kevin} from "../config/theme";
import TextLogo from "./textLogo";

function Footer() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: kevin.colors.primary.firefly,
                    borderRadius: '15px 15px 15px 15px',
                    m: 2,
                    px: 6,
                    py: 6,
                    color: kevin.colors.secondary.zircon,
                }}
            >
                <Grid container direction={'row'}>
                    <Grid item xs={12} md={6}>
                        <TextLogo/>
                        <Typography>
                            I'm a software engineer and a tech enthusiast with {new Date().getFullYear() - 2019} years of experience working with
                            networking and automation for a big companies & startups. I love to learn new things and
                            share them with
                            others.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container direction={'row'} spacing={2} justifyContent={{xs: "center", md: "flex-end"}}
                              alignItems="center"
                              p={2}>
                            <Grid item xs={'auto'}><Button variant={'text'} color={'secondary'}>Home</Button></Grid>
                            <Grid item xs={'auto'}><Button variant={'text'} color={'secondary'}>About me</Button></Grid>
                            <Grid item xs={'auto'}><Button variant={'text'} color={'secondary'}>Contact</Button></Grid>
                        </Grid>
                        <Grid container direction={'row'} spacing={2} justifyContent={{xs: "center", md: "flex-end"}}
                              alignItems="center"
                              p={2}>
                            <Grid item xs={'auto'}>
                                <IconButton
                                    aria-label="delete"
                                    sx={{
                                        color: kevin.colors.secondary.zircon,
                                        background: '#0077b5',
                                        '&:hover': {
                                            background: '#0077b5',
                                        }
                                    }}
                                    href={'https://www.linkedin.com/in/kevin-olvera-4124a516b/'}
                                    target={'_blank'}
                                >
                                    <LinkedInIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <IconButton
                                    aria-label="delete"
                                    sx={{
                                        color: kevin.colors.secondary.zircon,
                                        background: '#1DA1F2',
                                        '&:hover': {
                                            background: '#1DA1F2',
                                        }
                                    }}
                                >
                                    <TwitterIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <IconButton
                                    aria-label="delete"
                                    sx={{
                                        color: kevin.colors.secondary.zircon,
                                        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
                                    }}
                                >
                                    <InstagramIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <IconButton
                                    aria-label="delete"
                                    sx={{
                                        color: kevin.colors.secondary.zircon,
                                        background: '#171515',
                                        '&:hover': {
                                            background: '#171515',
                                        }
                                    }}
                                    href={'https://github.com/KevinOlvera'}
                                    target={'_blank'}
                                >
                                    <GitHubIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={'auto'}>
                                <IconButton
                                    aria-label="delete"
                                    sx={{
                                        color: kevin.colors.secondary.zircon,
                                        background: '#128C7E',
                                        '&:hover': {
                                            background: '#128C7E',
                                        }
                                    }}
                                    href={'https://wa.me/525511928499'}
                                    target={'_blank'}
                                >
                                    <WhatsAppIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography sx={{pt: 5}}>© {new Date().getFullYear()} kevinolvera.com. All rights
                            reserved.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Footer;