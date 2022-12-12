

function receivesAFunction(testFunction) {
    testFunction();
}

function returnsANamedFunction() {
    const namedFunction = () => console.log('namedFunction');
    return namedFunction;
  
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('anonymousFunction');
    }
}