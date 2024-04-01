let myWords = [`hello`, `ola`, `bonjour`, `ciao`, `hola`, `ni hao`];

function basicArrayFunction(){
    console.log("We can log the whole array: ")
    console.log(myWords);
    console.log("we can log the first word in the array: ")
    console.log(myWords[0]);
    console.log(myWords.length)

    console.log("We can log each word in the array: ")
    for (let i = 0; i < myWords.length; i++){
        let word = myWords[i];
        console.log(word);
    }
}


let wordsObject = {
    "hello": "english",
    "ola": "portuguese",
    "bonjour": "french",
    "ciao": "italian",
    "hola": "spanish",
    "ni hao": "chinese"
}
function basicObjectFunction(){

    console.log("\n\nWe can log a whole object: ");
    console.log(wordsObject);
    console.log("\n\nWe can log the value of a key in the object: ");

    console.log(`My key is bonjour and my value is ${wordsObject["bonjour"]}`);

}

function basicObjectAndArrayTogetherFunction(){
    console.log("\n\nWe can log the value of a key in the object using a variable in a loop: ");
    //same loop as above
    for (let i = 0; i < myWords.length; i++){
        let word = myWords[i];
        console.log(i, word)
        let language = wordsObject[word];
        console.log(`${word} is hello in ${language}`);
    }

}


function basicArrayIncludesFunction(){
    //check if a thing is in an array
    console.log("\n\nWe can check if a thing is in an array: ");

    if(myWords.includes("hello")){
        console.log("hello is in the array");
    }
    if(myWords.includes("goodbye")){
        console.log("This is not true, so it does not run");
    }
    else{
        console.log("goodbye is not in the array");
    }

}



function settingAttributesExampleFunction(){
    //It's as if newAnchor --> <a></a>
    const newAnchor = document.createElement('a');
    
    //It's as if newAnchor --> <a>We made this link with JavaScript! We can set its attributes</a>
    newAnchor.textContent = "We made this link with JavaScript! We can set its attributes!";

    //It's as if newAnchor -->  <a href="https://www.google.com">Click me</a>
    newAnchor.setAttribute('href', "https://www.google.com");
    
    //It's as if newAnchor -->  <a href="https://www.google.com" target="_self">Click me</a>
    newAnchor.setAttribute('target', "_blank");


    //Finally, we append the newAnchor to the body so we can see it on the page
    document.body.appendChild(newAnchor);

    /** 
     * see the example of the attributes for the a tag here:
     * https://www.w3schools.com/tags/tag_a.asp (scroll down to the attributes section)
     * */
}

function arraysObjectsExampleFunction(){

    // basicArrayFunction();

    // basicObjectFunction();
  
    basicObjectAndArrayTogetherFunction();

    // basicArrayIncludesFunction(); 
}

function runProgram(){
    arraysObjectsExampleFunction();
    settingAttributesExampleFunction();
}


document.addEventListener("DOMContentLoaded", runProgram);
