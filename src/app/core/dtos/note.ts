import { TModel } from '@core/dtos/util-types';
import { ITag } from '@core/dtos/tag';

export interface INote extends TModel {
  id: number;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  tags: ITag[];
}
