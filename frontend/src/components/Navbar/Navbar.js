import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles'
import * as actionType from '../../constants/actionTypes';
import photo from  '../../images/logo.png';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return(
        <AppBar className={classes.appBar} position="static" color="default">
            <div className={classes.brandContainer}>
            <img className={classes.image} src={photo} alt="icon" style={{margin:"5px"}} height="60" />
            <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">PhotoShareApp</Typography>
            </div>
            <Toolbar className={classes.toolbar} >
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                    ) : (
                    <Button component={Link} to="/auth" variant="contained" style={{align:'right'}} color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar