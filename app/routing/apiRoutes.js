const data = require("../data/roommates.js");

module.exports = function(app) {

    app.get("/api/roommates", (req, res) => {
        res.json(data); 
    })

    // app.post("/api/roommates", (req, res) => {
    //     const roommate = req.body; 



    //     res.json(roommate);
    // })

}