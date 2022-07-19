self.addEventListener('paymentrequest', async (event) => {
  const promise = new Promise(() => {});
  event.respondWith(promise);
  const redirect_url = (event.methodData[0].data || {}).redirect_url;
  const params = new URLSearchParams();
  if (redirect_url) params.set("redirect", redirect_url);
  const win = await event.openWindow(`/frontend?${params}`);
})
