<div align="center">

# snowpack-plugin-json5

**[Snowpack](https://www.snowpack.dev/) plugin for using [json5](https://json5.org/).**

</div>

<br><br>

## What it does

When developing web applications, we often use JSON files in order to define content (e.g. for internationalization) or extract some form
of configuration. Especially in the former case, we usually end up with one or more huge JSON files, probably a couple or hundred or even
thousand lines long.

Using [json5](https://json5.org/) over plain json can help organizing, structuring and maintaining those files, e.g. by using comments,
custom line breaks and trailing commas (amonst other features).

Meet the **snowpack-plugin-json5**, a plugin for [Snowpack](https://www.snowpack.dev/) that allows you to import `.json5` files just like
you would import `json5` files. Think of it as the Snowpack equivalent for the [json5-loader](https://webpack.js.org/loaders/json5-loader/)
for [Webpack](https://webpack.js.org/).

<br><br><br>

## How to install

You can get the **snowpack-plugin-json5** via **npm** by either adding it as a new _devDependency_ to your `package.json` file and running
`npm install`, or running the following command:

```bash
npm install snowpack-plugin-json5
```

> Note: This plugin is only compatible with Snowpack version `3.x`.

<br><br><br>

## How to setup

To use **snowpack-plugin-json5**, add it to the list of plugin in your `snowpack.config.js` file. For example:

```diff
  /** @type {import("snowpack").SnowpackUserConfig } */
  module.exports = {
    plugins: [
+     'snowpack-plugin-json5'
    ],
  };
```

If you are using TypeScript, you must also define `.json` as a known module type. To do so, add the following declaration to your custom
types file (a file ending with `.d.ts`, sometimes called `typings.d.ts` or `static.d.ts`):

```ts
declare module '*.json5' {
  const value: any;
  export default value;
}
```

<br><br><br>

## How to use

Once installed and setup, importing `.json5` files works exactly like importing `.json` files by using default imports (see
[Snowpack documentation for importing json files](https://www.snowpack.dev/reference/supported-files#json)). For example:

```ts
import de from './assets/de.json5';
import en from './assets/en.json5';

// ... use the values ...
```
