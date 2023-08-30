import {
  backgroundLight,
  textBackgroundLight,
  contentLight,
  backgroundBlack,
  textBackgroundBlack,
  contentBlack,
} from "./variaveis";

export const themeLight = {
  body: backgroundLight,
  inside: contentLight,
  text: textBackgroundLight,
  filter: "",
};

export const themeDark = {
  body: backgroundBlack,
  inside: contentBlack,
  text: textBackgroundBlack,
  filter: "invert(100%)",
};
