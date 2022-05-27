export function imgContent(buffer: ArrayBuffer): string {
  const intBuffer = new Uint8Array(buffer);

  let str = ''
  for (let x of intBuffer)
    str += String.fromCharCode(x);

  return window.btoa(str);
}
