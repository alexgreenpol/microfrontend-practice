import React from "react";
import ReactDOM from "react-dom/client";

// Компонент, как у тебя
function App() {
  const styles: React.CSSProperties = {
    border: "2px solid #69a84f",
    minHeight: "600px",
    padding: "50px",
  };

  return (
    <div style={styles}>
      👋 Привіт, я окремий REACT додаток з окремою командою!
    </div>
  );
}

class MyReactElement extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(<App />);
  }
}

if (!customElements.get("my-react-app")) {
  customElements.define("my-react-app", MyReactElement);
}

export default App;
