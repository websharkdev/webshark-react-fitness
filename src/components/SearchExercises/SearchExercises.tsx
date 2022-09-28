import { FC, useState, useEffect } from "react";
import {
  Typography,
  styled,
  Stack,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { fetchData } from "../../utils/fetchData";
import { HorizontalScrollbar } from "../HorizontalScrollbar";
import { ExerciseProps } from "../../utils/types";

type Props = {
  setData: (e: any) => void;
  setBodyPart: any;
  bodyPart: string;
};

const Root = styled(Stack)(({ theme }) => ({
  "& .search-exercise--button": {
    color: "#f6f6f6",
    background: "#242424",
    boxShadow: "none",
    fontSize: 14,
    padding: "12px 24px",
    fontWeight: 500,
    textTransform: "none",
    height: "100%",
    minHeight: 56,
    minWidth: 120,
    marginLeft: 1,
  },
}));

export const SearchExercises: FC<Props> = ({
  setData,
  setBodyPart,
  bodyPart,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
      );

      setBodyParts(bodyPartsData);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises"
      );

      const searchedExercises = exercisesData.filter(
        (item: ExerciseProps) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setData(searchedExercises);
    }
  };
  return (
    <Root alignItems={"center"} mt={4} justifyContent="center" p={2.5}>
      <Typography variant="h5" fontWeight={500} mb={2.5} textAlign="center">
        Awesome Exercises You
        <div>Should Know</div>
      </Typography>

      <Box
        position="relative"
        mb={9}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          required
          id="search-exercises-textfield"
          placeholder="Search exercise"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          value={search}
          type="text"
          fullWidth
          sx={{ fontWeight: 700, borderRadius: 4, border: "none", width: 320 }}
        />
        <Button
          variant="contained"
          className={"search-exercise--button"}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Root>
  );
};
