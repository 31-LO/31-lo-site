import {
  Bodies,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from 'matter-js';
import { useEffect, useRef } from 'react';
import texture from './foka-oval.png';

function createFokas(maxWidth, maxHeight) {
  return new Array(Math.round(maxWidth / 15)).fill(0).map(() =>
    Bodies.circle(Math.random() * maxWidth, Math.random() * maxHeight, 30, {
      render: {
        fillStyle: 'red',
        strokeStyle: 'darkred',
        lineWidth: 1,
        sprite: {
          texture,
          xScale: 1,
          yScale: 1,
        },
      },
    })
  );
}

export default function FunBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const { width, height } = wrapperRef.current.getBoundingClientRect();
    const engine = Engine.create();
    const render = Render.create({
      element: wrapperRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
      },
    });

    const hearts = createFokas(width, height);
    Composite.add(engine.world, [...hearts]);

    const ground = Bodies.rectangle(0, height, width * 2, 1, {
      isStatic: true,
    });
    const leftWall = Bodies.rectangle(0, 0, 1, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width, 0, 1, height * 2, {
      isStatic: true,
    });
    const ceiling = Bodies.rectangle(0, 0, width * 2, 1, { isStatic: true });
    Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(engine.world, mouseConstraint);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
  }, [wrapperRef]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      ref={wrapperRef}
    />
  );
}
