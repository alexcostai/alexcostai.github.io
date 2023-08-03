"use client";

//mui
import { Grid } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";
//porject imports
import useHomePage from "@/hooks/useHomePage";
import CustomButton from "@/components/CustomButton";
import SectionDivider from "@/components/SectionDivider";
import MainSection from "@/components/sections/MainSection";
import FooterSection from "@/components/sections/FooterSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutMeSection from "@/components/sections/about-me/AboutMeSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";

export default function Home() {
  const [classes, references, scrollTo, hidesToTop] = useHomePage();
  return (
    <main className={classes.mainContainer} ref={references.top}>
      <div className={`${classes.pattern} pattern-dots-xl`}></div>
      <Grid container maxWidth={1250}>
        <MainSection scrollTo={scrollTo} />
        <SectionDivider />
        <ProjectsSection reference={references.projects} />
        <SectionDivider />
        <AboutMeSection reference={references.aboutMe} />
        <SectionDivider />
        <ContactSection reference={references.contact} />
        <SectionDivider />
        <FooterSection />
      </Grid>

      <CustomButton
        className={classes.toTop}
        sx={{
          opacity: !hidesToTop ? "1" : "0",
          visibility: hidesToTop ? "hidden" : "visible",
        }}
        onClick={() => scrollTo("top")}
      >
        <ArrowDropUp />
      </CustomButton>
    </main>
  );
}
