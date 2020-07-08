# A single page application for the Anna-Veronica online-shop

## Fixing previous state of project

A simple web page was created on previous stage of development. It is necessary to create an abitity to restore it. The special branch `simple_page` is used for this perpous:

```
git add .
git commit -am simple_page
git checkout -b simple_page
git checkout master
```

From now the previous (without React using) state of the project can be reached as `git checkout simple_page`.

## Setting up the React enviroment

The [react-scripts](https://www.npmjs.com/package/react-scripts) technology is used for powering this web page with reactive abilities. As some files already exist in the project, the recommended command `yarn create react-app my-app` is dangerous: it can damage the project structure. So, it is better to create an empty react project and copy some files from it:

```
cd ..
yarn create react-app empty-react-app
cd business-from-scratch
cp ../empty-react-app/package.json .
cp ../empty-react-app/.gitignore .
git add .
git commit -am react-scripts
yarn
```

Now it is necessary to setup the project for binding React abilities to `app.html` instead of `index.html`, as it is configured in default settings of `react-scripts`. It can be reached with `yarn eject` command, that unpacks the project settings and let to edit some properties. So, one line of the file `config/paths.js` must be changed:


module.exports = {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('.'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/app.html'), // was index.html
    appIndexJs: resolveModule(resolveApp, 'src/index'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    appTsConfig: resolveApp('tsconfig.json'),
    appJsConfig: resolveApp('jsconfig.json'),
    yarnLockFile: resolveApp('yarn.lock'),
    testsSetup: resolveModule(resolveApp, 'src/setupTests'),
    proxySetup: resolveApp('src/setupProxy.js'),
    appNodeModules: resolveApp('node_modules'),
    publicUrlOrPath,
};


Now the project can be started for debugging and developing:


yarn start


The page `app.html` will be injected with React scripts and automatically opened as `http://localhost:3000` in the default browser of local computer.

This point of development sould be reflected in repository as a separate branch:


git add .
git commit -am 'Basic React settings.'
git checkout -b basic-react
git checkout master


From now this stage of development can be restored from repository as `git checkout basic-react`.

Some external software - `react-toastify` library - will be used in the project. The command to install it is `yarn add react-toastify`. 



