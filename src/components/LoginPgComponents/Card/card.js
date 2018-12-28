//this card is for the initial login

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import {createMuiTheme} from '@material-ui/core/style';
// import teal from '@material-ui/core/colors/teal';
import './card.css';
// this is for the color theme (NOT WORKING YET)
const theme= createMuiTheme({
  palette: {
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#9ccc65',
    },
  },
})

// desire this to be transferred to the card.css file
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.52dazhew.com/data/out/78/586049839-empty-bookshelf-wallpaper.jpg"
          title="Trophy Case"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Trophy Case
          </Typography>
          <Typography component="p">
          Our Telos is to compile user collections! 
      We want your hobbies & passtimes to be conveniently accessible for 
      you. That said, we pride ourselves in top tier data-storage 
      and an inviting user experience that will display what we call your "Trophy Case" 
      in all its glory!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Login
        </Button>
        <Button size="small" color="primary">
          Create Account
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles,theme)(MediaCard);