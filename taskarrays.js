1.//push()//adds multiple elements at end of an array 
var colors=["red","green","blue","orange"]
colors.push("pink")
console.log(colors)
2.//pop()//removes only single element at end of an array
var fruits=["apple","banana","guava","orange"]
fruits.pop()
console.log(fruits)
3.//unshift()//adds multiple elements in front of an array 
var phones=["samsung","vivo","redmi","realme"]
phones.unshift("moto")
console.log(phones)
4.//shift()//removes only single element in front of an array
var laptops=["dell","hp","apple"]
laptops.shift()
console.log(laptops)
5.//reverse()//reverses order of an array elements
var a=["hello","hi",1,2,3]
var b=a.reverse()
console.log(b)
6.//indexof()//finds index of a specific value in an array
var x=[7,8,9,10,200]
var y=x.indexOf([200])
console.log(y)
7.//includes()//checks if an array contains that element or not(true/false)
var c=[100,200,300,400,500]
console.log(c.includes(300))
console.log(c.includes(800))
8.//sort() used to sort the elements of an array in ascending order
var num=[5,7,9,3,4]
var ascending=num.sort()
console.log(num)
9.//tostring()//converts an array to a string of array values
var fruits=["apple","banana","guava","mango"]
var result=fruits.toString()
console.log(result)
//**Multiple Arrays
1.//using push()adds element at end and shift()remove element at start
var s=[10,20,30,40,]
s.push(50)
console.log(s)
s.shift()
console.log(s)
2.//using reverse()reveses an array and  join()combines arrau elemnts into string
var a=[50,60,70,80]
var reverse=a.reverse()
console.log(reverse)
var j=reverse.join()
console.log(j)
3.//using sort()which sorts an array in ascending order and pop()which removes the last element in an array
var e=[500,700,100,300,400]
var as=e.sort()
console.log(as)
var pop=as.pop()
console.log(as)
4.//using unshift()adds multiple elements in front of an array 
   //shift()removes first element of an array
   //length gives length of an array
   var u=["a","b","c"]
   u.unshift("d","e")
   console.log(u)
   u.shift()
   console.log(u)
  var l= u.length
   console.log(l)
   5.//using concat()which combined two arrays
   // sort()which sorts the array in ascending order
   //pop()removes last elemnt in an array
   var c=[10,40,30,20]
   var c2=[80,70,50]
   var c3=c.concat(c2)
   console.log(c3)
   var c4=c3.sort()
   console.log(c4)
   var c5=c4.pop()
   console.log(c4)