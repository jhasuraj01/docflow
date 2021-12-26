import align from '../libs/Align';
import type { Change } from '../libs/Align';
import compressAlignment from '../libs/CompressAlignment';

export interface TextChange {
    initial: string | undefined;
    final: string | undefined;
    changes: Change[] | undefined;
    type: "nochange" | "deepcheck" | "insertion" | "deletion"
}

const compare = (initial: string[], final: string[]): TextChange[] => {

    const alignedText = align(initial, final);
    const textChange: TextChange[] = new Array();

    alignedText.forEach(alignment => {
        if (alignment.type == "replacement") {
            const paragraphAlignment = align(alignment.initial.split(""), alignment.final.split(""));
            textChange.push({
                initial: undefined,
                final: undefined,
                changes: compressAlignment(paragraphAlignment),
                type: "deepcheck"
            })
        }
        else {
            textChange.push({
                initial: alignment.initial,
                final: alignment.final,
                changes: undefined,
                type: alignment.type
            })
        }
    })

    return textChange;
}



// const changes = compare("DISTANCE".split(""), "DISTRIBUTE".split(""));

// console.table(changes);

export default compare;