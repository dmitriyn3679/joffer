import {Box, Text} from "@mantine/core";
import classes from "./Advantages.module.css";
import {Container} from "@/components/Container/Container";
import {SubmitRequest} from "@/components/SubmitRequest/SubmitRequest";
import {CourseIcon} from "@/icons/Course";
import {PeopleIcon} from "@/icons/People";
import {PCIcon} from "@/icons/PC";
import {WorkingSpaceIcon} from "@/icons/WorkingSpace";

const items = [
  { icon: <CourseIcon />, title: "Ти щойно завершив ІТ-курси", description: "Пройшов Frontend, Backend або QA, але ще не маєш реального досвіду." },
  { icon: <PeopleIcon />, title: "Хочеш попрактикувати командну розробку", description: "Хочеш спробувати git, таски, мітинги, code review, стендапи." },
  { icon: <PCIcon />, title: "Не знаєш, як проходити інтерв'ю", description: "Потрібна підтримка з CV, питаннями та впевненістю." },
  { icon: <WorkingSpaceIcon />, title: "Маєш проєкти, але не відчуваєш себе “job ready”", description: "Писав пет-проєкти, але не розумієш, що далі." }
];

export const Advantages = () => {
  return (
    <Box className={classes.advantages}>
      <Container>
        <Text className={classes.title}>Цей проєкт для тебе, якщо…</Text>
        <ul className={classes.cards}>
          {items.map(({ icon, title, description }) => (
            <li className={classes.card}>
              <Box className={classes.icon}>{icon}</Box>
              <Text className={classes.cardTitle}>{title}</Text>
              <Text className={classes.cardDescription}>{description}</Text>
            </li>
          ))}
        </ul>
        <Box className={classes.buttonContainer}>
          <SubmitRequest />
        </Box>
      </Container>
    </Box>
  );
};
