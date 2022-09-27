import { FC } from "react";
import { Exercises, HeroBanner, SearchExercises } from "../../components";

type Props = {};

export const Home: FC<Props> = (props) => {
  return (
    <div>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </div>
  );
};
