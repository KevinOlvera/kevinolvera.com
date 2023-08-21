import React from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'Services', 'Blog', 'Projects', 'Contact Me'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position='static' color='secondary' elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        sx={{
                            display: {xs: 'none', md: 'flex'},
                            mr: 2,
                            fontWeight: 700,
                            margin: 0,
                            padding: 0,
                            fontFamily: 'Inter',
                        }}
                    >
                        [K]
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            m: 0,
                            marginLeft: '0.5rem',
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'Inter',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        kevinolvera.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.8rem',
                            m: 0,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'Inter',
                            color: 'inherit',
                            textDecoration: 'none',
                            marginTop: '0.3rem',
                        }}
                    >
                        com
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{
                            display: {xs: 'flex', md: 'none'},
                            mr: 2,
                            fontWeight: 700,
                            margin: 0,
                            padding: 0,
                            fontFamily: 'Inter',
                        }}
                    >
                        [K]
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            m: 0,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 0,
                            fontFamily: 'Inter',
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: '0.5rem',
                        }}
                    >
                        kevinolvera.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.8rem',
                            m: 0,
                            display: {xs: 'flex', md: 'none'},
                            fontFamily: 'Inter',
                            color: 'inherit',
                            textDecoration: 'none',
                            marginTop: '0.5rem',
                        }}
                    >
                        com
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{m: 2, display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Kovin"
                                        src="https://picsur.kevo.mx/i/00cda7bc-8bf8-4d83-a6b1-ded76e56f8a3.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;