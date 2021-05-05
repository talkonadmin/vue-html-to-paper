const addStyles = (win, styles) => {
  styles.forEach((style) => {
    let link = win.document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', style);
    win.document.getElementsByTagName('head')[0].appendChild(link);
  });
};

const VueHtmlToPaper = {
  install (Vue, options = {}) {
    Vue.prototype.$htmlToPaper = (el, localOptions, cb = () => true) => {
      let defaultName = '_blank', 
        defaultSpecs = ['fullscreen=yes','titlebar=yes', 'scrollbars=yes'],
        defaultStyles = [],
        defaultTimeout = 1000,
        defaultAutoClose = true;
      let {
        name = defaultName,
        specs = defaultSpecs,
        styles = defaultStyles,
        timeout = defaultTimeout,
        autoClose = defaultAutoClose,
      } = options;

      if (localOptions?.name) name = localOptions.name;
      if (localOptions?.specs) specs = localOptions.specs;
      if (localOptions?.styles) styles = localOptions.styles;
      if (localOptions?.timeout) timeout = localOptions.timeout;
      if (localOptions?.autoClose) autoClose = localOptions.autoClose;

      specs = !!specs.length ? specs.join(',') : '';

      let element = el;
      if (typeof el === 'string' || el instanceof String) {
        element = window.document.getElementById(el);
      }
      if (!element) {
        alert(`Element to print #${el} not found!`);
        return;
      }

      const url = '';
      const win = window.open(url, name, specs);

      win.document.write(`
        <html>
          <head>
            <title>${window.document.title}</title>
          </head>
          <body>
            ${element.innerHTML}
          </body>
        </html>
      `);

      addStyles(win, styles);

      const promise = new Promise((resolve) => {
        setTimeout(() => {
          win.focus();
          win.print();
          autoClose && win.document.close();
          autoClose && win.close();
          if (cb) cb();
          resolve();
        }, 1000);
      });

      return cb ? true : promise;
    };
  },
};

export default VueHtmlToPaper;
