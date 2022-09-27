import { FC } from "react";
import { styled, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LocationOn } from "@mui/icons-material";

type Props = {};

const Root = styled(Stack)(({ theme }) => ({
  width: "100%",
  "& .hero-banner--container": {
    padding: "12px 48px",
    "& .hero-banner--container-subtitle": {
      color: "#81C14B",
      fontSize: 24,
      fontWeight: 600,
    },
    "& .hero-banner--container-title": {
      color: "#242424",
      fontSize: 48,
      fontWeight: 500,
      width: "70%",
      margin: "24px 0",
      textTransform: "uppercase",
      "& span": {
        fontWeight: 700,
        color: "#81C114",
      },
    },
    "& .hero-banner--container-text": {
      color: "#242424",
      boxShadow: "none",
      fontSize: 18,
      fontWeight: 500,
      marginBottom: 24,
    },
    "& .hero-banner--container-button": {
      color: "#f6f6f6",
      background: "#242424",
      boxShadow: "none",
      fontSize: 18,
      fontWeight: 500,
      textTransform: "none",
    },
  },
  "& .hero-banner--image": {
    position: "relative",
    "& .hero-banner--image-location": {
      position: "absolute",
      zIndex: 20,
      color: "#f6f6f6",
      padding: 16,
      fontWeight: 600,
      left: 50,
      top: 50,
      borderRadius: 12,
    },
  },
}));

export const HeroBanner: FC<Props> = (props) => {
  return (
    <Root direction={"row"} alignItems="center" justifyContent={"center"}>
      <Stack className={"hero-banner--container"} width={"70%"}>
        <Typography
          variant="body1"
          className={"hero-banner--container-subtitle"}
        >
          Fitness Club
        </Typography>
        <Typography variant="h2" className={"hero-banner--container-title"}>
          reach your body goals at <span>webshark.fitness</span>
        </Typography>
        <Typography variant="body2" className={"hero-banner--container-text"}>
          Check out the most effective exercises personalized to you
        </Typography>

        <Link to="/exercise/1" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="success"
            className={"hero-banner--container-button"}
          >
            Explore exercises
          </Button>
        </Link>
      </Stack>
      <Stack className={"hero-banner--image"}>
        <Stack
          direction={"row"}
          alignItems="center"
          className={"hero-banner--image-location"}
        >
          <LocationOn sx={{ fontSize: 16, zIndex: 21, marginRight: 1 }} />
          <span style={{ zIndex: 21 }}>Pamplona</span>
        </Stack>
        <img
          src={
            "https://i.ibb.co/ccSRH5z/amanda-dalbjorn-fv-In-Y-Gh7sc-unsplash.jpg"
          }
          alt="hero-banner-image"
          width="100%"
        />
      </Stack>
    </Root>
  );
};
