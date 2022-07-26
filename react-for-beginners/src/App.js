import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hello");
    return () => console.log("Bye");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
      {show ? <Hello /> : null}
    </div>
  );
}

export default App;
