const roommates = require("../data/roommates.js");

module.exports = function(app) {

    app.get("/api/roommates", (req, res) => {
        res.json(roommates); 
    })

    app.put("/api/roommates", (req, res) => {

        console.log("Put hit "); 
        console.log("Put hit x2"); 


        const roommate = req.body; 
        console.log("Roommate: " + JSON.stringify(roommate)); 

        // This will be updated to contain the name and total difference of each profile in the dataset 
        const comparisons = []; 

        // These loops do the magic of comparing each profile in the dataset with the users profile 
        roommates.forEach(v => {
            v.scores.forEach(w => {
                roommate.scores.forEach(x => {

                    const differences = []; 

                    //math.abs 
                    if (w > x) {
                        differences.push(w - x)
                    } else if (x > w) {
                        differences.push(x - w)
                    } else {
                        differences.push(0); 
                    }

                    const totalDifference = differences.reduce(getSum) 
                    comparisons.push({name: v.name, totalDifference: totalDifference})

                }); 
            }); 
         })

         
         console.log("Comparisions" + JSON.stringify(comparisons)); 

        //  Loop through the comparisons array and return the lowest totalDifference
       const lowestDiff = comparisons.reduce((accum, curVal) => {
            if (curVal.totalDifference < accum) {
                accum = curVal.totalDifference
            }
        }, 6); 

       // Loop through comparisons again, return the index--e.g. {name: name, totalDiff: totalDiff} --with the lowest score
       const preMatch = comparisons.map(x => {
            if (x.totalDifference === lowestDiff) {
                
                return x; 
            }
        }); 

        console.log("prematch" + JSON.stringify(preMatch))


        // Loop through roomates and use the prematch value to find the actual profile match
        const match = roommates.forEach(x => {
            console.log(x); 
            if (x.name == preMatch.name) {
                return x; 
            }
        })

        console.log("This is the match: " + match); 

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

