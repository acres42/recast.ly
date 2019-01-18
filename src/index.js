// TODO: Render the `App` component to the DOM

import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
// ,<VideoList videos={exampleVideoData}/>
//
// <VideoList videos={exampleVideoData}/>

// ReactDOM.render(
//   <App
//     videoList={<VideoList videos={exampleVideoData}/>}
//   >
//   </App>
//   , document.getElementById('app')
// );

ReactDOM.render(
  <App
    searchYouTube={searchYouTube}
  />
  , document.getElementById('app')
);
