console.log("== System ==");
console.log(`platform: ${process.platform}`);
console.log(`architecture: ${process.arch}`);
console.log();
console.log("== NodeJS ==")
console.log(`version: ${process.version}`);
console.log(`v8: ${process.versions['v8']}`);
console.log(`libuv: ${process.versions['uv']}`);
console.log();
console.log("== Process ==");
console.log(`pid: ${process.pid}`);
console.log(`title: ${process.title}`);
console.log(`current directory: ${process.cwd()}`);



console.log()