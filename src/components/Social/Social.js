'use client'

import {Box, Group} from "@mantine/core";
import {IconBrandTelegram, IconMail} from "@tabler/icons-react";
import classes from "./Social.module.css";

export const Social = ({ names }) => {
  const handleTelegramClick = () => {
    window.open("https://t.me/+1Ph25Y-d5m1mNmQ6", "_blank");
  };
  
  const handleEmailClick = () => {
    window.location.href = "mailto:joffertech@gmail.com";
  };
  
  return (
    <Box className={classes.social}>
      {/*<Group>*/}
      {/*  <IconBrandInstagram />*/}
      {/*  {names && "@joffer"}*/}
      {/*</Group>*/}
      <Group onClick={handleTelegramClick}>
        <IconBrandTelegram />
        {names && "@joffer"}
      </Group>
      <Group onClick={handleEmailClick}>
        <IconMail />
        {names && "@joffer"}
      </Group>
    </Box>
  );
};
