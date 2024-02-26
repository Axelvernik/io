export type EndpointTypes = 'mainnet' | 'devnet' | 'localnet';
declare global {
  interface Window {
    Jupiter: any;
  }
}
