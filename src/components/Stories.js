import React from 'react';
import './Stories.css';
import Story from './Story';

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

export default Stories;
