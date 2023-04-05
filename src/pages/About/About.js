import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="About" />
      <article>
        <AboutP>
         The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It formed 4.6 billion years ago 
         from the gravitational collapse of a giant interstellar molecular cloud. The vast majority (99.86%) of the system's mass is in the Sun,
         with most of the remaining mass contained in the planet Jupiter. The planetary system around the Sun contains eight planets. The four inner
        system planets—Mercury, Venus, Earth and Mars—are terrestrial planets, being composed primarily of rock and metal.  
       </AboutP>
        <AboutP>
        In the outer reaches of the Solar System lies a class of minor planets called detached objects. There is considerable debate as to how many 
        such objects there will prove to be. Some of these objects are large enough to have rounded under their own gravity and thus to be categorized 
        as dwarf planets. Astronomers generally accept about nine objects as dwarf planets: the asteroid Ceres, the Kuiper-belt objects Pluto, Orcus, Haumea,
        Quaoar, and Makemake, and the scattered-disc objects Gonggong, Eris, and Sedna.
        Various small-body populations, including comets, centaurs and interplanetary dust clouds, freely travel between the regions of the Solar System.
        </AboutP>
      </article>
    </AboutSection>
  );
};

export default AboutPage;