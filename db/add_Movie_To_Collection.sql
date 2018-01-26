INSERT INTO collections (googleId, imdbID)
VALUES ($1, $2);

SELECT * FROM collections
WHERE googleId = $1