import { FC } from "react";
import { Box } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { ExerciseDetail, Home } from "./pages";

type Props = {};

export const App: FC<Props> = (props) => {
  return (
    <Box className="app-container" sx={{ width: { xl: "100%" }, m: "auto" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  );
};
