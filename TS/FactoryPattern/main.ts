import { IFactory, IPayment, PayPalPaymentFactory } from "./Factory";

const payPalPaymentFactory = new PayPalPaymentFactory();
const payUPaymentFactory = new PayPalPaymentFactory();

const payPalClient: IPayment = payPalPaymentFactory.create();
const payUClient: IPayment = payUPaymentFactory.create();

payPalClient.transaction(123);
payUClient.transaction(345);
