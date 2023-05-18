import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
  path: string;
  component: React.ComponentType<any>;
};