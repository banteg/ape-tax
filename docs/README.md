## `veCurveVault`

- [`veCurveVault`](#-vecurvevault-)
  * [`delegate(address delegatee)` (public)](#-delegate-address-delegatee----public-)
  * [`delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)` (public)](#-delegatebysig-address-delegatee--uint256-nonce--uint256-expiry--uint8-v--bytes32-r--bytes32-s----public-)
  * [`getCurrentVotes(address account) → uint256` (external)](#-getcurrentvotes-address-account----uint256---external-)
  * [`getPriorVotes(address account, uint256 blockNumber) → uint256` (public)](#-getpriorvotes-address-account--uint256-blocknumber----uint256---public-)
  * [`_delegate(address delegator, address delegatee)` (internal)](#--delegate-address-delegator--address-delegatee----internal-)
  * [`_moveDelegates(address srcRep, address dstRep, uint256 amount)` (internal)](#--movedelegates-address-srcrep--address-dstrep--uint256-amount----internal-)
  * [`_writeCheckpoint(address delegatee, uint32 nCheckpoints, uint256 oldVotes, uint256 newVotes)` (internal)](#--writecheckpoint-address-delegatee--uint32-ncheckpoints--uint256-oldvotes--uint256-newvotes----internal-)
  * [`safe32(uint256 n, string errorMessage) → uint32` (internal)](#-safe32-uint256-n--string-errormessage----uint32---internal-)
  * [`update()` (external)](#-update-----external-)
  * [`_update()` (internal)](#--update-----internal-)
  * [`_claim()` (internal)](#--claim-----internal-)
  * [`updateFor(address recipient)` (public)](#-updatefor-address-recipient----public-)
  * [`claim()` (external)](#-claim-----external-)
  * [`claimFor(address recipient)` (external)](#-claimfor-address-recipient----external-)
  * [`_claimFor(address recipient)` (internal)](#--claimfor-address-recipient----internal-)
  * [`_mint(address dst, uint256 amount)` (internal)](#--mint-address-dst--uint256-amount----internal-)
  * [`depositAll()` (external)](#-depositall-----external-)
  * [`deposit(uint256 _amount)` (external)](#-deposit-uint256--amount----external-)
  * [`_deposit(uint256 _amount)` (internal)](#--deposit-uint256--amount----internal-)
  * [`setProxy(address _proxy)` (external)](#-setproxy-address--proxy----external-)
  * [`setFeeDistribution(address _feeDistribution)` (external)](#-setfeedistribution-address--feedistribution----external-)
  * [`setGovernance(address _governance)` (external)](#-setgovernance-address--governance----external-)
  * [`acceptGovernance()` (external)](#-acceptgovernance-----external-)
  * [`allowance(address account, address spender) → uint256` (external)](#-allowance-address-account--address-spender----uint256---external-)
  * [`approve(address spender, uint256 amount) → bool` (external)](#-approve-address-spender--uint256-amount----bool---external-)
  * [`permit(address owner, address spender, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s)` (external)](#-permit-address-owner--address-spender--uint256-amount--uint256-deadline--uint8-v--bytes32-r--bytes32-s----external-)
  * [`balanceOf(address account) → uint256` (external)](#-balanceof-address-account----uint256---external-)
  * [`transfer(address dst, uint256 amount) → bool` (external)](#-transfer-address-dst--uint256-amount----bool---external-)
  * [`transferFrom(address src, address dst, uint256 amount) → bool` (external)](#-transferfrom-address-src--address-dst--uint256-amount----bool---external-)
  * [`_transferTokens(address src, address dst, uint256 amount)` (internal)](#--transfertokens-address-src--address-dst--uint256-amount----internal-)
  * [`_getChainId() → uint256` (internal)](#--getchainid-----uint256---internal-)
  * [`DelegateChanged(address delegator, address fromDelegate, address toDelegate)`](#-delegatechanged-address-delegator--address-fromdelegate--address-todelegate--)
  * [`DelegateVotesChanged(address delegate, uint256 previousBalance, uint256 newBalance)`](#-delegatevoteschanged-address-delegate--uint256-previousbalance--uint256-newbalance--)
  * [`Transfer(address from, address to, uint256 amount)`](#-transfer-address-from--address-to--uint256-amount--)
  * [`Approval(address owner, address spender, uint256 amount)`](#-approval-address-owner--address-spender--uint256-amount--)

#### `delegate(address delegatee)` (public)

Delegate votes from `msg.sender` to `delegatee`
#### `delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)` (public)

Delegates votes from signatory to `delegatee`

#### `getCurrentVotes(address account) → uint256` (external)

Gets the current votes balance for `account`

#### `getPriorVotes(address account, uint256 blockNumber) → uint256` (public)

Determine the prior number of votes for an account as of a block number

Block number must be a finalized block or else this function will revert to prevent misinformation.

#### `_delegate(address delegator, address delegatee)` (internal)

#### `_moveDelegates(address srcRep, address dstRep, uint256 amount)` (internal)

#### `_writeCheckpoint(address delegatee, uint32 nCheckpoints, uint256 oldVotes, uint256 newVotes)` (internal)

#### `safe32(uint256 n, string errorMessage) → uint32` (internal)

#### `update()` (external)

#### `_update()` (internal)

#### `_claim()` (internal)

#### `updateFor(address recipient)` (public)

#### `claim()` (external)

#### `claimFor(address recipient)` (external)

#### `_claimFor(address recipient)` (internal)

#### `_mint(address dst, uint256 amount)` (internal)

#### `depositAll()` (external)

#### `deposit(uint256 _amount)` (external)

#### `_deposit(uint256 _amount)` (internal)

#### `setProxy(address _proxy)` (external)

#### `setFeeDistribution(address _feeDistribution)` (external)

#### `setGovernance(address _governance)` (external)

Allows governance to change governance (for future upgradability)


#### `acceptGovernance()` (external)

Allows pendingGovernance to accept their role as governance (protection pattern)

#### `allowance(address account, address spender) → uint256` (external)

Get the number of tokens `spender` is approved to spend on behalf of `account`


#### `approve(address spender, uint256 amount) → bool` (external)

Approve `spender` to transfer up to `amount` from `src`


This will overwrite the approval amount for `spender`
and is subject to issues noted [here](https://eips.ethereum.org/EIPS/eip-20#approve)
#### `permit(address owner, address spender, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s)` (external)

Triggers an approval from owner to spends


#### `balanceOf(address account) → uint256` (external)

Get the number of tokens held by the `account`


#### `transfer(address dst, uint256 amount) → bool` (external)

Transfer `amount` tokens from `msg.sender` to `dst`


#### `transferFrom(address src, address dst, uint256 amount) → bool` (external)

Transfer `amount` tokens from `src` to `dst`


#### `_transferTokens(address src, address dst, uint256 amount)` (internal)

#### `_getChainId() → uint256` (internal)


#### `DelegateChanged(address delegator, address fromDelegate, address toDelegate)`

An event thats emitted when an account changes its delegate

#### `DelegateVotesChanged(address delegate, uint256 previousBalance, uint256 newBalance)`

An event thats emitted when a delegate account's vote balance changes

#### `Transfer(address from, address to, uint256 amount)`

The standard EIP-20 transfer event

#### `Approval(address owner, address spender, uint256 amount)`

The standard EIP-20 approval event
