import express from 'express';
import path from 'path';

const qdb = express();
qdb.use('/qdb', express.static('dist'));
qdb.use('/qdb/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

export default qdb;
