export const bridge_calendar = () => {
  const items = document.querySelectorAll(".item");

  const backgroundColors = [
    "lightblue",
    "lightgreen",
    "lightcoral",
    "lightgoldenrodyellow",
  ];
  const accentColors = ["darkblue", "darkgreen", "darkred", "darkgoldenrod"];

  items.forEach((item, index) => {
    // Type assertion to specify that the item is an HTMLElement (or HTMLDivElement)
    const divItem = item as HTMLElement;

    // Cycle through colors if there are more items than colors
    const backgroundColor = backgroundColors[index % backgroundColors.length];
    const accentColor = accentColors[index % accentColors.length];

    // Set the custom properties for each item
    divItem.style.setProperty("--background-color-bridge", backgroundColor);
    divItem.style.setProperty("--accent-color-bridge", accentColor);

    // Also update the button's accent color
    const button = document.querySelector(".btn") as HTMLButtonElement;
    if (button) {
      button.style.setProperty("--accent-color-bridge", accentColor);
    }
  });
};
