const getArtistTitle = require("get-artist-title");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const NodeID3 = require("node-id3");

const input = process.argv[2];

console.log(process.argv);

try {
  const basename = path.basename(input);
  const [artist, title] = getArtistTitle(basename) ?? [];

  console.log(`artist ${artist}\n\ntitle ${title}\n\n${basename}`);

  console.log(
    `writing tags: ${NodeID3.update(
      {
        artist,
        title,
        input,
      },
      input
    )}`
  );
} catch (e) {
  console.log(e);
}

// Promise.all([
//   exec(`ffmpeg-normalize -c:a libmp3lame "${input}" -o "${input}" -f `),
// ]).then((results) => {
//   results.map(({ stdout, stderr }) => {
//     console.log(stdout);
//     console.log(stderr);
//   });
// });
