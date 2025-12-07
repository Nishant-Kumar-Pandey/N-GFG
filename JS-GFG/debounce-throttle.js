// both are techniques to limit the rate at which a function is executed, but they do so in different ways and are used for different purposes.

// Debounce: 
// Debouncing ensures that a function is only executed after a certain period of inactivity. 
 // It is useful for scenarios where you want to wait until the user has stopped performing an action before executing a function, such as resizing a window or typing in a search box.

function search(query){
    console.log('Searching for:', query);
}
// search("Nishant");
// search("Nishant--1");
// search("Nishant--2");

function searcWithDebounce(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeut(() => {
            fn(...args);
        }, delay);
    };
}

function searchWithThrottle(fn, delay){
    let lastCall = 0;
    return function(...args){
        
    }
}

search("Nishant");
search("Nishant--1");
search("Nishant--2"); 