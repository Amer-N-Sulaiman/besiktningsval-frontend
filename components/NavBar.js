// import logo from '../assets/logo.png'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import {useHistory} from 'react-router-dom';
import {useRouter} from 'next/router'

import Image from 'next/image'



const pages = ['Besiktning', 'Kontakta oss', 'Om oss'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  var router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, lineHeight: '80px' }}
          >
            <img src='/besiktning-logo.png' alt='besiktning logo' onClick={()=>{router.push("/")}} style={{height:'60px', width: '116px', marginTop: '10px'}} />
            <span onClick={()=>{router.push("/")}} style={{marginLeft:'30px'}}> BesiktningsVal</span>
          </Typography>

          <Box sx={{ display: { xs: 'block', md: 'none' }, marginRight: '25px' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{float: 'left', marginLeft: '10px'}}
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={()=>{router.push('/'+page.toLowerCase().replace(/ /g,''))}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, lineHeight: '80px' }}
          >
            <span onClick={()=>{router.push("/")}} style={{}}> BesiktningsVal</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <div style={{width: '100%'}}>
            {pages.map((page) => (
              <Button
                style={{float: 'right', marginRight: '10px'}}
                key={page}
                onClick={()=>{
                  setAnchorElNav(null);
                  router.push('/'+page.toLowerCase().replace(/ /g,''));
                }}
                sx={{ my: 2, color: 'white', display: 'block', float:'right' }}
              >
                {page}
              </Button>
            ))}
            </div>
          </Box>

          {/*<Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: '45px' }}
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
                    </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;