import type { Change } from '../libs/Align';
import { stringify } from 'querystring';

const compressAlignment = (changes: Change[]): Change[] => {

    const compressedChange: Change[] = new Array();

    let lastChange: any = null;
    const changesList = {
        initial: new Array(),
        final: new Array()
    }
    
    changes.forEach(change => {
        if (change.type == lastChange) {
            changesList.initial.push(change.initial);
            changesList.final.push(change.final);
        }
        else {
            changesList.initial = [change.initial];
            changesList.final = [change.final];
            compressedChange.push(change);
        }
        const currentChange = compressedChange[compressedChange.length - 1];
        currentChange.initial = changesList.initial.join(" ");
        currentChange.final = changesList.final.join(" ");

        lastChange = change.type;
    })
    return compressedChange;
}

const padspace = (text: string) => {
    return " " + text + " ";
}


// const changes = compare("DISTANCE".split(""), "DISTRIBUTE".split(""));

// console.table(changes);

export default compressAlignment;