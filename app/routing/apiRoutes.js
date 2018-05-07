const roommates = require("../data/roommates.js");

module.exports = function(app) {

    app.get("/api/roommates", (req, res) => {
        res.json(roommates); 

        

    })

    app.put("/api/roommates", (req, res) => {
        const roommate = req.body; 
        console.log(roommate); 

        const comparisons = []; 

        roommates.forEach(v => {
            v.scores.forEach(w => {
                roommate.scores.forEach(x => {

                    const differences = []; 

                    if (w > x) {
                        differences.push(w - x)
                    } else if (x > w) {
                        differences.push(x - w)
                    } else {
                        differences.push(0); 
                    }

                    const matchScore = differences.reduce(getSum) 
                    comparisons.push({name: v.name, matchScore: matchScore})

                }); 
            }); 
         })

        // Add the new profile to the data
        roommates.push(roommate); 
        //Send the match back to the client 
        res.json(match);
    })

}

// Helper 
function getSum(total, num) {
    return total + num;
}