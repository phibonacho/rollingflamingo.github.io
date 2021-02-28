// this is what I use to generate backgrounds
const trianglify = require('trianglify')
const fs = require('fs')

const sizes = {
  'sm' : {
    width: 667,
    height: 889,
    cellSize: 20
  },
  'md' : {
    width: 845,
    height: 1126,
    cellSize: 20
  },
  'lg' : {
    width: 1536,
    height: 2048,
    cellSize: 40
  }
}

const palettes = {
  'light' : [ '#e7eaec', '#f5f9fd', '#b0cef3', '#cddbf1', '#7eb0ea' ],
  'dark' : [ '#000000', '#5b5b60', '#252833', '#090616', '#0d0e10' ]
};

const command = process.argv.slice(2);

const size = command[0] || 'md';
const palette = command[1] || 'light';

console.log(process.argv.slice(2))

const options = {
  width: sizes[size].width,
  height: sizes[size].height,
  cellSize: sizes[size].cellSize,
  variance: 0.6,
  xColors: palettes[palette],
  yColors: 'match',
  fill: true,
  palette: palette[palette],
  colorFunction: trianglify.colorFunctions.sparkle(.2),
  strokeWidth: 0,
  points: null
};

const canvas = trianglify(options).toCanvas()

const file = fs.createWriteStream(`src/media/images/bg_trianglify_${palette}_${size}.png`)
canvas.createPNGStream().pipe(file)
