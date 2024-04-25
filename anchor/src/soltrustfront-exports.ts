// Here we export some useful types and functions for interacting with the Anchor program.
import { Cluster, PublicKey } from '@solana/web3.js';
import type { Soltrustfront } from '../target/types/soltrustfront';
import { IDL as SoltrustfrontIDL } from '../target/types/soltrustfront';

// Re-export the generated IDL and type
export { Soltrustfront, SoltrustfrontIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const SOLTRUSTFRONT_PROGRAM_ID = new PublicKey(
  'HcVeQinoi7WsFJtJE9FzjmUceH5w3Tg1YBQgvMUCqqq9'
);

// This is a helper function to get the program ID for the Soltrustfront program depending on the cluster.
export function getSoltrustfrontProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return SOLTRUSTFRONT_PROGRAM_ID;
  }
}
