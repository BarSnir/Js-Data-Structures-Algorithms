let counter = 0;

function hey() {
    console.log(counter);
    if(counter > 3) {
        console.log('done');
        return;
    }
    counter++;
    console.log('hey recursion');
    hey();
}

hey();

/**
 * 1. Identify the base case.
 * 2. Identify the recursive case.
 * 3. Get closer the closer and return when needed.
 */
