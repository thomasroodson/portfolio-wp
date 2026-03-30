import "styled-components";
import type { Theme } from "./app/styles/theme";

declare module "styled-components" {
  // styled-components espera uma interface; a extensão de tipo não define membros próprios,
  // mas ainda assim fornece as chaves do nosso `theme`.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

