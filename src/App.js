import React, { Suspense } from "react";
import "./i18n";
import Home from "./Pages/home";

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </div>
  );
};

export default App;
