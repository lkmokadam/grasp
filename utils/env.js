// tiny wrapper with default env vars
module.exports = {
    NODE_ENV: (process.env.NODE_ENV || "development"),
    PORT: (process.env.PORT || 3000),
    ANY_HOST: (process.env.ANY_HOST ? true : false),
    TARGET: (process.env.TARGET || 'chrome'),
};
