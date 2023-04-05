import {
  StyledCard,
  StyledCelestialObject,
  StyledDescription,
  StyledButton
} from "./StyledCelestialObjectCard";

const CelestialObjectCard = ({
  className,
  color,
  name,
  to
}) => (
  <StyledCard className={className}>
    <StyledCelestialObject color={color}/>
    <StyledDescription>LCelestial bodies or heavenly bodies refer to the planets, stars, moons and all the other natural objects present in space.</StyledDescription>
    <StyledButton to={to || '/'}>{name}</StyledButton>
  </StyledCard>
);

export default CelestialObjectCard;