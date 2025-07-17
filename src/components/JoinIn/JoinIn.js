import classes from "./JoinIn.module.css";
import {Box, Text} from "@mantine/core";
import {SubmitRequest} from "@/components/SubmitRequest/SubmitRequest";

export const JoinIn = () => {
  return (
    <Box className={classes.join}>
      <Box className={classes.joinWrapper}>
        <Text className={classes.title}>Готовий зробити свій перший крок у кар'єрі?</Text>
        <SubmitRequest />
      </Box>
    </Box>
  );
};
