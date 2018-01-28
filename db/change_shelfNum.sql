UPDATE collections (shelfNum, googleId, imdbID)
SET shelfNum = $1
WHERE googleID = $2 AND imdbID =$3
