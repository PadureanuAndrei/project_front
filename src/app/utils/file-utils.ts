export function imgContent(buffer: ArrayBuffer): string {
  const intBuffer = new Int8Array(buffer);

  let str = ''
  for (let x of intBuffer)
    str += String.fromCharCode(x);

  return str;
}
