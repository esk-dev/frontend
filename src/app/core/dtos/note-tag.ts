import { ITag } from '@core/dtos/tag';
import { TModel } from '@core/dtos/util-types';

export interface INoteTag extends TModel {
  tags: Array<ITag>;
  id: number;
}
