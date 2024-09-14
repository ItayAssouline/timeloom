// import styles from './timeline.module.scss';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { VisAPI } from './VisAPI/VisAPI';
import 'vis-timeline/dist/vis-timeline-graph2d.min.css';
import { DataGroup, DataItem } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { DataSetsContext } from './Context/DataSetsContext/DataSetsContext';
import { IRange } from './types/time.types';
import { WindowControllerContext } from './Context/WindowController/WindowController';

export const itemsDataset = new DataSet<DataItem>();

interface TimelineProps {
  children?: ReactNode | ReactNode[];
  initialRange?: IRange;
}

export const groupsDataset = new DataSet<DataGroup>();

export const Timeline: React.FC<TimelineProps> = ({
  children,
  initialRange,
}) => {
  const visApi = useRef(new VisAPI());
  const containerRef = useRef<HTMLDivElement>(null);
  const groupsDataset = useRef(new DataSet<DataGroup>());

  const [currentWindow, setCurrentWindow] = useState<IRange>();

  useEffect(() => {
    if (!containerRef.current) throw new Error('No container');
    if (!initialRange) throw new Error('No initialrange');
    const currentVisApi = visApi.current;
    currentVisApi.init(
      containerRef.current,
      itemsDataset,
      groupsDataset.current,
      initialRange
    );

    setTimeout(() => {
      currentVisApi.setRange(initialRange);
    });

    return () => {
      console.debug('Destroying timeline');
      currentVisApi.destroy();
    };
  }, [initialRange]);

  //Register range events
  useEffect(() => {
    const currentVisApi = visApi.current;

    const onRangeChanged = (e) => {
      setCurrentWindow(e);
    };
    currentVisApi.on('rangechanged', onRangeChanged);

    return () => {
      currentVisApi.off('rangechanged', onRangeChanged);
    };
  }, []);

  const setWindow = useCallback((range: IRange) => {
    visApi.current.setRange(range);
  }, []);

  return (
    <div ref={containerRef} id="timeline-container">
      {currentWindow && (
        <DataSetsContext.Provider
          value={{ groupsDataSet: groupsDataset.current }}
        >
          <WindowControllerContext.Provider
            value={{ window: currentWindow, setWindow }}
          >
            {children}
          </WindowControllerContext.Provider>
        </DataSetsContext.Provider>
      )}
    </div>
  );
};
