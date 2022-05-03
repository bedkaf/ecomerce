import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { accounting } from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
  },

  action: {
    marginTop: "1rem",
    fontSize: "1rem",
  },

  media: {
    height: 0,
    width: "80%",
    paddingTop: "56.25%", // hace relacion a 16:9
    display: "block",
    margin: "0px auto",
  },

  cardAction: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },

  cadrRating: {
    display: "flex",
  }

}));

export default function CheckoutCard({product : {id, name, productType, price, ranting, image, description}}) {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardHeader 
        title={name.slice(0,19)}
        subheader="in Stock"
      />
      
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />

      <CardContent>        
        <Typography  variant='h6' color='textSecondary'>
          {accounting.formatMoney(price,"COP ")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {productType}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardAction}>
        <div className={classes.cadrRating}  >
          {Array(ranting).fill().map((_, i) => (
            <p key={i} >&#11088;</p>
          ))}
        </div>
        <IconButton >
          <DeleteIcon fontSize='large' />  
        </IconButton>
      </CardActions>
     
    </Card>
  );
}
