import { TagModel } from './tag.model';
import { NoteTag } from './note-tags.model';

export interface NoteModel {
  id: number;
  title: string;
  user_id: number;
  sub_title: string;
  content: string;
  created_at: number;
  updated_at: number;
  tags?: TagModel[];
  noteTags?: NoteTag[];
}

export const fakeModel: NoteModel = {
  content:
    'dtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaatsdtaat ',
  created_at: 1718768501,
  id: 1,
  sub_title: 'asdadfasdadfasdadfasdadfasdadfasdadfasdadfasdadfasdadf',
  title: 'aadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfadsfasdfdsfasdf',
  updated_at: 1718768501,
  user_id: 1,
  tags: [
    {
      tag_name: 'test',
      id: 2,
    },

    {
      tag_name: 'test',
      id: 3,
    },

    {
      tag_name: 'test',
      id: 5,
    },

    {
      tag_name: 'test',
      id: 2,
    },

    {
      tag_name: 'test',
      id: 3,
    },

    {
      tag_name: 'test',
      id: 5,
    },
    {
      tag_name: 'test',
      id: 2,
    },

    {
      tag_name: 'test',
      id: 3,
    },

    {
      tag_name: 'test',
      id: 5,
    },
  ],
};
