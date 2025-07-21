import {Box, Text} from "@mantine/core";
import classes from "./ForWhom.module.css";
import {ChecklistIcon} from "@/icons/Checklist";
import {EmployeeIcon} from "@/icons/Employee";
import {CVIcon} from "@/icons/CV";
import {EmployeeReadyIcon} from "@/icons/EmployeeReady";
import {Container} from "@/components/Container/Container";

const items = [
  { icon: <ChecklistIcon />, title: "Ми даємо реальні задачі", description: "У тебе буде робота, схожа на ту, яку дають на справжній позиції — не вигадані пет-проєкти." },
  { icon: <EmployeeIcon />, title: "Все як в IT-компанії", description: "Дейлік, джира, прод, спрінт — більше не будуть тебе лякати." },
  { icon: <CVIcon />, title: "Готуємо до інтервʼю, не тільки до коду", description: "Тренуємо питання, вчимо показувати себе, допомагаємо з CV." },
  { icon: <EmployeeReadyIcon />, title: "Перевіряємо не лише знання, а готовність працювати", description: " Відповідальність, комунікація, soft skills — це частина нашого підходу." },
];

export const ForWhom = () => {
  return (
    <Box id="advantages" className={classes.for}>
      <Container>
        <Text className={classes.title}><span>Ми</span>   — це не про курси!</Text>
        <ul className={classes.cards}>
          {items.map(({ icon, title, description }, idx) => (
            <li key={idx} className={classes.card}>
              <Box className={classes.icon}>{icon}</Box>
              <Text className={classes.cardTitle}>{title}</Text>
              <Text className={classes.cardDescription}>{description}</Text>
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};
