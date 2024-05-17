import React, { useEffect, useRef, useState } from 'react';
import Canvas from './Canvas';

// 75% of dots are blue. 25% pink
const DOT_COLORS = [
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(81, 162, 233)',
  'rgb(255, 77, 90)',
];
const DOT_POPULATION_DENSITY = 0.0002; // fraction of pixels on screen that start with a dot
const DOT_LINK_DISTANCE = 100;
const FRACTION_OF_SCREEN_VISIBLE = 0.2;
const MOUSE_DOT_COLOR = '#51a2e9'; // Blue

function LinkingParticleCanvas({ style }) {
  const [maxVisibleDistance, setMaxVisibleDistance] = useState(
    FRACTION_OF_SCREEN_VISIBLE * Math.max(window.innerWidth, window.innerHeight)
  );

  const dotArray = useRef([]).current;
  const mousePosition = useRef({ x: null, y: null }).current;

  useEffect(() => {
    const handleResize = () => {
      // clear the dot array so new dots can be generated
      dotArray.length = 0;

      // Recalculate visible distance
      setMaxVisibleDistance(
        FRACTION_OF_SCREEN_VISIBLE *
          Math.max(window.innerWidth, window.innerHeight)
      );
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dotArray]);

  const onMouseMove = (event) => {
    mousePosition.x = event.nativeEvent.offsetX;
    mousePosition.y = event.nativeEvent.offsetY;

    // Update the first dot to track the mouse position
    dotArray[0].x = mousePosition.x;
    dotArray[0].y = mousePosition.y;
  };

  const createDots = (canvas) => {
    const dotCount =
      window.innerHeight * window.innerWidth * DOT_POPULATION_DENSITY;

    for (let i = 0; i < dotCount; i++) {
      dotArray.push(new Dot(canvas));
    }

    // first dot to be invisible
    dotArray[0].radius = 0;
    dotArray[0].color = MOUSE_DOT_COLOR;
    mousePosition.x = (50 * canvas.width) / 100;
    mousePosition.y = (50 * canvas.height) / 100;
  };

  const updateDots = (canvas) => {
    // The first dot is skipped since it tracks the mouse pointer
    for (let i = 1; i < dotArray.length; i++) {
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
      const distanceFromMouse = Math.sqrt(
        (dot.x - mousePosition.x) ** 2 + (dot.y - mousePosition.y) ** 2
      );
      const distanceRatio = distanceFromMouse / maxVisibleDistance;

      // this chops the bracket off the rgb color and ads an opacity
      ctx.fillStyle = dot.color.slice(0, -1) + `,${1 - distanceRatio})`;

      ctx.fill();
    });
  };

  const drawLines = (ctx) => {
    for (let i = 0; i < dotArray.length; i++) {
      for (let j = 0; j < dotArray.length; j++) {
        const i_dot = dotArray[i];
        const j_dot = dotArray[j];
        const dot_distance = Math.sqrt(
          (i_dot.x - j_dot.x) ** 2 + (i_dot.y - j_dot.y) ** 2
        );
        const distanceFromMouse = Math.sqrt(
          (i_dot.x - mousePosition.x) ** 2 + (i_dot.y - mousePosition.y) ** 2
        );

        if (
          dot_distance < DOT_LINK_DISTANCE &&
          distanceFromMouse < maxVisibleDistance
        ) {
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(i_dot.x, i_dot.y);
          ctx.lineTo(j_dot.x, j_dot.y);

          // make the fill color fade out the further you are from the mouse
          let distanceRatio = distanceFromMouse / maxVisibleDistance;

          // make it so it doesn't fade out completely
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
    drawLines(ctx);
    drawDots(ctx);
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
