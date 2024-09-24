import { TModel } from '@core/dtos/util-types';
import { ITag } from '@core/dtos/tag';

export interface INote extends TModel {
  id: 7;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  tags: ITag[];
}
