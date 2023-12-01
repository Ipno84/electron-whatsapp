window.addEventListener('DOMContentLoaded', () => {
  const documentObserver = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach(({ target }) => {
      const whatsappWebReady = target.classList.contains('wf-loading');
      if (whatsappWebReady) {
        document.dispatchEvent(new CustomEvent('whatsapp-web-ready'));
        observer.disconnect();
      }
    });
  });

  documentObserver.observe(document.documentElement, { attributes: true, childList: false, subtree: false });

  document.addEventListener('whatsapp-web-ready', () => {
    const appWrapperWeb = document.querySelector('#app .app-wrapper-web');

    const appWrapperWebInner = appWrapperWeb.querySelector('.two');

    appWrapperWebInner.style.top = '0';
    appWrapperWebInner.style.height = '100%';
    appWrapperWebInner.style.width = '100%';
    appWrapperWebInner.style.maxWidth = 'inherit';
  });
});
