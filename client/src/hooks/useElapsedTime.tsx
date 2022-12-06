import { useAtom } from 'jotai';
import { useState, useEffect, useRef } from 'react';

import * as globalState from '../util/GlobalState.js';
import { PlainTodo } from '@todo/todo.type';

const useElapsedTime = (activeTodo: PlainTodo): any[] => {
  const [time, setTime] = useAtom(globalState.elasedTimeAtom); // time: 초 단위
  const [displayTime, setDisplayTime] = useState('');
  const intervalRef = useRef(0);

  useEffect(() => {
    if (activeTodo === undefined || activeTodo.elapsedTime === undefined) {
      return;
    }
    if (time !== activeTodo.elapsedTime) {
      setTime(activeTodo?.elapsedTime === undefined ? 0 : activeTodo.elapsedTime);
    }
  }, [activeTodo]);

  useEffect(() => {
    const hour = Math.floor(time / 60 / 60);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;

    setDisplayTime(`소요시간: ${hour}h ${minute}m ${second}s`);
  }, [time]);

  const startTimer = (): void => {
    intervalRef.current = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = (): void => {
    clearInterval(intervalRef.current);
  };

  return [displayTime, startTimer, stopTimer, time, setTime];
};

export default useElapsedTime;