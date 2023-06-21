import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  SafeNumber: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccountAddress: Maybe<SwellAccountAddress>;
  addAccountCard: Maybe<SwellAccountCard>;
  addCartItem: Maybe<SwellCart>;
  addSubscriptionItem: Maybe<SwellSubscriptionItem>;
  applyCoupon: Maybe<SwellCart>;
  applyGiftcard: Maybe<SwellCart>;
  createAccount: Maybe<SwellAccount>;
  createSubscription: Maybe<SwellSubscription>;
  deleteAccountAddress: Maybe<SwellAccountAddress>;
  deleteAccountCard: Maybe<SwellAccountCard>;
  deleteCartItem: Maybe<SwellCart>;
  deleteSubscriptionItem: Maybe<SwellSubscriptionItem>;
  loginAccount: Maybe<SuccessfulResponse>;
  logoutAccount: Maybe<SuccessfulResponse>;
  recoverAccount: Maybe<SuccessfulResponse>;
  removeCoupon: Maybe<SwellCart>;
  removeGiftcard: Maybe<SwellCart>;
  sendAccountRecovery: Maybe<SuccessfulResponse>;
  submitCartOrder: Maybe<SwellOrder>;
  updateAccount: Maybe<SwellAccount>;
  updateAccountAddress: Maybe<SwellAccountAddress>;
  updateAccountCard: Maybe<SwellAccountCard>;
  updateCart: Maybe<SwellCart>;
  updateCartItem: Maybe<SwellCart>;
  updateSubscription: Maybe<SwellSubscription>;
  updateSubscriptionItem: Maybe<SwellSubscriptionItem>;
};


export type MutationAddAccountAddressArgs = {
  input: InputMaybe<SwellAccountAddressInput>;
};


export type MutationAddAccountCardArgs = {
  input: InputMaybe<SwellAccountCardInput>;
};


export type MutationAddCartItemArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  input: InputMaybe<SwellCartItemInput>;
};


export type MutationAddSubscriptionItemArgs = {
  input: InputMaybe<SwellSubscriptionItemInput>;
  subscriptionId: InputMaybe<Scalars['String']['input']>;
};


export type MutationApplyCouponArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  code: InputMaybe<Scalars['String']['input']>;
};


export type MutationApplyGiftcardArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  code: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateAccountArgs = {
  input: InputMaybe<SwellAccountInput>;
};


export type MutationCreateSubscriptionArgs = {
  input: InputMaybe<SwellSubscriptionInput>;
};


