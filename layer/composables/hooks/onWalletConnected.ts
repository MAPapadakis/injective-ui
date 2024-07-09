import { EventBus } from './../../types'

export default function onWalletConnected(callback: Function) {
  onMounted(() => {
    callback()
console.log('for some reason responding to wallet connected event', callback)
    useEventBus(EventBus.WalletConnected).on(() => callback())
  })
}
