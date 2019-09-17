import {doArchiveStory} from './archive';

describe('archive action', () => {
  it('add to archives', () => {
    const id = '1';

    const expectedAction = {
      type: 'STORY_ARCHIVE',
      id,
    };

    const action = doArchiveStory(id);

    expect(action).toEqual(expectedAction);

  });
});
