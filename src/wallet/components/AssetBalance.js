import { Fixed8 } from '../../utils'
import Coin from './Coin'

/**
 * @typedef AssetBalance
 * @property {Fixed8} balance - The total balance in this AssetBalance
 * @property {Coin[]} unspent - Unspent coins
 * @property {Coin[]} spent - Spent coins
 * @property {Coin[]} unconfirmed - Unconfirmed coins
 */
export default (assetBalanceObj = {}) => {
  const {
    balance,
    unspent,
    spent,
    unconfirmed,
    address,
  } = assetBalanceObj

  return {
    balance: balance ? new Fixed8(balance) : new Fixed8(0),
    unspent: unspent ? unspent.map(coin => Coin(Object.assign(coin, {address}))) : [],
    spent: spent ? spent.map(coin => Coin(Object.assign(coin, {address}))) : [],
    unconfirmed: unconfirmed ? unconfirmed.map(coin => Coin(Object.assign(coin, {address}))) : [],
  }
}
