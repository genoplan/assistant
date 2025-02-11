import React from "react";
import App from "ui/lib/main";
import { initializeTargetPlatform, TargetPlatform } from "ui/lib/platform"
import * as ReactDOM from "react-dom";

// initialize platform as figma
initializeTargetPlatform(TargetPlatform.figma)

ReactDOM.render(<App />, document.getElementById("react-page"));
