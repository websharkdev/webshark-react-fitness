import { FC, useState } from "react";
import { Exercises, HeroBanner, SearchExercises } from "../../components";

type Props = {};

export const Home: FC<Props> = (props) => {
  const [data, setData] = useState([]);
  const [bodyPart, setBodyPart] = useState("");
  return (
    <div>
      <HeroBanner />
      <SearchExercises
        setData={setData}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises data={data} setData={setData} bodyPart={bodyPart} />
    </div>
  );
};
