DELETE FROM Collections (googleID, imdbID)
WHERE googleID = $1
AND imdbID = $2