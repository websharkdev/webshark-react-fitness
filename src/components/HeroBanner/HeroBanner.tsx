import { FC } from "react";
import { styled, Stack } from "@mui/material";

type Props = {};

const Root = styled(Stack)(({ theme }) => ({
  width: "30vw",
}));

export const HeroBanner: FC<Props> = (props) => {
  return (
    <Root>
      <img
        src={
          "https://i.ibb.co/ccSRH5z/amanda-dalbjorn-fv-In-Y-Gh7sc-unsplash.jpg"
        }
        alt="hero-banner-image"
        width="100%"
      />
    </Root>
  );
};
