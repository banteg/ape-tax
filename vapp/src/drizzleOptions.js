import ERC20 from './abi/ERC20.json'
import veCurveVault from './abi/veCurveVault.json'
import CurveVotingEscrow from './abi/CurveVotingEscrow.json'
import CurveVesting from './abi/CurveVesting.json'
import CurveYCRVVoter from './abi/CurveYCRVVoter.json'
import StrategyProxy from './abi/StrategyProxy.json'
import CurveBackzapper from './abi/CurveBackzapper.json'

import Web3 from 'web3'
let web3 = new Web3(Web3.givenProvider);

const options = {
  web3: {
    block: false,
  },
  syncAlways: true,
  contracts: [
    {
      contractName: 'veCurveVault',
      web3Contract: new web3.eth.Contract(veCurveVault, "0xc5bDdf9843308380375a611c18B50Fb9341f502A")
    },
    {
      contractName: 'CRV',
      web3Contract: new web3.eth.Contract(ERC20, "0xD533a949740bb3306d119CC777fa900bA034cd52")
    },
    {
      contractName: 'CurveVotingEscrow',
      web3Contract: new web3.eth.Contract(CurveVotingEscrow, "0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2")
    },
    {
      contractName: 'CurveVesting',
      web3Contract: new web3.eth.Contract(CurveVesting, "0x575CCD8e2D300e2377B43478339E364000318E2c")
    },
    {
      contractName: 'StrategyProxy',
      web3Contract: new web3.eth.Contract(StrategyProxy, "0x7A1848e7847F3f5FfB4d8e63BdB9569db535A4f0")
    },
    {
      contractName: 'CurveYCRVVoter',
      web3Contract: new web3.eth.Contract(CurveYCRVVoter, "0xF147b8125d2ef93FB6965Db97D6746952a133934")
    },
    {
      contractName: 'CurveBackzapper',
      web3Contract: new web3.eth.Contract(CurveBackzapper, "0x5249dD8DB02EeFB08600C4A70110B0f6B9CDA3cA")
    },
  ],
  events: {
  },
  polls: {
    accounts: 15000
  }
}

export default options
