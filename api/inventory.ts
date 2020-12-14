import { Request, Response } from 'express';
import * as express from 'express'
import * as gcp from "@pulumi/gcp";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
// import * as helmet from "helmet"; // Security
import {checkJwt} from "./auth";

const inventoryMirror = mirror.Mirror("account", {

}); 

const func = new gcp.cloudfunctions.HttpCallbackFunction("account", {
    callbackFactory: () => {
        const app = express();
        app.use(bodyParser.json());

        // Get accounts of all instruments
        app.get("/inventory", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: inventoryMirror.host, port: inventoryMirror.port, user: inventoryMirror.user, password: inventoryMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".inventory.GetInventory", userId, [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get Account of an instrument
        app.get("/:instrumentId/inventory", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: inventoryMirror.host, port: inventoryMirror.port, user: inventoryMirror.user, password: inventoryMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".inventory.GetInventory", userId, [instrumentId], function(err, res) {
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

