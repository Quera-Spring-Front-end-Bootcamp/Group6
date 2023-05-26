import { RegisterOptions } from "react-hook-form";

type Name = {
  name: string;
};

export type RegisterType = {
  register?: RegisterOptions & Name;
};
