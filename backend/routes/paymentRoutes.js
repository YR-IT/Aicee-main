// const express = require("express");
import express from 'express';
import {
  PaymentHandler,
  APIException,
  validateHMAC_SHA256,
} from "../controller/PaymentHandler.js";
import crypto from "crypto";
import path  from "path";
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

const router = express.Router();

router.post("/initiatePayment", async (req, res) => {
  const orderId = `order_${Date.now()}`;
  const amount = 15421;
  // const returnUrl = `${req.protocol}://${req.hostname}:${port}/handlePaymentResponse`;
  const returnUrl = `http://localhost:5173/courses`;
  const paymentHandler = PaymentHandler.getInstance();
  try {
    const orderSessionResp = await paymentHandler.orderSession({
      order_id: orderId,
      amount,
      currency: "INR",
      return_url: returnUrl,
      // [MERCHANT_TODO]:- please handle customer_id, it's an optional field but we suggest to use it.
      customer_id: "sample-customer-id",
      // please note you don't have to give payment_page_client_id here, it's mandatory but
      // PaymentHandler will read it from config.json file
      // payment_page_client_id: paymentHandler.getPaymentPageClientId()
    });
    return res.json({
  success: true,
  redirect_url: orderSessionResp.payment_links.web,
});

  } catch (error) {
    // [MERCHANT_TODO]:- please handle errors
    if (error instanceof APIException) {
      return res.send("PaymentHandler threw some error");
    }
    // [MERCHANT_TODO]:- please handle errors
    return res.send("Something went wrong");
  }
});

router.post("/handlePaymentResponse", async (req, res) => {
  const orderId = req.body.order_id || req.body.orderId;
  const paymentHandler = PaymentHandler.getInstance();

  if (orderId === undefined) {
    return res.send("Something went wrong");
  }

  try {
    const orderStatusResp = await paymentHandler.orderStatus(orderId);
    if (
      validateHMAC_SHA256(req.body, paymentHandler.getResponseKey()) === false
    ) {
      // [MERCHANT_TODO]:- validation failed, it's critical error
      return res.send("Signature verification failed");
    }

    const orderStatus = orderStatusResp.status;
    let message = "";
    switch (orderStatus) {
      case "CHARGED":
        message = "order payment done successfully";
        break;
      case "PENDING":
      case "PENDING_VBV":
        message = "order payment pending";
        break;
      case "AUTHORIZATION_FAILED":
        message = "order payment authorization failed";
        break;
      case "AUTHENTICATION_FAILED":
        message = "order payment authentication failed";
        break;
      default:
        message = "order status " + orderStatus;
        break;
    }

    // const html = makeOrderStatusResponse(
    //   "Merchant Payment Response Page",
    //   message,
    //   req,
    //   orderStatusResp
    // );
    res.set("Content-Type", "text/html");
    return res.send(message);
  } catch (error) {
    console.error(error);
    // [MERCHANT_TODO]:- please handle errors
    if (error instanceof APIException) {
      return res.send("PaymentHandler threw some error");
    }
    // [MERCHANT_TODO]:- please handle errors
    return res.send("Something went wrong");
  }
});

// app.post("/initiateRefund", async (req, res) => {
//   const paymentHandler = PaymentHandler.getInstance();

//   try {
//     const refundResp = await paymentHandler.refund({
//       order_id: req.body.order_id,
//       amount: req.body.amount,
//       unique_request_id: req.body.unique_request_id || `refund_${Date.now()}`,
//     });
//     const html = makeOrderStatusResponse(
//       "Merchant Refund Page",
//       `Refund status:- ${refundResp.status}`,
//       req,
//       refundResp
//     );
//     res.set("Content-Type", "text/html");
//     return res.send(html);
//   } catch (error) {
//     console.error(error);
//     // [MERCHANT_TODO]:- please handle errors
//     if (error instanceof APIException) {
//       return res.send("PaymentHandler threw some error");
//     }
//     // [MERCHANT_TODO]:- please handle errors
//     return res.send("Something went wrong");
//   }
// });

export default router;