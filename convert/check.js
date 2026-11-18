#!/usr/bin/env node

const getArtistTitle = require("get-artist-title");
const path = require("path");
const util = require("util");
const { exec } = require("child_process")
const execP = util.promisify(exec);
const { updateFile } = require('music-metadata');

const input = process.argv[2];

console.log(process.argv);

try {
  const basename = path.basename(input);
  const [artist, title] = getArtistTitle(basename) ?? [];

  console.log(`\n\nartist ${artist}\n\ntitle ${title}\n\n${basename}\n`);

  updateFile(input, {
    title: title,
    ...artist && { artists: [artist] },
  }, {}).then(console.log).catch(console.log);


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
