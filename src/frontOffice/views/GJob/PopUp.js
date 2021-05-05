import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Cv from './Cv';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog =(   {isAuth}  )=> {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
  
      setOpen(false);
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  if(!isAuth){
    history.push("/login")
  }
  return (
    <div>
      {isAuth ? <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Apply Job
      </Button> :
      <Button variant="outlined" color="primary" disabled>
      Apply Job
    </Button>}
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Apply Job
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Whould you like to Apply in this Job?" secondary="Create your Resume" />
          </ListItem>
          <Divider />
          <ListItem button>
            {/* <ListItemText primary="Default notification ringtone" secondary="Tethys" /> */}
            <Cv/>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
Register.propTypes= {
  isAuth: PropTypes.bool
};
const mapStateToProps = state => (
  {
    isAuth: state.auth.isAuthenticated
  }
);
export default connect(mapStateToProps, {}) (FullScreenDialog);