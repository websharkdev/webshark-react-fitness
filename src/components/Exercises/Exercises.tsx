import { FC } from "react";
import { ExerciseProps } from "../../utils/types";

type Props = {
  data: ExerciseProps[];
  setData: (e: any) => void;
  setBodyPart: (e: any) => void;
  bodyPart: string[];
};

export const Exercises: FC<Props> = ({
  data,
  setData,
  setBodyPart,
  bodyPart,
}) => {
  return (
    <div>
      {/*  */}
      Exercises
      {/*  */}
    </div>
  );
};
