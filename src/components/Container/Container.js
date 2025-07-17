import {Box} from "@mantine/core";
import classes from "./Container.module.css";

export const Container = ({ children }) => {
  return (
    <Box className={classes.container}>{children}</Box>
  );
};
