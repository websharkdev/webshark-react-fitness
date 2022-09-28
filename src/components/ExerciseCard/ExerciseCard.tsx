import { Box, Grid, styled, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ExerciseProps } from "../../utils/types";

type Props = {
  exercise?: string;
  data?: ExerciseProps;
};

const Root = styled(Grid)(({ theme }) => ({
  background: "#fff",
  padding: "24px 30px",
  height: "100%",
  "& .exercise-card--item-title": {
    textTransform: "capitalize",
    margin: "20px 0",
    "& h6": {
      fontSize: 16,
      fontWeight: 500,
    },
  },
  "& .exercise-card--item-status": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    "& div": {
      marginRight: 10,
      marginBottom: 15,
      padding: "8px 12px",
      color: "#fff",
      borderRadius: 6,
      fontWeight: 600,
      fontSize: 14,
    },
  },
}));

export const ExerciseCard: FC<Props> = ({ exercise, data }) => {
  return (
    <Link
      to={`/exercise/${data?.id || 0}`}
      className="exercise-card--item"
      style={{
        color: "#242424",
        textDecoration: "none",
      }}
    >
      <Root container flexWrap="nowrap" direction={"column"} rowSpacing={1.5}>
        <Grid item className="exercise-card--item-img">
          <img
            src={
              data?.gifUrl
                ? data.gifUrl
                : "http://d205bpvrqc9yn1.cloudfront.net/0036.gif"
            }
            alt={data?.name}
            width={"100%"}
          />
        </Grid>
        <Grid item className={"exercise-card--item-title"}>
          <Tooltip
            title={data?.name ? data.name : ""}
            sx={{ textTransform: "capitalize" }}
          >
            <Typography variant="h6">
              {data?.name && data.name.length > 25
                ? `${data?.name.slice(0, 25)}...`
                : data?.name}
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item className={"exercise-card--item-status"}>
          <Box sx={{ background: "#E94F37" }}>
            <Tooltip
              title={data?.equipment ? data.equipment : ""}
              sx={{ textTransform: "capitalize" }}
            >
              {data?.equipment ? (
                <>
                  {data.equipment.length > 10
                    ? `${data.equipment.slice(0, 10)}...`
                    : data?.equipment}
                </>
              ) : (
                <>body weight</>
              )}
            </Tooltip>
          </Box>
          <Box sx={{ background: "#80AB82" }}>
            <Tooltip
              title={data?.target ? data.target : ""}
              sx={{ textTransform: "capitalize" }}
            >
              {data?.target ? (
                <>
                  {data.target.length > 10
                    ? `${data.target.slice(0, 10)}...`
                    : data?.target}
                </>
              ) : (
                <>body weight</>
              )}
            </Tooltip>
          </Box>
        </Grid>
      </Root>
    </Link>
  );
};
