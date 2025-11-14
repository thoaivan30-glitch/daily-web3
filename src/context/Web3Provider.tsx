// Tạm thời tắt Web3Provider
// 'use client'

// import React, { ReactNode, useEffect, useState } from 'react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { WagmiProvider } from 'wagmi'
// import { metadata, networks, projectId, wagmiAdapter } from '@/config/wagmi'
// import type { AppKitNetwork } from '@reown/appkit/networks'

// // Setup queryClient với optimized config
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 60 * 1000, // 1 phút
//       gcTime: 5 * 60 * 1000, // 5 phút (thay cacheTime)
//       refetchOnWindowFocus: false, // Tắt auto refetch
//       retry: 1, // Giảm số lần retry
//       networkMode: 'offlineFirst', // Xử lý offline mode
//     },
//   },
// })

// // Biến để track xem AppKit đã được khởi tạo chưa
// let appKitInitialized = false

// export function Web3Provider({ children }: { children: ReactNode }) {
//   const [isReady, setIsReady] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     // Lazy load AppKit để giảm initial bundle size
//     if (!appKitInitialized && typeof window !== 'undefined') {
//       import('@reown/appkit/react')
//         .then(({ createAppKit }) => {
//           return import('@reown/appkit/networks').then(() => {
//             try {
//               createAppKit({
//                 adapters: [wagmiAdapter],
//                 projectId,
//                 networks: networks as unknown as [AppKitNetwork, ...AppKitNetwork[]],
//                 metadata,
//                 features: {
//                   analytics: false, // Tắt analytics trong dev
//                 },
//                 themeMode: 'dark'
//               })
//               appKitInitialized = true
//               setIsReady(true)
//             } catch (err) {
//               console.error('Error initializing AppKit:', err)
//               setError('Failed to initialize Web3 connection')
//               setIsReady(true) // Vẫn cho phép render app
//             }
//           })
//         })
//         .catch((err) => {
//           console.error('Error loading AppKit modules:', err)
//           setError('Failed to load Web3 modules')
//           setIsReady(true) // Vẫn cho phép render app
//         })
//     } else {
//       setIsReady(true)
//     }
//   }, [])

//   // Chờ AppKit được khởi tạo trước khi render children
//   if (!isReady) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-white">Loading Web3...</div>
//       </div>
//     )
//   }

//   // Hiển thị lỗi nếu có nhưng vẫn render children
//   if (error) {
//     console.warn('Web3Provider error:', error)
//   }

//   return (
//     <WagmiProvider config={wagmiAdapter.wagmiConfig}>
//       <QueryClientProvider client={queryClient}>
//         {children}
//       </QueryClientProvider>
//     </WagmiProvider>
//   )
// }
