import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { VscAccount } from 'react-icons/vsc';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function FadeMenu({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.location.reload()
  }

  return (
    <div style={{width: '2.5rem'}}>
      <Button
      style={{padding: '0' }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Link className='icons'>
          {
            user == null ? <VscAccount/> : <FiLogOut/>
          }
        </Link>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          user == null ? 
          <div className='sign-buttons'>
            <MenuItem onClick={handleClose}><Link to='login'>Sign in</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='signup'>Sign up</Link></MenuItem>
          </div>
          : <button className='logout-button' onClick={logout}>Logout</button>
        }
      </Menu>
    </div>
  );
}