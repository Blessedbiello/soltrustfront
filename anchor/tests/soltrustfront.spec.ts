import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair } from '@solana/web3.js';
import { Soltrustfront } from '../target/types/soltrustfront';

describe('soltrustfront', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.Soltrustfront as Program<Soltrustfront>;

  const soltrustfrontKeypair = Keypair.generate();

  it('Initialize Soltrustfront', async () => {
    await program.methods
      .initialize()
      .accounts({
        soltrustfront: soltrustfrontKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([soltrustfrontKeypair])
      .rpc();

    const currentCount = await program.account.soltrustfront.fetch(
      soltrustfrontKeypair.publicKey
    );

    expect(currentCount.count).toEqual(0);
  });

  it('Increment Soltrustfront', async () => {
    await program.methods
      .increment()
      .accounts({ soltrustfront: soltrustfrontKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.soltrustfront.fetch(
      soltrustfrontKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Increment Soltrustfront Again', async () => {
    await program.methods
      .increment()
      .accounts({ soltrustfront: soltrustfrontKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.soltrustfront.fetch(
      soltrustfrontKeypair.publicKey
    );

    expect(currentCount.count).toEqual(2);
  });

  it('Decrement Soltrustfront', async () => {
    await program.methods
      .decrement()
      .accounts({ soltrustfront: soltrustfrontKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.soltrustfront.fetch(
      soltrustfrontKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Set soltrustfront value', async () => {
    await program.methods
      .set(42)
      .accounts({ soltrustfront: soltrustfrontKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.soltrustfront.fetch(
      soltrustfrontKeypair.publicKey
    );

    expect(currentCount.count).toEqual(42);
  });

  it('Set close the soltrustfront account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        soltrustfront: soltrustfrontKeypair.publicKey,
      })
      .rpc();

    // The account should no longer exist, returning null.
    const userAccount = await program.account.soltrustfront.fetchNullable(
      soltrustfrontKeypair.publicKey
    );
    expect(userAccount).toBeNull();
  });
});
