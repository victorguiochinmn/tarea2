var _INPUT = "4\n1 8\n2 4\n10 13\n11 20";
var num= _INPUT.split("\n");
var num2= num.join(" ");
num = num2.split(" ");
var T=(num[0]);
var i;
var result=0;
var k;
var j;
function solution (A,B,result) {
    for (k=A;k<=B;k++) {
        j=Math.sqrt(k);
        if (j%1  === 0) {
            result++;
        }
    }
    console.log(result);
}
for (i=1;i<(num.length);i++) {
    var A=num[i];
    i++;
    var B=num[i];
    solution(A,B,result);
}