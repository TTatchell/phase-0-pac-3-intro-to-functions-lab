function shout(string) {
    return(string.toUpperCase());
}

function whisper(string) {
    return(string.toLowerCase());
}


function logShout(string) {
     return console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToGrandma(string) {
    const stringX = string
    let stringLower;
    let stringUpper;
    stringLower = whisper(stringX);
    stringUpper = shout(stringX);

    switch (stringX) {
        
        case stringLower:
            return "I can't hear you!"
            
        case stringUpper:
            return "YES INDEED!"
        
        case "I love you, Grandma.":
            return "I love you, too."
    
        default:
            return console.log("Well this happened");
    }
}

//logWhisper("Calling logWhisper");

//logShout("Calling logShout");

console.log(sayHiToGrandma("bitch ass HOE"));
