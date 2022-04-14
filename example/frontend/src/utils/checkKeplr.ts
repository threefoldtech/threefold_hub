export function checkKeplr(): Promise<any> {
  return new Promise((res, rej) => {
    function _checkKeplr() {
      if (window.keplr) res(window.keplr);
      else if (document.readyState == "complete") {
        rej();
      } else {
        setTimeout(_checkKeplr, 500);
      }
    }
    _checkKeplr();
  });
}
