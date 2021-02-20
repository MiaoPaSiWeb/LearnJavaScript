
// 这个模板字面量在换行符之后有 25 个空格符
let myTemplateLiteral = `first line
                         second line`;
console.log(myTemplateLiteral.length); // 47 
// 这个模板字面量以一个换行符开头
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral[0] === '\n'); // true
// 这个模板字面量没有意料之外的字符
let thirdTemplateLiteral = `first line second line`; 
console.log(thirdTemplateLiteral);
// first line
// second line



