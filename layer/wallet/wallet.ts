import {
  ErrorType,
  WalletException,
  UnspecifiedErrorCode
} from '@injectivelabs/exceptions'
import { walletStrategy } from './wallet-strategy'

export const getAddresses = async (): Promise<string[]> => {
  console.log('before enableAndGetAddresses', walletStrategy.getWallet())
  const addresses = await walletStrategy.enableAndGetAddresses()
  console.log('after enableAndGetAddresses', walletStrategy.getWallet())

  if (addresses.length === 0) {
    throw new WalletException(
      new Error('There are no addresses linked to this wallet.'),
      {
        code: UnspecifiedErrorCode,
        type: ErrorType.WalletError
      }
    )
  }

  if (!addresses.every((address) => !!address)) {
    throw new WalletException(
      new Error('There are no addresses linked to this wallet.'),
      {
        code: UnspecifiedErrorCode,
        type: ErrorType.WalletError
      }
    )
  }

  return addresses
}

/** @deprecated - we should not use this anymore */
export const confirm = async (address: string) => {
  return await walletStrategy.getSessionOrConfirm(address)
}
