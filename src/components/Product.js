import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import { accounting } from 'accounting';

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

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform",{duration: theme.transitions.duration.shortest,}),
  },
  
  expandOpen: {
    transform: "rotate(180deg)",
  },

}));

export default function Product({product : {id, name, productType, price, ranting, image, description}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     HBM
        //   </Avatar>
        // }
        
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

      <CardActions disableSpacing>

        <IconButton aria-label="add to Cart" >
          <AddShoppingCart fontSize='large' />
        </IconButton>

        {Array(ranting).fill().map((_, i) => (
          <p key={i} >&#11088;</p>
        ))}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent>
          <Typography paragraph>{description}</Typography>
          
        </CardContent>

      </Collapse>
    </Card>
  );
}
