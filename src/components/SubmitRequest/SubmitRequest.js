'use client'

import classes from "./SubmitRequest.module.css";
import {Button} from "@mantine/core";

export const SubmitRequest = () => {
  const handler = () => {
    window.open('https://t.me/+1Ph25Y-d5m1mNmQ6', '_blank');
  };
  
  return (
    <Button className={classes.submit} onClick={handler}>Залишити заявку</Button>
  );
};
