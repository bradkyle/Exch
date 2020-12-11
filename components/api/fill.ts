import { Request, Response } from 'express';
import * as express from 'express'
import * as gcp from "@pulumi/gcp";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
// import * as helmet from "helmet"; // Security
import {checkJwt} from "./auth";


const endpoint = new gcp.cloudfunctions.HttpCallbackFunction("fill",{

});


