const content = 'Some content!';
fs.appendFile('backend\data\db.json', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("file written successfully!");
  }
});