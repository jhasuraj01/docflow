const CARET = '%caret%';

/**
 * 
 * @param initialStr Initial Document String
 * @param finalStr final Document String
 * @param initialCaretPositions List of caret position with respect to Initial Document String
 * @returns List of caret position with respect to Final Document String
 */
const RepositionCaret = (initialStr: string, finalStr: string, initialCaretPositions: number[]): number[] => {

    const initialDoc: string[] = initialStr.split("");
    const finalDoc: string[] = finalStr.split("");

    const caretCount = initialCaretPositions.length;

    const dp: number[][] = new Array(finalDoc.length + 1 + caretCount).fill(0).map(() => new Array(initialDoc.length + 1 + caretCount).fill(0));
    for (let i = 0; i < dp.length; ++i) dp[i][0] = i;
    for (let i = 0; i < dp[0].length; ++i) dp[0][i] = i;

    // console.table(dp);

    for (let i = 0; i < caretCount; ++i) {
        const position = initialCaretPositions[i];
        initialDoc.splice(position + i, 0, CARET);
    }

    for (let r = 1; r <= finalDoc.length; ++r) {
        for (let c = 1; c <= initialDoc.length; ++c) {
            if (finalDoc[r - 1] == initialDoc[c - 1]) {
                dp[r][c] = dp[r - 1][c - 1];
            }
            else {
                dp[r][c] = Math.min(dp[r - 1][c - 1], dp[r][c - 1], dp[r - 1][c]) + 1;
            }
        }
    }

    // backtracking
    let r: number = finalDoc.length;
    let c: number = initialDoc.length;

    const changes = new Array();
    const finalCaretPositions: number[] = new Array();

    while (r > 0 || c > 0) {
        const i: string = c > 0 ? initialDoc[c - 1] : "";
        const f: string = r > 0 ? finalDoc[r - 1] : "";

        if (f == i) {
            // changes.push({
            //     initial: i,
            //     final: f,
            //     type: "nochange",
            // })
            c -= 1;
            r -= 1;
        }
        else {
            let search_val: number = dp[r][c] - 1;

            if (c > 0 && search_val == dp[r][c - 1]) {
                // Deletion
                if(i == CARET) {
                    finalCaretPositions.push(r);
                    // changes.push({
                    //     initial: CARET,
                    //     final: CARET,
                    //     type: "nochange",
                    // })
                }
                // else {
                //     changes.push({
                //         initial: i,
                //         final: "",
                //         type: "deletion",
                //     })
                // }
                c -= 1;
            }
            else if (r > 0 && search_val == dp[r - 1][c]) {
                // changes.push({
                //     initial: "",
                //     final: f,
                //     type: "insertion",
                // })
                r -= 1;
            }
            else {
                if(i == CARET) {
                    finalCaretPositions.push(r-1);
                    // changes.push({
                    //     initial: "",
                    //     final: f,
                    //     type: "insertion",
                    // })
                    // changes.push({
                    //     initial: CARET,
                    //     final: CARET,
                    //     type: "nochange",
                    // })
                }
                // else {
                //     changes.push({
                //         initial: i,
                //         final: f,
                //         type: "replacement",
                //     })
                // }
                r -= 1;
                c -= 1;
            }
        }
    }
    // changes.reverse();
    // console.table(changes);

    finalCaretPositions.reverse();

    return finalCaretPositions;
}

// const changes = RepositionCaret("Distribution", "DDistance", [1,2,3,4,5,6]);

// console.log(changes);

export default RepositionCaret;