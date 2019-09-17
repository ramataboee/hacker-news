import archiveReducer from './archive';

describe('archive reducer', () => {
  it('adds a story to archive state', () => {
    const stories = [
      {objectID: '1', title: 'foo'},
      {objectID: '2', title: 'bar'}
    ];

    const id = stories[1].objectID;
    const previousArchiveState = [];

    const action = {
      type: 'STORY_ARCHIVE',
      id
    }

    const expectedArchiveState = ['2'];
    const archiveState = archiveReducer(previousArchiveState, action);

    expect(archiveState).toEqual(expectedArchiveState);
  });
});
