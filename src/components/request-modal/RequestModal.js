import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Dialog, DialogActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const RequestModal = ({ open, message, success, handleCloseModal }) => {
  const close = () => {
    handleCloseModal(false)
  }
  return (

    <Dialog open={open} onClose={close}>
      <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 'borderRadius', m: 1 }}>
        <Alert severity={success ? "success" : "warning"} icon={success ? <CheckCircleOutlineIcon fontSize="inherit" /> : null}>
          {message}
        </Alert>
        <DialogActions>
          <IconButton edge="end" color="inherit" onClick={close} aria-label="close">
            <Button titleAccess='close button' >fechar</Button>
          </IconButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

