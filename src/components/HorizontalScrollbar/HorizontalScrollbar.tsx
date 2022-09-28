import { Box, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { BodyPart } from "../BodyPart";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { ExerciseCard } from "../ExerciseCard";

type Props = {
  data: string[];
  bodyPart: string;
  setBodyPart: any;
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      sx={{
        display: `${isFirstItemVisible ? "none" : "flex"}`,
        position: "absolute",
        bottom: 0,
        fontSize: 16,
      }}
      onClick={() => scrollPrev()}
    >
      <ArrowLeftOutlined />
    </Typography>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      sx={{
        display: `${isLastItemVisible ? "none" : "flex"}`,
        position: "absolute",
        bottom: 0,
        fontSize: 16,
      }}
      onClick={() => scrollNext()}
    >
      <ArrowRightOutlined />
    </Typography>
  );
}

export const HorizontalScrollbar: FC<Props> = ({
  data,
  bodyPart,
  setBodyPart,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item: any) => (
        <Box
          key={item || item.id}
          itemID={item.id || item}
          title={item.id || item}
          m={"0 40px"}
        >
          {data ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};
