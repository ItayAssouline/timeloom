import { Group, useWindow } from '@apricot/timeloom';
import React, { useMemo } from 'react';
import { BlueSegment } from '../ItemTemplates/BlueSegment/BlueSegment';
import { TimelineItemComponent } from 'packages/timeloom/src/lib/types';

const RootTimelineContent = () => {
  return (
    <Group id={'SEGMENTS'} content={'סגמנטים'}>
      <BlueSegment
        id="123"
        start={new Date(2024, 7, 20, 20, 0)}
        end={new Date(2024, 7, 20, 22, 0)}
        vad={123}
        content="123456"
      />

      <BlueSegment
        id="123456"
        start={new Date(2024, 7, 20, 23, 0)}
        end={new Date(2024, 7, 20, 23, 30)}
        content="123456"
        vad={11100}
      />
    </Group>
  );
};

export default RootTimelineContent;
