import { css, Global } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
            "Hiragino Sans", Meiryo, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};
