
        // Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
function multiples(){
    for (var i=1;i<100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if (i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
}
multiples()
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000

function add(){
    var sum=0;
for(var a=0; a<1000;a++){
    if (a %3==0 && a %5==0){
        sum+=a;
    }
    console.log(sum)

}
}
add()
// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :"0 is even","1 is odd","2 is even"

function iteration(){
for (var j=0; j<20; j++){
     if(j%2==0){
        console.log(j + "is Even")
    }
    else if(j%2!==0){
        console.log(j + "is Odd")
}
    }
}
iteration()
// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.// 
// let num = [z=-2, x=4,f=-5, g=6,h=0]


        let number=[-2,4,-5,6,0]
        let large=number[0];
        for(i=0;i<number.length;i++){
                if(large<number[i]){
                        large=number[i]
                }
        }       

 console.log(large);
// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
a=10
b=40
function largest(){
    if(a<b) console.log(b+ "is largest")
        else console.log(a+ "is largest")
        }
        largest()
// Write a JavaScript program to find leap years from 2000 to 2022

function leapyear(){{
        for(var i=2000; i<=2022; i++){
                if (i%4==0 && i%100 !==0 || i%400 ==0){
                        console.log(i, "is a leap year")
                }
        }
    
}
 }
 leapyear()
 