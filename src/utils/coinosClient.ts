import { config } from "../config";
import { fetcher } from "./helper";

type Transaction = {
  id: string;
  aid: string;
  amount: number;
  fee: number;
  ourfee: number;
  memo: string;
  uid: string;
  confirmed: boolean;
  rate: number;
  currency: string;
  type: string;
  ref: string;
  tip: null | number;
  created: number; // This can be a timestamp
};

type User = {
  about: string;
  banner: string;
  currency: string;
  display: string;
  id: string;
  npub: string;
  picture: string;
  prompt: boolean;
  pubkey: string;
  username: string;
};

type Payment = {
  aid: string;
  id: string;
  iid?: string; // Optional field
  hash?: string; // Optional field
  amount: number;
  uid: string;
  rate: number;
  currency: string;
  memo: string;
  ref: string;
  tip: number | null; // Can be a number or null
  type: string;
  confirmed: boolean;
  created: number;
  fee?: number; // Optional field
  ourfee?: number; // Optional field
  user: User;
};

export type FundResponse = {
  amount: number;
  payments: Payment[];
};

type UserProfile = {
  about: string;
  autowithdraw: boolean;
  balance: number;
  banner: string;
  currencies: string[];
  currency: string;
  destination: string;
  display: string;
  email: string;
  fiat: boolean;
  fresh: boolean;
  haspin: boolean;
  id: string;
  language: string;
  locked: null | boolean; // Could be null or boolean
  locktime: string; // Assuming this is a string; could be a number based on context
  nip5: boolean;
  notify: boolean;
  npub: string;
  nsec: string;
  picture: string;
  prompt: boolean;
  pubkey: string;
  push: boolean;
  reserve: string; // Assuming this is stored as a string
  threshold: string; // Likewise, treated as a string
  tip: null; // Explicitly defined as null
  username: string;
};

// pays an amount to a fund
export const payToFund = async (
  fundId: string,
  amountSat: number,
): Promise<Transaction> => {
  const res = await fetcher<Transaction>(config.backend, "payments", {
    fund: fundId,
    amount: amountSat,
  });

  return res;
};

// get fund's balance and history
export const getFund = async (fundId): Promise<FundResponse> => {
  const res = await fetcher<FundResponse>(config.backend, "fund/" + fundId);
  return res;
};

// get account balance and details
export const getMe = async (): Promise<UserProfile> => {
  const res = await fetcher<UserProfile>(config.backend, "me",{});
  return res;
};