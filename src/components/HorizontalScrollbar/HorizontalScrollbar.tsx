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
  const { scrollPrev } = useContext(VisibilityContext);

  return <ArrowLeftOutlined onClick={() => scrollPrev()} />;
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return <ArrowRightOutlined onClick={() => scrollNext()} />;
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
