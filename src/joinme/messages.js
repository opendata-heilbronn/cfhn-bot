function sumSelections(votes) {
    const result = {};
    Object.keys(votes).map((key) => { return votes[key]; }).forEach((user) => {
        if (user.selection) {
            Object.keys(user.selection).forEach((product) => {
                let amount = result[product];
                if (amount) {
                    amount += parseFloat(user.selection[product]);
                } else {
                    amount = parseFloat(user.selection[product]);
                }
                result[product] = amount;
            });
        }
    });
    return result;
}


module.exports = { sumSelections };
