/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = [...Array(10)].map((_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

export function ListItemsForNavigation(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeItemRef = useRef(null);

  useEffect(
    function () {
      console.log(activeItemRef.current);
      activeItemRef.current?.focus();
    },
    [selectedIndex]
  );

  function handleKeyDown(event) {
    if (event.key === "ArrowDown" && selectedIndex < itemsList.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (event.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }

    event.preventDefault();
  }

  return (
    <ul onKeyDown={handleKeyDown}>
      {itemsList.map((e) => (
        <li
          className="focusable-list-item"
          key={e.id}
          ref={selectedIndex === itemsList.indexOf(e) ? activeItemRef : null}
          tabIndex={selectedIndex === itemsList.indexOf(e) ? 0 : -1}
        >
          {e.name}
        </li>
      ))}
    </ul>
  );
}
