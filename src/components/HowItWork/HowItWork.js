import {Box, Text} from "@mantine/core";
import classes from "./HowItWork.module.css";
import {Container} from "@/components/Container/Container";

const items = [
  { title: "Залишаєш заявку", description: "Зв'язуємось із тобою, визначаємо твій рівень" },
  { title: "Потрапляєш в команду", description: "Обираємо проєкт, даємо доступ до інфраструктури" },
  { title: "Працюєш над задачами", description: "Git, таски, code review — як у справжній команді" },
  { title: "Отримуєш фідбек і підтримку", description: "Менторство, технічні Q&A, допомога з кодом" },
  { title: "Готуєшся до інтервʼю", description: "Допоможемо з CV, поведінкою  на інтервʼю, техчеком" },
];

export const HowItWork = () => {
  return (
    <Box id="how-it-work" className={classes.howItWork}>
      <Container>
        <Box className={classes.howItWorkContent}>
          <Text className={classes.title}>Як це працює?</Text>
          <ul className={classes.cards}>
            {items.map((item, index) => (
              <li key={item.title} className={classes.card}>
                <Text className={classes.cardNumber}>{index + 1}.</Text>
                <Text className={classes.cardTitle}>{item.title}</Text>
                <Text className={classes.cardDescription}>{item.description}</Text>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Box>
  );
};
