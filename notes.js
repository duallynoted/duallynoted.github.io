
function stringCount(array, string) {
    return array.reduce((currentCount, currentString) => {
        currentString === string ? currentCount + 1
            : currentCount
    }, 0);
}

stringCount(['a', 'b', 'a'], 'a');