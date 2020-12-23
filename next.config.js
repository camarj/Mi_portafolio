const path = require('path');

module.exports = {
  test: /.(png|woff(2)?|eot|ttf|svg|gif|jpe?g)(\?[a-z0-9=\.]+)?$/,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
