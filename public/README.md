### TypeScript Exercise 1

#### Exercise is based on scrimba passenger counter app

### Setting TypeScript in your dev invironment

1. If TypeScript is not yet installed locally, install it using npm: ``` npm install -g typescript ```
2. In your terminal run: ``` tsc --init ```
3. In tsconfig.json add the following: 
  ```javascript
    { "compilerOptions": { 
   "target": "es5" or "es6",, 
   "module": "commonjs" or "es2015", 
   "moduleResolution": "node", 
   "sourceMap": true, 
   "declaration": true, 
   "emitDecoratorMetadata": true, "experimentalDecorators": true, 
   "removeComments": false, 
   "noImplicitAny": false, 
   "lib": ["es2015", "dom"], 
    // "rootDir": 
   "./src",
   //outDir
   "outDir": "./public) " },
    // to avoid adding files outside of src folder, add the following in tsconfig.json
    "include": ["src"]
   } 
   ```

  