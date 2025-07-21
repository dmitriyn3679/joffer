'use client'

import {Container} from "@/components/Container/Container";
import {Box, Text} from "@mantine/core";
import {Logo} from "@/components/Logo/Logo";
import {navItems} from "@/utils/navItems";
import Link from "next/link";
import classes from "./Footer.module.css";
import {Social} from "@/components/Social/Social";
import {useScrollToSection} from "@/hooks/useScrollToSection";

export default function Footer () {
  const scrollToSection = useScrollToSection();
  
  const linkHandler = (e, link) => {
    console.log(link);
    if (!link.startsWith("/")) e.preventDefault();
    scrollToSection(link);
  };
  return (
    <footer className={classes.footer}>
      <Container>
        <Box className={classes.footerContainer}>
          <Logo/>
          <nav className={classes.nav}>
            <ul className={classes.navList}>
              {navItems.map(({link, title}) => (
                <li key={link} className={classes.navItem}>
                  <Link onClick={(e) => linkHandler(e, link)} href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Social />
        </Box>
        <Box className={classes.footerCopyright}>
          <Text size="sm" c="dimmed" ta="right">
            © {new Date().getFullYear()} Joffer. Всі права захищені.
          </Text>
        </Box>
      </Container>
    </footer>
  );
};
