import { Request, Response } from 'express';
import * as express from 'express'
import * as gcp from "@pulumi/gcp";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
// import * as helmet from "helmet"; // Security
import {checkJwt} from "./auth";


const userMirror = mirror.Mirror("user", {

}); 

const endpoint = new gcp.cloudfunctions.HttpCallbackFunction("user", {
    callbackFactory: () => {
        const app = express();
        app.use(bodyParser.json());

				// Create a new user
        app.post("/user", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;
            // TODO validate request
            //
            // TODO create auth0 account

            // TODO Create Bitgo wallet/address
            var id = '2My4uGbvFoBvBtLpADVTTai1w6roxQafJki';
            bitgo.wallets().get({ "id": id }, function callback(err, wallet) {
              if (err) {
                throw err;
              }
              wallet.createAddress({ "chain": 0 }, function callback(err, address) {
                console.dir(address);
              });
            });


            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get a user
        app.get("/user", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: userMirror.host, port: userMirror.port, user: userMirror.user, password: userMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".user.GetUser", userId, function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get the user stats 
        app.get("/user/stats", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: userMirror.host, port: userMirror.port, user: userMirror.user, password: userMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".user.GetStats", userId, function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get the user preferences 
        app.get("/user/tiers", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: userMirror.host, port: userMirror.port, user: userMirror.user, password: userMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".user.GetActiveTiers", userId, function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });


				// Get the user preferences 
        app.get("/user/preferences", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: userMirror.host, port: userMirror.port, user: userMirror.user, password: userMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".user.GetPreferences", userId, function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Update the user preferences 
        app.post("/user/preferences", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: userMirror.host, port: userMirror.port, user: userMirror.user, password: userMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".user.GetActiveTiers", userId, function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Create a new user
        app.post("/user/requestWithdrawal", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // TODO bitgo etc. functionality

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get the wallet of a user 
        app.get("/user/wallet", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // TODO bitgo etc. functionality

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get the full wallet history 
        app.get("/user/walletHistory", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // TODO bitgo etc functionality

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get the wallet history of an instrument 
        app.get("/user/:instrumentId/walletHistory", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            // TODO bitgo etc functionality

            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

				// Get the referrals 
        // TODO priviledged token only
        app.post("/user/referral", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: userMirror.host, port: userMirror.port, user: userMirror.user, password: userMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".user.AddRefferral", userId, [referral], function(err, res) {
                    if (err) throw err;
                    console.log("result", res); // 6
                });
            });


            // Quickly respond with success so that slack doesn't retry.
            res.status(200).end();
        });

        app.get("/user/referral", (req, res) => {
            // Importantly: This is the code that will run in your serverless GCP cloud function!

            const body = req.body;

            nodeq.connect({host: userMirror.host, port: userMirror.port, user: userMirror.user, password: userMirror.pass}, function(err, con) {
                if (err) throw err; // TODO appropriate error response
                console.log("connected");
                // interact with con like demonstrated below
                con.k(".user.GetRefferral", userId, function(err, res) {
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



		// Get your user model.
// get /user/affiliateStatus

		// Get your current affiliate/referral status.
// post /user/cancelWithdrawal

		// Cancel a withdrawal.
// get /user/checkReferralCode

		// Check if a referral code is valid.
// get /user/commission

		// Get your account's commission status.
// post /user/communicationToken

		// Register your communication token for mobile clients
// post /user/confirmEmail

		// Confirm your email address with a token.
// post /user/confirmWithdrawal

		// Confirm a withdrawal.
// get /user/depositAddress

		// Get a deposit address.
// get /user/executionHistory

		// Get the execution history by day.
// post /user/logout

		// Log out of BitMEX.
// get /user/margin

		// Get your account's margin status. Send a currency of "all" to receive an array of all supported currencies.
// get /user/minWithdrawalFee

		// Get the minimum withdrawal fee for a currency.
// post /user/preferences

		// Save user preferences.
// get /user/quoteFillRatio

		// Get 7 days worth of Quote Fill Ratio statistics.
// get /user/quoteValueRatio

		// Get Quote Value Ratio statistics over the last 3 days
// post /user/requestWithdrawal

		// Request a withdrawal to an external wallet.
// get /user/wallet

		// Get your current wallet information.
// get /user/walletHistory

		// Get a history of all of your wallet transactions (deposits, withdrawals, PNL).
// get /user/walletSummary

		// Get a summary of all of your wallet transactions (deposits, withdrawals, PNL).

