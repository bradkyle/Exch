import { Request, Response } from 'express';
import * as express from 'express'
import * as gcp from "@pulumi/gcp";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
// import * as helmet from "helmet"; // Security
import {checkJwt} from "./auth";


// TODO create read mirror with q i.e. get settings and get accounts should be sent to mirrors else 
// the requests are routed to the engine

const orderMirror = mirror.Mirror("order", {

}); 

// Account of a currency
const version = "v1";
const func = new gcp.cloudfunctions.HttpCallbackFunction("order", {
    callbackFactory: () => {
        const app = express();
        app.use(bodyParser.json());

        // Get accounts of all instruments
        app.get("/orders", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!
            const body = req.body;

            nodeq.connect({host: orderMirror.host, port: orderMirror.port, user: orderMirror.user, password: orderMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".order.GetOrder", userId, [], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get accounts of all instruments
        app.get("/orders/:instrumentId", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!
            const body = req.body;

            nodeq.connect({host: orderMirror.host, port: orderMirror.port, user: orderMirror.user, password: orderMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".order.GetOrder", userId, [instrumentId], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get accounts of all instruments
        app.get("/orders/:instrumentId/:orderId", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!
            const body = req.body;

            // Todo convert to object
            nodeq.connect({host: orderMirror.host, port: orderMirror.port, user: orderMirror.user, password: orderMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".order.GetOrder", userId, [instrumentId, orderId], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get accounts of all instruments
        app.post("/orders", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!
            const body = req.body;

            // TODO Check batch size, do validation etc
            nodeq.connect({host: engine[instrumentId].host, port: engine[instrumentId].port, user: engine[instrumentId].user, password: engine[instrumentId].pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".engine.PlaceOrder", userId, order, function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get accounts of all instruments
        app.post("/orders/cancel", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!
            const body = req.body;

            // TODO check order exists etc
            // TODO Check batch size, do validation etc
            nodeq.connect({host: engine[instrumentId].host, port: engine[instrumentId].port, user: engine[instrumentId].user, password: engine[instrumentId].pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".engine.CancelOrder", userId, order, function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        // Get accounts of all instruments
        app.post("/orders/amend", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!
            const body = req.body;

            // TODO Check batch size, do validation etc
            nodeq.connect({host: engine[instrumentId].host, port: engine[instrumentId].port, user: engine[instrumentId].user, password: engine[instrumentId].pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".engine.AmendOrder", userId, order, function(err, res) {
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


