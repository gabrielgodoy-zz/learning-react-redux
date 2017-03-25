import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import webpackConfig from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

// serve static assets normally
app.use(express.static(`${__dirname}/public`));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
}));
app.use(require('webpack-hot-middleware')(compiler));

// Returns index.html for all requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
