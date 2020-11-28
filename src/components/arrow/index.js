import React from 'react';

const Arrows = props => {
  return (
    <div className="arrows">
      <span className="prev" onClick={props.prevSlide}>
        왼쪽
      </span>
      <span className="next" onClick={props.nextSlide}>
        오른쪽
      </span>
    </div>
  );
}

export default Arrows;