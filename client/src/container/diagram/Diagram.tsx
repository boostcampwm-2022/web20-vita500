import { ReactElement, useEffect, useState, useRef } from 'react';
import { useAtom } from 'jotai';
import { todoList } from '@util/GlobalState';
import styled from 'styled-components';
import {
  getDiagramData,
  DiagramTodo,
  calculatePosition,
  Vertex,
  getVertice,
  getVertexDimension,
} from '@util/diagram.util';
import { PRIMARY_COLORS } from '@util/Constants';
import TodoBlock from '@components/diagram/TodoBlock';
import TodoVertex from '@components/diagram/TodoVertex';

const { offWhite, green } = PRIMARY_COLORS;

const Wrapper = styled.div`
  position: relative;
  background-color: ${offWhite};
  transform: translate(var(--offsetX), var(--offsetY));
`;

const Detector = styled.div`
  position: absolute;
  background-color: ${offWhite};
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const Line = styled.div`
  position: absolute;
  height: 0;
  width: 100%;
  top: 40px;
  transform: translateY(var(--offsetY));
  border-top: 4px solid ${green};
  opacity: 0.5;
`;

const Diagram = (): ReactElement => {
  const [todoListAtom] = useAtom(todoList);
  const [diagramData, setDiagramData] = useState<Map<string, DiagramTodo> | undefined>();
  const [diagramVertice, setDiagramVertice] = useState<Vertex[] | undefined>();
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 100, y: 100 });
  const isWheelDown = useRef<boolean>(false);

  useEffect(() => {
    getDiagramData(todoListAtom)
      .then((value) => {
        setDiagramData(value);
        setDiagramVertice(getVertice(value));
      })
      .catch((err) => {
        throw err;
      });
  }, [todoListAtom]);

  const diagramStyle = {
    '--offsetX': `${offset.x}px`,
    '--offsetY': `${offset.y}px`,
  };

  const lineStyle = {
    '--offsetY': `${offset.y}px`,
  };

  const onWheelDown = (event: React.MouseEvent): void => {
    if (event.button === 1) {
      isWheelDown.current = true;
    }
  };

  const onWheelUp = (event: React.MouseEvent): void => {
    isWheelDown.current = false;
  };

  const onWheelLeave = (event: React.MouseEvent): void => {
    isWheelDown.current = false;
  };

  const onMouseMove = (event: React.MouseEvent): void => {
    if (isWheelDown.current) {
      setOffset((prev) => ({ x: prev.x + event.movementX, y: prev.y + event.movementY }));
    }
  };

  return (
    <div onMouseDown={onWheelDown} onMouseUp={onWheelUp} onMouseMove={onMouseMove} onMouseLeave={onWheelLeave}>
      <Detector />
      <Line style={lineStyle as React.CSSProperties} />
      <Wrapper style={diagramStyle as React.CSSProperties}>
        {diagramData !== undefined &&
          diagramVertice?.map((el) => {
            const { x1, y1, x2, y2 } = getVertexDimension(diagramData, el);
            return <TodoVertex key={`${el.from}+${el.to}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        {diagramData !== undefined &&
          [...diagramData].map((el) => {
            const pos = calculatePosition(el[1].order as number, el[1].depth as number);
            return <TodoBlock key={el[1].todo.id} todo={el[1].todo} x={pos.x} y={pos.y} />;
          })}
      </Wrapper>
    </div>
  );
};

export default Diagram;
