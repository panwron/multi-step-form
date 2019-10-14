import React, { useState } from "react";
import "./App.css";
import ThreeStepForm from "./components/threeStepForm/ThreeStepForm";

function App() {
  const [formSubmited, setFormSubmited] = useState(null);
  return formSubmited ? (
    <div className="results">
      <pre>{JSON.stringify(formSubmited, null, 2)}</pre>
      <button onClick={() => setFormSubmited(null)}>Reset</button>
    </div>
  ) : (
    <ThreeStepForm onSubmit={setFormSubmited} />
  );
}

export default App;
