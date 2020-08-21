function drawAnimation(animations, animationSpeed) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const colourChange = i % 3 !== 2;
    if (colourChange) {
      const [firstBarIndex, secondBarIndex] = animations[i];
      const firstBarStyle = arrayBars[firstBarIndex].style;
      const secondBarStyle = arrayBars[secondBarIndex].style;
      const colour = i % 3 === 0 ? 'red' : 'black';
      setTimeout(() => {
        firstBarStyle.backgroundColor = colour;
        secondBarStyle.backgroundColor = colour;
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const [firstBarIndex, newHeight] = animations[i];
        const firstBarStyle = arrayBars[firstBarIndex].style;
        firstBarStyle.height = `${newHeight}px`;
      }, i * animationSpeed);
    }
  }
}

export default drawAnimation;
