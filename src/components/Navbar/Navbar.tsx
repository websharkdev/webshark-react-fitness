import { FC } from "react";
import { Stack, styled } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import { LogoIcon } from "../../assets/icons";
import { data } from "./data";

type Props = {};

const Root = styled(Stack)(({ theme }) => ({
  padding: "24px 48px",
  background: "#242424",
  "& .navbar-menu": {
    "& .navbar-menu--item": {
      textDecoration: "none",
      color: "#f6f6f6",
      "&.active": {
        paddingBottom: 4,
        borderBottom: "2px solid #D2FF28",
      },
    },
  },
}));

export const Navbar: FC<Props> = (props) => {
  const { id } = useParams();
  return (
    <Root
      justifyContent={"space-between"}
      alignItems={"center"}
      direction="row"
      fontSize={24}
    >
      <Link to="/" className={"navbar-logo"}>
        <LogoIcon />
      </Link>

      <Stack
        justifyContent={"flex-end"}
        alignItems={"center"}
        direction="row"
        gap={10}
        fontSize={18}
        className={"navbar-menu"}
      >
        {data.menu.map((item) => (
          <Link
            to={item.href}
            key={item.id}
            className={`navbar-menu--item ${item.active ? "active" : ""}`}
          >
            {item.title}
          </Link>
        ))}
      </Stack>
    </Root>
  );
};
