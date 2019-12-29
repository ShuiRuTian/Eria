## Why not put webpack config in root path?
The main purpose is to let vscode could give error correctly.

It seems that vscode only read a file named tsconfig.json as configuration.
You can exclude these ts files, but you could not applay another tsconfig file whose name is not tsconfig.json on these.

Surely that we could use code like
```
cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack"
```
to let it run correctly, but it would just display error.