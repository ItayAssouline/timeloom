import { createContext } from 'react';
import { DataSet } from 'vis-data';
import { DataGroup, DataGroupCollectionType } from 'vis-timeline';

interface IDataSetsContext {
  groupsDataSet: DataSet<DataGroup>;
}

export const DataSetsContext = createContext<IDataSetsContext>({
  groupsDataSet: new DataSet(),
});
