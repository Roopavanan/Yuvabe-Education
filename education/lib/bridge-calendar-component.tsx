// components/ItemList.tsx

import { useEffect } from "react";
import { bridge_calendar } from "lib/brige-calendar"; // Import the helper function

const bridge_calendar_component = () => {
  // Initialize colors when the component is mounted
  useEffect(() => {
    bridge_calendar();
  }, []);

  return (
    <div className="p-8">
      <div className="container flex flex-col gap-4">
        <div
          className="item p-4 m-2 text-center border-2 border-solid rounded-lg transition-all"
          style={
            {
              "--background-color": "lightblue",
              "--accent-color": "darkblue",
            } as React.CSSProperties
          }
        >
          Item 1
        </div>
        <div
          className="item p-4 m-2 text-center border-2 border-solid rounded-lg transition-all"
          style={
            {
              "--background-color": "lightgreen",
              "--accent-color": "darkgreen",
            } as React.CSSProperties
          }
        >
          Item 2
        </div>
        <div
          className="item p-4 m-2 text-center border-2 border-solid rounded-lg transition-all"
          style={
            {
              "--background-color": "lightcoral",
              "--accent-color": "darkred",
            } as React.CSSProperties
          }
        >
          Item 3
        </div>
        <div
          className="item p-4 m-2 text-center border-2 border-solid rounded-lg transition-all"
          style={
            {
              "--background-color": "lightgoldenrodyellow",
              "--accent-color": "darkgoldenrod",
            } as React.CSSProperties
          }
        >
          Item 4
        </div>
      </div>

      <button
        className="btn p-3 px-6 text-white rounded-lg transition-all hover:bg-[var(--background-color)]"
        style={
          {
            "--accent-color": "darkblue", // This can be dynamically changed based on items
          } as React.CSSProperties
        }
      >
        Click Me
      </button>
    </div>
  );
};

export default bridge_calendar_component;
