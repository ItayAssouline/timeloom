import {
  DataGroupCollectionType,
  DataItemCollectionType,
  Timeline,
} from 'vis-timeline';
import { IRange } from '../types/time.types';

export class VisAPI {
  #timeline?: Timeline;
  private get timeline() {
    if (!this.#timeline)
      throw new Error('Tried accessing timeline before initialized');
    return this.#timeline;
  }

  public init(
    timelineContainer: HTMLDivElement,
    items: DataItemCollectionType,
    groups: DataGroupCollectionType,
    initialRange: IRange
  ): void {
    this.#timeline = new Timeline(timelineContainer, items, groups, {
      stack: false,
    });

    // if (initialRange)
  }

  public destroy() {
    this.#timeline?.destroy();
    this.#timeline = undefined;
  }

  public setRange(range: IRange) {
    this.timeline.setWindow(range.start, range.end);
  }

  public on: typeof this.timeline.on = (...args) => this.timeline.on(...args);

  public off: typeof this.timeline.off = (...args) =>
    this.timeline.off(...args);
}
