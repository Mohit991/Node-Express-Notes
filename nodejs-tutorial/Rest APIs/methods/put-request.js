const requestBodyParser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file")

module.exports = async (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));
    let id = req.url.split("/")[3];
    const regrexV4 = new RegExp(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
    );
    
    if (!regrexV4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                title: "Validation Failed",
                message: "UUID is not valid",
            })
        );
    }
    else if (baseUrl === "/api/movies" && regrexV4.test(id)) {
        try {
            let body = await requestBodyParser(req)
            const index = req.movies.findIndex((movie) => {
                return movie.id === id;
            });
            if(index == -1) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        title: "Not Found",
                        message: "Movie not found",
                    })
                );
            }
            else{
                req.movies[index] = {id, ...body}
                writeToFile(req.movies)
                res.writeHead(200, {"Content-Type": "application/json"})
                res.end(JSON.stringify(req.movies[index]))
            }
            
        } catch (error) {
            console.log(error);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    title: "Validation Failed",
                    message: "Request body is not valid",
                })
            );
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({ title: "Not Found", message: "Route not found" })
        );
    }
}