import { Dialog, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

const MailcheckForm = () => {
  const [mailCheckFormOpen, setMailCheckFormOpen] = useState(false);

  const handleClose = () => {
    setMailCheckFormOpen(true);
  };
  return (
    <Dialog open={mailCheckFormOpen} onClose={handleClose}>
      <DialogTitle>이메일 인증 확인페이지 입니다.</DialogTitle>
    </Dialog>
  );
};

export default MailcheckForm;
