import { MsgBroadcaster, Web3Broadcaster } from '@injectivelabs/wallet-ts'
import { walletStrategy } from './wallet/wallet-strategy'
import {
  NETWORK,
  CHAIN_ID,
  ENDPOINTS,
  ETHEREUM_CHAIN_ID,
  FEE_PAYER_PUB_KEY
} from './utils/constant'

// Transaction broadcaster
export const msgBroadcaster = new MsgBroadcaster({
  walletStrategy,
  simulateTx: true,
  network: NETWORK,
  chainId: CHAIN_ID,
  ethereumChainId: ETHEREUM_CHAIN_ID,
  endpoints: ENDPOINTS,
  gasBufferCoefficient: 1.4,
  feePayerPubKey: FEE_PAYER_PUB_KEY
})

export const web3Broadcaster = new Web3Broadcaster({
  walletStrategy,
  network: NETWORK,
  ethereumChainId: ETHEREUM_CHAIN_ID
})
