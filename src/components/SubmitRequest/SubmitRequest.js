'use client'

import classes from "./SubmitRequest.module.css";
import {Button} from "@mantine/core";

export const SubmitRequest = () => {
  const handler = () => {
    window.open(process.env.NEXT_PUBLIC_TG_BOT_URL, '_blank');
  };
  
  return (
    <Button className={classes.submit} onClick={handler}>Залишити заявку</Button>
  );
};
