import classes from './AboutUs.module.css';
import {Box, Text, Image} from "@mantine/core";
import {Container} from "@/components/Container/Container";

export const AboutUs = () => {
  return (
    <Box id="about-us" className={classes.about}>
      <Container>
        <Box className={classes.aboutWrapper}>
          <Box className={classes.info}>
            <Text className={classes.title}>Про нас</Text>
            <Text className={classes.description}>
              Ми створили цей проєкт, щоб допомогти початківцям у ІТ зробити свій перший реальний крок після курсів. Багато новачків мають базові знання, але не мають практики, досвіду командної роботи та впевненості у своїх силах. Ми вирішили це змінити.
              Наша мета — дати людям можливість попрацювати над реальним проєктом: таск-менеджери, git, мітинги, код-рев&apos;ю та фідбек. І звичайно ж — підтримку, підготовку до інтерв&apos;ю та допомогу з CV.
              Ми віримо, що кожен заслуговує на омріяний оффер. І ми створюємо умови, щоб це стало реальністю.
            </Text>
          </Box>
          <Image
            radius="md"
            src="img/about-us.png"
            style={{ backgroundColor: '#FFFFFF' }}
          />
        </Box>
      </Container>
    </Box>
  );
};
