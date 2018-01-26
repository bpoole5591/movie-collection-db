INSERT INTO users (googleId, firstName)
VALUES ($1, $2) returning googleId;
