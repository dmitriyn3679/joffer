import {Box, Stack, Text} from "@mantine/core";
import classes from "./Hero.module.css";
import {SubmitRequest} from "@/components/SubmitRequest/SubmitRequest";
import {Container} from "@/components/Container/Container";

export const Hero = () => {
  return (
    <Box className={classes.hero}>
      <Container>
        <Box className={classes.heroContent}>
          <Text className={classes.slogan}>Курси дають знання - ми даємо <span>досвід!</span></Text>
          <Stack className={classes.description}>
            <Text>Ти пройшов курси — але без досвіду складно знайти першу роботу.
              Ми допоможемо тобі перейти з навчання
              до справжньої командної роботи.
            </Text>
            <SubmitRequest />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
