interface Change {
    initial: string;
    final: string;
    type: "nochange" | "replacement" | "insertion" | "deletion"
}

const align = (initial: string[], final: string[]): Change[] => {

    const dp: number[][] = new Array(final.length + 1).fill(0).map(() => new Array(initial.length + 1).fill(0));

    for (let i = 0; i <= final.length; ++i) dp[i][0] = i;
    for (let i = 0; i <= initial.length; ++i) dp[0][i] = i;

    for (let r = 1; r <= final.length; ++r) {
        for (let c = 1; c <= initial.length; ++c) {
            if (final[r - 1] == initial[c - 1]) {
                dp[r][c] = dp[r - 1][c - 1];
            }
            else {
                dp[r][c] = Math.min(dp[r - 1][c - 1], dp[r][c - 1], dp[r - 1][c]) + 1;
            }
        }
    }

    // backtracking
    let r: number = final.length;
    let c: number = initial.length;

    const changes: Change[] = new Array();

    while (r > 0 || c > 0) {
        const i: string = c > 0 ? initial[c - 1] : "";
        const f: string = r > 0 ? final[r - 1] : "";

        if (f == i) {
            changes.push({
                initial: i,
                final: f,
                type: "nochange",
            })
            c -= 1;
            r -= 1;
        }
        else {
            let search_val: number = dp[r][c] - 1;

            if (c > 0 && search_val == dp[r][c - 1]) {
                changes.push({
                    initial: i,
                    final: "",
                    type: "deletion",
                })
                c -= 1;
            }
            else if (r > 0 && search_val == dp[r - 1][c]) {
                changes.push({
                    initial: "",
                    final: f,
                    type: "insertion",
                })
                r -= 1;
            }
            else {
                changes.push({
                    initial: i,
                    final: f,
                    type: "replacement",
                })
                r -= 1;
                c -= 1;
            }
        }
    }
    changes.reverse();
    return changes;
}



// const changes = align("DISTANCE".split(""), "DISTRIBUTE".split(""));

// console.table(changes);

export default align;