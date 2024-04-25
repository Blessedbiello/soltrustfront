// import './global.css';
// import { UiLayout } from '@/components/ui/ui-layout';
// import { ClusterProvider } from '@/components/cluster/cluster-data-access';
// import { SolanaProvider } from '@/components/solana/solana-provider';
// import { ReactQueryProvider } from './react-query-provider';

// export const metadata = {
//   title: 'soltrustv1',
//   description: 'P2P exchange on solana fiat/crypto',
// };

// const links: { label: string; path: string }[] = [
//   { label: 'Account', path: '/account' },
//   { label: 'Clusters', path: '/clusters' },
//   { label: 'Soltrustfront Program', path: '/soltrustfront' },
//   { label: 'P2P', path: '/p2p' },
//   { label: 'SWAP', path: '/swap' },
//   { label: 'BRIDGE', path: '/bridge' },
// ];

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <ReactQueryProvider>
//           <ClusterProvider>
//             <SolanaProvider>
//               <UiLayout links={links}>{children}</UiLayout>
//             </SolanaProvider>
//           </ClusterProvider>
//         </ReactQueryProvider>
//       </body>
//     </html>
//   );
// }


import './global.css';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { ReactQueryProvider } from './react-query-provider';

export const metadata = {
  title: 'soltrustv1',
  description: 'P2P exchange on solana fiat/crypto',
};

// Links for the first navbar
const mainLinks: { label: string; path: string }[] = [
  { label: 'Account', path: '/account' },
  { label: 'Clusters', path: '/clusters' },
  // { label: 'Soltrustfront Program', path: '/soltrustfront' },
  
];

// Links for the second navbar
const secondaryLinks: { label: string; path: string }[] = [
  { label: 'P2P-CRYPTO/FIAT', path: '/p2p' },
  { label: 'SWAP', path: '/swap' },
  { label: 'BRIDGE', path: '/bridge' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              {/* Pass both mainLinks and secondaryLinks to the UiLayout component */}
              <UiLayout mainLinks={mainLinks} secondaryLinks={secondaryLinks}>
                {children}
              </UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}