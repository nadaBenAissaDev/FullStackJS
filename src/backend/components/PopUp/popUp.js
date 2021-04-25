import React from 'react';
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core';
const popUp = (props) => {
  const {title, children, openPopup, setOpenPopup} = props;
  return (
    <Dialog open={openPopup}>
        <DialogTitle>
            <div>Title:</div>
        </DialogTitle>
        <DialogContent>
            <div>Content goes here.</div>
        </DialogContent>
    </Dialog>
  );
};

export default popUp;