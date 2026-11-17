#!/usr/bin/env node

const getArtistTitle = require("get-artist-title");
const path = require("path");
const util = require("util");
const { exec } = require("child_process")
const execP = util.promisify(exec);
const NodeID3 = require("node-id3");
const { updateFile } = require('music-metadata');

const input = process.argv[2];

console.log(process.argv);

try {
  const basename = path.basename(input);
  const [artist, title] = getArtistTitle(basename) ?? [];

  console.log(`artist ${artist}\n\ntitle ${title}\n\n${basename}`);

  await updateFile(input, {
    title: title,
    artists: [artist],
  }, {});


} catch (e) {
  console.log(e);
}

// Promise.all([
//   execP(`ffmpeg-normalize -c:a libmp3lame "${input}" -o "${input}" -f `),
// ]).then((results) => {
//   results.map(({ stdout, stderr }) => {
//     console.log(stdout);
//     console.log(stderr);
//   });
// });
