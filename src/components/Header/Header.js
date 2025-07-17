import Link from "next/link";
import {Container} from "@/components/Container/Container";
import {Logo} from "@/components/Logo/Logo";
import classes from "./Header.module.css";
import {SubmitRequest} from "@/components/SubmitRequest/SubmitRequest";
import {Box} from "@mantine/core";
import {navItems} from "@/utils/navItems";

export default function Header() {
  return (
    <header className={classes.header}>
      <Container>
        <Box className={classes.headerContainer}>
          <Link href="/"><Logo /></Link>
          <nav className={classes.nav}>
            <ul className={classes.navList}>
              {navItems.map(({ link, title }) => (
                <li key={link} className={classes.navItem}>
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <SubmitRequest />
        </Box>
      </Container>
    </header>
  );
}
