import { Request, Response } from 'express';
import * as express from 'express'
import * as gcp from "@pulumi/gcp";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
// import * as helmet from "helmet"; // Security
import {checkJwt} from "./auth";

// TODO create read mirror with q i.e. get settings and get accounts should be sent to mirrors else 
// the requests are routed to the engine

const accountMirror = mirror.Mirror("account", {

}); 

// Account of a currency
const version = "v1";
const func = new gcp.cloudfunctions.HttpCallbackFunction("account", {
    callbackFactory: () => {
        const app: express.Application = express();
        app.use(bodyParser.json());
        app.use(checkJwt);

        // Get accounts of all instruments
        app.get("/accounts", checkJwt, (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;
            // TODO pass params etc
            // TODO prelim checks etc
            nodeq.connect({host: accountMirror.host, port: accountMirror.port, user: accountMirror.user, password: accountMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".account.GetAccount", userId, [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get Account of an instrument
        app.get("/:instrumentId/accounts", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: accountMirror.host, port: accountMirror.port, user: accountMirror.user, password: accountMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".account.GetAccount", userId, [instrumentId], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });


        // Get Account Settings
        app.get("/accounts/:instrumentId/holds", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: accountMirror.host, port: accountMirror.port, user: accountMirror.user, password: accountMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".account.GetAccount", userId, [instrumentId], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get Account Settings
        app.get("/accounts/:instrumentId/tier", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: accountMirror.host, port: accountMirror.port, user: accountMirror.user, password: accountMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".account.GetAccountTier", userId, [instrumentId], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get Account Settings
        app.get("/accounts/:instrumentId/ledger", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // TODO bitgo ? 

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });


        // Get Account Settings
        app.get("/accounts/:instrumentId/settings", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: accountMirror.host, port: accountMirror.port, user: accountMirror.user, password: accountMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".account.GetAccountSettings", userId, [instrumentId], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Update leverage
        app.post("/accounts/:instrumentId/leverage", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: engine[instrumentId].host, port: engine[instrumentId].port, user: engine[instrumentId].user, password: engine[instrumentId].pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".account.GetAccountSettings", userId, [instrumentId], function(err, res) {
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

const grpc_endpoints = new gcp.endpoints.Service("grpc-accounts",{
        serviceName:"accounts",
        grpcConfig:"",
        openapiConfig:"",
    });

const rest_endpoints = new gcp.endpoints.Service("rest-accounts",{
        serviceName:"accounts",
        grpcConfig:"",
        openapiConfig:"",
    });


