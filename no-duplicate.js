/**
 * array has some duplicate elements
 * []
 */

const biryaniKhor = ['moon', 'tithy', 'nitu', 'eva', 'moon', 'eva']

function noDuplicate(array) {
    const unique = [];

    for (const item of array) {
        if(unique.includes(item) === false) {
            unique.push(item)
        }
    }

    return unique;
} 

console.log(noDuplicate(biryaniKhor));