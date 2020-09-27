module.exports = {
      cookie: {
            "secret": "session",
            "key": "abhre5asdsafUdsafdf4xc97Rd0KnddSsd3V"
      },
      session: {
            secret: "abdsfhH4re5Uf4Rd0sdfsdKnddS05sdff3V",
            resave: true,
            saveUninitialized: true,
            maxAge: Date.now() + (30 * 86400 * 1000)
      },
};