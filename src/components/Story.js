import React from 'react';
import {ButtonInline} from './Button';
import {connect} from 'react-redux';
import {doArchiveStory} from '../actions/archive';
import './Story.css';

const Story = ({story, onArchive}) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    created_at,
    objectID,
  } = story;

  return (
    <div className='story'>
      <span className='story-title semibold'>
        <a href={url}>{title}</a>
      </span>
      <span className='story-author'>{author}</span>
      <span className='story-created-at'>{created_at}</span>
      <span className='story-comment'>{num_comments}</span>
      <span className='story-point'>{points}</span>
      <span>
        <ButtonInline onClick={() => onArchive(objectID)}>Archive
        </ButtonInline>
      </span>
    </div>
  );
}

//gives access to dispatch methods
const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});


export default connect(
  null,
  mapDispatchToProps
)(Story);
