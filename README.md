# electron-vitejs-react-boilerplate

Just run the following commands to install electron-vitejs-react-boilerplate with typescript.live reaload enabled.

```
git clone https://github.com/gihanrangana/electron-vitejs-react-boilerplate.git && cd electron-vitejs-react-boilerplate
```

## NPM

```textmate
npm install
npm run electron
```

## YARN

```textmate
yarn install
yarn electron
```

### Without  TypeScript for electron

just do the following.

## package.json

```json
{
  "main": "electron/electron.js",
  "scripts": {
    "electron": "concurrently \"npm run dev\" \"electron .\""
  }
}
```

then run ``npm run electron`` or ``yarn electron``

## To build the project

``npm run app:build`` or ``yarn app:build``

your output will be saved under `electron_build` directory.