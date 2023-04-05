import { colors } from "../../constants";

import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledPlanetParagraph
} from "./StyledPromo";

const PromoSection = () => (
  <StyledSection>
    <StyledHeading>Knowledge right at your fingertips</StyledHeading>
    <StyledPlanet>
      <StyledCelestialObject color={colors.mars}/>
      <StyledPlanetParagraph>Mars is a terrestrial planet with a thin atmosphere and has a crust primarily composed of elements similar to Earth's crust.</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.venus}/>
      <StyledPlanetParagraph>Venus is the second planet from the Sun. It is sometimes called Earth's "sister" or "twin" planet as it is almost as large and has a similar composition. </StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <StyledCelestialObject color={colors.neptune}/>
      <StyledPlanetParagraph>Neptune, like Uranus, is an ice giant, a subclass of giant planet, because they are smaller and have higher concentrations of volatiles than Jupiter and Saturn. </StyledPlanetParagraph>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;