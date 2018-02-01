const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { apolloUploadExpress } = require('apollo-upload-server');
const { makeExecutableSchema } = require('graphql-tools');
const app = express();

const schema = require('../app/schema');

app.use('/graphql', bodyParser.json(), apolloUploadExpress(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => {
	console.log('Server start');
});

module.exports = app;