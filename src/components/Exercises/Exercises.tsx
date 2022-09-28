import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import { FC } from "react";
import { ExerciseProps } from "../../utils/types";
import { ExerciseCard } from "../ExerciseCard";

type Props = {
  data: ExerciseProps[];
  setData: (e: any) => void;
  bodyPart: string;
};

const Root = styled(Box)(({ theme }) => ({
  mt: 4.5,
  p: 2.5,
}));

export const Exercises: FC<Props> = ({ data, setData, bodyPart }) => {
  return (
    <Root id="exercises" sx={{ mt: { lg: 10, sm: 4.5 } }} p={2.5}>
      <Typography variant="h4" fontWeight={"500"} textAlign={"center"} mb={5}>
        Showing results {data.length > 0 && `(${data.length})`}
      </Typography>

      <Grid
        container
        direction="row"
        flexWrap="wrap"
        rowSpacing={4}
        columnSpacing={3}
      >
        {data.map((item: ExerciseProps) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ExerciseCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};
