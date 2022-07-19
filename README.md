# Manual Payment
Web API manual payment method with customizable instructions.

No actual payments happen. It just redirects to your page which shows payment instructions.

## Example
```js
const paymentRequest = new PaymentRequest(
  [{
    supportedMethods: "https://manual-payment.pages.dev/",
    data: { redirect_url: "https://baidu.com" },
  }],
  {
    total: {
      label: "Total",
      amount: {
        currency: "USD",
        value: "1.00",
      },
    },
  }
);
```
