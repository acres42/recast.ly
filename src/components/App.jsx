import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      query: ''
    };
  }

  componentDidMount() {
    this.getSearchResults('cute kittens');
  }

  getSearchResults(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      q: query,
      maxResults: 5
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    });
  }

  onListItemClick(e, vod) {
    this.setState({
      currentVideo: vod
    });
  }

  onQueryTermChange(e) {
    this.setState({
      // query
      [e.target.name]: e.target.value
    });
    this.getSearchResults(this.state.query);
  }

  onGetSearchClick() {
    this.getSearchResults(this.state.query);
  }

  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>
            <Search
              onQueryTermChange={this.onQueryTermChange.bind(this)}
              searchYouTube={this.getSearchResults.bind(this)}
              onGetSearchClick={this.onGetSearchClick.bind(this)}
            />
            </em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>
                <em>
                  <VideoList onListItemClick={this.onListItemClick.bind(this)} videos={this.state.allVideos} />
                </em>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
