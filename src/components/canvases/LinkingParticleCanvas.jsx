import React, { useRef } from 'react';
import Canvas from './Canvas';

// 75% of dots are blue. 25% pink
const DOT_COLORS = [
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(255, 77, 90)',
];
const DOT_COUNT = 500;
const DOT_LINK_DISTANCE = 50;
const DOT_MOUSE_PROXIMITY = 150;
const MOUSE_DOT_COLOR = '#51a2e9'; // Blue

function LinkingParticleCanvas({ style }) {
  const dotArray = useRef([]).current;
  const mousePosition = useRef({ x: null, y: null }).current;

  const onMouseMove = (event) => {
    mousePosition.x = event.nativeEvent.offsetX;
    mousePosition.y = event.nativeEvent.offsetY;

    // Update the first dot to track the mouse position
    dotArray[0].x = mousePosition.x;
    dotArray[0].y = mousePosition.y;
  };

  const createDots = (canvas) => {
    for (let i = 0; i < DOT_COUNT; i++) {
      dotArray.push(new Dot(canvas));
    }

    // first dot to be relatively large
    dotArray[0].radius = 1.5;
    dotArray[0].color = MOUSE_DOT_COLOR;
    mousePosition.x = (50 * canvas.width) / 100;
    mousePosition.y = (50 * canvas.height) / 100;
  };

  const updateDots = (canvas) => {
    // The first dot is skipped since it tracks the mouse pointer
    for (let i = 1; i < DOT_COUNT; i++) {
      const dot = dotArray[i];

      // Reverse the direction of dots when they hit a canvas boundary
      if (dot.y < 0 || dot.y > canvas.height) {
        dot.vy = -dot.vy;
      } else if (dot.x < 0 || dot.x > canvas.width) {
        dot.vx = -dot.vx;
      }

      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  };

  const drawDots = (ctx) => {
    dotArray.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = dot.color;

      // make the dot color fade out the further they are from the mouse
      const dotDistance =
        ((dot.x - mousePosition.x) ** 2 + (dot.y - mousePosition.y) ** 2) **
        0.5;
      const distanceRatio = dotDistance / (window.innerWidth / 2);

      // this chops the bracket off the rgb color and ads an opacity
      ctx.fillStyle = dot.color.slice(0, -1) + `,${1 - distanceRatio})`;

      ctx.fill();
    });
  };

  const drawLines = (ctx) => {
    for (let i = 0; i < DOT_COUNT; i++) {
      for (let j = 0; j < DOT_COUNT; j++) {
        const i_dot = dotArray[i];
        const j_dot = dotArray[j];

        if (
          i_dot.x - j_dot.x < DOT_LINK_DISTANCE &&
          i_dot.y - j_dot.y < DOT_LINK_DISTANCE &&
          i_dot.x - j_dot.x > -DOT_LINK_DISTANCE &&
          i_dot.y - j_dot.y > -DOT_LINK_DISTANCE
        ) {
          if (
            i_dot.x - mousePosition.x < DOT_MOUSE_PROXIMITY &&
            i_dot.y - mousePosition.y < DOT_MOUSE_PROXIMITY &&
            i_dot.x - mousePosition.x > -DOT_MOUSE_PROXIMITY &&
            i_dot.y - mousePosition.y > -DOT_MOUSE_PROXIMITY
          ) {
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);

            // make the fill color fade out the further you are from the mouse
            const dotDistance =
              ((i_dot.x - mousePosition.x) ** 2 +
                (i_dot.y - mousePosition.y) ** 2) **
              0.5;
            let distanceRatio = dotDistance / DOT_MOUSE_PROXIMITY;

            // make it so it doesnt fade out completely
            distanceRatio -= 0.3;
            if (distanceRatio < 0) {
              distanceRatio = 0;
            }

            ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`;

            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  };

  const draw = (canvas, ctx, frameCount) => {
    // Update canvas size to fill containing element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    if (dotArray.length === 0) {
      createDots(canvas);
    } else {
      updateDots(canvas);
    }
    drawDots(ctx);
    drawLines(ctx);
  };

  return <Canvas draw={draw} style={style} onMouseMove={onMouseMove} />;
}

class Dot {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = Math.random() * 1.5;
    this.color = DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)];
  }
}

export default LinkingParticleCanvas;
