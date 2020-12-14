 // /user
import * as gcp from "@pulumi/gcp";

const tradeMirror = mirror.Mirror("trade", {

}); 

const endpoint = new gcp.cloudfunctions.HttpCallbackFunction("trade", {
    callbackFactory: () => {
        const app = express();
        app.use(bodyParser.json());

				// Create a new user
        app.post("/trade", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get a user
        app.get("/trade/bucketed", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        return app;
    }
});
