const url = require('url')
const URL = 'https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_met_path_format'

const website = url.parse(URL)
console.log(website);
