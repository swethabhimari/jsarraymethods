var a=[1,2,3,4,5]
var b=["swetha",{id:1,name:"s"},[1,2,3],"hello",23,true]
var c=a.concat(b)
console.log(c)
var length=c.length
console.log(length)
var slice=c.slice(4,10)
console.log(slice)
var arrlength=slice.length
console.log(arrlength)
var indexofslice=slice.indexOf([25])
console.log(indexofslice)
//unshift()//adds multiple elements in front of an array 
var a=[1,2,3]
a.unshift("v")
console.log(a)
//push()//adds multiple elements at end of an array 
var b=[1,2,3]
b.push("s")
console.log(b)
//pop()//removes only single element at end of an array
var b=[1,2,3,4,5]
b.pop()
console.log(b)
//shift()//removes only single element in front of an array
var b=[1,2,3,4,5]
b.shift()
console.log(b)
//includes()//checks if an array contains element or not(true/false)
var c=[1,2,3,4,5]
console.log(c.includes(3))
console.log(c.includes(8))
//split()//converts string into an array
var a="hello hi"
var b=a.split()
console.log(b)
var c=a.split("")
console.log(c)
//join()//combines array elements into string
var j=[2,3,4,5]
var k=j.join()
console.log(k)
//reverse()//reverses order of an array elements
var a=["hello","hi",1,2,3]
var b=a.reverse()
console.log(b)
//tostring()//converts an array to a string of array values
var fruits=["apple","banana","guava","mango"]
var result=fruits.toString()
console.log(result)
//array at()//get specified element in an array
var fruits=["apple","banana","guava","mango"]
var result=fruits.at(3)
console.log(result)
//delete()//leaves undefined holes in the array
var fruits=["apple","banana","guava","mango"]
delete fruits[0]
delete fruits[0]
console.log(fruits)
//copywith()//method copies array elements to another position in an array
var fruits=["apple","banana","guava","mango"]
fruits.copyWithin(2,0)
console.log(fruits)
//flat()//creates a new a array with sub-array elements concatinated to a specified depth
var arr=[[1,2],[3,4],[5,6]]
var newarr=arr.flat()
console.log(newarr)



