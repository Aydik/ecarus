import OpenAPI from 'openapi-typescript-codegen';
import { exec } from 'child_process';

OpenAPI.generate({
  input: `http://ecoapp-itis.ru/docs-json`,
  output: './src/app/models/generated',
  indent: 'tab',
  exportServices: false,
  exportCore: false,
}).then(() => exec(`npm run prettier --write "src/app/models/generated/**/*.ts"`));
