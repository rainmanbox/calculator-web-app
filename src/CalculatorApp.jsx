import { useState } from "react";

export default function CalculatorApp() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("错误");
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+"
  ];

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <div style={{ background: "#fff", height: "60px", fontSize: "24px", lineHeight: "60px", padding: "0 10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
        {input || "0"}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            style={{ height: "50px", fontSize: "18px", borderRadius: "8px" }}
            onClick={() => {
              if (btn === "=") {
                handleEqual();
              } else {
                handleClick(btn);
              }
            }}
          >
            {btn}
          </button>
        ))}
        <button
          style={{ gridColumn: "span 4", height: "50px", fontSize: "18px", background: "red", color: "white", borderRadius: "8px" }}
          onClick={handleClear}
        >
          清零
        </button>
      </div>
    </div>
  );
}