import React from 'react';
import './Stories.css';
import Story from './Story';

import {connect} from 'react-redux';

import {getReadableStories} from '../selectors/story';

const Stories = ({stories}) =>
  <div className='stories'>
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
      />
    )}
  </div>

//subscribes to updates from redux store. on each store subscription update this will run
const mapStateToProps = state => ({
  stories: getReadableStories(state),
});


export default connect(
  mapStateToProps,
)(Stories);
