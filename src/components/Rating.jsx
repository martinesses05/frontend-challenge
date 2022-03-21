/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */
import React, { useState } from "react";

export function Rating() {
  const [stars, setStars] = useState([
    { id: 0, active: false },
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ]);

  const onStarClick = (id) => {
    let aux = stars.slice();

    aux.forEach((e, index) => (e.active = index <= id));

    setStars(aux);
  };

  return (
    <div id="rating">
      {stars.map((star) => (
        <span
          key={star.id}
          className={star.active ? "active" : ""}
          onClick={() => onStarClick(star.id)}
        >
          *
        </span>
      ))}
    </div>
  );
}
