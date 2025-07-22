import { useState } from "react";
import Button from "./assets/components/Button";
import View from "./assets/components/View";

function App() {
  let [counts, setCounter] = useState(0);

  if (counts < 0 || counts > 10) {
    setCounter((counts = "done!"));
  }

  function handleMinus() {
    setCounter(counts - 1);
  }

  function handlePlus() {
    setCounter(counts + 1);
  }

  function handleReset() {
    setCounter((counts = 0));
  }

  return (
    <div className="container">
      <div className="counter">
        <Button
          label="-"
          events={handleMinus}
          dis={counts == "done!" ? "yes" : "no"}
        />
        <View type={counts} />
        <Button
          label="+"
          events={handlePlus}
          dis={counts == "done!" ? "yes" : "no"}
        />
      </div>
      <div className="reset">
        <Button
          label="Reset"
          events={handleReset}
          dis={counts !== "done!" ? "yes" : "no"}
        />
      </div>
    </div>
  );
}

export default App;
