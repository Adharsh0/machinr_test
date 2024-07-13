// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//   return (
//    <>
//    <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
            
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Product management
//           </Typography>
//           {/* <Button color="inherit">Home</Button>
//           <Button color="inherit">Add</Button> */}
//            <Link to={'/'}><Button color="inherit">Home</Button></Link>
//           <Link to={'/add'}><Button color="inherit">ADD</Button></Link>
//         </Toolbar>
//       </AppBar>
//     </Box>
//    </>
//   )
// }

// export default Navbar

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#051650', boxShadow: 3 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Product Management
            </Typography>
            <Button color="inherit" component={Link} to="/" sx={{ mx: 1, textTransform: 'none' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/add" sx={{ mx: 1, textTransform: 'none' }}>
              Add
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
