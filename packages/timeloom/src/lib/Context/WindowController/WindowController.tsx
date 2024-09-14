import { createContext, useContext } from 'react';
import { IRange } from '../../types/time.types';

interface IWindowController {
  window: IRange;
  setWindow: (window: IRange) => void;
}

export const WindowControllerContext = createContext<IWindowController>();

export const useWindow = () => useContext(WindowControllerContext);
