SELECT imdbID FROM Collections (googleID, shelfNum)
WHERE googleID = $1
AND shelfNum = $2