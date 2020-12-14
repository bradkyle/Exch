
 // /user
import * as gcp from "@pulumi/gcp";

const orderbookMirror = mirror.Mirror("orderbook", {

}); 


const endpoint = new gcp.cloudfunctions.HttpCallbackFunction("orderbook", {
    callbackFactory: () => {
        const app = express();
        app.use(bodyParser.json());

				// Create a new user
        app.post("/orderbook", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: orderbookMirror.host, port: orderbookMirror.port, user: orderbookMirror.user, password: orderbookMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".orderbook.GetOrderbook", userId, [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        return app;
    }
});
