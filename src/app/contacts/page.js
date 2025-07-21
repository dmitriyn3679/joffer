import {Box, Button, Group, Image, SimpleGrid, Stack, Text, Textarea, TextInput} from "@mantine/core";
import classes from "./contacts.module.css";
import {Container} from "@/components/Container/Container";
import {Social} from "@/components/Social/Social";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata() {
  return {
    title: "Контакти Joffer — звʼяжіться з нами",
    description: "Маєш питання щодо стажування, першої роботи чи співпраці? Напиши нам — ми відкриті до діалогу та завжди на звʼязку.",
    alternates: {
      canonical: `${baseUrl}/contacts`,
    },
    openGraph: {
      title: "Контакти | Joffer — Стажування та перша робота в IT",
      description:
        "Маєш питання щодо стажування чи проєктів? Напиши нам — і ми допоможемо з першим кроком у кар’єрі програміста.",
      url: baseUrl + "/contacts",
      siteName: "Joffer",
      type: "website",
      images: [
        {
          url: baseUrl + "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Joffer — Контакти",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Контакти | Joffer — Стажування та перша робота в IT",
      description:
        "Зв’яжіться з нами, щоб отримати підтримку, консультацію або розпочати стажування.",
      images: [baseUrl + "/og-image.jpg"],
    },
  };
}

export default function ContactsPage() {
  return (
    <Box className={classes.contacts}>
      <Container>
        <SimpleGrid className={classes.wrapper} cols={2}>
          <Box component="form"
               action="https://formspree.io/f/mdkdabvn"
               method="POST"
          >
            <Text className={classes.title}>Контакти</Text>
            <Text className={classes.description}>
              Маєш запитання, пропозицію або хочеш дізнатись більше?
              Напиши нам — ми відповімо якнайшвидше.
            </Text>
            
            <Group mb={16} className={classes.inputs}>
              <TextInput
                label="Ім'я"
                placeholder="Ім'я"
                name="name"
                required
                styles={{
                  input: { height: 48 },
                  label: { color: "#89868F", marginBottom: 8 }
                }}
              />
              <TextInput
                label="E-mail"
                placeholder="E-mail"
                name="email"
                type="email"
                required
                styles={{
                  input: { height: 48 },
                  label: { color: "#89868F", marginBottom: 8 }
                }}
              />
            </Group>
            
            <Textarea
              mb={24}
              label="Повідомлення"
              placeholder="Напиши тут своє питання..."
              name="message"
              required
              autosize
              minRows={6}
              maxRows={8}
              styles={{ label: { color: "#89868F", marginBottom: 8 } }}
            />
            
            <input type="hidden" name="_next" value={baseUrl} />
            
            <Button type="submit" className={classes.button}>Надіслати</Button>
          </Box>
          
          <Stack gap={24} className={classes.imgBox}>
            <Image alt="contacts img" h="80%" radius="md" src="/img/contacts.png" />
            <Social names={true} />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
