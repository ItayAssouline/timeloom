import {
  TimelineItem,
  TimelineItemComponent,
} from 'packages/timeloom/src/lib/types';
import React from 'react';

interface BlueSegmentProps {
  vad: number;
}

export const BlueSegment: TimelineItemComponent<BlueSegmentProps> = () => {
  return <div>BlueSegment</div>;
};
