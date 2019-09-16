import React from 'react';
import {ButtonInline} from './Button';
import './Story.css';

const Story = ({story, onArchive}) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectID,
  } = story;

  return (
    <div className='story'>
      <span className='story-title'>
        <a href={url}>{title}</a>
      </span>
      <span className='story-author'>{author}</span>
      <span className='story-comment'>{num_comments}</span>
      <span className='story-point'>{points}</span>
      <span>
        <ButtonInline onClick={() => onArchive(objectID)}>Archive
        </ButtonInline>
      </span>
    </div>
  );
}


export default Story;
