import type { Change } from '../libs/Align';

const compressAlignment = (changes: Change[]): Change[] => {

    const compressedChange: Change[] = new Array();

    let lastChange: any = null;
    
    changes.forEach(change => {
        if (change.type == lastChange) {
            const currentChange = compressedChange[compressedChange.length - 1];
            currentChange.initial += change.initial;
            currentChange.final += change.final;
        }
        else {
            compressedChange.push(change);
        }

        lastChange = change.type;
    })
    return compressedChange;
}



// const changes = compare("DISTANCE".split(""), "DISTRIBUTE".split(""));

// console.table(changes);

export default compressAlignment;