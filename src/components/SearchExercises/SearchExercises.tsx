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

type Props = {};

type ExerciseProps = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
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
  },
}));

export const SearchExercises: FC<Props> = (props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [data, setData] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
      );

      setBodyParts(bodyPartsData);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (searchInput) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises"
      );

      const searchedExercises = exercisesData.filter(
        (exercise: ExerciseProps) =>
          exercise.name.toLocaleLowerCase().includes(searchInput) ||
          exercise.target.toLocaleLowerCase().includes(searchInput) ||
          exercise.equipment.toLocaleLowerCase().includes(searchInput) ||
          exercise.bodyPart.toLocaleLowerCase().includes(searchInput)
      );
      setSearchInput("");
      setData(searchedExercises);
    }
  };

  console.log(bodyParts);
  console.log(data);

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
          onChange={(e) => setSearchInput(e.target.value.toLocaleLowerCase())}
          value={searchInput}
          type="text"
          fullWidth
          sx={{ fontWeight: 700, borderRadius: 4, border: "none", width: 320 }}
        />
        <Button
          sx={{ height: "100%", minHeight: 56, minWidth: 120, marginLeft: 1 }}
          variant="contained"
          className={"search-exercise--button"}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Root>
  );
};
