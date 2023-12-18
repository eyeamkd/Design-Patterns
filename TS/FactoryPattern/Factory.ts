// Design the classes and interfaces for the payment system

export interface IFactory<T> {
  create(): T;
}

export interface IPayment {
  transaction(amount: number): number;

  revokeTransaction(transactionNumber: number);

  getTransactionStatus(transactionNumber: number);
}

class PayPalClient implements IPayment {
  transaction(amount: number): number {
    throw new Error("Method not implemented.");
  }
  revokeTransaction(transactionNumber: number) {
    throw new Error("Method not implemented.");
  }
  getTransactionStatus(transactionNumber: number) {
    throw new Error("Method not implemented.");
  }
}

class PayUClient implements IPayment {
  transaction(amount: number): number {
    throw new Error("Method not implemented.");
  }
  revokeTransaction(transactionNumber: number) {
    throw new Error("Method not implemented.");
  }
  getTransactionStatus(transactionNumber: number) {
    throw new Error("Method not implemented.");
  }
}

export class PayPalPaymentFactory implements IFactory<IPayment> {
  paymentClient: string;
  constructor() {
    this.paymentClient = "PayPal";
  }
  create(): IPayment {
    return new PayPalClient();
  }
}

export class PayUPaymentFactory implements IFactory<IPayment> {
  paymentClient: string;
  constructor() {
    this.paymentClient = "PayU";
  }
  create(): IPayment {
    return new PayUClient();
  }
}
