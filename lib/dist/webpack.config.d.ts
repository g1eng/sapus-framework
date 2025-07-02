declare const distRoot: string;
export let mode: string;
export let devtool: string;
export let entry: string;
export namespace output {
    export { distRoot as path };
    export let filename: string;
    export namespace library {
        export let name: string;
        export let type: string;
        let _export: string;
        export { _export as export };
    }
    export let globalObject: string;
}
export namespace resolve {
    let extensions: string[];
    let extensionAlias: {
        ".js": string[];
        ".css": string[];
    };
}
export namespace module {
    let rules: ({
        test: RegExp;
        use: {
            loader: string;
            options: {
                exportType: string;
                modules: {
                    mode: string;
                    auto: boolean;
                };
            };
        }[];
        include: string[];
        exclude?: undefined;
    } | {
        test: RegExp;
        exclude: RegExp;
        use: ({
            loader: string;
            options: {
                presets: string[];
            };
        } | {
            loader: string;
            options?: undefined;
        })[];
        include?: undefined;
    })[];
}
export let externals: {
    react: {
        root: string;
        commonjs2: string;
        commonjs: string;
        amd: string;
    };
    "react-dom": {
        root: string;
        commonjs2: string;
        commonjs: string;
        amd: string;
    };
};
export {};
