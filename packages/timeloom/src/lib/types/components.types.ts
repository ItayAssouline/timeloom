import { ReactElement } from 'react';
import { DataItem } from 'vis-timeline';

// export type TimelineItem<T = null> = React.FC<DataItem & T>;
export type TimelineItemComponent<T = {}> = React.FC<DataItem & T>;
export type TimelineItem = ReactElement<TimelineItemComponent>;
