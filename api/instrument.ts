 // /user
import * as gcp from "@pulumi/gcp";

const instrumentMirror = mirror.Mirror("instrument", {

}); 

const endpoint = new gcp.cloudfunctions.HttpCallbackFunction("instrument", {
    callbackFactory: () => {
        const app = express();
        app.use(bodyParser.json());

				// Get a user
        app.get("/instruments", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: instrumentMirror.host, port: instrumentMirror.port, user: instrumentMirror.user, password: instrumentMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".instrument.GetInstrument", [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });


            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get a user
        app.get("/instruments/:instrumentId", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: instrumentMirror.host, port: instrumentMirror.port, user: instrumentMirror.user, password: instrumentMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".instrument.GetInstrument", [instrumentId], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });


            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });


				// Get the user preferences 
        // TODO move to seperate mirror
        app.get("/instruments/:instrumentId/fundingRateHistory", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: instrumentMirror.host, port: instrumentMirror.port, user: instrumentMirror.user, password: instrumentMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".instrument.GetFundingRateHistory", [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Update the user preferences 
        // TODO move to own mirror
        app.get("/instruments/:instrumentId/marketdata", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: instrumentMirror.host, port: instrumentMirror.port, user: instrumentMirror.user, password: instrumentMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".instrument.GetMarketData", [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Update the user preferences 
        // TODO move to own mirror
        app.get("/instruments/:instrumentId/markprice", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: instrumentMirror.host, port: instrumentMirror.port, user: instrumentMirror.user, password: instrumentMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".instrument.GetMarkPrice", [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Update the user preferences 
        app.get("/instruments/:instrumentId/nextsettlement", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: instrumentMirror.host, port: instrumentMirror.port, user: instrumentMirror.user, password: instrumentMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".instrument.GetNextSettlement", [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Update the user preferences 
        app.get("/instruments/:instrumentId/pricelimits", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get the wallet history of an instrument 
        app.get("/user/:instrumentId/walletHistory", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Update the user preferences 
        app.post("/instruments/:instrumentId/marketdata", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        return app;
    }
});

