import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { NewTaskDialog } from '../src/renderer/components/NewTaskDialog';

export default {
  title: 'NewTaskDialog',
};


export const ButtonWrapper = ()=>{
  const [isopen, setIsOpen] = useState(false);
  const handleClickOpen = ()=>{
    setIsOpen(true);
  }
  const handleClose = ()=>{
    setIsOpen(false);
  }
  return (
    <>
    <Button onClick={handleClickOpen}/>
    <NewTaskDialog isOpen= {isopen} handleClose={handleClose}/>
    </>
  )
}

ButtonWrapper.story = {
  name: 'Common',
};
