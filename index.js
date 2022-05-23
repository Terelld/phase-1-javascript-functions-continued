// code your solution here


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(plans = "go to the office") {
    return `This Monday, I will ${plans}.`;
}

function wrapAdjective(visFlare = '*') {
    return function innerFunction( adjective = 'special') {
        return `You are ${visFlare}${adjective}${visFlare}!`;
} 
}

    // return `You are ${special}${adjective}${special}!`;

// function extraNice("||", "a dedicated programmer");
// const wrappedAdjective() {
// return `You are ${special1}${adjective1}${special1}!
// }