export type MutationDeleteAccountAddressArgs = {
  addressId: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteAccountCardArgs = {
  cardId: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCartItemArgs = {
  itemId: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteSubscriptionItemArgs = {
  itemId: InputMaybe<Scalars['String']['input']>;
  subscriptionId: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginAccountArgs = {
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  passwordToken: InputMaybe<Scalars['String']['input']>;
};


export type MutationRecoverAccountArgs = {
  password: InputMaybe<Scalars['String']['input']>;
  passwordResetKey: InputMaybe<Scalars['String']['input']>;
};


export type MutationRemoveGiftcardArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  giftcardId: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendAccountRecoveryArgs = {
  email: InputMaybe<Scalars['String']['input']>;
  passwordResetUrl: InputMaybe<Scalars['String']['input']>;
};


export type MutationSubmitCartOrderArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAccountArgs = {
  input: InputMaybe<SwellAccountInput>;
};


export type MutationUpdateAccountAddressArgs = {
  addressId: InputMaybe<Scalars['String']['input']>;
  input: InputMaybe<SwellAccountAddressInput>;
};


export type MutationUpdateAccountCardArgs = {
  cardId: InputMaybe<Scalars['String']['input']>;
  input: InputMaybe<SwellAccountCardInput>;
};


export type MutationUpdateCartArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  input: InputMaybe<SwellCartInput>;
};


export type MutationUpdateCartItemArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  input: InputMaybe<SwellCartItemInput>;
  itemId: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSubscriptionArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  input: InputMaybe<SwellSubscriptionInput>;
};


export type MutationUpdateSubscriptionItemArgs = {
  input: InputMaybe<SwellSubscriptionItemInput>;
  itemId: InputMaybe<Scalars['String']['input']>;
  subscriptionId: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  end: Maybe<Scalars['Int']['output']>;
  number: Maybe<Scalars['Int']['output']>;
  start: Maybe<Scalars['Int']['output']>;
};

export type ProductPricing = {
  accountId: InputMaybe<Scalars['String']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  account: Maybe<SwellAccount>;
  attributeById: Maybe<SwellAttribute>;
  attributes: Maybe<SwellAttributes>;
  cart: Maybe<SwellCart>;
  categories: Maybe<SwellCategories>;
  categoryById: Maybe<SwellCategory>;
  categoryBySlug: Maybe<SwellCategory>;
  contentAttributeGroupById: Maybe<SwellContentAttributeGroup>;
  contentAttributeGroups: Maybe<SwellContentAttributeGroups>;
  contentPageById: Maybe<SwellContentPage>;
  contentPageBySlug: Maybe<SwellContentPage>;
  contentPages: Maybe<SwellContentPages>;
  menuSettings: Maybe<SwellSettingsMenus>;
  orderById: Maybe<SwellOrder>;
  orderByNumber: Maybe<SwellOrder>;
  orders: Maybe<SwellOrders>;
  paymentSettings: Maybe<SwellSettingsPayments>;
  productById: Maybe<SwellProduct>;
  productBySlug: Maybe<SwellProduct>;
  products: Maybe<SwellProducts>;
  session: Maybe<Session>;
  storeSettings: Maybe<SwellSettings>;
  subscriptionById: Maybe<SwellSubscription>;
  subscriptionSettings: Maybe<SwellSettingsSubscriptions>;
  subscriptions: Maybe<SwellSubscriptions>;
};


export type QueryAccountArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributeByIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttributesArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryCartArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoriesArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryCategoryByIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryBySlugArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentAttributeGroupByIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _preview: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentAttributeGroupsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _preview: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryContentPageByIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _preview: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentPageBySlugArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _preview: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentPagesArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _preview: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryMenuSettingsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderByIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderByNumberArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  number: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryPaymentSettingsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductByIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _pricing: InputMaybe<ProductPricing>;
  id: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductBySlugArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _pricing: InputMaybe<ProductPricing>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  _pricing: InputMaybe<ProductPricing>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryStoreSettingsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionByIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionSettingsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};

export type Session = {
  __typename?: 'Session';
  accountId: Maybe<Scalars['String']['output']>;
  cartId: Maybe<Scalars['String']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  publicKey: Maybe<Scalars['String']['output']>;
};

export type SuccessfulResponse = {
  __typename?: 'SuccessfulResponse';
  success: Maybe<Scalars['Boolean']['output']>;
};

export type SwellAccount = {
  __typename?: 'SwellAccount';
  addresses: Maybe<SwellAccountsAddresses>;
  balance: Maybe<Scalars['SafeNumber']['output']>;
  billing: Maybe<SwellAccountBilling>;
  cards: Maybe<SwellAccountsCards>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  dateFirstOrder: Maybe<Scalars['DateTime']['output']>;
  dateLastOrder: Maybe<Scalars['DateTime']['output']>;
  email: Maybe<Scalars['String']['output']>;
  emailOptin: Maybe<Scalars['Boolean']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  group: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  name: Maybe<Scalars['String']['output']>;
  orderCount: Maybe<Scalars['Int']['output']>;
  orderValue: Maybe<Scalars['SafeNumber']['output']>;
  orders: Maybe<Array<Maybe<SwellOrder>>>;
  phone: Maybe<Scalars['String']['output']>;
  shipping: Maybe<SwellAccountShipping>;
  subscriptions: Maybe<Array<Maybe<SwellSubscription>>>;
  type: Maybe<Scalars['String']['output']>;
  vatNumber: Maybe<Scalars['String']['output']>;
};


export type SwellAccountOrdersArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type SwellAccountSubscriptionsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountAddress = {
  __typename?: 'SwellAccountAddress';
  active: Maybe<Scalars['Boolean']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  fingerprint: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  parent: Maybe<SwellAccount>;
  parentId: Maybe<Scalars['ID']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};


export type SwellAccountAddressParentArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountAddressInput = {
  active: InputMaybe<Scalars['Boolean']['input']>;
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  fingerprint: InputMaybe<Scalars['String']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  parentId: InputMaybe<Scalars['ID']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountBilling = {
  __typename?: 'SwellAccountBilling';
  accountCardId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  card: Maybe<SwellAccountBillingCard>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  method: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellAccountBillingCard = {
  __typename?: 'SwellAccountBillingCard';
  addressCheck: Maybe<Scalars['String']['output']>;
  brand: Maybe<Scalars['String']['output']>;
  cvcCheck: Maybe<Scalars['String']['output']>;
  expMonth: Maybe<Scalars['Int']['output']>;
  expYear: Maybe<Scalars['Int']['output']>;
  gateway: Maybe<Scalars['String']['output']>;
  last4: Maybe<Scalars['String']['output']>;
  test: Maybe<Scalars['Boolean']['output']>;
  token: Maybe<Scalars['String']['output']>;
  zipCheck: Maybe<Scalars['String']['output']>;
};

export type SwellAccountBillingCardInput = {
  addressCheck: InputMaybe<Scalars['String']['input']>;
  brand: InputMaybe<Scalars['String']['input']>;
  cvcCheck: InputMaybe<Scalars['String']['input']>;
  expMonth: InputMaybe<Scalars['Int']['input']>;
  expYear: InputMaybe<Scalars['Int']['input']>;
  gateway: InputMaybe<Scalars['String']['input']>;
  last4: InputMaybe<Scalars['String']['input']>;
  test: InputMaybe<Scalars['Boolean']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
  zipCheck: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountBillingInput = {
  accountCardId: InputMaybe<Scalars['ID']['input']>;
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  card: InputMaybe<SwellAccountBillingCardInput>;
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  method: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountCard = {
  __typename?: 'SwellAccountCard';
  active: Maybe<Scalars['Boolean']['output']>;
  addressCheck: Maybe<Scalars['String']['output']>;
  billing: Maybe<SwellAccountCardBilling>;
  brand: Maybe<Scalars['String']['output']>;
  cvcCheck: Maybe<Scalars['String']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  expMonth: Maybe<Scalars['Int']['output']>;
  expYear: Maybe<Scalars['Int']['output']>;
  fingerprint: Maybe<Scalars['String']['output']>;
  gateway: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  last4: Maybe<Scalars['String']['output']>;
  parent: Maybe<SwellAccount>;
  parentId: Maybe<Scalars['ID']['output']>;
  test: Maybe<Scalars['Boolean']['output']>;
  token: Maybe<Scalars['String']['output']>;
  zipCheck: Maybe<Scalars['String']['output']>;
};


export type SwellAccountCardParentArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountCardBilling = {
  __typename?: 'SwellAccountCardBilling';
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  company: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  vatNumber: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellAccountCardBillingInput = {
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  city: InputMaybe<Scalars['String']['input']>;
  company: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  vatNumber: InputMaybe<Scalars['String']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountCardInput = {
  active: InputMaybe<Scalars['Boolean']['input']>;
  addressCheck: InputMaybe<Scalars['String']['input']>;
  billing: InputMaybe<SwellAccountCardBillingInput>;
  brand: InputMaybe<Scalars['String']['input']>;
  cvcCheck: InputMaybe<Scalars['String']['input']>;
  dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  dateUpdated: InputMaybe<Scalars['DateTime']['input']>;
  expMonth: InputMaybe<Scalars['Int']['input']>;
  expYear: InputMaybe<Scalars['Int']['input']>;
  fingerprint: InputMaybe<Scalars['String']['input']>;
  gateway: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  last4: InputMaybe<Scalars['String']['input']>;
  parentId: InputMaybe<Scalars['ID']['input']>;
  test: InputMaybe<Scalars['Boolean']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
  zipCheck: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountInput = {
  addresses: InputMaybe<Array<InputMaybe<SwellAccountAddressInput>>>;
  billing: InputMaybe<SwellAccountBillingInput>;
  cards: InputMaybe<Array<InputMaybe<SwellAccountCardInput>>>;
  email: InputMaybe<Scalars['String']['input']>;
  emailOptin: InputMaybe<Scalars['Boolean']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  metadata: InputMaybe<Scalars['JSON']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  passwordResetKey: InputMaybe<Scalars['String']['input']>;
  passwordResetUrl: InputMaybe<Scalars['String']['input']>;
  passwordToken: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  shipping: InputMaybe<SwellAccountShippingInput>;
  type: InputMaybe<Scalars['String']['input']>;
  vatNumber: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountShipping = {
  __typename?: 'SwellAccountShipping';
  accountAddressId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellAccountShippingInput = {
  accountAddressId: InputMaybe<Scalars['ID']['input']>;
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellAccountsAddresses = {
  __typename?: 'SwellAccountsAddresses';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellAccountAddress>>>;
};

export type SwellAccountsCards = {
  __typename?: 'SwellAccountsCards';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellAccountCard>>>;
};

export type SwellAttribute = {
  __typename?: 'SwellAttribute';
  default: Maybe<Scalars['JSON']['output']>;
  filterable: Maybe<Scalars['Boolean']['output']>;
  multi: Maybe<Scalars['Boolean']['output']>;
  name: Maybe<Scalars['String']['output']>;
  searchable: Maybe<Scalars['Boolean']['output']>;
  type: Maybe<Scalars['String']['output']>;
  values: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  visible: Maybe<Scalars['Boolean']['output']>;
};

export type SwellAttributes = {
  __typename?: 'SwellAttributes';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellAttribute>>>;
};

export type SwellCart = {
  __typename?: 'SwellCart';
  abandoned: Maybe<Scalars['Boolean']['output']>;
  abandonedNotifications: Maybe<Scalars['Int']['output']>;
  account: Maybe<SwellAccount>;
  accountCreditAmount: Maybe<Scalars['SafeNumber']['output']>;
  accountCreditApplied: Maybe<Scalars['Boolean']['output']>;
  accountId: Maybe<Scalars['ID']['output']>;
  accountInfoSaved: Maybe<Scalars['Boolean']['output']>;
  accountLoggedIn: Maybe<Scalars['Boolean']['output']>;
  authTotal: Maybe<Scalars['SafeNumber']['output']>;
  billing: Maybe<SwellCartBilling>;
  captureTotal: Maybe<Scalars['SafeNumber']['output']>;
  checkoutId: Maybe<Scalars['String']['output']>;
  checkoutUrl: Maybe<Scalars['String']['output']>;
  comments: Maybe<Scalars['String']['output']>;
  content: Maybe<SwellCartContent>;
  coupon: Maybe<SwellCartCoupon>;
  couponCode: Maybe<Scalars['String']['output']>;
  couponId: Maybe<Scalars['ID']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  currencyRate: Maybe<Scalars['SafeNumber']['output']>;
  dateAbandoned: Maybe<Scalars['DateTime']['output']>;
  dateAbandonedNext: Maybe<Scalars['DateTime']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  discountTotal: Maybe<Scalars['SafeNumber']['output']>;
  discounts: Maybe<Array<Maybe<SwellCartDiscount>>>;
  displayCurrency: Maybe<Scalars['String']['output']>;
  displayLocale: Maybe<Scalars['String']['output']>;
  gift: Maybe<Scalars['Boolean']['output']>;
  giftMessage: Maybe<Scalars['String']['output']>;
  giftcardDelivery: Maybe<Scalars['Boolean']['output']>;
  giftcardTotal: Maybe<Scalars['SafeNumber']['output']>;
  giftcards: Maybe<Array<Maybe<SwellCartGiftcard>>>;
  grandTotal: Maybe<Scalars['SafeNumber']['output']>;
  guest: Maybe<Scalars['Boolean']['output']>;
  itemDiscount: Maybe<Scalars['SafeNumber']['output']>;
  itemQuantity: Maybe<Scalars['Int']['output']>;
  itemShipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  itemTax: Maybe<Scalars['SafeNumber']['output']>;
  itemTaxIncluded: Maybe<Scalars['Boolean']['output']>;
  items: Maybe<Array<Maybe<SwellCartItem>>>;
  metadata: Maybe<Scalars['JSON']['output']>;
  order: Maybe<SwellOrder>;
  orderId: Maybe<Scalars['ID']['output']>;
  promotionIds: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  promotions: Maybe<SwellCartsPromotions>;
  purchaseLinksErrors: Maybe<Array<Maybe<SwellCartPurchaseLinksError>>>;
  recovered: Maybe<Scalars['Boolean']['output']>;
  shipmentDelivery: Maybe<Scalars['Boolean']['output']>;
  shipmentDiscount: Maybe<Scalars['SafeNumber']['output']>;
  shipmentPrice: Maybe<Scalars['SafeNumber']['output']>;
  shipmentRating: Maybe<SwellCartShipmentRating>;
  shipmentTax: Maybe<Scalars['SafeNumber']['output']>;
  shipmentTaxIncluded: Maybe<Scalars['Boolean']['output']>;
  shipmentTotal: Maybe<Scalars['SafeNumber']['output']>;
  shipping: Maybe<SwellCartShipping>;
  subTotal: Maybe<Scalars['SafeNumber']['output']>;
  subscriptionDelivery: Maybe<Scalars['Boolean']['output']>;
  taxIncludedTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxes: Maybe<Array<Maybe<SwellCartTax>>>;
  taxesFixed: Maybe<Scalars['Boolean']['output']>;
  test: Maybe<Scalars['Boolean']['output']>;
  testTextField: Maybe<Scalars['String']['output']>;
  trial: Maybe<Scalars['Boolean']['output']>;
  trialAuthTotal: Maybe<Scalars['SafeNumber']['output']>;
  trialGrandTotal: Maybe<Scalars['SafeNumber']['output']>;
  trialItemDiscount: Maybe<Scalars['SafeNumber']['output']>;
  trialItemTax: Maybe<Scalars['SafeNumber']['output']>;
  trialSubTotal: Maybe<Scalars['SafeNumber']['output']>;
  trialTaxIncludedTotal: Maybe<Scalars['SafeNumber']['output']>;
};


export type SwellCartAccountArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type SwellCartOrderArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBilling = {
  __typename?: 'SwellCartBilling';
  accountCardId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  affirm: Maybe<SwellCartBillingAffirm>;
  amazon: Maybe<SwellCartBillingAmazon>;
  apple: Maybe<SwellCartBillingApple>;
  bancontact: Maybe<SwellCartBillingBancontact>;
  card: Maybe<SwellCartBillingCard>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['Boolean']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  google: Maybe<SwellCartBillingGoogle>;
  ideal: Maybe<SwellCartBillingIdeal>;
  intent: Maybe<Scalars['JSON']['output']>;
  klarna: Maybe<SwellCartBillingKlarna>;
  lastName: Maybe<Scalars['String']['output']>;
  method: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  paypal: Maybe<SwellCartBillingPaypal>;
  phone: Maybe<Scalars['String']['output']>;
  resolve: Maybe<SwellCartBillingResolve>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingAffirm = {
  __typename?: 'SwellCartBillingAffirm';
  checkoutToken: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingAffirmInput = {
  checkoutToken: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingAmazon = {
  __typename?: 'SwellCartBillingAmazon';
  accessToken: Maybe<Scalars['String']['output']>;
  checkoutSessionId: Maybe<Scalars['String']['output']>;
  orderReferenceId: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingAmazonInput = {
  accessToken: InputMaybe<Scalars['String']['input']>;
  checkoutSessionId: InputMaybe<Scalars['String']['input']>;
  orderReferenceId: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingApple = {
  __typename?: 'SwellCartBillingApple';
  gateway: Maybe<Scalars['String']['output']>;
  nonce: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingAppleInput = {
  gateway: InputMaybe<Scalars['String']['input']>;
  nonce: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingBancontact = {
  __typename?: 'SwellCartBillingBancontact';
  source: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingBancontactInput = {
  source: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingCard = {
  __typename?: 'SwellCartBillingCard';
  addressCheck: Maybe<Scalars['String']['output']>;
  brand: Maybe<Scalars['String']['output']>;
  cvcCheck: Maybe<Scalars['String']['output']>;
  expMonth: Maybe<Scalars['Int']['output']>;
  expYear: Maybe<Scalars['Int']['output']>;
  gateway: Maybe<Scalars['String']['output']>;
  last4: Maybe<Scalars['String']['output']>;
  test: Maybe<Scalars['Boolean']['output']>;
  token: Maybe<Scalars['String']['output']>;
  zipCheck: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingCardInput = {
  addressCheck: InputMaybe<Scalars['String']['input']>;
  brand: InputMaybe<Scalars['String']['input']>;
  cvcCheck: InputMaybe<Scalars['String']['input']>;
  expMonth: InputMaybe<Scalars['Int']['input']>;
  expYear: InputMaybe<Scalars['Int']['input']>;
  gateway: InputMaybe<Scalars['String']['input']>;
  last4: InputMaybe<Scalars['String']['input']>;
  test: InputMaybe<Scalars['Boolean']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
  zipCheck: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingGoogle = {
  __typename?: 'SwellCartBillingGoogle';
  gateway: Maybe<Scalars['String']['output']>;
  nonce: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingGoogleInput = {
  gateway: InputMaybe<Scalars['String']['input']>;
  nonce: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingIdeal = {
  __typename?: 'SwellCartBillingIdeal';
  token: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingIdealInput = {
  token: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingInput = {
  accountCardId: InputMaybe<Scalars['ID']['input']>;
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  affirm: InputMaybe<SwellCartBillingAffirmInput>;
  amazon: InputMaybe<SwellCartBillingAmazonInput>;
  apple: InputMaybe<SwellCartBillingAppleInput>;
  bancontact: InputMaybe<SwellCartBillingBancontactInput>;
  card: InputMaybe<SwellCartBillingCardInput>;
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  default: InputMaybe<Scalars['Boolean']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  google: InputMaybe<SwellCartBillingGoogleInput>;
  ideal: InputMaybe<SwellCartBillingIdealInput>;
  intent: InputMaybe<Scalars['JSON']['input']>;
  klarna: InputMaybe<SwellCartBillingKlarnaInput>;
  lastName: InputMaybe<Scalars['String']['input']>;
  method: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  paypal: InputMaybe<SwellCartBillingPaypalInput>;
  phone: InputMaybe<Scalars['String']['input']>;
  resolve: InputMaybe<SwellCartBillingResolveInput>;
  state: InputMaybe<Scalars['String']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingKlarna = {
  __typename?: 'SwellCartBillingKlarna';
  source: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingKlarnaInput = {
  source: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingPaypal = {
  __typename?: 'SwellCartBillingPaypal';
  authorizationId: Maybe<Scalars['String']['output']>;
  nonce: Maybe<Scalars['String']['output']>;
  orderId: Maybe<Scalars['String']['output']>;
  payerId: Maybe<Scalars['String']['output']>;
  paymentId: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingPaypalInput = {
  authorizationId: InputMaybe<Scalars['String']['input']>;
  nonce: InputMaybe<Scalars['String']['input']>;
  orderId: InputMaybe<Scalars['String']['input']>;
  payerId: InputMaybe<Scalars['String']['input']>;
  paymentId: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartBillingResolve = {
  __typename?: 'SwellCartBillingResolve';
  chargeId: Maybe<Scalars['String']['output']>;
};

export type SwellCartBillingResolveInput = {
  chargeId: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartContent = {
  __typename?: 'SwellCartContent';
  wishlistSlug: Maybe<Scalars['String']['output']>;
};

export type SwellCartCoupon = {
  __typename?: 'SwellCartCoupon';
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SwellCartDiscount = {
  __typename?: 'SwellCartDiscount';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
  rule: Maybe<Scalars['JSON']['output']>;
  sourceId: Maybe<Scalars['ID']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellCartGiftcard = {
  __typename?: 'SwellCartGiftcard';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  code: Maybe<Scalars['String']['output']>;
  codeFormatted: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  last4: Maybe<Scalars['String']['output']>;
};

export type SwellCartInput = {
  billing: InputMaybe<SwellCartBillingInput>;
  comments: InputMaybe<Scalars['String']['input']>;
  couponCode: InputMaybe<Scalars['String']['input']>;
  items: InputMaybe<Array<InputMaybe<SwellCartItemInput>>>;
  metadata: InputMaybe<Scalars['JSON']['input']>;
  shipmentRating: InputMaybe<SwellCartShipmentRatingInput>;
  shipping: InputMaybe<SwellCartShippingInput>;
};

export type SwellCartItem = {
  __typename?: 'SwellCartItem';
  bundleItems: Maybe<Array<Maybe<SwellCartItemBundleItem>>>;
  discountEach: Maybe<Scalars['SafeNumber']['output']>;
  discountTotal: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  options: Maybe<Array<Maybe<SwellCartItemOption>>>;
  origPrice: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  priceTotal: Maybe<Scalars['SafeNumber']['output']>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  purchaseOption: Maybe<SwellCartItemPurchaseOption>;
  quantity: Maybe<Scalars['Int']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  taxEach: Maybe<Scalars['SafeNumber']['output']>;
  taxTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxes: Maybe<Array<Maybe<SwellCartItemTax>>>;
  variant: Maybe<SwellProductVariant>;
  variantId: Maybe<Scalars['ID']['output']>;
};

export type SwellCartItemBundleItem = {
  __typename?: 'SwellCartItemBundleItem';
  id: Maybe<Scalars['ID']['output']>;
  options: Maybe<Array<Maybe<SwellCartItemBundleItemOption>>>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  quantityTotal: Maybe<Scalars['Int']['output']>;
  variant: Maybe<SwellProductVariant>;
  variantId: Maybe<Scalars['ID']['output']>;
};

export type SwellCartItemBundleItemInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  options: InputMaybe<Array<InputMaybe<SwellCartItemBundleItemOptionInput>>>;
  productId: InputMaybe<Scalars['ID']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  quantityTotal: InputMaybe<Scalars['Int']['input']>;
  variantId: InputMaybe<Scalars['ID']['input']>;
};

export type SwellCartItemBundleItemOption = {
  __typename?: 'SwellCartItemBundleItemOption';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  value: Maybe<Scalars['String']['output']>;
  valueId: Maybe<Scalars['ID']['output']>;
  variant: Maybe<Scalars['Boolean']['output']>;
};

export type SwellCartItemBundleItemOptionInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['SafeNumber']['input']>;
  shipmentWeight: InputMaybe<Scalars['SafeNumber']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
  valueId: InputMaybe<Scalars['ID']['input']>;
  variant: InputMaybe<Scalars['Boolean']['input']>;
};

export type SwellCartItemInput = {
  bundleItems: InputMaybe<Array<InputMaybe<SwellCartItemBundleItemInput>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  metadata: InputMaybe<Scalars['JSON']['input']>;
  options: InputMaybe<Array<InputMaybe<SwellCartItemOptionInput>>>;
  productId: InputMaybe<Scalars['ID']['input']>;
  purchaseOption: InputMaybe<SwellCartItemPurchaseOptionInput>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  variantId: InputMaybe<Scalars['ID']['input']>;
};

export type SwellCartItemOption = {
  __typename?: 'SwellCartItemOption';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  value: Maybe<Scalars['String']['output']>;
  valueId: Maybe<Scalars['ID']['output']>;
  variant: Maybe<Scalars['Boolean']['output']>;
};

export type SwellCartItemOptionInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['SafeNumber']['input']>;
  shipmentWeight: InputMaybe<Scalars['SafeNumber']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
  valueId: InputMaybe<Scalars['ID']['input']>;
  variant: InputMaybe<Scalars['Boolean']['input']>;
};

export type SwellCartItemPurchaseOption = {
  __typename?: 'SwellCartItemPurchaseOption';
  authAmount: Maybe<Scalars['SafeNumber']['output']>;
  billingSchedule: Maybe<SwellCartItemPurchaseOptionBillingSchedule>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  orderSchedule: Maybe<SwellCartItemPurchaseOptionOrderSchedule>;
  planDescription: Maybe<Scalars['String']['output']>;
  planId: Maybe<Scalars['ID']['output']>;
  planName: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  trialDays: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellCartItemPurchaseOptionBillingSchedule = {
  __typename?: 'SwellCartItemPurchaseOptionBillingSchedule';
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  trialDays: Maybe<Scalars['Int']['output']>;
};

export type SwellCartItemPurchaseOptionInput = {
  planDescription: InputMaybe<Scalars['String']['input']>;
  planId: InputMaybe<Scalars['ID']['input']>;
  planName: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartItemPurchaseOptionOrderSchedule = {
  __typename?: 'SwellCartItemPurchaseOptionOrderSchedule';
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
};

export type SwellCartItemTax = {
  __typename?: 'SwellCartItemTax';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
};

export type SwellCartPromotion = {
  __typename?: 'SwellCartPromotion';
  dateEnd: Maybe<Scalars['DateTime']['output']>;
  dateStart: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SwellCartPurchaseLinksError = {
  __typename?: 'SwellCartPurchaseLinksError';
  error: Maybe<SwellCartPurchaseLinksErrorError>;
  id: Maybe<Scalars['ID']['output']>;
  purchaseLinkId: Maybe<Scalars['String']['output']>;
};

export type SwellCartPurchaseLinksErrorError = {
  __typename?: 'SwellCartPurchaseLinksErrorError';
  code: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
  resource: Maybe<SwellCartPurchaseLinksErrorErrorResource>;
};

export type SwellCartPurchaseLinksErrorErrorResource = {
  __typename?: 'SwellCartPurchaseLinksErrorErrorResource';
  id: Maybe<Scalars['ID']['output']>;
  model: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SwellCartShipmentRating = {
  __typename?: 'SwellCartShipmentRating';
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  errors: Maybe<Array<Maybe<SwellCartShipmentRatingError>>>;
  md5: Maybe<Scalars['String']['output']>;
  services: Maybe<Array<Maybe<SwellCartShipmentRatingService>>>;
};

export type SwellCartShipmentRatingError = {
  __typename?: 'SwellCartShipmentRatingError';
  code: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
};

export type SwellCartShipmentRatingErrorInput = {
  code: InputMaybe<Scalars['String']['input']>;
  message: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartShipmentRatingInput = {
  dateCreated: InputMaybe<Scalars['DateTime']['input']>;
  errors: InputMaybe<Array<InputMaybe<SwellCartShipmentRatingErrorInput>>>;
  md5: InputMaybe<Scalars['String']['input']>;
  services: InputMaybe<Array<InputMaybe<SwellCartShipmentRatingServiceInput>>>;
};

export type SwellCartShipmentRatingService = {
  __typename?: 'SwellCartShipmentRatingService';
  carrier: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  pickup: Maybe<Scalars['Boolean']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  taxCode: Maybe<Scalars['String']['output']>;
};

export type SwellCartShipmentRatingServiceInput = {
  carrier: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  pickup: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['SafeNumber']['input']>;
  taxCode: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartShipping = {
  __typename?: 'SwellCartShipping';
  accountAddressId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['Boolean']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  pickup: Maybe<Scalars['Boolean']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  service: Maybe<Scalars['String']['output']>;
  serviceName: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellCartShippingInput = {
  accountAddressId: InputMaybe<Scalars['ID']['input']>;
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  default: InputMaybe<Scalars['Boolean']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  pickup: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['SafeNumber']['input']>;
  service: InputMaybe<Scalars['String']['input']>;
  serviceName: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellCartTax = {
  __typename?: 'SwellCartTax';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  priority: Maybe<Scalars['Int']['output']>;
  rate: Maybe<Scalars['SafeNumber']['output']>;
  shipping: Maybe<Scalars['Boolean']['output']>;
};

export type SwellCartsPromotions = {
  __typename?: 'SwellCartsPromotions';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellCartPromotion>>>;
};

export type SwellCategories = {
  __typename?: 'SwellCategories';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellCategory>>>;
};

export type SwellCategory = {
  __typename?: 'SwellCategory';
  children: Maybe<Array<Maybe<SwellCategory>>>;
  content: Maybe<SwellCategoryContent>;
  description: Maybe<Scalars['String']['output']>;
  image: Maybe<SwellCategoryImage>;
  images: Maybe<Array<Maybe<SwellCategoryImage>>>;
  metaDescription: Maybe<Scalars['String']['output']>;
  metaKeywords: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  parent: Maybe<SwellCategory>;
  parentId: Maybe<Scalars['ID']['output']>;
  products: Maybe<Array<Maybe<SwellProduct>>>;
  slug: Maybe<Scalars['String']['output']>;
  sort: Maybe<Scalars['Int']['output']>;
  sorting: Maybe<Scalars['String']['output']>;
  top: Maybe<SwellCategory>;
  topId: Maybe<Scalars['ID']['output']>;
};


export type SwellCategoryChildrenArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type SwellCategoryParentArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type SwellCategoryProductsArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};


export type SwellCategoryTopArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellCategoryContent = {
  __typename?: 'SwellCategoryContent';
  darkenHeroImage: Maybe<Scalars['Int']['output']>;
  paginationStyle: Maybe<Scalars['String']['output']>;
  productCols: Maybe<Scalars['Int']['output']>;
  productRows: Maybe<Scalars['Int']['output']>;
  showHeroImage: Maybe<Scalars['Boolean']['output']>;
  textColor: Maybe<Scalars['String']['output']>;
};

export type SwellCategoryImage = {
  __typename?: 'SwellCategoryImage';
  caption: Maybe<Scalars['String']['output']>;
  file: Maybe<SwellCategoryImageFile>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SwellCategoryImageFile = {
  __typename?: 'SwellCategoryImageFile';
  contentType: Maybe<Scalars['String']['output']>;
  data: Maybe<Scalars['JSON']['output']>;
  dateUploaded: Maybe<Scalars['DateTime']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  length: Maybe<Scalars['Int']['output']>;
  md5: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  private: Maybe<Scalars['Boolean']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type SwellContentAttributeGroup = {
  __typename?: 'SwellContentAttributeGroup';
  content: Maybe<SwellContentAttributeGroupContent>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['ID']['output']>;
};

export type SwellContentAttributeGroupContent = {
  __typename?: 'SwellContentAttributeGroupContent';
  attributes: Maybe<Array<Maybe<SwellContentAttributeGroupContentAttribute>>>;
};

export type SwellContentAttributeGroupContentAttribute = {
  __typename?: 'SwellContentAttributeGroupContentAttribute';
  attributeId: Maybe<SwellAttribute>;
  attributeIdId: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
};


export type SwellContentAttributeGroupContentAttributeAttributeIdArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellContentAttributeGroups = {
  __typename?: 'SwellContentAttributeGroups';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellContentAttributeGroup>>>;
};

export type SwellContentPage = {
  __typename?: 'SwellContentPage';
  content: Maybe<Scalars['String']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  datePublished: Maybe<Scalars['DateTime']['output']>;
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  metaDescription: Maybe<Scalars['String']['output']>;
  metaKeywords: Maybe<Scalars['String']['output']>;
  metaTitle: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['Boolean']['output']>;
  redirect: Maybe<Scalars['String']['output']>;
  sections: Maybe<Array<Maybe<SwellContentPageSections>>>;
  slug: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionCollectionPreview = {
  __typename?: 'SwellContentPageSectionCollectionPreview';
  category: Maybe<SwellCategory>;
  categoryId: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  productCols: Maybe<Scalars['Int']['output']>;
  productRows: Maybe<Scalars['Int']['output']>;
  productTextAlign: Maybe<Scalars['String']['output']>;
  showPrice: Maybe<Scalars['Boolean']['output']>;
  showTitle: Maybe<Scalars['Boolean']['output']>;
  title: Maybe<Scalars['String']['output']>;
  titleAlign: Maybe<Scalars['String']['output']>;
  titleSize: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};


export type SwellContentPageSectionCollectionPreviewCategoryArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellContentPageSectionCustomerReview = {
  __typename?: 'SwellContentPageSectionCustomerReview';
  heading: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  reviews: Maybe<Array<Maybe<SwellContentPageSectionCustomerReviewReview>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionCustomerReviewReview = {
  __typename?: 'SwellContentPageSectionCustomerReviewReview';
  id: Maybe<Scalars['ID']['output']>;
  location: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  quote: Maybe<Scalars['String']['output']>;
  score: Maybe<Scalars['Int']['output']>;
};

export type SwellContentPageSectionEmailSignup = {
  __typename?: 'SwellContentPageSectionEmailSignup';
  alignX: Maybe<Scalars['String']['output']>;
  bgColor: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  heading: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Scalars['JSON']['output']>;
  outerSpacingX: Maybe<Scalars['String']['output']>;
  outerSpacingY: Maybe<Scalars['String']['output']>;
  textAlign: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionFullWidthMedium = {
  __typename?: 'SwellContentPageSectionFullWidthMedium';
  alignX: Maybe<Scalars['String']['output']>;
  alignY: Maybe<Scalars['String']['output']>;
  bgColor: Maybe<Scalars['String']['output']>;
  darkenBg: Maybe<Scalars['Int']['output']>;
  description: Maybe<Scalars['String']['output']>;
  heading: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Scalars['JSON']['output']>;
  innerSpacing: Maybe<Scalars['String']['output']>;
  links: Maybe<Array<Maybe<SwellContentPageSectionFullWidthMediumLink>>>;
  outerSpacingX: Maybe<Scalars['String']['output']>;
  outerSpacingY: Maybe<Scalars['String']['output']>;
  textColor: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionFullWidthMediumLink = {
  __typename?: 'SwellContentPageSectionFullWidthMediumLink';
  id: Maybe<Scalars['ID']['output']>;
  label: Maybe<Scalars['String']['output']>;
  style: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionHeadingWithText = {
  __typename?: 'SwellContentPageSectionHeadingWithText';
  bgColor: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  heading: Maybe<Scalars['String']['output']>;
  headingPosition: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  label: Maybe<Scalars['String']['output']>;
  textColumnWidth: Maybe<Scalars['String']['output']>;
  textColumns: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionLargeMedium = {
  __typename?: 'SwellContentPageSectionLargeMedium';
  bgColor: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  heading: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Scalars['JSON']['output']>;
  type: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionMultiFeature = {
  __typename?: 'SwellContentPageSectionMultiFeature';
  columnWidth: Maybe<Scalars['String']['output']>;
  features: Maybe<Array<Maybe<SwellContentPageSectionMultiFeatureFeature>>>;
  heading: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionMultiFeatureFeature = {
  __typename?: 'SwellContentPageSectionMultiFeatureFeature';
  icon: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  label: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionMultiPanel = {
  __typename?: 'SwellContentPageSectionMultiPanel';
  bgColor: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  panels: Maybe<Array<Maybe<SwellContentPageSectionMultiPanelPanels>>>;
  textAlign: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionMultiPanelPanelImage = {
  __typename?: 'SwellContentPageSectionMultiPanelPanelImage';
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Scalars['JSON']['output']>;
  imageAlt: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionMultiPanelPanelText = {
  __typename?: 'SwellContentPageSectionMultiPanelPanelText';
  description: Maybe<Scalars['String']['output']>;
  heading: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  links: Maybe<Array<Maybe<SwellContentPageSectionMultiPanelPanelTextLink>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionMultiPanelPanelTextLink = {
  __typename?: 'SwellContentPageSectionMultiPanelPanelTextLink';
  id: Maybe<Scalars['ID']['output']>;
  label: Maybe<Scalars['String']['output']>;
  style: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionMultiPanelPanels = SwellContentPageSectionMultiPanelPanelImage | SwellContentPageSectionMultiPanelPanelText;

export type SwellContentPageSectionPressMention = {
  __typename?: 'SwellContentPageSectionPressMention';
  id: Maybe<Scalars['ID']['output']>;
  mentions: Maybe<Array<Maybe<SwellContentPageSectionPressMentionMention>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSectionPressMentionMention = {
  __typename?: 'SwellContentPageSectionPressMentionMention';
  id: Maybe<Scalars['ID']['output']>;
  logo: Maybe<Scalars['JSON']['output']>;
  logoScale: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
  quote: Maybe<Scalars['String']['output']>;
};

export type SwellContentPageSections = SwellContentPageSectionCollectionPreview | SwellContentPageSectionCustomerReview | SwellContentPageSectionEmailSignup | SwellContentPageSectionFullWidthMedium | SwellContentPageSectionHeadingWithText | SwellContentPageSectionLargeMedium | SwellContentPageSectionMultiFeature | SwellContentPageSectionMultiPanel | SwellContentPageSectionPressMention;

export type SwellContentPages = {
  __typename?: 'SwellContentPages';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellContentPage>>>;
};

export type SwellOrder = {
  __typename?: 'SwellOrder';
  accountCreditAmount: Maybe<Scalars['SafeNumber']['output']>;
  accountCreditApplied: Maybe<Scalars['Boolean']['output']>;
  accountId: Maybe<Scalars['ID']['output']>;
  accountInfoSaved: Maybe<Scalars['Boolean']['output']>;
  accountLoggedIn: Maybe<Scalars['Boolean']['output']>;
  billing: Maybe<SwellOrderBilling>;
  canceled: Maybe<Scalars['Boolean']['output']>;
  comments: Maybe<Scalars['String']['output']>;
  coupon: Maybe<SwellOrderCoupon>;
  couponCode: Maybe<Scalars['String']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  currencyBase: Maybe<Scalars['String']['output']>;
  currencyRate: Maybe<Scalars['SafeNumber']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  delivered: Maybe<Scalars['Boolean']['output']>;
  discountTotal: Maybe<Scalars['SafeNumber']['output']>;
  discounts: Maybe<Array<Maybe<SwellOrderDiscount>>>;
  gift: Maybe<Scalars['Boolean']['output']>;
  giftMessage: Maybe<Scalars['String']['output']>;
  giftcardDelivery: Maybe<Scalars['Boolean']['output']>;
  giftcardTotal: Maybe<Scalars['SafeNumber']['output']>;
  giftcards: Maybe<Array<Maybe<SwellOrderGiftcard>>>;
  grandTotal: Maybe<Scalars['SafeNumber']['output']>;
  guest: Maybe<Scalars['Boolean']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  itemDiscount: Maybe<Scalars['SafeNumber']['output']>;
  itemQuantity: Maybe<Scalars['Int']['output']>;
  itemQuantityCancelable: Maybe<Scalars['Int']['output']>;
  itemQuantityCanceled: Maybe<Scalars['Int']['output']>;
  itemQuantityCreditable: Maybe<Scalars['Int']['output']>;
  itemQuantityCredited: Maybe<Scalars['Int']['output']>;
  itemQuantityDeliverable: Maybe<Scalars['Int']['output']>;
  itemQuantityDelivered: Maybe<Scalars['Int']['output']>;
  itemQuantityGiftcardDeliverable: Maybe<Scalars['Int']['output']>;
  itemQuantityInvoiceable: Maybe<Scalars['Int']['output']>;
  itemQuantityInvoiced: Maybe<Scalars['Int']['output']>;
  itemQuantityReturnable: Maybe<Scalars['Int']['output']>;
  itemQuantityReturned: Maybe<Scalars['Int']['output']>;
  itemQuantityShipmentDeliverable: Maybe<Scalars['Int']['output']>;
  itemQuantitySubscriptionDeliverable: Maybe<Scalars['Int']['output']>;
  itemShipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  itemTax: Maybe<Scalars['SafeNumber']['output']>;
  itemTaxIncluded: Maybe<Scalars['Boolean']['output']>;
  items: Maybe<Array<Maybe<SwellOrderItem>>>;
  metadata: Maybe<Scalars['JSON']['output']>;
  number: Maybe<Scalars['String']['output']>;
  paid: Maybe<Scalars['Boolean']['output']>;
  payments: Maybe<SwellOrdersPayments>;
  promotionIds: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  promotions: Maybe<SwellOrdersPromotions>;
  refunds: Maybe<SwellOrdersRefunds>;
  shipmentDelivery: Maybe<Scalars['Boolean']['output']>;
  shipmentDiscount: Maybe<Scalars['SafeNumber']['output']>;
  shipmentPrice: Maybe<Scalars['SafeNumber']['output']>;
  shipmentRating: Maybe<SwellOrderShipmentRating>;
  shipmentTax: Maybe<Scalars['SafeNumber']['output']>;
  shipmentTaxIncluded: Maybe<Scalars['Boolean']['output']>;
  shipmentTaxIncludedTotal: Maybe<Scalars['SafeNumber']['output']>;
  shipmentTotal: Maybe<Scalars['SafeNumber']['output']>;
  shipmentTotalCredited: Maybe<Scalars['SafeNumber']['output']>;
  shipmentTotalInvoiced: Maybe<Scalars['SafeNumber']['output']>;
  shipments: Maybe<SwellOrdersShipments>;
  shipping: Maybe<SwellOrderShipping>;
  status: Maybe<Scalars['String']['output']>;
  subTotal: Maybe<Scalars['SafeNumber']['output']>;
  subscriptionDelivery: Maybe<Scalars['Boolean']['output']>;
  taxIncludedTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxes: Maybe<Array<Maybe<SwellOrderTax>>>;
  taxesFixed: Maybe<Scalars['Boolean']['output']>;
};

export type SwellOrderBilling = {
  __typename?: 'SwellOrderBilling';
  accountCardId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  affirm: Maybe<SwellOrderBillingAffirm>;
  amazon: Maybe<SwellOrderBillingAmazon>;
  apple: Maybe<SwellOrderBillingApple>;
  bancontact: Maybe<SwellOrderBillingBancontact>;
  card: Maybe<SwellOrderBillingCard>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['Boolean']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  google: Maybe<SwellOrderBillingGoogle>;
  ideal: Maybe<SwellOrderBillingIdeal>;
  instructions: Maybe<Scalars['String']['output']>;
  intent: Maybe<Scalars['JSON']['output']>;
  klarna: Maybe<SwellOrderBillingKlarna>;
  lastName: Maybe<Scalars['String']['output']>;
  method: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  paypal: Maybe<SwellOrderBillingPaypal>;
  phone: Maybe<Scalars['String']['output']>;
  resolve: Maybe<SwellOrderBillingResolve>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingAffirm = {
  __typename?: 'SwellOrderBillingAffirm';
  checkoutToken: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingAmazon = {
  __typename?: 'SwellOrderBillingAmazon';
  accessToken: Maybe<Scalars['String']['output']>;
  checkoutSessionId: Maybe<Scalars['String']['output']>;
  orderReferenceId: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingApple = {
  __typename?: 'SwellOrderBillingApple';
  gateway: Maybe<Scalars['String']['output']>;
  nonce: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingBancontact = {
  __typename?: 'SwellOrderBillingBancontact';
  source: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingCard = {
  __typename?: 'SwellOrderBillingCard';
  addressCheck: Maybe<Scalars['String']['output']>;
  brand: Maybe<Scalars['String']['output']>;
  cvcCheck: Maybe<Scalars['String']['output']>;
  expMonth: Maybe<Scalars['Int']['output']>;
  expYear: Maybe<Scalars['Int']['output']>;
  gateway: Maybe<Scalars['String']['output']>;
  last4: Maybe<Scalars['String']['output']>;
  test: Maybe<Scalars['Boolean']['output']>;
  token: Maybe<Scalars['String']['output']>;
  zipCheck: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingGoogle = {
  __typename?: 'SwellOrderBillingGoogle';
  gateway: Maybe<Scalars['String']['output']>;
  nonce: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingIdeal = {
  __typename?: 'SwellOrderBillingIdeal';
  token: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingKlarna = {
  __typename?: 'SwellOrderBillingKlarna';
  source: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingPaypal = {
  __typename?: 'SwellOrderBillingPaypal';
  authorizationId: Maybe<Scalars['String']['output']>;
  nonce: Maybe<Scalars['String']['output']>;
  orderId: Maybe<Scalars['String']['output']>;
  payerId: Maybe<Scalars['String']['output']>;
  paymentId: Maybe<Scalars['String']['output']>;
};

export type SwellOrderBillingResolve = {
  __typename?: 'SwellOrderBillingResolve';
  chargeId: Maybe<Scalars['String']['output']>;
};

export type SwellOrderCoupon = {
  __typename?: 'SwellOrderCoupon';
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SwellOrderDiscount = {
  __typename?: 'SwellOrderDiscount';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
  rule: Maybe<Scalars['JSON']['output']>;
  sourceId: Maybe<Scalars['ID']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellOrderGiftcard = {
  __typename?: 'SwellOrderGiftcard';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  code: Maybe<Scalars['String']['output']>;
  codeFormatted: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  last4: Maybe<Scalars['String']['output']>;
};

export type SwellOrderItem = {
  __typename?: 'SwellOrderItem';
  bundleItems: Maybe<Array<Maybe<SwellOrderItemBundleItem>>>;
  discountEach: Maybe<Scalars['SafeNumber']['output']>;
  discountTotal: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  options: Maybe<Array<Maybe<SwellOrderItemOption>>>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  priceTotal: Maybe<Scalars['SafeNumber']['output']>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  purchaseOption: Maybe<SwellOrderItemPurchaseOption>;
  quantity: Maybe<Scalars['Int']['output']>;
  quantityCancelable: Maybe<Scalars['Int']['output']>;
  quantityCanceled: Maybe<Scalars['Int']['output']>;
  quantityConsumed: Maybe<Scalars['Int']['output']>;
  quantityCreditable: Maybe<Scalars['Int']['output']>;
  quantityCredited: Maybe<Scalars['Int']['output']>;
  quantityDeliverable: Maybe<Scalars['Int']['output']>;
  quantityDelivered: Maybe<Scalars['Int']['output']>;
  quantityGiftcardDeliverable: Maybe<Scalars['Int']['output']>;
  quantityInvoiceable: Maybe<Scalars['Int']['output']>;
  quantityInvoiced: Maybe<Scalars['Int']['output']>;
  quantityRestocked: Maybe<Scalars['Int']['output']>;
  quantityReturnable: Maybe<Scalars['Int']['output']>;
  quantityReturned: Maybe<Scalars['Int']['output']>;
  quantityShipmentDeliverable: Maybe<Scalars['Int']['output']>;
  quantitySubscriptionDeliverable: Maybe<Scalars['Int']['output']>;
  quantitySubscriptionDelivered: Maybe<Scalars['Int']['output']>;
  quantityTotal: Maybe<Scalars['Int']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  taxEach: Maybe<Scalars['SafeNumber']['output']>;
  taxTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxes: Maybe<Array<Maybe<SwellOrderItemTax>>>;
  variant: Maybe<SwellProductVariant>;
  variantId: Maybe<Scalars['ID']['output']>;
};

export type SwellOrderItemBundleItem = {
  __typename?: 'SwellOrderItemBundleItem';
  id: Maybe<Scalars['ID']['output']>;
  options: Maybe<Array<Maybe<SwellOrderItemBundleItemOption>>>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  quantityCancelable: Maybe<Scalars['Int']['output']>;
  quantityCanceled: Maybe<Scalars['Int']['output']>;
  quantityConsumed: Maybe<Scalars['Int']['output']>;
  quantityDeliverable: Maybe<Scalars['Int']['output']>;
  quantityDelivered: Maybe<Scalars['Int']['output']>;
  quantityGiftcardDeliverable: Maybe<Scalars['Int']['output']>;
  quantityRestocked: Maybe<Scalars['Int']['output']>;
  quantityReturnable: Maybe<Scalars['Int']['output']>;
  quantityReturned: Maybe<Scalars['Int']['output']>;
  quantityShipmentDeliverable: Maybe<Scalars['Int']['output']>;
  quantityShipmentDelivered: Maybe<Scalars['Int']['output']>;
  quantityTotal: Maybe<Scalars['Int']['output']>;
  variant: Maybe<SwellProductVariant>;
  variantId: Maybe<Scalars['ID']['output']>;
};

export type SwellOrderItemBundleItemOption = {
  __typename?: 'SwellOrderItemBundleItemOption';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  subscription: Maybe<Scalars['Boolean']['output']>;
  value: Maybe<Scalars['String']['output']>;
  valueId: Maybe<Scalars['ID']['output']>;
  variant: Maybe<Scalars['Boolean']['output']>;
};

export type SwellOrderItemOption = {
  __typename?: 'SwellOrderItemOption';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  subscription: Maybe<Scalars['Boolean']['output']>;
  value: Maybe<Scalars['String']['output']>;
  valueId: Maybe<Scalars['ID']['output']>;
  variant: Maybe<Scalars['Boolean']['output']>;
};

export type SwellOrderItemPurchaseOption = {
  __typename?: 'SwellOrderItemPurchaseOption';
  billingSchedule: Maybe<SwellOrderItemPurchaseOptionBillingSchedule>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  orderSchedule: Maybe<SwellOrderItemPurchaseOptionOrderSchedule>;
  planDescription: Maybe<Scalars['String']['output']>;
  planId: Maybe<Scalars['ID']['output']>;
  planName: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellOrderItemPurchaseOptionBillingSchedule = {
  __typename?: 'SwellOrderItemPurchaseOptionBillingSchedule';
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  trialDays: Maybe<Scalars['Int']['output']>;
};

export type SwellOrderItemPurchaseOptionOrderSchedule = {
  __typename?: 'SwellOrderItemPurchaseOptionOrderSchedule';
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
};

export type SwellOrderItemTax = {
  __typename?: 'SwellOrderItemTax';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
};

export type SwellOrderPayment = {
  __typename?: 'SwellOrderPayment';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  amountRefundable: Maybe<Scalars['SafeNumber']['output']>;
  amountRefunded: Maybe<Scalars['SafeNumber']['output']>;
  authorized: Maybe<Scalars['Boolean']['output']>;
  captured: Maybe<Scalars['Boolean']['output']>;
  card: Maybe<SwellOrderPaymentCard>;
  currency: Maybe<Scalars['String']['output']>;
  currencyRate: Maybe<Scalars['SafeNumber']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  gateway: Maybe<Scalars['String']['output']>;
  method: Maybe<Scalars['String']['output']>;
  number: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  success: Maybe<Scalars['Boolean']['output']>;
};

export type SwellOrderPaymentCard = {
  __typename?: 'SwellOrderPaymentCard';
  addressCheck: Maybe<Scalars['String']['output']>;
  brand: Maybe<Scalars['String']['output']>;
  cvcCheck: Maybe<Scalars['String']['output']>;
  expMonth: Maybe<Scalars['Int']['output']>;
  expYear: Maybe<Scalars['Int']['output']>;
  last4: Maybe<Scalars['String']['output']>;
  test: Maybe<Scalars['Boolean']['output']>;
  token: Maybe<Scalars['String']['output']>;
  zipCheck: Maybe<Scalars['String']['output']>;
};

export type SwellOrderPromotion = {
  __typename?: 'SwellOrderPromotion';
  dateEnd: Maybe<Scalars['DateTime']['output']>;
  dateStart: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SwellOrderRefund = {
  __typename?: 'SwellOrderRefund';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  currencyRate: Maybe<Scalars['SafeNumber']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  method: Maybe<Scalars['String']['output']>;
  number: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  success: Maybe<Scalars['Boolean']['output']>;
};

export type SwellOrderShipment = {
  __typename?: 'SwellOrderShipment';
  canceled: Maybe<Scalars['Boolean']['output']>;
  carrier: Maybe<Scalars['String']['output']>;
  carrierName: Maybe<Scalars['String']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  dateEstimated: Maybe<Scalars['DateTime']['output']>;
  destination: Maybe<SwellOrderShipmentDestination>;
  items: Maybe<Array<Maybe<SwellOrderShipmentItem>>>;
  number: Maybe<Scalars['String']['output']>;
  origin: Maybe<SwellOrderShipmentOrigin>;
  service: Maybe<Scalars['String']['output']>;
  serviceName: Maybe<Scalars['String']['output']>;
  trackingCode: Maybe<Scalars['String']['output']>;
};

export type SwellOrderShipmentDestination = {
  __typename?: 'SwellOrderShipmentDestination';
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellOrderShipmentItem = {
  __typename?: 'SwellOrderShipmentItem';
  bundleItemId: Maybe<Scalars['ID']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  options: Maybe<Array<Maybe<SwellOrderShipmentItemOption>>>;
  orderItemId: Maybe<Scalars['ID']['output']>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  variantId: Maybe<Scalars['ID']['output']>;
};


export type SwellOrderShipmentItemProductArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellOrderShipmentItemOption = {
  __typename?: 'SwellOrderShipmentItemOption';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type SwellOrderShipmentOrigin = {
  __typename?: 'SwellOrderShipmentOrigin';
  location: Maybe<Scalars['String']['output']>;
};

export type SwellOrderShipmentRating = {
  __typename?: 'SwellOrderShipmentRating';
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  errors: Maybe<Array<Maybe<SwellOrderShipmentRatingError>>>;
  fingerprint: Maybe<Scalars['String']['output']>;
  services: Maybe<Array<Maybe<SwellOrderShipmentRatingService>>>;
};

export type SwellOrderShipmentRatingError = {
  __typename?: 'SwellOrderShipmentRatingError';
  code: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
};

export type SwellOrderShipmentRatingService = {
  __typename?: 'SwellOrderShipmentRatingService';
  carrier: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  pickup: Maybe<Scalars['Boolean']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  taxCode: Maybe<Scalars['String']['output']>;
};

export type SwellOrderShipping = {
  __typename?: 'SwellOrderShipping';
  accountAddressId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['Boolean']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  pickup: Maybe<Scalars['Boolean']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  service: Maybe<Scalars['String']['output']>;
  serviceName: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellOrderTax = {
  __typename?: 'SwellOrderTax';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  priority: Maybe<Scalars['Int']['output']>;
  rate: Maybe<Scalars['SafeNumber']['output']>;
  shipping: Maybe<Scalars['Boolean']['output']>;
};

export type SwellOrders = {
  __typename?: 'SwellOrders';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellOrder>>>;
};

export type SwellOrdersPayments = {
  __typename?: 'SwellOrdersPayments';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellOrderPayment>>>;
};

export type SwellOrdersPromotions = {
  __typename?: 'SwellOrdersPromotions';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellOrderPromotion>>>;
};

export type SwellOrdersRefunds = {
  __typename?: 'SwellOrdersRefunds';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellOrderRefund>>>;
};

export type SwellOrdersShipments = {
  __typename?: 'SwellOrdersShipments';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellOrderShipment>>>;
};

export type SwellProduct = {
  __typename?: 'SwellProduct';
  attributes: Maybe<Scalars['JSON']['output']>;
  bundle: Maybe<Scalars['Boolean']['output']>;
  bundleItems: Maybe<Array<Maybe<SwellProductBundleItem>>>;
  categories: Maybe<Array<Maybe<SwellCategory>>>;
  content: Maybe<SwellProductContent>;
  crossSells: Maybe<Array<Maybe<SwellProductCrossSell>>>;
  currency: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  images: Maybe<Array<Maybe<SwellProductImage>>>;
  metaDescription: Maybe<Scalars['String']['output']>;
  metaTitle: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  options: Maybe<Array<Maybe<SwellProductOption>>>;
  origPrice: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  prices: Maybe<Array<Maybe<SwellProductPrice>>>;
  purchaseOptions: Maybe<SwellProductPurchaseOptions>;
  sale: Maybe<Scalars['Boolean']['output']>;
  salePrice: Maybe<Scalars['SafeNumber']['output']>;
  sku: Maybe<Scalars['String']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  stockLevel: Maybe<Scalars['Int']['output']>;
  stockPurchasable: Maybe<Scalars['Boolean']['output']>;
  stockStatus: Maybe<Scalars['String']['output']>;
  stockTracking: Maybe<Scalars['Boolean']['output']>;
  tags: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  upSells: Maybe<Array<Maybe<SwellProductUpSell>>>;
  variants: Maybe<SwellProductsVariants>;
};


export type SwellProductCategoriesArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellProductBundleItem = {
  __typename?: 'SwellProductBundleItem';
  id: Maybe<Scalars['ID']['output']>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  productName: Maybe<Scalars['String']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  variant: Maybe<SwellProductVariant>;
  variantId: Maybe<Scalars['ID']['output']>;
};


export type SwellProductBundleItemProductArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellProductContent = {
  __typename?: 'SwellProductContent';
  productType: Maybe<Scalars['String']['output']>;
  sampleText: Maybe<Scalars['String']['output']>;
};

export type SwellProductCrossSell = {
  __typename?: 'SwellProductCrossSell';
  discountAmount: Maybe<Scalars['SafeNumber']['output']>;
  discountPercent: Maybe<Scalars['SafeNumber']['output']>;
  discountType: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
};


export type SwellProductCrossSellProductArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellProductImage = {
  __typename?: 'SwellProductImage';
  caption: Maybe<Scalars['String']['output']>;
  file: Maybe<SwellProductImageFile>;
  id: Maybe<Scalars['ID']['output']>;
};

export type SwellProductImageFile = {
  __typename?: 'SwellProductImageFile';
  height: Maybe<Scalars['Int']['output']>;
  md5: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type SwellProductOption = {
  __typename?: 'SwellProductOption';
  active: Maybe<Scalars['Boolean']['output']>;
  attributeId: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  inputHint: Maybe<Scalars['String']['output']>;
  inputMulti: Maybe<Scalars['Boolean']['output']>;
  inputType: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  parentId: Maybe<Scalars['ID']['output']>;
  parentValueIds: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  required: Maybe<Scalars['Boolean']['output']>;
  subscription: Maybe<Scalars['Boolean']['output']>;
  values: Maybe<Array<Maybe<SwellProductOptionValue>>>;
  variant: Maybe<Scalars['Boolean']['output']>;
};

export type SwellProductOptionValue = {
  __typename?: 'SwellProductOptionValue';
  color: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<SwellProductOptionValueImage>;
  images: Maybe<Array<Maybe<SwellProductOptionValueImage>>>;
  name: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  subscriptionInterval: Maybe<Scalars['String']['output']>;
  subscriptionIntervalCount: Maybe<Scalars['Int']['output']>;
  subscriptionTrialDays: Maybe<Scalars['Int']['output']>;
};

export type SwellProductOptionValueImage = {
  __typename?: 'SwellProductOptionValueImage';
  caption: Maybe<Scalars['String']['output']>;
  contentType: Maybe<Scalars['String']['output']>;
  data: Maybe<Scalars['JSON']['output']>;
  dateUploaded: Maybe<Scalars['DateTime']['output']>;
  file: Maybe<SwellProductOptionValueImageFile>;
  filename: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  length: Maybe<Scalars['Int']['output']>;
  md5: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  private: Maybe<Scalars['Boolean']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type SwellProductOptionValueImageFile = {
  __typename?: 'SwellProductOptionValueImageFile';
  contentType: Maybe<Scalars['String']['output']>;
  data: Maybe<Scalars['JSON']['output']>;
  dateUploaded: Maybe<Scalars['DateTime']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  length: Maybe<Scalars['Int']['output']>;
  md5: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  private: Maybe<Scalars['Boolean']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type SwellProductPrice = {
  __typename?: 'SwellProductPrice';
  accountGroup: Maybe<Scalars['String']['output']>;
  discountPercent: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  quantityMax: Maybe<Scalars['Int']['output']>;
  quantityMin: Maybe<Scalars['Int']['output']>;
};

export type SwellProductPurchaseOptions = {
  __typename?: 'SwellProductPurchaseOptions';
  standard: Maybe<SwellProductPurchaseOptionsStandard>;
  subscription: Maybe<SwellProductPurchaseOptionsSubscription>;
  trial: Maybe<SwellProductPurchaseOptionsTrial>;
};

export type SwellProductPurchaseOptionsStandard = {
  __typename?: 'SwellProductPurchaseOptionsStandard';
  accountGroups: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  active: Maybe<Scalars['Boolean']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  origPrice: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  prices: Maybe<Array<Maybe<SwellProductPurchaseOptionsStandardPrice>>>;
  sale: Maybe<Scalars['Boolean']['output']>;
  salePrice: Maybe<Scalars['SafeNumber']['output']>;
};

export type SwellProductPurchaseOptionsStandardPrice = {
  __typename?: 'SwellProductPurchaseOptionsStandardPrice';
  accountGroup: Maybe<Scalars['String']['output']>;
  discountPercent: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  quantityMax: Maybe<Scalars['Int']['output']>;
  quantityMin: Maybe<Scalars['Int']['output']>;
};

export type SwellProductPurchaseOptionsSubscription = {
  __typename?: 'SwellProductPurchaseOptionsSubscription';
  accountGroups: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  active: Maybe<Scalars['Boolean']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  plans: Maybe<Array<Maybe<SwellProductPurchaseOptionsSubscriptionPlan>>>;
};

export type SwellProductPurchaseOptionsSubscriptionPlan = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlan';
  active: Maybe<Scalars['Boolean']['output']>;
  billingSchedule: Maybe<SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  orderSchedule: Maybe<SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule>;
  price: Maybe<Scalars['SafeNumber']['output']>;
};

export type SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanBillingSchedule';
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  trialDays: Maybe<Scalars['Int']['output']>;
};

export type SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule = {
  __typename?: 'SwellProductPurchaseOptionsSubscriptionPlanOrderSchedule';
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
};

export type SwellProductPurchaseOptionsTrial = {
  __typename?: 'SwellProductPurchaseOptionsTrial';
  active: Maybe<Scalars['Boolean']['output']>;
  authAmount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  prices: Maybe<Array<Maybe<SwellProductPurchaseOptionsTrialPrice>>>;
  trialDays: Maybe<Scalars['Int']['output']>;
};

export type SwellProductPurchaseOptionsTrialPrice = {
  __typename?: 'SwellProductPurchaseOptionsTrialPrice';
  accountGroup: Maybe<Scalars['String']['output']>;
  authAmount: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  trialDays: Maybe<Scalars['Int']['output']>;
};

export type SwellProductUpSell = {
  __typename?: 'SwellProductUpSell';
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
};


export type SwellProductUpSellProductArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellProductVariant = {
  __typename?: 'SwellProductVariant';
  attributes: Maybe<Scalars['JSON']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  images: Maybe<Array<Maybe<SwellProductVariantImage>>>;
  name: Maybe<Scalars['String']['output']>;
  optionValueIds: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  origPrice: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  prices: Maybe<Array<Maybe<SwellProductVariantPrice>>>;
  purchaseOptions: Maybe<SwellProductVariantPurchaseOptions>;
  sku: Maybe<Scalars['String']['output']>;
  stockLevel: Maybe<Scalars['Int']['output']>;
};

export type SwellProductVariantImage = {
  __typename?: 'SwellProductVariantImage';
  caption: Maybe<Scalars['String']['output']>;
  file: Maybe<SwellProductVariantImageFile>;
  id: Maybe<Scalars['ID']['output']>;
};

export type SwellProductVariantImageFile = {
  __typename?: 'SwellProductVariantImageFile';
  height: Maybe<Scalars['Int']['output']>;
  md5: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type SwellProductVariantPrice = {
  __typename?: 'SwellProductVariantPrice';
  accountGroup: Maybe<Scalars['String']['output']>;
  discountPercent: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  quantityMax: Maybe<Scalars['Int']['output']>;
  quantityMin: Maybe<Scalars['Int']['output']>;
};

export type SwellProductVariantPurchaseOptions = {
  __typename?: 'SwellProductVariantPurchaseOptions';
  standard: Maybe<SwellProductVariantPurchaseOptionsStandard>;
};

export type SwellProductVariantPurchaseOptionsStandard = {
  __typename?: 'SwellProductVariantPurchaseOptionsStandard';
  origPrice: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  prices: Maybe<Array<Maybe<SwellProductVariantPurchaseOptionsStandardPrice>>>;
  sale: Maybe<Scalars['Boolean']['output']>;
  salePrice: Maybe<Scalars['SafeNumber']['output']>;
};

export type SwellProductVariantPurchaseOptionsStandardPrice = {
  __typename?: 'SwellProductVariantPurchaseOptionsStandardPrice';
  accountGroup: Maybe<Scalars['String']['output']>;
  discountPercent: Maybe<Scalars['SafeNumber']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  quantityMax: Maybe<Scalars['Int']['output']>;
  quantityMin: Maybe<Scalars['Int']['output']>;
};

export type SwellProducts = {
  __typename?: 'SwellProducts';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellProduct>>>;
};

export type SwellProductsVariants = {
  __typename?: 'SwellProductsVariants';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellProductVariant>>>;
};

export type SwellSettings = {
  __typename?: 'SwellSettings';
  store: Maybe<SwellSettingsStore>;
  values: Maybe<Scalars['JSON']['output']>;
};

export type SwellSettingsMenus = {
  __typename?: 'SwellSettingsMenus';
  sections: Maybe<Array<Maybe<SwellSettingsMenusSection>>>;
};

export type SwellSettingsMenusSection = {
  __typename?: 'SwellSettingsMenusSection';
  id: Maybe<Scalars['String']['output']>;
  items: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  name: Maybe<Scalars['String']['output']>;
  themeId: Maybe<Scalars['String']['output']>;
  themeMenuId: Maybe<Scalars['String']['output']>;
};

export type SwellSettingsPayments = {
  __typename?: 'SwellSettingsPayments';
  methods: Maybe<Scalars['JSON']['output']>;
};

export type SwellSettingsStore = {
  __typename?: 'SwellSettingsStore';
  analyticsScripts: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  currencies: Maybe<Array<Maybe<SwellSettingsStoreCurrency>>>;
  currency: Maybe<Scalars['String']['output']>;
  facebookPixelId: Maybe<Scalars['String']['output']>;
  homePage: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<SwellSettingsStoreLocale>>>;
  name: Maybe<Scalars['String']['output']>;
  publicKey: Maybe<Scalars['String']['output']>;
  supportEmail: Maybe<Scalars['String']['output']>;
  supportPhone: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type SwellSettingsStoreCurrency = {
  __typename?: 'SwellSettingsStoreCurrency';
  code: Maybe<Scalars['String']['output']>;
  decimals: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
  priced: Maybe<Scalars['Boolean']['output']>;
  rate: Maybe<Scalars['SafeNumber']['output']>;
  symbol: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type SwellSettingsStoreLocale = {
  __typename?: 'SwellSettingsStoreLocale';
  code: Maybe<Scalars['String']['output']>;
  fallback: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SwellSettingsSubscriptions = {
  __typename?: 'SwellSettingsSubscriptions';
  features: Maybe<Scalars['JSON']['output']>;
  pauseNextSkipThreshold: Maybe<Scalars['Int']['output']>;
};

export type SwellSubscription = {
  __typename?: 'SwellSubscription';
  accountId: Maybe<Scalars['ID']['output']>;
  active: Maybe<Scalars['Boolean']['output']>;
  billing: Maybe<SwellSubscriptionBilling>;
  billingSchedule: Maybe<SwellSubscriptionBillingSchedule>;
  cancelAtEnd: Maybe<Scalars['Boolean']['output']>;
  canceled: Maybe<Scalars['Boolean']['output']>;
  couponCode: Maybe<Scalars['String']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  currencyRate: Maybe<Scalars['SafeNumber']['output']>;
  dateCanceled: Maybe<Scalars['DateTime']['output']>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  dateOrderPeriodEnd: Maybe<Scalars['DateTime']['output']>;
  datePauseEnd: Maybe<Scalars['DateTime']['output']>;
  datePaused: Maybe<Scalars['DateTime']['output']>;
  datePaymentRetry: Maybe<Scalars['DateTime']['output']>;
  datePeriodEnd: Maybe<Scalars['DateTime']['output']>;
  datePeriodStart: Maybe<Scalars['DateTime']['output']>;
  dateTrialEnd: Maybe<Scalars['DateTime']['output']>;
  dateTrialStart: Maybe<Scalars['DateTime']['output']>;
  dateUpdated: Maybe<Scalars['DateTime']['output']>;
  discountTotal: Maybe<Scalars['SafeNumber']['output']>;
  grandTotal: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  invoiceTotal: Maybe<Scalars['SafeNumber']['output']>;
  itemDiscount: Maybe<Scalars['SafeNumber']['output']>;
  itemTax: Maybe<Scalars['SafeNumber']['output']>;
  itemTotal: Maybe<Scalars['SafeNumber']['output']>;
  items: Maybe<Array<Maybe<SwellSubscriptionItem>>>;
  options: Maybe<Array<Maybe<SwellSubscriptionOption>>>;
  orderId: Maybe<Scalars['ID']['output']>;
  orderSchedule: Maybe<SwellSubscriptionOrderSchedule>;
  orders: Maybe<SwellOrders>;
  paid: Maybe<Scalars['Boolean']['output']>;
  paused: Maybe<Scalars['Boolean']['output']>;
  paymentBalance: Maybe<Scalars['SafeNumber']['output']>;
  paymentTotal: Maybe<Scalars['SafeNumber']['output']>;
  planId: Maybe<Scalars['ID']['output']>;
  planName: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  priceTotal: Maybe<Scalars['SafeNumber']['output']>;
  product: Maybe<SwellProduct>;
  productDiscountEach: Maybe<Scalars['SafeNumber']['output']>;
  productDiscountTotal: Maybe<Scalars['SafeNumber']['output']>;
  productId: Maybe<Scalars['ID']['output']>;
  productTaxEach: Maybe<Scalars['SafeNumber']['output']>;
  productTaxTotal: Maybe<Scalars['SafeNumber']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  recurringDiscountTotal: Maybe<Scalars['SafeNumber']['output']>;
  recurringItemDiscount: Maybe<Scalars['SafeNumber']['output']>;
  recurringItemTax: Maybe<Scalars['SafeNumber']['output']>;
  recurringItemTotal: Maybe<Scalars['SafeNumber']['output']>;
  recurringTaxIncludedTotal: Maybe<Scalars['SafeNumber']['output']>;
  recurringTaxTotal: Maybe<Scalars['SafeNumber']['output']>;
  recurringTotal: Maybe<Scalars['SafeNumber']['output']>;
  shipping: Maybe<SwellSubscriptionShipping>;
  status: Maybe<Scalars['String']['output']>;
  subTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxIncludedTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxes: Maybe<Array<Maybe<SwellSubscriptionTax>>>;
  taxesFixed: Maybe<Scalars['Boolean']['output']>;
  trial: Maybe<Scalars['Boolean']['output']>;
  trialDays: Maybe<Scalars['Int']['output']>;
  unpaid: Maybe<Scalars['Boolean']['output']>;
  variant: Maybe<SwellProductVariant>;
  variantId: Maybe<Scalars['ID']['output']>;
};


export type SwellSubscriptionOrdersArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Scalars['JSON']['input']>;
};

export type SwellSubscriptionBilling = {
  __typename?: 'SwellSubscriptionBilling';
  accountCardId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  card: Maybe<SwellSubscriptionBillingCard>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['Boolean']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  intent: Maybe<Scalars['JSON']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  method: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  useAccount: Maybe<Scalars['Boolean']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellSubscriptionBillingCard = {
  __typename?: 'SwellSubscriptionBillingCard';
  addressCheck: Maybe<Scalars['String']['output']>;
  brand: Maybe<Scalars['String']['output']>;
  cvcCheck: Maybe<Scalars['String']['output']>;
  expMonth: Maybe<Scalars['Int']['output']>;
  expYear: Maybe<Scalars['Int']['output']>;
  gateway: Maybe<Scalars['String']['output']>;
  last4: Maybe<Scalars['String']['output']>;
  test: Maybe<Scalars['Boolean']['output']>;
  token: Maybe<Scalars['String']['output']>;
  zipCheck: Maybe<Scalars['String']['output']>;
};

export type SwellSubscriptionBillingCardInput = {
  addressCheck: InputMaybe<Scalars['String']['input']>;
  brand: InputMaybe<Scalars['String']['input']>;
  cvcCheck: InputMaybe<Scalars['String']['input']>;
  expMonth: InputMaybe<Scalars['Int']['input']>;
  expYear: InputMaybe<Scalars['Int']['input']>;
  gateway: InputMaybe<Scalars['String']['input']>;
  last4: InputMaybe<Scalars['String']['input']>;
  test: InputMaybe<Scalars['Boolean']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
  zipCheck: InputMaybe<Scalars['String']['input']>;
};

export type SwellSubscriptionBillingInput = {
  accountCardId: InputMaybe<Scalars['ID']['input']>;
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  card: InputMaybe<SwellSubscriptionBillingCardInput>;
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  default: InputMaybe<Scalars['Boolean']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  intent: InputMaybe<Scalars['JSON']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  method: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  useAccount: InputMaybe<Scalars['Boolean']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellSubscriptionBillingSchedule = {
  __typename?: 'SwellSubscriptionBillingSchedule';
  dateLimitEnd: Maybe<Scalars['DateTime']['output']>;
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  limitCurrent: Maybe<Scalars['Int']['output']>;
  trialDays: Maybe<Scalars['Int']['output']>;
};

export type SwellSubscriptionBillingScheduleInput = {
  dateLimitEnd: InputMaybe<Scalars['DateTime']['input']>;
  interval: InputMaybe<Scalars['String']['input']>;
  intervalCount: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  limitCurrent: InputMaybe<Scalars['Int']['input']>;
  trialDays: InputMaybe<Scalars['Int']['input']>;
};

export type SwellSubscriptionInput = {
  billing: InputMaybe<SwellSubscriptionBillingInput>;
  billingSchedule: InputMaybe<SwellSubscriptionBillingScheduleInput>;
  cancelAtEnd: InputMaybe<Scalars['Boolean']['input']>;
  canceled: InputMaybe<Scalars['Boolean']['input']>;
  couponCode: InputMaybe<Scalars['String']['input']>;
  datePauseEnd: InputMaybe<Scalars['DateTime']['input']>;
  items: InputMaybe<Array<InputMaybe<SwellSubscriptionItemInput>>>;
  options: InputMaybe<Array<InputMaybe<SwellSubscriptionOptionInput>>>;
  paused: InputMaybe<Scalars['Boolean']['input']>;
  planId: InputMaybe<Scalars['ID']['input']>;
  productId: InputMaybe<Scalars['ID']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  shipping: InputMaybe<SwellSubscriptionShippingInput>;
  variantId: InputMaybe<Scalars['ID']['input']>;
};

export type SwellSubscriptionItem = {
  __typename?: 'SwellSubscriptionItem';
  bundleItems: Maybe<Array<Maybe<SwellSubscriptionItemBundleItem>>>;
  dateCreated: Maybe<Scalars['DateTime']['output']>;
  delivery: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  discountEach: Maybe<Scalars['SafeNumber']['output']>;
  discountTotal: Maybe<Scalars['SafeNumber']['output']>;
  discounts: Maybe<Array<Maybe<SwellSubscriptionItemDiscount>>>;
  id: Maybe<Scalars['ID']['output']>;
  options: Maybe<Array<Maybe<SwellSubscriptionItemOption>>>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  priceTotal: Maybe<Scalars['SafeNumber']['output']>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  proration: Maybe<Scalars['Boolean']['output']>;
  prorationProductId: Maybe<Scalars['ID']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  recurring: Maybe<Scalars['Boolean']['output']>;
  recurringDiscountEach: Maybe<Scalars['SafeNumber']['output']>;
  recurringDiscountTotal: Maybe<Scalars['SafeNumber']['output']>;
  recurringPrice: Maybe<Scalars['SafeNumber']['output']>;
  recurringPriceTotal: Maybe<Scalars['SafeNumber']['output']>;
  recurringTaxEach: Maybe<Scalars['SafeNumber']['output']>;
  recurringTaxTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxEach: Maybe<Scalars['SafeNumber']['output']>;
  taxTotal: Maybe<Scalars['SafeNumber']['output']>;
  taxes: Maybe<Array<Maybe<SwellSubscriptionItemTax>>>;
  variantId: Maybe<Scalars['ID']['output']>;
};


export type SwellSubscriptionItemProductArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellSubscriptionItemBundleItem = {
  __typename?: 'SwellSubscriptionItemBundleItem';
  amountRatio: Maybe<Scalars['SafeNumber']['output']>;
  discountEach: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  product: Maybe<SwellProduct>;
  productId: Maybe<Scalars['ID']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  quantityTotal: Maybe<Scalars['Int']['output']>;
  taxEach: Maybe<Scalars['SafeNumber']['output']>;
  variantId: Maybe<Scalars['ID']['output']>;
};


export type SwellSubscriptionItemBundleItemProductArgs = {
  _currency: InputMaybe<Scalars['String']['input']>;
  _locale: InputMaybe<Scalars['String']['input']>;
};

export type SwellSubscriptionItemDiscount = {
  __typename?: 'SwellSubscriptionItemDiscount';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
};

export type SwellSubscriptionItemInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  options: InputMaybe<Array<InputMaybe<SwellSubscriptionItemOptionInput>>>;
  productId: InputMaybe<Scalars['ID']['input']>;
  quantity: InputMaybe<Scalars['Int']['input']>;
  variantId: InputMaybe<Scalars['ID']['input']>;
};

export type SwellSubscriptionItemOption = {
  __typename?: 'SwellSubscriptionItemOption';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  value: Maybe<Scalars['String']['output']>;
  valueId: Maybe<Scalars['ID']['output']>;
  variant: Maybe<Scalars['Boolean']['output']>;
};

export type SwellSubscriptionItemOptionInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['SafeNumber']['input']>;
  shipmentWeight: InputMaybe<Scalars['SafeNumber']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
  valueId: InputMaybe<Scalars['ID']['input']>;
  variant: InputMaybe<Scalars['Boolean']['input']>;
};

export type SwellSubscriptionItemTax = {
  __typename?: 'SwellSubscriptionItemTax';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
};

export type SwellSubscriptionOption = {
  __typename?: 'SwellSubscriptionOption';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  shipmentWeight: Maybe<Scalars['SafeNumber']['output']>;
  value: Maybe<Scalars['String']['output']>;
  valueId: Maybe<Scalars['ID']['output']>;
  variant: Maybe<Scalars['Boolean']['output']>;
};

export type SwellSubscriptionOptionInput = {
  id: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['SafeNumber']['input']>;
  shipmentWeight: InputMaybe<Scalars['SafeNumber']['input']>;
  value: InputMaybe<Scalars['String']['input']>;
  valueId: InputMaybe<Scalars['ID']['input']>;
  variant: InputMaybe<Scalars['Boolean']['input']>;
};

export type SwellSubscriptionOrderSchedule = {
  __typename?: 'SwellSubscriptionOrderSchedule';
  dateLimitEnd: Maybe<Scalars['DateTime']['output']>;
  interval: Maybe<Scalars['String']['output']>;
  intervalCount: Maybe<Scalars['Int']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  limitCurrent: Maybe<Scalars['Int']['output']>;
};

export type SwellSubscriptionShipping = {
  __typename?: 'SwellSubscriptionShipping';
  accountAddressId: Maybe<Scalars['ID']['output']>;
  address1: Maybe<Scalars['String']['output']>;
  address2: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['Boolean']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  pickup: Maybe<Scalars['Boolean']['output']>;
  price: Maybe<Scalars['SafeNumber']['output']>;
  service: Maybe<Scalars['String']['output']>;
  serviceName: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
  useAccount: Maybe<Scalars['Boolean']['output']>;
  zip: Maybe<Scalars['String']['output']>;
};

export type SwellSubscriptionShippingInput = {
  accountAddressId: InputMaybe<Scalars['ID']['input']>;
  address1: InputMaybe<Scalars['String']['input']>;
  address2: InputMaybe<Scalars['String']['input']>;
  city: InputMaybe<Scalars['String']['input']>;
  country: InputMaybe<Scalars['String']['input']>;
  default: InputMaybe<Scalars['Boolean']['input']>;
  firstName: InputMaybe<Scalars['String']['input']>;
  lastName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  pickup: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['SafeNumber']['input']>;
  service: InputMaybe<Scalars['String']['input']>;
  serviceName: InputMaybe<Scalars['String']['input']>;
  state: InputMaybe<Scalars['String']['input']>;
  useAccount: InputMaybe<Scalars['Boolean']['input']>;
  zip: InputMaybe<Scalars['String']['input']>;
};

export type SwellSubscriptionTax = {
  __typename?: 'SwellSubscriptionTax';
  amount: Maybe<Scalars['SafeNumber']['output']>;
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  priority: Maybe<Scalars['Int']['output']>;
  rate: Maybe<Scalars['SafeNumber']['output']>;
};

export type SwellSubscriptions = {
  __typename?: 'SwellSubscriptions';
  count: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pageCount: Maybe<Scalars['Int']['output']>;
  pages: Maybe<Array<Maybe<Page>>>;
  results: Maybe<Array<Maybe<SwellSubscription>>>;
};

export type ProductFragment = (
  { __typename?: 'SwellProduct' }
  & Pick<SwellProduct, 'id' | 'currency' | 'slug' | 'stockPurchasable' | 'name' | 'description' | 'price' | 'metaTitle' | 'metaDescription' | 'tags'>
  & { options: Maybe<Array<Maybe<(
    { __typename?: 'SwellProductOption' }
    & Pick<SwellProductOption, 'name' | 'id' | 'description'>
    & { values: Maybe<Array<Maybe<(
      { __typename?: 'SwellProductOptionValue' }
      & Pick<SwellProductOptionValue, 'id' | 'name' | 'price'>
    )>>> }
  )>>>, variants: Maybe<(
    { __typename?: 'SwellProductsVariants' }
    & { results: Maybe<Array<Maybe<(
      { __typename?: 'SwellProductVariant' }
      & Pick<SwellProductVariant, 'id' | 'name' | 'sku' | 'optionValueIds' | 'stockLevel' | 'currency'>
      & { prices: Maybe<Array<Maybe<(
        { __typename?: 'SwellProductVariantPrice' }
        & Pick<SwellProductVariantPrice, 'price' | 'discountPercent'>
      )>>> }
    )>>> }
  )>, images: Maybe<Array<Maybe<(
    { __typename?: 'SwellProductImage' }
    & Pick<SwellProductImage, 'caption'>
    & { file: Maybe<(
      { __typename?: 'SwellProductImageFile' }
      & Pick<SwellProductImageFile, 'url' | 'width' | 'height'>
    )> }
  )>>> }
);

export type GetProductQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { productBySlug: Maybe<(
    { __typename?: 'SwellProduct' }
    & Pick<SwellProduct, 'id' | 'currency' | 'slug' | 'stockPurchasable' | 'name' | 'description' | 'price' | 'metaTitle' | 'metaDescription' | 'tags'>
    & { options: Maybe<Array<Maybe<(
      { __typename?: 'SwellProductOption' }
      & Pick<SwellProductOption, 'name' | 'id' | 'description'>
      & { values: Maybe<Array<Maybe<(
        { __typename?: 'SwellProductOptionValue' }
        & Pick<SwellProductOptionValue, 'id' | 'name' | 'price'>
      )>>> }
    )>>>, variants: Maybe<(
      { __typename?: 'SwellProductsVariants' }
      & { results: Maybe<Array<Maybe<(
        { __typename?: 'SwellProductVariant' }
        & Pick<SwellProductVariant, 'id' | 'name' | 'sku' | 'optionValueIds' | 'stockLevel' | 'currency'>
        & { prices: Maybe<Array<Maybe<(
          { __typename?: 'SwellProductVariantPrice' }
          & Pick<SwellProductVariantPrice, 'price' | 'discountPercent'>
        )>>> }
      )>>> }
    )>, images: Maybe<Array<Maybe<(
      { __typename?: 'SwellProductImage' }
      & Pick<SwellProductImage, 'caption'>
      & { file: Maybe<(
        { __typename?: 'SwellProductImageFile' }
        & Pick<SwellProductImageFile, 'url' | 'width' | 'height'>
      )> }
    )>>> }
  )> }
);

export type GetProductsQueryVariables = Exact<{
  sort: InputMaybe<Scalars['String']['input']>;
  query: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products: Maybe<(
    { __typename?: 'SwellProducts' }
    & { results: Maybe<Array<Maybe<(
      { __typename?: 'SwellProduct' }
      & Pick<SwellProduct, 'id' | 'currency' | 'slug' | 'stockPurchasable' | 'name' | 'description' | 'price' | 'metaTitle' | 'metaDescription' | 'tags'>
      & { options: Maybe<Array<Maybe<(
        { __typename?: 'SwellProductOption' }
        & Pick<SwellProductOption, 'name' | 'id' | 'description'>
        & { values: Maybe<Array<Maybe<(
          { __typename?: 'SwellProductOptionValue' }
          & Pick<SwellProductOptionValue, 'id' | 'name' | 'price'>
        )>>> }
      )>>>, variants: Maybe<(
        { __typename?: 'SwellProductsVariants' }
        & { results: Maybe<Array<Maybe<(
          { __typename?: 'SwellProductVariant' }
          & Pick<SwellProductVariant, 'id' | 'name' | 'sku' | 'optionValueIds' | 'stockLevel' | 'currency'>
          & { prices: Maybe<Array<Maybe<(
            { __typename?: 'SwellProductVariantPrice' }
            & Pick<SwellProductVariantPrice, 'price' | 'discountPercent'>
          )>>> }
        )>>> }
      )>, images: Maybe<Array<Maybe<(
        { __typename?: 'SwellProductImage' }
        & Pick<SwellProductImage, 'caption'>
        & { file: Maybe<(
          { __typename?: 'SwellProductImageFile' }
          & Pick<SwellProductImageFile, 'url' | 'width' | 'height'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export const ProductFragmentDoc = gql`
    fragment Product on SwellProduct {
  id
  currency
  slug
  stockPurchasable
  name
  description
  options {
    name
    id
    description
    values {
      id
      name
      price
    }
  }
  price
  variants {
    results {
      id
      name
      sku
      prices {
        price
        discountPercent
      }
      optionValueIds
      stockLevel
      currency
    }
  }
  images {
    file {
      url
      width
      height
    }
    caption
  }
  metaTitle
  metaDescription
  tags
}
    `;
export const GetProductDocument = gql`
    query getProduct($slug: String!) {
  productBySlug(slug: $slug) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export const GetProductsDocument = gql`
    query getProducts($sort: String, $query: String) {
  products(sort: $sort, search: $query) {
    results {
      ...Product
    }
  }
}
    ${ProductFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProduct(variables: GetProductQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductQuery>(GetProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProduct', 'query');
    },
    getProducts(variables?: GetProductsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsQuery>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProducts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;