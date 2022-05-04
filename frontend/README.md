# frontend

## Project setup
```
yarn install
```

### Config updates
The configuration in [./public/config.js](./public/config.js) must be modified to reflect the correct configuration.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Production serving
```
yarn build
```
And the `dist` dir is served as a static website.

### Generating typescript-proto files
```
protoc \     
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="./src/types" \
  --proto_path="../third_party/proto" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  ../third_party/proto/**/*.proto
```

### Generating REST client from openapi docs
```
starport generate openapi
npx swagger-typescript-api -p ../docs/static/openapi.yml -o ./src/rest -n cosmos.ts
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
