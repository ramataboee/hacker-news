import React from 'react';
import './Stories.css';
import Story from './Story';

import {connect} from 'react-redux';
import {doArchiveStory} from '../actions/archive';
import {getReadableStories} from '../selectors/story';

const Stories = ({stories, onArchive}) =>
  <div className='stories'>
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
        onArchive={onArchive}
      />
    )}
  </div>

//subscribes to updates from redux store. on each store subscription update this will run
const mapStateProps = state => ({
  stories: getReadableStories(state),
});

//gives access to dispatch methods
const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Stories);
