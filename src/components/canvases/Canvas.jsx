import React from 'react';
import useCanvas from './UseCanvas';

function Canvas({ draw, style, ...rest }) {
  const ref = useCanvas(draw);

  return <canvas ref={ref} style={style} {...rest} />;
}

export default Canvas;
