/// <reference types="vite/client" />

declare module "*.mp4.asset.json" {
  const asset: { url: string };
  export default asset;
}
