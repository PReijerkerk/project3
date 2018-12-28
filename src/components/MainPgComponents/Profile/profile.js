// this will be a quick profile card that will have username, avitar
//collections with a badge logging # of collections on the button labeled 
//"collections" besides this button it on the card thre will be a "+" for adding
//additional collections to your profile. This card will be beside to the
//right of the graphing display of the collections (using plot.ly.javascript)
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

function SimpleBadge(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={4} color="primary"/>
        <Badge className={classes.margin} badgeContent={10} color="secondary"/>
        <IconButton aria-label="4 pending messages" className={classes.margin}>
          <Badge badgeContent={4} color="primary"/>
        </IconButton>
      </div>
      <AppBar position="static" className={classes.margin}>
        <Tabs value={0}>
          <Tab
          // this below badge will need to have a function for calculating # of
          //collections to put hin the badgeContent feild below:
            label={
              <Badge className={classes.padding} color="secondary" badgeContent={4}>
                My Collections
              </Badge>
            }
          />
          <Tab label="User Setting" />
        </Tabs>
      </AppBar>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Button variant="contained">Add new Collection</Button>
      </Badge>
    </div>
  );
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBadge);
