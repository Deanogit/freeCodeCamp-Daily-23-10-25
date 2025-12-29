// Favorite Songs
// Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.

// Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.

// Each object will have a "title" property (string), and a "plays" property (integer).

function favoriteSongs(playlist) {
  console.log(playlist);
  // array of objects
  // loop through objects, getting the highest plays value

  // for (i = 0; i <= playlist.length; i++) {
  //  console.log(...playlist[i])
  // }

  const sorted = [...playlist].sort((a, b) => b.plays - a.plays);
  console.log(sorted);

  const sliced = sorted.slice(0, 2);

  const results = sliced.map((x) => x.title);

  console.log(results);
  return results;

  // return playlist;
}
