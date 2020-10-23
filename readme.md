![license](https://badgen.net/github/license/flavien-perier/neo4j-twitter-convertor)

# Deploy app

## Configure app

Create the `conf.yml' file at the root with this example of pattern :
```yml
app:
  track: "twitter"
  production: false
  authorizedLanguages:
    - "fr"
    - "en"
neo4j:
  uri: "bolt://127.0.0.1:7687"
  user: "neo4j"
  password: "neo4j"
twitterApi:
  consumer_key: 'consumer_key'
  consumer_secret: 'consumer_secret'
  access_token_key: 'access_token_key'
  access_token_secret: 'access_token_secret'
```
:warning: If the production mode is set to "false", the database is cleaned at startup.

## Install the dependencies and start the application

Use the commands :
```sh
npm install
npm start
```