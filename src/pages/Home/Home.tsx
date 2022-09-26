import { FC } from "react";
import { HeroBanner } from "../../components";

type Props = {};

export const Home: FC<Props> = (props) => {
  return (
    <div>
      <HeroBanner />
    </div>
  );
};
