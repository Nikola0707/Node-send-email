import { createTransport } from "nodemailer";
import { EventEmitter } from "events";
const emitter = new EventEmitter();

// Send E-mail using node.js and nodemailer on event happened 
const transporter = createTransport({
  service: "hotmail",
  auth: {
    user: "Sender E-mail",
    pass: "Sender e-mail password",
  },
});

const transporterSendEmail = (options) => {
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(er);
      return;
    }
    console.log("Message is send!");
  });
};

emitter
  .on("product_created", ({ from, to, subject, text }) => {
    const options = { from, to, subject, text };
    transporterSendEmail(options);
  })
  .on("product_deleted", ({ from, to, subject, text }) => {
    const options = { from, to, subject, text };
    transporterSendEmail(options);
  });

const productCreated = () => {
  emitter.emit("product_created", {
    from: "Sender e-mail",
    to: "Recipient e-mail",
    subject: "New product!",
    text: "This is content for the product created event",
  });
};

const productDeleted = () => {
  emitter.emit("product_deleted", {
    from: "Sender e-mail",
    to: "Recipient e-mail",
    subject: "Oh no! Product deleted!",
    text: "Don't over-React.js",
  });
};