// 1. Object Syntax
var me =
{
    name: "John",
    age: 100
}



// 2. Creating a new object
var me = new Object();
me.name = "John";
me.age = 100;

// cycle through it's attributes
for(var key in me){
	console.log(me[key]);
}


// 3. Multiple objects
var object1 = new Object();
var object2 = new Object();
var object3 = new Object();

object1.name = "Object One"
object2.name = "Object Two"
object3.name = "Object Three"


// 4. Arrays within Objects
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ['Sailing','Skiing','Programming']

};



// 5. Object with functions
var phonebookEntry = {};
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();