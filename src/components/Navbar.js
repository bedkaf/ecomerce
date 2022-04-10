import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/removebg.png'
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "#ff7043",
    boxShadow: "nome",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "2rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.image} />
          </IconButton>

          <Typography variant="h6" color="textPrimary" component="p">
            <b>Esperenado usuario</b>
          </Typography>

          <div className={classes.button}>
            <Button variant= "outlined" color="primary" >
            <strong>Sing in</strong>
            </Button>
            <IconButton aria-label="Mira los articulos agregados a tu carrito" color="inherit">
              <ShoppingCart fontSize="large" color="primary"/>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
