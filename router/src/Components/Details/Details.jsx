import React from "react";
import { moviesData } from "../DetailsPage/DetailsPage";
function Details(props) {
    const movieid = props.match.params.movieid;
    const page = moviesData.find((page) => page.id == movieid);

    return (
        <div>
            <h3
                style={{
                    fontSize: "20px",
                    color: "black",
                    marginTop: "20px",
                    textAlign: "center",
                    color: "red",
                }}
            >
                Movie description:
            </h3>
            <p
                style={{
                    textAlign: "center",
                    margin: "0 190px",
                    fontWeight: "bold",
                }}
            >
                {page.description}
            </p>

            <h3
                style={{ textAlign: "center", color: "red", marginTop: "30px" }}
            >
                Trailer:
            </h3>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
                {page.trailer}
            </div>
        </div>
    );
}

export default Details;
