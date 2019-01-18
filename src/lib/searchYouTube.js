

var searchYouTube = (options, callback = ()=>{}) => {
  $.ajax({
    // url: 'https://www.googleapis.com/youtube/v3/list&key=' + options[YOUTUBE_API_KEY],
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.q,
      maxResults: options.maxResults,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    // dataType: 'jsonp',
    // contentType: 'application/jsonp',
    success: (data) => {
      callback(data.items);
    },
    error: function(error) {
      console.error('youtube: Failed to fetch videos', error);
    }
  })
};

export default searchYouTube;

// $.ajax({
//         method: 'GET',
//         url: 'https://www.googleapis.com/youtube/v3/channels?',
//         data: {
//         part : 'contentDetails',
//         forUsername: channelName,
//         key: '(My personal key)'
//         },
//         dataType: 'jsonp'
// })
// $.ajax({
//     // url: 'https://www.googleapis.com/youtube/v3/list&key=' + options[YOUTUBE_API_KEY],
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: options,
//     contentType: 'application/json',
//     success: callback,
//     error: function(error) {
//       console.error('youtube: Failed to fetch videos', error);
//     }
//   });
