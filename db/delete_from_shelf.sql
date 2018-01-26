DELETE FROM Collections (googleId, imdbID)
WHERE googleId = $1
AND imdbID = $2