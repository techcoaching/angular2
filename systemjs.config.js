(function (global) {
    System.config({
        defaultJSExtensions: true,
        baseUrl: '.',
        transpiler: "ts",
        typeScriptOptions: {
            target: "es5",
            module: "commonjs",
            moduleResolution: "node",
            sourceMap: true,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            noImplicitAny: true,
            suppressImplicitAnyIndexErrors: true
        },
        meta: {
            "typescripts": {
                "exports": "ts"
            }
        },
        paths: {
            npm: "node_modules/"
            //'npm:': 'https://unpkg.com/'
        },
        map: {
            "src": "src",
            "@angular/core": 'npm@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/upgrade/static': 'npm@angular/upgrade/bundles/upgrade-static.umd.js',
            'rxjs': 'npmrxjs',
            /*'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',*/
            'ts': 'npm@plugin-typescript@4.0.10/lib/plugin.js',
            'typescript': 'npm@typescript@2.0.3/lib/typescript.js'
        },
        packages: {
            src: {
                main: "./main.ts",
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: "js"
            }
        }
    });
    if (global.autoBootstrap) { bootstrap(); }
    function bootstrap() {
        console.log("System was bootstrapped automaticly");
        //System.set(System.normalizeSync("src/main.ts"), System.newModule({}));
        Promise.all([
            System.import("@angular/platform-browser-dynamic"),
            getModule("defaultPage")
        ]).then(function (imports) {
            var platform = imports[0];
            var module = imports[1];
            platform.platformBrowserDynamic().bootstrapModule(module.appModule)
        }).catch(function (err) {
            console.log("import modules with error:", err);
        });
    }
    function getModule(modulePath) {
        console.log("Load module", modulePath);
        return Promise.all([
            System.import("@angular/core"),
            System.import("@angular/platform-browser"),
            System.import("src/" + modulePath),
        ]).then(function (imports) {
            var core = imports[0];
            var browser = imports[1];
            var module = imports[2].Module;
            var appModule = function(){ };
            appModule.annotations = [
                new core.NgModule({
                    imports: [browser.BrowserModule],
                    declarations: [module],
                    bootstrap: [module]
                })
            ];
            return { appModule: appModule };
        });
    }
})(window);