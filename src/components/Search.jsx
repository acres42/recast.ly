var Search = (props) => (
  <div className="search-bar form-inline">
    <input
      name="query"
      className="form-control"
      type="text"
      onChange={(e)=>{
        props.onQueryTermChange(e);
      }}
      onBlur={(e) => {
        let query = e.target.value;
        setTimeout(()=>{ props.searchYouTube(query); }, 2000);
      }}
    />
    <button className="btn hidden-sm-down" onClick={()=>{props.onGetSearchClick()}}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

// var VideoPlayer = (props) => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>{props.video.snippet.title}</h3>
//       <div>{props.video.snippet.description}</div>
//     </div>
//   </div>
// );
// //put onClick functionality here on this button
