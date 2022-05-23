// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {

    cats.push(name);

}

function destructivelyPrependCat(name) {

    cats.unshift(name);

}

function destructivelyRemoveLastCat(name) {

    cats.pop(name);

}

function destructivelyRemoveFirstCat(name) {

    cats.shift(name);

}

function appendCat(name) {

    const copyofCats = [...cats];
    copyofCats.push(name);
    return copyofCats;

}

function prependCat(name) {

    const copyofCats = [...cats];
    copyofCats.unshift(name);
    return copyofCats;

}

function removeLastCat(name) {

    const copyofCats = [...cats];
    copyofCats.pop(name);
    return copyofCats;

}

function removeFirstCat(name) {

    const copyofCats = [...cats];
    copyofCats.shift(name);
    return copyofCats;

}