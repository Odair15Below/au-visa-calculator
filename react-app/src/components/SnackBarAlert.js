import { Alert, Fade, Snackbar } from '@material-ui/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { closeAlertMessage, getAlertMessage } from '../store/app';


function GrowTransition(props) {
    return <Fade {...props} />;
  }

export default function PointsAddedAlert() {

    const message = useSelector(getAlertMessage);

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeAlertMessage());
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={message !== ''}
            onClose={handleClose}
            autoHideDuration={3000}
            key={uuid()}
            TransitionComponent={GrowTransition}
            onClick={handleClose}
        >
            <Alert severity="success">{message}</Alert>
        </Snackbar>
    )
}