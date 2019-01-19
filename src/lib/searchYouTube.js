import exampleVideoData from '../data/exampleVideoData.js';

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
    contentType: 'application/json',
    success: (data) => {
      callback(data.items);
    },
    error: function(error) {
      callback(exampleVideoData);
      console.error('youtube: Failed to fetch videos', error);
    }
  });
};

// var searchYouTube = ({key, q, maxResults = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: q,
//     maxResults: maxResults,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };

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
