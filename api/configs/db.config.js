const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log(`Successfully connected to the database ${MONGODB_URI}`))
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(
      `An error ocurred trying to connect to the database ${MONGODB_URI}: `,
      error,
    );
    process.exit(1);
  });
