module.exports = {
  port: process.env.PORT || 9000,
  files: ['./src/**/*.{html,htm,css,js, json, png, xml}'],
  server:{
      baseDir: "./src"
  }
};