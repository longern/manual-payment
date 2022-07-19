self.addEventListener('paymentrequest', async (event) => {
  const promise = new Promise(() => {});
  event.respondWith(promise);
  const win = await event.openWindow('/frontend');
})
