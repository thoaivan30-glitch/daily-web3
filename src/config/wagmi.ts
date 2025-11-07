import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, polygon, bsc, avalanche, optimism, base } from '@reown/appkit/networks'

// Lấy projectId từ https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!

if (!projectId) {
  throw new Error('NEXT_PUBLIC_REOWN_PROJECT_ID is not set')
}

// Cấu hình metadata cho ứng dụng
export const metadata = {
  name: 'DailyWeb3',
  description: 'DailyWeb3 - Nền tảng e-commerce Web3',
  url: 'https://dailyweb3.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Danh sách các networks được hỗ trợ
export const networks = [mainnet, arbitrum, polygon, bsc, avalanche, optimism, base]

// Tạo Wagmi Adapter với cấu hình tối ưu
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks,
  transports: {
    [mainnet.id]: http(undefined, {
      batch: true,
      fetchOptions: {
        mode: 'cors',
      },
      retryCount: 3,
      timeout: 10_000,
    }),
    [arbitrum.id]: http(undefined, {
      batch: true,
      fetchOptions: {
        mode: 'cors',
      },
      retryCount: 3,
      timeout: 10_000,
    }),
    [polygon.id]: http(undefined, {
      batch: true,
      fetchOptions: {
        mode: 'cors',
      },
      retryCount: 3,
      timeout: 10_000,
    }),
    [bsc.id]: http(undefined, {
      batch: true,
      fetchOptions: {
        mode: 'cors',
      },
      retryCount: 3,
      timeout: 10_000,
    }),
    [avalanche.id]: http(undefined, {
      batch: true,
      fetchOptions: {
        mode: 'cors',
      },
      retryCount: 3,
      timeout: 10_000,
    }),
    [optimism.id]: http(undefined, {
      batch: true,
      fetchOptions: {
        mode: 'cors',
      },
      retryCount: 3,
      timeout: 10_000,
    }),
    [base.id]: http(undefined, {
      batch: true,
      fetchOptions: {
        mode: 'cors',
      },
      retryCount: 3,
      timeout: 10_000,
    }),
  },
})

export const config = wagmiAdapter.wagmiConfig
