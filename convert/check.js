const glob = require("glob");
const fs = require("fs");
const getArtistTitle = require("get-artist-title");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const input = process.argv[2];

console.log(process.argv);

const basename = path.basename(input);
const [artist, title] = getArtistTitle(basename);

console.log(`artist ${artist}\n\ntitle ${title}\n\n${basename}`);
Promise.all([
  exec(`id3ed -q -n "${artist}" -s "${title}" "${input}"`),
  exec(`mp3gain -r -k "${input}"`),
]).then((results) => {
  results.map(({ stdout, stderr }) => {
    console.log(stdout);
    console.log(stderr);
  });
  glob("*.(jpg|png|webp)", function (er, files) {
    files.map((i) => {
      console.log(i, "image removal");
      fs.rmSync(i);
    });
  });

  glob("!(*.mp3)", function (er, files) {
    files.map((i) => {
      console.log(i, "not mp3 empty");
      fs.writeFileSync(i, "");
    });
  });
});
