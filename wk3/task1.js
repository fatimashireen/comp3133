const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0,,9]);

const buffer_string = Buffer.from("I'm a string!", "utf-8");
console.log(buffer_string);
console.log(buffer_array);

const buf =        buffer_string.toString();
console.log(buf);
 const buff=       buffer_string.toString('hex');
 console.log(buff);
        const buffe =buffer_string.toString('utf-8', 0, 10);
console.log(buffe);

const joined_buffer = Buffer.concat([buffer_array,buffer_string]);

console.log(joined_buffer);

const json = JSON.stringify(buffer_string);
console.log(json);
