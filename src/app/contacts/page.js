import {Box, Button, Group, Image, Input, SimpleGrid, Text, Textarea, TextInput} from "@mantine/core";
import classes from "./contacts.module.css";
import {Container} from "@/components/Container/Container";

export default function ContactsPage() {
  return (
    <Box className={classes.contacts}>
      <Container>
        <SimpleGrid style={{ gap: 140 }} cols={2}>
          <Box className={classes.form}>
            <Text className={classes.title}>Контакти</Text>
            <Text className={classes.description}>
              Маєш запитання, пропозицію або хочеш дізнатись більше?
              Напиши нам — ми відповімо якнайшвидше.
            </Text>
            <Group mb={16} className={classes.inputs}>
              <TextInput
                label="Ім'я"
                placeholder="Ім'я"
                styles={{ input: { height: 48 }, label: { color: "#89868F", marginBottom: 8 } }}
              />
              <TextInput
                label="E-mail"
                placeholder="E-mail"
                styles={{ input: { height: 48 }, label: { color: "#89868F", marginBottom: 8 } }}
              />
            </Group>
            <Textarea
              mb={24}
              label="Повідомлення"
              placeholder="Напиши тут своє питання..."
              autosize={true}
              minRows={8}
              maxRows={10}
              styles={{ label: { color: "#89868F", marginBottom: 8 } }}
            />
            <Button className={classes.button}>Надіслати</Button>
          </Box>
          <Box>
            <Image radius="md" src="/img/contacts.png"/>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
