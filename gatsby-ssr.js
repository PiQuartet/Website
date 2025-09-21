import * as React from "react";
import { withPrefix } from "gatsby";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link key="css-main" rel="stylesheet" href={ withPrefix("/style.css") } />
  ]);
  setPostBodyComponents([
    
  ]);
};
