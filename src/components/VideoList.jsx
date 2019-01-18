import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  return (<div className="video-list">
    {props.videos.map((value, i) => {
      return <VideoListEntry key={i} onListItemClick={props.onListItemClick} video={value}/>;
    })}
  </div>)
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// title={props.videos[0].snippet.title} description={props.videos[0].snippet.description}
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
