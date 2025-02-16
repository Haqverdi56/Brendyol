import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open, setOpen, productId, userId}) {
  const handleClose = () => setOpen(false);
  const [addComment, setAddComment] = useState({
    rating: '',
    comment: '',
    productId: productId._id,
    userId: userId?._id,
  })

  const handleForm = (e) => {
    e.preventDefault();
    axios.post('https://brendyol-fashion-backend.vercel.app/api/rating', addComment)
    .then(res=> {
      window.location.reload()
    })
    .catch(err => alert(err))
  } 
  
  const handleComment = (e) => {
    setAddComment({
      ...addComment,
      [e.target.name]: e.target.value,
      productId: productId._id,
      userId: userId?._id
    })
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='form-modal'>
          <form onSubmit={handleForm}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Rate:</p>
                <input type="number" name='rating' min='0' max='5' placeholder='0' onChange={handleComment} />
            </Typography>
            <Typography variant='p' id="modal-modal-description" sx={{ mt: 2 }}>
                <p>Comment:</p>
                <input type="text" name='comment' placeholder='Write your comments' onChange={handleComment}/>
            </Typography>
            <button type='submit' disableda={!addComment.rating || !addComment.comment ? true : false} >Add</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}