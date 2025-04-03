import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    >
      <div
        className="absolute w-200 h-200 bg-blue-600 rounded-full opacity-5 blur-3xl transition-transform duration-0"
        style={{
          transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
        }}
      ></div>
    </div>
  );
}
