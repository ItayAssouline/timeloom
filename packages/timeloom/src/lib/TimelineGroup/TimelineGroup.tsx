import React, { memo, useContext, useEffect } from 'react';
import { TimelineGroup } from 'vis-timeline';
// import { DataSetsContext } from '../Context/DataSetsContext/DataSetsContext';
// import { groupsDataset } from '../Timeline';
import { TimelineItem } from '../types';
import { itemsDataset } from '../Timeline';
import { DataSetsContext } from '../Context/DataSetsContext/DataSetsContext';

interface GroupProps extends TimelineGroup {
  test?: number;
  children?: TimelineItem[];
}

export const Group: React.FC<GroupProps> = memo(
  ({ children, ...groupProps }) => {
    const { groupsDataSet } = useContext(DataSetsContext);

    useEffect(() => {
      groupsDataSet.add(groupProps);

      return () => {
        groupsDataSet.remove(groupProps.id);
      };
    }, [groupProps, groupsDataSet]);

    useEffect(() => {
      console.debug('Registering items for group: ', groupProps.id, children);
      children?.forEach((timelineItem) => {
        itemsDataset.update({ ...timelineItem.props, group: groupProps.id });
      });
    }, [children, groupProps.id]);

    useEffect(() => {
      console.log('Rerendering component');
    }, [children]);

    return <></>;
  }
);
