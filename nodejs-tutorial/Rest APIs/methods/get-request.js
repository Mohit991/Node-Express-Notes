module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));
    let id = req.url.split("/")[3];
    const regrexV4 = new RegExp(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
    );
    //If the complete URL is just /api/movies, then it is a get all the movies request
    if (req.url === "/api/movies") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        //write the movies which we already got in req to the res as well.
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    //We will test the uuid. If the uuid is invalid, we return status 400
    else if (!regrexV4.test(id)) {
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
    //if we have lets return that movie, else we return 404
    else if (baseUrl === "/api/movies" && regrexV4.test(id)) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        //let us get the specific movie
        let filteredMovie = req.movies.filter((movie) => {
            return movie.id === id;
        });
        
        if (filteredMovie.length > 0) {
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie));
            res.end();
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    title: "Not Found",
                    message: "Movie not found",
                })
            );
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({ title: "Not Found", message: "Route not found" })
        );
    }
};
