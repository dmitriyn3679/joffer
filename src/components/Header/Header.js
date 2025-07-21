'use client';

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container/Container";
import { Logo } from "@/components/Logo/Logo";
import classes from "./Header.module.css";
import { SubmitRequest } from "@/components/SubmitRequest/SubmitRequest";
import { Box, Burger } from "@mantine/core";
import { navItems } from "@/utils/navItems";
import {useScrollToSection} from "@/hooks/useScrollToSection";

export default function Header() {
  const [opened, setOpened] = useState(false);
  
  const scrollToSection = useScrollToSection();
  
  const linkHandler = (e, link) => {
    if (!link.startsWith("/")) e.preventDefault();

    setOpened(false)
    
    scrollToSection(link);
  };
  
  return (
    <header className={classes.header}>
      <Container>
        <Box className={classes.headerContainer}>
          <Link href="/"><Logo /></Link>
          
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            className={classes.burger}
            aria-label="Toggle navigation"
            style={{ height: 80 }}
          />
          
          <nav className={`${classes.nav} ${opened ? classes.navOpened : ""}`}>
            <ul className={classes.navList}>
              {navItems.map(({ link, title }) => (
                <li key={link} className={classes.navItem}>
                  <Link
                    href={link}
                    onClick={(e) => linkHandler(e, link)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={classes.submitRequestWrapper}>
            <SubmitRequest />
          </div>
        </Box>
      </Container>
    </header>
  );
}
