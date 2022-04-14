import React from 'react'
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

interface DialogBoxProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

//*  Pass dialog box content as a children
const DialogBox: React.FC<DialogBoxProps> = ({
    open,
    handleClose,
    title,
    children,
    fullWidth,
    maxWidth,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle>
        <Typography>{title}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default DialogBox;