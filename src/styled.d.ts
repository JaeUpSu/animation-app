import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {}
}

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}
