const writeToFile = require("../util/write-to-file");
module.exports = (req, res) => {
    //lets get the base URL and uuid or id from the request.
    //This is same as the get a specific movie get request.

    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));
    let id = req.url.split("/")[3];
    const regrexV4 = new RegExp(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
    );

    console.log(id);
    //If UUID is not valid.
    if (!regrexV4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                title: "Validation Failed",
                message: "UUID is not valid",
            })
        );
    }

    //Lets check the base URL first. After that we check if UUID is correct.
    //If both are correct, let see if we have the movie or not
    //if we have lets delete that movie, else we return 404
    else if (baseUrl === "/api/movies" && regrexV4.test(id)) {
        const index = req.movies.findIndex((movie) => {
            return movie.id === id;
        });

        if (index == -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    title: "Not Found",
                    message: "Movie not found",
                })
            );
        } else {
            req.movies.splice(index, 1);
            writeToFile(req.movies);
            res.writeHead(204, { "Content-type": "application/json" });
            res.end();
        }
    }
};
