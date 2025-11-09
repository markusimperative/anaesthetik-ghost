const path = require('path');
const express = require('express');
const ghost = require('ghost');

const app = express();
const configPath = path.join(__dirname, 'config.development.json');

ghost({ config: configPath })
  .then(ghostServer => {
    app.use(ghostServer.rootApp);

    const port = process.env.PORT || 3000;
    app.listen(port, '0.0.0.0', () => {
      // eslint-disable-next-line no-console
      console.log(`Ghost is running on port ${port}`);
    });
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error('Ghost failed to start', err);
    process.exit(1);
  });
