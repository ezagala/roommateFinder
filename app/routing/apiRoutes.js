const roommates = require("../data/roommates.js");

module.exports = function(app) {

    app.get("/api/roommates", (req, res) => {
        res.json(roommates); 

        console.log(roommates);

    })

    // app.post("/api/roommates", (req, res) => {
    //     const roommate = req.body; 



    //     res.json(roommate);
    // })

}