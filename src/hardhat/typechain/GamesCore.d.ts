/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface GamesCoreInterface extends ethers.utils.Interface {
  functions: {
    "confirm(bytes32,uint8,bytes32,bytes32)": FunctionFragment;
    "croupier()": FunctionFragment;
    "edge()": FunctionFragment;
    "games(bytes32)": FunctionFragment;
    "houseProfit()": FunctionFragment;
    "listGames(uint256)": FunctionFragment;
    "maxBet()": FunctionFragment;
    "minBet()": FunctionFragment;
    "owner()": FunctionFragment;
    "profitTaker()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBetRange(uint256,uint256)": FunctionFragment;
    "setCroupier(address)": FunctionFragment;
    "setEdge(uint8)": FunctionFragment;
    "setProfitTaker(address)": FunctionFragment;
    "setToken(address)": FunctionFragment;
    "token()": FunctionFragment;
    "totalGamesCount()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawAll()": FunctionFragment;
    "withdrawProfit()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "confirm",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "croupier", values?: undefined): string;
  encodeFunctionData(functionFragment: "edge", values?: undefined): string;
  encodeFunctionData(functionFragment: "games", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "houseProfit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listGames",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "maxBet", values?: undefined): string;
  encodeFunctionData(functionFragment: "minBet", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "profitTaker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBetRange",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setCroupier", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setEdge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProfitTaker",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setToken", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalGamesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawProfit",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "confirm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "croupier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "edge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "games", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "houseProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listGames", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxBet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minBet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "profitTaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBetRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCroupier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEdge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProfitTaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalGamesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawProfit",
    data: BytesLike
  ): Result;

  events: {
    "GameCreated(address,uint256,uint256,bytes32,bool)": EventFragment;
    "GamePlayed(address,uint256,uint256,uint256,uint256,uint256,uint256,bytes32,bool,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GameCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GamePlayed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class GamesCore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GamesCoreInterface;

  functions: {
    confirm(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "confirm(bytes32,uint8,bytes32,bytes32)"(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    croupier(overrides?: CallOverrides): Promise<[string]>;

    "croupier()"(overrides?: CallOverrides): Promise<[string]>;

    edge(overrides?: CallOverrides): Promise<[number]>;

    "edge()"(overrides?: CallOverrides): Promise<[number]>;

    games(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        number
      ] & {
        id: BigNumber;
        player: string;
        bet: BigNumber;
        prize: BigNumber;
        choice: BigNumber;
        result: BigNumber;
        over: boolean;
        state: number;
      }
    >;

    "games(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        number
      ] & {
        id: BigNumber;
        player: string;
        bet: BigNumber;
        prize: BigNumber;
        choice: BigNumber;
        result: BigNumber;
        over: boolean;
        state: number;
      }
    >;

    houseProfit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "houseProfit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    listGames(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "listGames(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    maxBet(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxBet()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minBet(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minBet()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    profitTaker(overrides?: CallOverrides): Promise<[string]>;

    "profitTaker()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setBetRange(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBetRange(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCroupier(
      _addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCroupier(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setEdge(
      _e: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEdge(uint8)"(
      _e: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setProfitTaker(
      _profitTaker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setProfitTaker(address)"(
      _profitTaker: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setToken(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    totalGamesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalGamesCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawAll(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawAll()"(overrides?: Overrides): Promise<ContractTransaction>;

    withdrawProfit(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawProfit()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  confirm(
    _seed: BytesLike,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "confirm(bytes32,uint8,bytes32,bytes32)"(
    _seed: BytesLike,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  croupier(overrides?: CallOverrides): Promise<string>;

  "croupier()"(overrides?: CallOverrides): Promise<string>;

  edge(overrides?: CallOverrides): Promise<number>;

  "edge()"(overrides?: CallOverrides): Promise<number>;

  games(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      number
    ] & {
      id: BigNumber;
      player: string;
      bet: BigNumber;
      prize: BigNumber;
      choice: BigNumber;
      result: BigNumber;
      over: boolean;
      state: number;
    }
  >;

  "games(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      number
    ] & {
      id: BigNumber;
      player: string;
      bet: BigNumber;
      prize: BigNumber;
      choice: BigNumber;
      result: BigNumber;
      over: boolean;
      state: number;
    }
  >;

  houseProfit(overrides?: CallOverrides): Promise<BigNumber>;

  "houseProfit()"(overrides?: CallOverrides): Promise<BigNumber>;

  listGames(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "listGames(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  maxBet(overrides?: CallOverrides): Promise<BigNumber>;

  "maxBet()"(overrides?: CallOverrides): Promise<BigNumber>;

  minBet(overrides?: CallOverrides): Promise<BigNumber>;

  "minBet()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  profitTaker(overrides?: CallOverrides): Promise<string>;

  "profitTaker()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setBetRange(
    _min: BigNumberish,
    _max: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBetRange(uint256,uint256)"(
    _min: BigNumberish,
    _max: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCroupier(
    _addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCroupier(address)"(
    _addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setEdge(
    _e: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEdge(uint8)"(
    _e: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setProfitTaker(
    _profitTaker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setProfitTaker(address)"(
    _profitTaker: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setToken(_token: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setToken(address)"(
    _token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  totalGamesCount(overrides?: CallOverrides): Promise<BigNumber>;

  "totalGamesCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawAll(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawAll()"(overrides?: Overrides): Promise<ContractTransaction>;

  withdrawProfit(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawProfit()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    confirm(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "confirm(bytes32,uint8,bytes32,bytes32)"(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    croupier(overrides?: CallOverrides): Promise<string>;

    "croupier()"(overrides?: CallOverrides): Promise<string>;

    edge(overrides?: CallOverrides): Promise<number>;

    "edge()"(overrides?: CallOverrides): Promise<number>;

    games(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        number
      ] & {
        id: BigNumber;
        player: string;
        bet: BigNumber;
        prize: BigNumber;
        choice: BigNumber;
        result: BigNumber;
        over: boolean;
        state: number;
      }
    >;

    "games(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        number
      ] & {
        id: BigNumber;
        player: string;
        bet: BigNumber;
        prize: BigNumber;
        choice: BigNumber;
        result: BigNumber;
        over: boolean;
        state: number;
      }
    >;

    houseProfit(overrides?: CallOverrides): Promise<BigNumber>;

    "houseProfit()"(overrides?: CallOverrides): Promise<BigNumber>;

    listGames(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "listGames(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    maxBet(overrides?: CallOverrides): Promise<BigNumber>;

    "maxBet()"(overrides?: CallOverrides): Promise<BigNumber>;

    minBet(overrides?: CallOverrides): Promise<BigNumber>;

    "minBet()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    profitTaker(overrides?: CallOverrides): Promise<string>;

    "profitTaker()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setBetRange(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBetRange(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCroupier(_addr: string, overrides?: CallOverrides): Promise<void>;

    "setCroupier(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setEdge(_e: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setEdge(uint8)"(
      _e: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProfitTaker(
      _profitTaker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setProfitTaker(address)"(
      _profitTaker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "setToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    totalGamesCount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalGamesCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAll(overrides?: CallOverrides): Promise<void>;

    "withdrawAll()"(overrides?: CallOverrides): Promise<void>;

    withdrawProfit(overrides?: CallOverrides): Promise<void>;

    "withdrawProfit()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    GameCreated(
      player: string | null,
      bet: null,
      choice: null,
      seed: null,
      over: null
    ): EventFilter;

    GamePlayed(
      player: string | null,
      round: null,
      multiplier: null,
      bet: null,
      prize: null,
      choice: null,
      result: null,
      seed: BytesLike | null,
      over: null,
      state: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    confirm(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "confirm(bytes32,uint8,bytes32,bytes32)"(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    croupier(overrides?: CallOverrides): Promise<BigNumber>;

    "croupier()"(overrides?: CallOverrides): Promise<BigNumber>;

    edge(overrides?: CallOverrides): Promise<BigNumber>;

    "edge()"(overrides?: CallOverrides): Promise<BigNumber>;

    games(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "games(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    houseProfit(overrides?: CallOverrides): Promise<BigNumber>;

    "houseProfit()"(overrides?: CallOverrides): Promise<BigNumber>;

    listGames(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "listGames(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxBet(overrides?: CallOverrides): Promise<BigNumber>;

    "maxBet()"(overrides?: CallOverrides): Promise<BigNumber>;

    minBet(overrides?: CallOverrides): Promise<BigNumber>;

    "minBet()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitTaker(overrides?: CallOverrides): Promise<BigNumber>;

    "profitTaker()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setBetRange(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBetRange(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setCroupier(_addr: string, overrides?: Overrides): Promise<BigNumber>;

    "setCroupier(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setEdge(_e: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setEdge(uint8)"(
      _e: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setProfitTaker(
      _profitTaker: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setProfitTaker(address)"(
      _profitTaker: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setToken(_token: string, overrides?: Overrides): Promise<BigNumber>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalGamesCount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalGamesCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawAll(overrides?: Overrides): Promise<BigNumber>;

    "withdrawAll()"(overrides?: Overrides): Promise<BigNumber>;

    withdrawProfit(overrides?: Overrides): Promise<BigNumber>;

    "withdrawProfit()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    confirm(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "confirm(bytes32,uint8,bytes32,bytes32)"(
      _seed: BytesLike,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    croupier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "croupier()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    edge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "edge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    games(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "games(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    houseProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "houseProfit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listGames(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "listGames(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxBet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxBet()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minBet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minBet()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    profitTaker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "profitTaker()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setBetRange(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBetRange(uint256,uint256)"(
      _min: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCroupier(
      _addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCroupier(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setEdge(
      _e: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEdge(uint8)"(
      _e: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setProfitTaker(
      _profitTaker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setProfitTaker(address)"(
      _profitTaker: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setToken(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalGamesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalGamesCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawAll(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawAll()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    withdrawProfit(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawProfit()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
