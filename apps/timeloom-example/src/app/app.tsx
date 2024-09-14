// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Timeline } from '@apricot/timeloom';
import styles from './app.module.scss';
import RootTimelineContent from './Components/RootTimelineContent/RootTimelineContent';

export function App() {
  return (
    <div className={styles['main']}>
      <Timeline
        initialRange={{
          start: new Date(2024, 7, 20, 15, 0),
          end: new Date(2024, 7, 20, 23, 0),
        }}
      >
        <RootTimelineContent />
      </Timeline>
    </div>
  );
}

export default App;
