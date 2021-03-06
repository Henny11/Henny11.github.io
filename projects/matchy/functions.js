/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
   for (var i = 0; i < animals.length; i++){ 
    if ( name === animals[i].name){
        return animals[i]
    }
    }
    return null
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    console.log(animals[0], 'replace');
    for (var i = 0; i < animals.length; i++){
        var foundAnimal= animals[i];
        if (animals[i].name === name){
            animals[i] = replacement
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {

for (var i = 0; i < animals.length; i++){
     if (animals[i].name === name){
         return   animals.splice(i, 1);
    }
}
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// animals [{name: 'senai'}, {name: 'henny'}, {name: 'mike'}, {name: 'mike'}, {name: 'mike'}]
// animal = {name: 'mike'};
function add(animals, animal) {
    var animalKeys = [];
    if (!animal.name.length > 0 || !animal.species.length > 0){
      return false;  
    } else {
        for(var i = 0; i < animals.length; i++){
         animalKeys.push(animals[i].name)
        }
        if (!animalKeys.includes(animal.name)){
            animals.push(animal);
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
