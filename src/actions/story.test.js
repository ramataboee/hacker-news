import {doAddStories, doFetchStories} from './story';

describe('story action', () => {
  it('adds stories', () => {
    const stories = ['a','b'];

    const expectedAction = {
      type: 'STORIES_ADD',
      stories,
    };

    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });

  it('fetches stories', () => {
    const query = 'pixel 4';

    const expectedAction = {
      type: 'STORIES_FETCH',
      query,
    }

    const action = doFetchStories(query);

    expect(action).toEqual(expectedAction);
  });
});
