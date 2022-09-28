import { Stack, styled, Typography } from "@mui/material";
import { FC } from "react";

import Icon from "../../assets/icons/gym.png";

type Props = {
  item: string;
  bodyPart: string;
  setBodyPart: any;
};

const Root = styled(Stack)(({ theme }) => ({}));

export const BodyPart: FC<Props> = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Root
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart[0] === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        console.log(bodyPart);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbbell" width={40} />
      <Typography
        fontSize="16px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Root>
  );
};
