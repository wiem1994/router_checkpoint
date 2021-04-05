import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <Card className="movieCard">
            <Card.Img
                variant="top"
                src={movie.posterUrl}
                className="MovieImg"
            />
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                    {movie.title}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <h2 style={{ textAlign: "center" }}>
                    {"⭐".repeat(movie.rate)}{" "}
                </h2>
                <Button
                    variant="dark"
                    style={{ display: "flex", margin: "0 auto" }}
                >
                    <Link to={`/detail/${movie.id}`} View details>
                        View details
                    </Link>
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default MovieCard;
