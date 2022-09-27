import { FC } from "react";
import { useParams } from "react-router-dom";

type Props = {};

export const ExerciseDetail: FC<Props> = (props) => {
  const { id } = useParams();
  return (
    <div>
      {/*  */}
      ExerciseDetail {id}
      {/*  */}
    </div>
  );
};
