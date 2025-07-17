import {Container} from "@/components/Container/Container";
import {Box} from "@mantine/core";
import {Logo} from "@/components/Logo/Logo";
import {navItems} from "@/utils/navItems";
import Link from "next/link";
import classes from "./Footer.module.css";
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandTelegram } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';

export default function Footer () {
  return (
    <footer className={classes.footer}>
      <Container>
        <Box className={classes.footerContainer}>
          <Logo/>
          <nav className={classes.nav}>
            <ul className={classes.navList}>
              {navItems.map(({link, title}) => (
                <li key={link} className={classes.navItem}>
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Box className={classes.social}>
            <Box><IconBrandInstagram /></Box>
            <Box><IconBrandTelegram /></Box>
            <Box><IconMail /></Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};
