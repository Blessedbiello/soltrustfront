'use client';

import {
  SoltrustfrontIDL,
  getSoltrustfrontProgramId,
} from '@soltrustfront/anchor';
import { Program } from '@coral-xyz/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Cluster, Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';

export function useSoltrustfrontProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getSoltrustfrontProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = new Program(SoltrustfrontIDL, programId, provider);

  const accounts = useQuery({
    queryKey: ['soltrustfront', 'all', { cluster }],
    queryFn: () => program.account.soltrustfront.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['soltrustfront', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods
        .initialize()
        .accounts({ soltrustfront: keypair.publicKey })
        .signers([keypair])
        .rpc(),
    onSuccess: (signature) => {
      transactionToast(signature);
      return accounts.refetch();
    },
    onError: () => toast.error('Failed to initialize account'),
  });

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  };
}

export function useSoltrustfrontProgramAccount({
  account,
}: {
  account: PublicKey;
}) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useSoltrustfrontProgram();

  const accountQuery = useQuery({
    queryKey: ['soltrustfront', 'fetch', { cluster, account }],
    queryFn: () => program.account.soltrustfront.fetch(account),
  });

  const closeMutation = useMutation({
    mutationKey: ['soltrustfront', 'close', { cluster, account }],
    mutationFn: () =>
      program.methods.close().accounts({ soltrustfront: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accounts.refetch();
    },
  });

  const decrementMutation = useMutation({
    mutationKey: ['soltrustfront', 'decrement', { cluster, account }],
    mutationFn: () =>
      program.methods.decrement().accounts({ soltrustfront: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const incrementMutation = useMutation({
    mutationKey: ['soltrustfront', 'increment', { cluster, account }],
    mutationFn: () =>
      program.methods.increment().accounts({ soltrustfront: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const setMutation = useMutation({
    mutationKey: ['soltrustfront', 'set', { cluster, account }],
    mutationFn: (value: number) =>
      program.methods.set(value).accounts({ soltrustfront: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  };
}
