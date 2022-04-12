export function checkKeplr(): Promise<any> {
  let i = 0;

  return new Promise((res, rej) => {
    function _checkKeplr() {
      if (window.keplr) res(window.keplr);
      else if (i === 10) {
        rej();
      } else {
        i++;
        setTimeout(_checkKeplr, 500);
      }
    }
    _checkKeplr();
  });
}
