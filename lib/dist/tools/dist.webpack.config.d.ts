declare function _exports(distRoot: any, optimize: any): {
    mode: string;
    optimization: {
        minimize: boolean;
    };
    entry: string;
    output: {
        path: any;
        filename: string;
        library: string;
        libraryTarget: string;
    };
    module: {
        rules: {
            test: RegExp;
            use: {
                loader: string;
                options: {
                    cacheDirectory: boolean;
                    envName: string;
                };
            };
        }[];
    };
    resolve: {
        extensions: string[];
    };
    externals: {
        react: {
            root: string;
            commonjs2: string;
            commonjs: string;
            amd: string;
        };
        'react-dom': {
            root: string;
            commonjs2: string;
            commonjs: string;
            amd: string;
        };
    };
};
export = _exports;
