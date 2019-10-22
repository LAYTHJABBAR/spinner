let str = "|/-\\" ;
let count = 0
for (let char of str){
setTimeout(() => {
    process.stdout.write("\r  " + char)}, count)
   count+= 200;
}
setTimeout(()=>{
    process.stdout.write("\n")
}, count += 1000);

