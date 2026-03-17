declare module "wawoff2" {
  export function decompress(data: Buffer | Uint8Array): Promise<Buffer>;
}
