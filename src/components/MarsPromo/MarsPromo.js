import { colors } from "../../constants";
import Button from "../Button/Button";

import {
  StyledContentContainer,
  StyledDeimos,
  StyledHeading,
  StyledMars,
  StyledMarsAndMoonsContainer,
  StyledParagraph,
  StyledPhobos,
  StyledSection
} from "./StyledMarsPromo";

const MarsPromo = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Gether information about Mars and its two moons, Phobos and Deimos</StyledHeading>
      <StyledParagraph>It is a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.</StyledParagraph>
      <Button $isRed to="/body/mars">Explore Mars</Button>
    </StyledContentContainer>
    <StyledMarsAndMoonsContainer>
      <StyledMars color={colors.mars}/>
      <StyledPhobos />
      <StyledDeimos />
    </StyledMarsAndMoonsContainer>
  </StyledSection>
);

export default MarsPromo;