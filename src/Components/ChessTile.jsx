function ChessTile({ type, children }) {
  return (
    <div
      className={`flex items-center justify-center ${
        type === "black" ? "bg-black" : "bg-white"
      }`}
    >
      {children}
    </div>
  );
}

export default ChessTile;
