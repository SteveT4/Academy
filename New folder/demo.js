// EXECUTION FLOW 
// sequence of commands that are run 
//  = which order of lines get run
//  linear = straight line = sequential flow

/// ---- VARIABLE ----
// create some variables to describe a film

//     labels       data        andthen
//KW   ID      OP  LIT          OP

  let  myname  =  "Michael"     ;

// nb. all the lines below have the same syntax
// ... they have different semantic 

// declarations = define terms 

let genre = "Romantic Comedy";   // creates text
let film_time = 93;              // creates integer
let ticket_price = 14.50;        // creates float

//q. what type of phrase is this?
//a. a statement = a command

film_time = 194;                  //reassign/overwrite runtime

//q. what is const?
//a. cannot be reassigned (cannot be changed by `=`)

const year = 1977;             // creates integer



//q. why not just change the above value
//a. you wouldn't in practice, this is just to show reassignment

// ERROR:           year = 1979;




// requirement: if the film is long, don't watch it

// q. How do write `film is long` in code?
// ... how should we interpret this requirement?
// precise interpretation: long = more than 2hrs


// q. How should we 'pretend' to watch a film?
// ... log a message

//nb. the if is a kind of switch that turns of/on 
//... blocks of code aka. group of statements, {...}

if( film_time > 120 ) {

    console.log("I'm not watching this!");

}

// if the film is expensive, don't watch it

if( ticket_price > 15 ) {

    console.log("I'm not watching this!");

} 

else {

    console.log("I'll watch it!");

}

// otherwise, watch the film



// COMBINE CONDITIONS

//      TEST          OR          TEST
if( (film_time > 120) || (ticket_price > 15) ) {

    console.log("I'm not watching this!");

} 

else {

    console.log("I'll watch it!");

}
