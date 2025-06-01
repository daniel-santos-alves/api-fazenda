
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Culturas
 * 
 */
export type Culturas = $Result.DefaultSelection<Prisma.$CulturasPayload>
/**
 * Model Fazenda
 * 
 */
export type Fazenda = $Result.DefaultSelection<Prisma.$FazendaPayload>
/**
 * Model Produtor
 * 
 */
export type Produtor = $Result.DefaultSelection<Prisma.$ProdutorPayload>
/**
 * Model Safra
 * 
 */
export type Safra = $Result.DefaultSelection<Prisma.$SafraPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Culturas
 * const culturas = await prisma.culturas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Culturas
   * const culturas = await prisma.culturas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.culturas`: Exposes CRUD operations for the **Culturas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Culturas
    * const culturas = await prisma.culturas.findMany()
    * ```
    */
  get culturas(): Prisma.CulturasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fazenda`: Exposes CRUD operations for the **Fazenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fazendas
    * const fazendas = await prisma.fazenda.findMany()
    * ```
    */
  get fazenda(): Prisma.FazendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtor`: Exposes CRUD operations for the **Produtor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtors
    * const produtors = await prisma.produtor.findMany()
    * ```
    */
  get produtor(): Prisma.ProdutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.safra`: Exposes CRUD operations for the **Safra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Safras
    * const safras = await prisma.safra.findMany()
    * ```
    */
  get safra(): Prisma.SafraDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Culturas: 'Culturas',
    Fazenda: 'Fazenda',
    Produtor: 'Produtor',
    Safra: 'Safra'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "culturas" | "fazenda" | "produtor" | "safra"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Culturas: {
        payload: Prisma.$CulturasPayload<ExtArgs>
        fields: Prisma.CulturasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CulturasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CulturasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>
          }
          findFirst: {
            args: Prisma.CulturasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CulturasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>
          }
          findMany: {
            args: Prisma.CulturasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>[]
          }
          create: {
            args: Prisma.CulturasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>
          }
          createMany: {
            args: Prisma.CulturasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CulturasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>[]
          }
          delete: {
            args: Prisma.CulturasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>
          }
          update: {
            args: Prisma.CulturasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>
          }
          deleteMany: {
            args: Prisma.CulturasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CulturasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CulturasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>[]
          }
          upsert: {
            args: Prisma.CulturasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CulturasPayload>
          }
          aggregate: {
            args: Prisma.CulturasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCulturas>
          }
          groupBy: {
            args: Prisma.CulturasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CulturasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CulturasCountArgs<ExtArgs>
            result: $Utils.Optional<CulturasCountAggregateOutputType> | number
          }
        }
      }
      Fazenda: {
        payload: Prisma.$FazendaPayload<ExtArgs>
        fields: Prisma.FazendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FazendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FazendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>
          }
          findFirst: {
            args: Prisma.FazendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FazendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>
          }
          findMany: {
            args: Prisma.FazendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>[]
          }
          create: {
            args: Prisma.FazendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>
          }
          createMany: {
            args: Prisma.FazendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FazendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>[]
          }
          delete: {
            args: Prisma.FazendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>
          }
          update: {
            args: Prisma.FazendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>
          }
          deleteMany: {
            args: Prisma.FazendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FazendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FazendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>[]
          }
          upsert: {
            args: Prisma.FazendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FazendaPayload>
          }
          aggregate: {
            args: Prisma.FazendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFazenda>
          }
          groupBy: {
            args: Prisma.FazendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FazendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FazendaCountArgs<ExtArgs>
            result: $Utils.Optional<FazendaCountAggregateOutputType> | number
          }
        }
      }
      Produtor: {
        payload: Prisma.$ProdutorPayload<ExtArgs>
        fields: Prisma.ProdutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          findFirst: {
            args: Prisma.ProdutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          findMany: {
            args: Prisma.ProdutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>[]
          }
          create: {
            args: Prisma.ProdutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          createMany: {
            args: Prisma.ProdutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>[]
          }
          delete: {
            args: Prisma.ProdutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          update: {
            args: Prisma.ProdutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          deleteMany: {
            args: Prisma.ProdutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>[]
          }
          upsert: {
            args: Prisma.ProdutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutorPayload>
          }
          aggregate: {
            args: Prisma.ProdutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutor>
          }
          groupBy: {
            args: Prisma.ProdutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutorCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutorCountAggregateOutputType> | number
          }
        }
      }
      Safra: {
        payload: Prisma.$SafraPayload<ExtArgs>
        fields: Prisma.SafraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SafraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SafraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>
          }
          findFirst: {
            args: Prisma.SafraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SafraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>
          }
          findMany: {
            args: Prisma.SafraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>[]
          }
          create: {
            args: Prisma.SafraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>
          }
          createMany: {
            args: Prisma.SafraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SafraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>[]
          }
          delete: {
            args: Prisma.SafraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>
          }
          update: {
            args: Prisma.SafraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>
          }
          deleteMany: {
            args: Prisma.SafraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SafraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SafraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>[]
          }
          upsert: {
            args: Prisma.SafraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafraPayload>
          }
          aggregate: {
            args: Prisma.SafraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSafra>
          }
          groupBy: {
            args: Prisma.SafraGroupByArgs<ExtArgs>
            result: $Utils.Optional<SafraGroupByOutputType>[]
          }
          count: {
            args: Prisma.SafraCountArgs<ExtArgs>
            result: $Utils.Optional<SafraCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    culturas?: CulturasOmit
    fazenda?: FazendaOmit
    produtor?: ProdutorOmit
    safra?: SafraOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CulturasCountOutputType
   */

  export type CulturasCountOutputType = {
    tb_safra: number
  }

  export type CulturasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_safra?: boolean | CulturasCountOutputTypeCountTb_safraArgs
  }

  // Custom InputTypes
  /**
   * CulturasCountOutputType without action
   */
  export type CulturasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CulturasCountOutputType
     */
    select?: CulturasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CulturasCountOutputType without action
   */
  export type CulturasCountOutputTypeCountTb_safraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafraWhereInput
  }


  /**
   * Count Type FazendaCountOutputType
   */

  export type FazendaCountOutputType = {
    tb_safra: number
  }

  export type FazendaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_safra?: boolean | FazendaCountOutputTypeCountTb_safraArgs
  }

  // Custom InputTypes
  /**
   * FazendaCountOutputType without action
   */
  export type FazendaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FazendaCountOutputType
     */
    select?: FazendaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FazendaCountOutputType without action
   */
  export type FazendaCountOutputTypeCountTb_safraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafraWhereInput
  }


  /**
   * Count Type ProdutorCountOutputType
   */

  export type ProdutorCountOutputType = {
    tb_fazenda: number
  }

  export type ProdutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_fazenda?: boolean | ProdutorCountOutputTypeCountTb_fazendaArgs
  }

  // Custom InputTypes
  /**
   * ProdutorCountOutputType without action
   */
  export type ProdutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutorCountOutputType
     */
    select?: ProdutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutorCountOutputType without action
   */
  export type ProdutorCountOutputTypeCountTb_fazendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FazendaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Culturas
   */

  export type AggregateCulturas = {
    _count: CulturasCountAggregateOutputType | null
    _avg: CulturasAvgAggregateOutputType | null
    _sum: CulturasSumAggregateOutputType | null
    _min: CulturasMinAggregateOutputType | null
    _max: CulturasMaxAggregateOutputType | null
  }

  export type CulturasAvgAggregateOutputType = {
    id_culturas: number | null
  }

  export type CulturasSumAggregateOutputType = {
    id_culturas: number | null
  }

  export type CulturasMinAggregateOutputType = {
    id_culturas: number | null
    cultura_plantada: string | null
  }

  export type CulturasMaxAggregateOutputType = {
    id_culturas: number | null
    cultura_plantada: string | null
  }

  export type CulturasCountAggregateOutputType = {
    id_culturas: number
    cultura_plantada: number
    _all: number
  }


  export type CulturasAvgAggregateInputType = {
    id_culturas?: true
  }

  export type CulturasSumAggregateInputType = {
    id_culturas?: true
  }

  export type CulturasMinAggregateInputType = {
    id_culturas?: true
    cultura_plantada?: true
  }

  export type CulturasMaxAggregateInputType = {
    id_culturas?: true
    cultura_plantada?: true
  }

  export type CulturasCountAggregateInputType = {
    id_culturas?: true
    cultura_plantada?: true
    _all?: true
  }

  export type CulturasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Culturas to aggregate.
     */
    where?: CulturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturasOrderByWithRelationInput | CulturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CulturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Culturas
    **/
    _count?: true | CulturasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CulturasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CulturasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CulturasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CulturasMaxAggregateInputType
  }

  export type GetCulturasAggregateType<T extends CulturasAggregateArgs> = {
        [P in keyof T & keyof AggregateCulturas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCulturas[P]>
      : GetScalarType<T[P], AggregateCulturas[P]>
  }




  export type CulturasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CulturasWhereInput
    orderBy?: CulturasOrderByWithAggregationInput | CulturasOrderByWithAggregationInput[]
    by: CulturasScalarFieldEnum[] | CulturasScalarFieldEnum
    having?: CulturasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CulturasCountAggregateInputType | true
    _avg?: CulturasAvgAggregateInputType
    _sum?: CulturasSumAggregateInputType
    _min?: CulturasMinAggregateInputType
    _max?: CulturasMaxAggregateInputType
  }

  export type CulturasGroupByOutputType = {
    id_culturas: number
    cultura_plantada: string
    _count: CulturasCountAggregateOutputType | null
    _avg: CulturasAvgAggregateOutputType | null
    _sum: CulturasSumAggregateOutputType | null
    _min: CulturasMinAggregateOutputType | null
    _max: CulturasMaxAggregateOutputType | null
  }

  type GetCulturasGroupByPayload<T extends CulturasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CulturasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CulturasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CulturasGroupByOutputType[P]>
            : GetScalarType<T[P], CulturasGroupByOutputType[P]>
        }
      >
    >


  export type CulturasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_culturas?: boolean
    cultura_plantada?: boolean
    tb_safra?: boolean | Culturas$tb_safraArgs<ExtArgs>
    _count?: boolean | CulturasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["culturas"]>

  export type CulturasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_culturas?: boolean
    cultura_plantada?: boolean
  }, ExtArgs["result"]["culturas"]>

  export type CulturasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_culturas?: boolean
    cultura_plantada?: boolean
  }, ExtArgs["result"]["culturas"]>

  export type CulturasSelectScalar = {
    id_culturas?: boolean
    cultura_plantada?: boolean
  }

  export type CulturasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_culturas" | "cultura_plantada", ExtArgs["result"]["culturas"]>
  export type CulturasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_safra?: boolean | Culturas$tb_safraArgs<ExtArgs>
    _count?: boolean | CulturasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CulturasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CulturasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CulturasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Culturas"
    objects: {
      tb_safra: Prisma.$SafraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_culturas: number
      cultura_plantada: string
    }, ExtArgs["result"]["culturas"]>
    composites: {}
  }

  type CulturasGetPayload<S extends boolean | null | undefined | CulturasDefaultArgs> = $Result.GetResult<Prisma.$CulturasPayload, S>

  type CulturasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CulturasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CulturasCountAggregateInputType | true
    }

  export interface CulturasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Culturas'], meta: { name: 'Culturas' } }
    /**
     * Find zero or one Culturas that matches the filter.
     * @param {CulturasFindUniqueArgs} args - Arguments to find a Culturas
     * @example
     * // Get one Culturas
     * const culturas = await prisma.culturas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CulturasFindUniqueArgs>(args: SelectSubset<T, CulturasFindUniqueArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Culturas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CulturasFindUniqueOrThrowArgs} args - Arguments to find a Culturas
     * @example
     * // Get one Culturas
     * const culturas = await prisma.culturas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CulturasFindUniqueOrThrowArgs>(args: SelectSubset<T, CulturasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Culturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturasFindFirstArgs} args - Arguments to find a Culturas
     * @example
     * // Get one Culturas
     * const culturas = await prisma.culturas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CulturasFindFirstArgs>(args?: SelectSubset<T, CulturasFindFirstArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Culturas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturasFindFirstOrThrowArgs} args - Arguments to find a Culturas
     * @example
     * // Get one Culturas
     * const culturas = await prisma.culturas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CulturasFindFirstOrThrowArgs>(args?: SelectSubset<T, CulturasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Culturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Culturas
     * const culturas = await prisma.culturas.findMany()
     * 
     * // Get first 10 Culturas
     * const culturas = await prisma.culturas.findMany({ take: 10 })
     * 
     * // Only select the `id_culturas`
     * const culturasWithId_culturasOnly = await prisma.culturas.findMany({ select: { id_culturas: true } })
     * 
     */
    findMany<T extends CulturasFindManyArgs>(args?: SelectSubset<T, CulturasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Culturas.
     * @param {CulturasCreateArgs} args - Arguments to create a Culturas.
     * @example
     * // Create one Culturas
     * const Culturas = await prisma.culturas.create({
     *   data: {
     *     // ... data to create a Culturas
     *   }
     * })
     * 
     */
    create<T extends CulturasCreateArgs>(args: SelectSubset<T, CulturasCreateArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Culturas.
     * @param {CulturasCreateManyArgs} args - Arguments to create many Culturas.
     * @example
     * // Create many Culturas
     * const culturas = await prisma.culturas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CulturasCreateManyArgs>(args?: SelectSubset<T, CulturasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Culturas and returns the data saved in the database.
     * @param {CulturasCreateManyAndReturnArgs} args - Arguments to create many Culturas.
     * @example
     * // Create many Culturas
     * const culturas = await prisma.culturas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Culturas and only return the `id_culturas`
     * const culturasWithId_culturasOnly = await prisma.culturas.createManyAndReturn({
     *   select: { id_culturas: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CulturasCreateManyAndReturnArgs>(args?: SelectSubset<T, CulturasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Culturas.
     * @param {CulturasDeleteArgs} args - Arguments to delete one Culturas.
     * @example
     * // Delete one Culturas
     * const Culturas = await prisma.culturas.delete({
     *   where: {
     *     // ... filter to delete one Culturas
     *   }
     * })
     * 
     */
    delete<T extends CulturasDeleteArgs>(args: SelectSubset<T, CulturasDeleteArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Culturas.
     * @param {CulturasUpdateArgs} args - Arguments to update one Culturas.
     * @example
     * // Update one Culturas
     * const culturas = await prisma.culturas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CulturasUpdateArgs>(args: SelectSubset<T, CulturasUpdateArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Culturas.
     * @param {CulturasDeleteManyArgs} args - Arguments to filter Culturas to delete.
     * @example
     * // Delete a few Culturas
     * const { count } = await prisma.culturas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CulturasDeleteManyArgs>(args?: SelectSubset<T, CulturasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Culturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Culturas
     * const culturas = await prisma.culturas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CulturasUpdateManyArgs>(args: SelectSubset<T, CulturasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Culturas and returns the data updated in the database.
     * @param {CulturasUpdateManyAndReturnArgs} args - Arguments to update many Culturas.
     * @example
     * // Update many Culturas
     * const culturas = await prisma.culturas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Culturas and only return the `id_culturas`
     * const culturasWithId_culturasOnly = await prisma.culturas.updateManyAndReturn({
     *   select: { id_culturas: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CulturasUpdateManyAndReturnArgs>(args: SelectSubset<T, CulturasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Culturas.
     * @param {CulturasUpsertArgs} args - Arguments to update or create a Culturas.
     * @example
     * // Update or create a Culturas
     * const culturas = await prisma.culturas.upsert({
     *   create: {
     *     // ... data to create a Culturas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Culturas we want to update
     *   }
     * })
     */
    upsert<T extends CulturasUpsertArgs>(args: SelectSubset<T, CulturasUpsertArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Culturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturasCountArgs} args - Arguments to filter Culturas to count.
     * @example
     * // Count the number of Culturas
     * const count = await prisma.culturas.count({
     *   where: {
     *     // ... the filter for the Culturas we want to count
     *   }
     * })
    **/
    count<T extends CulturasCountArgs>(
      args?: Subset<T, CulturasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CulturasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Culturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CulturasAggregateArgs>(args: Subset<T, CulturasAggregateArgs>): Prisma.PrismaPromise<GetCulturasAggregateType<T>>

    /**
     * Group by Culturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CulturasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CulturasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CulturasGroupByArgs['orderBy'] }
        : { orderBy?: CulturasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CulturasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCulturasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Culturas model
   */
  readonly fields: CulturasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Culturas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CulturasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_safra<T extends Culturas$tb_safraArgs<ExtArgs> = {}>(args?: Subset<T, Culturas$tb_safraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Culturas model
   */
  interface CulturasFieldRefs {
    readonly id_culturas: FieldRef<"Culturas", 'Int'>
    readonly cultura_plantada: FieldRef<"Culturas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Culturas findUnique
   */
  export type CulturasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * Filter, which Culturas to fetch.
     */
    where: CulturasWhereUniqueInput
  }

  /**
   * Culturas findUniqueOrThrow
   */
  export type CulturasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * Filter, which Culturas to fetch.
     */
    where: CulturasWhereUniqueInput
  }

  /**
   * Culturas findFirst
   */
  export type CulturasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * Filter, which Culturas to fetch.
     */
    where?: CulturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturasOrderByWithRelationInput | CulturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Culturas.
     */
    cursor?: CulturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Culturas.
     */
    distinct?: CulturasScalarFieldEnum | CulturasScalarFieldEnum[]
  }

  /**
   * Culturas findFirstOrThrow
   */
  export type CulturasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * Filter, which Culturas to fetch.
     */
    where?: CulturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturasOrderByWithRelationInput | CulturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Culturas.
     */
    cursor?: CulturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Culturas.
     */
    distinct?: CulturasScalarFieldEnum | CulturasScalarFieldEnum[]
  }

  /**
   * Culturas findMany
   */
  export type CulturasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * Filter, which Culturas to fetch.
     */
    where?: CulturasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Culturas to fetch.
     */
    orderBy?: CulturasOrderByWithRelationInput | CulturasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Culturas.
     */
    cursor?: CulturasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Culturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Culturas.
     */
    skip?: number
    distinct?: CulturasScalarFieldEnum | CulturasScalarFieldEnum[]
  }

  /**
   * Culturas create
   */
  export type CulturasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * The data needed to create a Culturas.
     */
    data: XOR<CulturasCreateInput, CulturasUncheckedCreateInput>
  }

  /**
   * Culturas createMany
   */
  export type CulturasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Culturas.
     */
    data: CulturasCreateManyInput | CulturasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Culturas createManyAndReturn
   */
  export type CulturasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * The data used to create many Culturas.
     */
    data: CulturasCreateManyInput | CulturasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Culturas update
   */
  export type CulturasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * The data needed to update a Culturas.
     */
    data: XOR<CulturasUpdateInput, CulturasUncheckedUpdateInput>
    /**
     * Choose, which Culturas to update.
     */
    where: CulturasWhereUniqueInput
  }

  /**
   * Culturas updateMany
   */
  export type CulturasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Culturas.
     */
    data: XOR<CulturasUpdateManyMutationInput, CulturasUncheckedUpdateManyInput>
    /**
     * Filter which Culturas to update
     */
    where?: CulturasWhereInput
    /**
     * Limit how many Culturas to update.
     */
    limit?: number
  }

  /**
   * Culturas updateManyAndReturn
   */
  export type CulturasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * The data used to update Culturas.
     */
    data: XOR<CulturasUpdateManyMutationInput, CulturasUncheckedUpdateManyInput>
    /**
     * Filter which Culturas to update
     */
    where?: CulturasWhereInput
    /**
     * Limit how many Culturas to update.
     */
    limit?: number
  }

  /**
   * Culturas upsert
   */
  export type CulturasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * The filter to search for the Culturas to update in case it exists.
     */
    where: CulturasWhereUniqueInput
    /**
     * In case the Culturas found by the `where` argument doesn't exist, create a new Culturas with this data.
     */
    create: XOR<CulturasCreateInput, CulturasUncheckedCreateInput>
    /**
     * In case the Culturas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CulturasUpdateInput, CulturasUncheckedUpdateInput>
  }

  /**
   * Culturas delete
   */
  export type CulturasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    /**
     * Filter which Culturas to delete.
     */
    where: CulturasWhereUniqueInput
  }

  /**
   * Culturas deleteMany
   */
  export type CulturasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Culturas to delete
     */
    where?: CulturasWhereInput
    /**
     * Limit how many Culturas to delete.
     */
    limit?: number
  }

  /**
   * Culturas.tb_safra
   */
  export type Culturas$tb_safraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    where?: SafraWhereInput
    orderBy?: SafraOrderByWithRelationInput | SafraOrderByWithRelationInput[]
    cursor?: SafraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SafraScalarFieldEnum | SafraScalarFieldEnum[]
  }

  /**
   * Culturas without action
   */
  export type CulturasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
  }


  /**
   * Model Fazenda
   */

  export type AggregateFazenda = {
    _count: FazendaCountAggregateOutputType | null
    _avg: FazendaAvgAggregateOutputType | null
    _sum: FazendaSumAggregateOutputType | null
    _min: FazendaMinAggregateOutputType | null
    _max: FazendaMaxAggregateOutputType | null
  }

  export type FazendaAvgAggregateOutputType = {
    id_fazenda: number | null
    id_produtor: number | null
    area_total: Decimal | null
    area_agricultavel: Decimal | null
    area_vegetacao: Decimal | null
  }

  export type FazendaSumAggregateOutputType = {
    id_fazenda: number | null
    id_produtor: number | null
    area_total: Decimal | null
    area_agricultavel: Decimal | null
    area_vegetacao: Decimal | null
  }

  export type FazendaMinAggregateOutputType = {
    id_fazenda: number | null
    id_produtor: number | null
    nome_fazenda: string | null
    area_total: Decimal | null
    area_agricultavel: Decimal | null
    area_vegetacao: Decimal | null
    cidade: string | null
    estado: string | null
  }

  export type FazendaMaxAggregateOutputType = {
    id_fazenda: number | null
    id_produtor: number | null
    nome_fazenda: string | null
    area_total: Decimal | null
    area_agricultavel: Decimal | null
    area_vegetacao: Decimal | null
    cidade: string | null
    estado: string | null
  }

  export type FazendaCountAggregateOutputType = {
    id_fazenda: number
    id_produtor: number
    nome_fazenda: number
    area_total: number
    area_agricultavel: number
    area_vegetacao: number
    cidade: number
    estado: number
    _all: number
  }


  export type FazendaAvgAggregateInputType = {
    id_fazenda?: true
    id_produtor?: true
    area_total?: true
    area_agricultavel?: true
    area_vegetacao?: true
  }

  export type FazendaSumAggregateInputType = {
    id_fazenda?: true
    id_produtor?: true
    area_total?: true
    area_agricultavel?: true
    area_vegetacao?: true
  }

  export type FazendaMinAggregateInputType = {
    id_fazenda?: true
    id_produtor?: true
    nome_fazenda?: true
    area_total?: true
    area_agricultavel?: true
    area_vegetacao?: true
    cidade?: true
    estado?: true
  }

  export type FazendaMaxAggregateInputType = {
    id_fazenda?: true
    id_produtor?: true
    nome_fazenda?: true
    area_total?: true
    area_agricultavel?: true
    area_vegetacao?: true
    cidade?: true
    estado?: true
  }

  export type FazendaCountAggregateInputType = {
    id_fazenda?: true
    id_produtor?: true
    nome_fazenda?: true
    area_total?: true
    area_agricultavel?: true
    area_vegetacao?: true
    cidade?: true
    estado?: true
    _all?: true
  }

  export type FazendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fazenda to aggregate.
     */
    where?: FazendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fazendas to fetch.
     */
    orderBy?: FazendaOrderByWithRelationInput | FazendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FazendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fazendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fazendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fazendas
    **/
    _count?: true | FazendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FazendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FazendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FazendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FazendaMaxAggregateInputType
  }

  export type GetFazendaAggregateType<T extends FazendaAggregateArgs> = {
        [P in keyof T & keyof AggregateFazenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFazenda[P]>
      : GetScalarType<T[P], AggregateFazenda[P]>
  }




  export type FazendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FazendaWhereInput
    orderBy?: FazendaOrderByWithAggregationInput | FazendaOrderByWithAggregationInput[]
    by: FazendaScalarFieldEnum[] | FazendaScalarFieldEnum
    having?: FazendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FazendaCountAggregateInputType | true
    _avg?: FazendaAvgAggregateInputType
    _sum?: FazendaSumAggregateInputType
    _min?: FazendaMinAggregateInputType
    _max?: FazendaMaxAggregateInputType
  }

  export type FazendaGroupByOutputType = {
    id_fazenda: number
    id_produtor: number
    nome_fazenda: string
    area_total: Decimal
    area_agricultavel: Decimal
    area_vegetacao: Decimal
    cidade: string
    estado: string
    _count: FazendaCountAggregateOutputType | null
    _avg: FazendaAvgAggregateOutputType | null
    _sum: FazendaSumAggregateOutputType | null
    _min: FazendaMinAggregateOutputType | null
    _max: FazendaMaxAggregateOutputType | null
  }

  type GetFazendaGroupByPayload<T extends FazendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FazendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FazendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FazendaGroupByOutputType[P]>
            : GetScalarType<T[P], FazendaGroupByOutputType[P]>
        }
      >
    >


  export type FazendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fazenda?: boolean
    id_produtor?: boolean
    nome_fazenda?: boolean
    area_total?: boolean
    area_agricultavel?: boolean
    area_vegetacao?: boolean
    cidade?: boolean
    estado?: boolean
    tb_produtor?: boolean | Fazenda$tb_produtorArgs<ExtArgs>
    tb_safra?: boolean | Fazenda$tb_safraArgs<ExtArgs>
    _count?: boolean | FazendaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fazenda"]>

  export type FazendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fazenda?: boolean
    id_produtor?: boolean
    nome_fazenda?: boolean
    area_total?: boolean
    area_agricultavel?: boolean
    area_vegetacao?: boolean
    cidade?: boolean
    estado?: boolean
    tb_produtor?: boolean | Fazenda$tb_produtorArgs<ExtArgs>
  }, ExtArgs["result"]["fazenda"]>

  export type FazendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_fazenda?: boolean
    id_produtor?: boolean
    nome_fazenda?: boolean
    area_total?: boolean
    area_agricultavel?: boolean
    area_vegetacao?: boolean
    cidade?: boolean
    estado?: boolean
    tb_produtor?: boolean | Fazenda$tb_produtorArgs<ExtArgs>
  }, ExtArgs["result"]["fazenda"]>

  export type FazendaSelectScalar = {
    id_fazenda?: boolean
    id_produtor?: boolean
    nome_fazenda?: boolean
    area_total?: boolean
    area_agricultavel?: boolean
    area_vegetacao?: boolean
    cidade?: boolean
    estado?: boolean
  }

  export type FazendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_fazenda" | "id_produtor" | "nome_fazenda" | "area_total" | "area_agricultavel" | "area_vegetacao" | "cidade" | "estado", ExtArgs["result"]["fazenda"]>
  export type FazendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_produtor?: boolean | Fazenda$tb_produtorArgs<ExtArgs>
    tb_safra?: boolean | Fazenda$tb_safraArgs<ExtArgs>
    _count?: boolean | FazendaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FazendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_produtor?: boolean | Fazenda$tb_produtorArgs<ExtArgs>
  }
  export type FazendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_produtor?: boolean | Fazenda$tb_produtorArgs<ExtArgs>
  }

  export type $FazendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fazenda"
    objects: {
      tb_produtor: Prisma.$ProdutorPayload<ExtArgs> | null
      tb_safra: Prisma.$SafraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_fazenda: number
      id_produtor: number
      nome_fazenda: string
      area_total: Prisma.Decimal
      area_agricultavel: Prisma.Decimal
      area_vegetacao: Prisma.Decimal
      cidade: string
      estado: string
    }, ExtArgs["result"]["fazenda"]>
    composites: {}
  }

  type FazendaGetPayload<S extends boolean | null | undefined | FazendaDefaultArgs> = $Result.GetResult<Prisma.$FazendaPayload, S>

  type FazendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FazendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FazendaCountAggregateInputType | true
    }

  export interface FazendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fazenda'], meta: { name: 'Fazenda' } }
    /**
     * Find zero or one Fazenda that matches the filter.
     * @param {FazendaFindUniqueArgs} args - Arguments to find a Fazenda
     * @example
     * // Get one Fazenda
     * const fazenda = await prisma.fazenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FazendaFindUniqueArgs>(args: SelectSubset<T, FazendaFindUniqueArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fazenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FazendaFindUniqueOrThrowArgs} args - Arguments to find a Fazenda
     * @example
     * // Get one Fazenda
     * const fazenda = await prisma.fazenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FazendaFindUniqueOrThrowArgs>(args: SelectSubset<T, FazendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fazenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FazendaFindFirstArgs} args - Arguments to find a Fazenda
     * @example
     * // Get one Fazenda
     * const fazenda = await prisma.fazenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FazendaFindFirstArgs>(args?: SelectSubset<T, FazendaFindFirstArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fazenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FazendaFindFirstOrThrowArgs} args - Arguments to find a Fazenda
     * @example
     * // Get one Fazenda
     * const fazenda = await prisma.fazenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FazendaFindFirstOrThrowArgs>(args?: SelectSubset<T, FazendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fazendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FazendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fazendas
     * const fazendas = await prisma.fazenda.findMany()
     * 
     * // Get first 10 Fazendas
     * const fazendas = await prisma.fazenda.findMany({ take: 10 })
     * 
     * // Only select the `id_fazenda`
     * const fazendaWithId_fazendaOnly = await prisma.fazenda.findMany({ select: { id_fazenda: true } })
     * 
     */
    findMany<T extends FazendaFindManyArgs>(args?: SelectSubset<T, FazendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fazenda.
     * @param {FazendaCreateArgs} args - Arguments to create a Fazenda.
     * @example
     * // Create one Fazenda
     * const Fazenda = await prisma.fazenda.create({
     *   data: {
     *     // ... data to create a Fazenda
     *   }
     * })
     * 
     */
    create<T extends FazendaCreateArgs>(args: SelectSubset<T, FazendaCreateArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fazendas.
     * @param {FazendaCreateManyArgs} args - Arguments to create many Fazendas.
     * @example
     * // Create many Fazendas
     * const fazenda = await prisma.fazenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FazendaCreateManyArgs>(args?: SelectSubset<T, FazendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fazendas and returns the data saved in the database.
     * @param {FazendaCreateManyAndReturnArgs} args - Arguments to create many Fazendas.
     * @example
     * // Create many Fazendas
     * const fazenda = await prisma.fazenda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fazendas and only return the `id_fazenda`
     * const fazendaWithId_fazendaOnly = await prisma.fazenda.createManyAndReturn({
     *   select: { id_fazenda: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FazendaCreateManyAndReturnArgs>(args?: SelectSubset<T, FazendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fazenda.
     * @param {FazendaDeleteArgs} args - Arguments to delete one Fazenda.
     * @example
     * // Delete one Fazenda
     * const Fazenda = await prisma.fazenda.delete({
     *   where: {
     *     // ... filter to delete one Fazenda
     *   }
     * })
     * 
     */
    delete<T extends FazendaDeleteArgs>(args: SelectSubset<T, FazendaDeleteArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fazenda.
     * @param {FazendaUpdateArgs} args - Arguments to update one Fazenda.
     * @example
     * // Update one Fazenda
     * const fazenda = await prisma.fazenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FazendaUpdateArgs>(args: SelectSubset<T, FazendaUpdateArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fazendas.
     * @param {FazendaDeleteManyArgs} args - Arguments to filter Fazendas to delete.
     * @example
     * // Delete a few Fazendas
     * const { count } = await prisma.fazenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FazendaDeleteManyArgs>(args?: SelectSubset<T, FazendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fazendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FazendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fazendas
     * const fazenda = await prisma.fazenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FazendaUpdateManyArgs>(args: SelectSubset<T, FazendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fazendas and returns the data updated in the database.
     * @param {FazendaUpdateManyAndReturnArgs} args - Arguments to update many Fazendas.
     * @example
     * // Update many Fazendas
     * const fazenda = await prisma.fazenda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fazendas and only return the `id_fazenda`
     * const fazendaWithId_fazendaOnly = await prisma.fazenda.updateManyAndReturn({
     *   select: { id_fazenda: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FazendaUpdateManyAndReturnArgs>(args: SelectSubset<T, FazendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fazenda.
     * @param {FazendaUpsertArgs} args - Arguments to update or create a Fazenda.
     * @example
     * // Update or create a Fazenda
     * const fazenda = await prisma.fazenda.upsert({
     *   create: {
     *     // ... data to create a Fazenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fazenda we want to update
     *   }
     * })
     */
    upsert<T extends FazendaUpsertArgs>(args: SelectSubset<T, FazendaUpsertArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fazendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FazendaCountArgs} args - Arguments to filter Fazendas to count.
     * @example
     * // Count the number of Fazendas
     * const count = await prisma.fazenda.count({
     *   where: {
     *     // ... the filter for the Fazendas we want to count
     *   }
     * })
    **/
    count<T extends FazendaCountArgs>(
      args?: Subset<T, FazendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FazendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fazenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FazendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FazendaAggregateArgs>(args: Subset<T, FazendaAggregateArgs>): Prisma.PrismaPromise<GetFazendaAggregateType<T>>

    /**
     * Group by Fazenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FazendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FazendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FazendaGroupByArgs['orderBy'] }
        : { orderBy?: FazendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FazendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFazendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fazenda model
   */
  readonly fields: FazendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fazenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FazendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_produtor<T extends Fazenda$tb_produtorArgs<ExtArgs> = {}>(args?: Subset<T, Fazenda$tb_produtorArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tb_safra<T extends Fazenda$tb_safraArgs<ExtArgs> = {}>(args?: Subset<T, Fazenda$tb_safraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fazenda model
   */
  interface FazendaFieldRefs {
    readonly id_fazenda: FieldRef<"Fazenda", 'Int'>
    readonly id_produtor: FieldRef<"Fazenda", 'Int'>
    readonly nome_fazenda: FieldRef<"Fazenda", 'String'>
    readonly area_total: FieldRef<"Fazenda", 'Decimal'>
    readonly area_agricultavel: FieldRef<"Fazenda", 'Decimal'>
    readonly area_vegetacao: FieldRef<"Fazenda", 'Decimal'>
    readonly cidade: FieldRef<"Fazenda", 'String'>
    readonly estado: FieldRef<"Fazenda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fazenda findUnique
   */
  export type FazendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * Filter, which Fazenda to fetch.
     */
    where: FazendaWhereUniqueInput
  }

  /**
   * Fazenda findUniqueOrThrow
   */
  export type FazendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * Filter, which Fazenda to fetch.
     */
    where: FazendaWhereUniqueInput
  }

  /**
   * Fazenda findFirst
   */
  export type FazendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * Filter, which Fazenda to fetch.
     */
    where?: FazendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fazendas to fetch.
     */
    orderBy?: FazendaOrderByWithRelationInput | FazendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fazendas.
     */
    cursor?: FazendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fazendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fazendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fazendas.
     */
    distinct?: FazendaScalarFieldEnum | FazendaScalarFieldEnum[]
  }

  /**
   * Fazenda findFirstOrThrow
   */
  export type FazendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * Filter, which Fazenda to fetch.
     */
    where?: FazendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fazendas to fetch.
     */
    orderBy?: FazendaOrderByWithRelationInput | FazendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fazendas.
     */
    cursor?: FazendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fazendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fazendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fazendas.
     */
    distinct?: FazendaScalarFieldEnum | FazendaScalarFieldEnum[]
  }

  /**
   * Fazenda findMany
   */
  export type FazendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * Filter, which Fazendas to fetch.
     */
    where?: FazendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fazendas to fetch.
     */
    orderBy?: FazendaOrderByWithRelationInput | FazendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fazendas.
     */
    cursor?: FazendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fazendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fazendas.
     */
    skip?: number
    distinct?: FazendaScalarFieldEnum | FazendaScalarFieldEnum[]
  }

  /**
   * Fazenda create
   */
  export type FazendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fazenda.
     */
    data: XOR<FazendaCreateInput, FazendaUncheckedCreateInput>
  }

  /**
   * Fazenda createMany
   */
  export type FazendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fazendas.
     */
    data: FazendaCreateManyInput | FazendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fazenda createManyAndReturn
   */
  export type FazendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * The data used to create many Fazendas.
     */
    data: FazendaCreateManyInput | FazendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fazenda update
   */
  export type FazendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fazenda.
     */
    data: XOR<FazendaUpdateInput, FazendaUncheckedUpdateInput>
    /**
     * Choose, which Fazenda to update.
     */
    where: FazendaWhereUniqueInput
  }

  /**
   * Fazenda updateMany
   */
  export type FazendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fazendas.
     */
    data: XOR<FazendaUpdateManyMutationInput, FazendaUncheckedUpdateManyInput>
    /**
     * Filter which Fazendas to update
     */
    where?: FazendaWhereInput
    /**
     * Limit how many Fazendas to update.
     */
    limit?: number
  }

  /**
   * Fazenda updateManyAndReturn
   */
  export type FazendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * The data used to update Fazendas.
     */
    data: XOR<FazendaUpdateManyMutationInput, FazendaUncheckedUpdateManyInput>
    /**
     * Filter which Fazendas to update
     */
    where?: FazendaWhereInput
    /**
     * Limit how many Fazendas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fazenda upsert
   */
  export type FazendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fazenda to update in case it exists.
     */
    where: FazendaWhereUniqueInput
    /**
     * In case the Fazenda found by the `where` argument doesn't exist, create a new Fazenda with this data.
     */
    create: XOR<FazendaCreateInput, FazendaUncheckedCreateInput>
    /**
     * In case the Fazenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FazendaUpdateInput, FazendaUncheckedUpdateInput>
  }

  /**
   * Fazenda delete
   */
  export type FazendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    /**
     * Filter which Fazenda to delete.
     */
    where: FazendaWhereUniqueInput
  }

  /**
   * Fazenda deleteMany
   */
  export type FazendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fazendas to delete
     */
    where?: FazendaWhereInput
    /**
     * Limit how many Fazendas to delete.
     */
    limit?: number
  }

  /**
   * Fazenda.tb_produtor
   */
  export type Fazenda$tb_produtorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    where?: ProdutorWhereInput
  }

  /**
   * Fazenda.tb_safra
   */
  export type Fazenda$tb_safraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    where?: SafraWhereInput
    orderBy?: SafraOrderByWithRelationInput | SafraOrderByWithRelationInput[]
    cursor?: SafraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SafraScalarFieldEnum | SafraScalarFieldEnum[]
  }

  /**
   * Fazenda without action
   */
  export type FazendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
  }


  /**
   * Model Produtor
   */

  export type AggregateProdutor = {
    _count: ProdutorCountAggregateOutputType | null
    _avg: ProdutorAvgAggregateOutputType | null
    _sum: ProdutorSumAggregateOutputType | null
    _min: ProdutorMinAggregateOutputType | null
    _max: ProdutorMaxAggregateOutputType | null
  }

  export type ProdutorAvgAggregateOutputType = {
    id_produtor: number | null
  }

  export type ProdutorSumAggregateOutputType = {
    id_produtor: number | null
  }

  export type ProdutorMinAggregateOutputType = {
    id_produtor: number | null
    nome_produtor: string | null
    cpf_produtor: string | null
    cnpj_produtor: string | null
  }

  export type ProdutorMaxAggregateOutputType = {
    id_produtor: number | null
    nome_produtor: string | null
    cpf_produtor: string | null
    cnpj_produtor: string | null
  }

  export type ProdutorCountAggregateOutputType = {
    id_produtor: number
    nome_produtor: number
    cpf_produtor: number
    cnpj_produtor: number
    _all: number
  }


  export type ProdutorAvgAggregateInputType = {
    id_produtor?: true
  }

  export type ProdutorSumAggregateInputType = {
    id_produtor?: true
  }

  export type ProdutorMinAggregateInputType = {
    id_produtor?: true
    nome_produtor?: true
    cpf_produtor?: true
    cnpj_produtor?: true
  }

  export type ProdutorMaxAggregateInputType = {
    id_produtor?: true
    nome_produtor?: true
    cpf_produtor?: true
    cnpj_produtor?: true
  }

  export type ProdutorCountAggregateInputType = {
    id_produtor?: true
    nome_produtor?: true
    cpf_produtor?: true
    cnpj_produtor?: true
    _all?: true
  }

  export type ProdutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtor to aggregate.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtors
    **/
    _count?: true | ProdutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutorMaxAggregateInputType
  }

  export type GetProdutorAggregateType<T extends ProdutorAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutor[P]>
      : GetScalarType<T[P], AggregateProdutor[P]>
  }




  export type ProdutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutorWhereInput
    orderBy?: ProdutorOrderByWithAggregationInput | ProdutorOrderByWithAggregationInput[]
    by: ProdutorScalarFieldEnum[] | ProdutorScalarFieldEnum
    having?: ProdutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutorCountAggregateInputType | true
    _avg?: ProdutorAvgAggregateInputType
    _sum?: ProdutorSumAggregateInputType
    _min?: ProdutorMinAggregateInputType
    _max?: ProdutorMaxAggregateInputType
  }

  export type ProdutorGroupByOutputType = {
    id_produtor: number
    nome_produtor: string
    cpf_produtor: string | null
    cnpj_produtor: string | null
    _count: ProdutorCountAggregateOutputType | null
    _avg: ProdutorAvgAggregateOutputType | null
    _sum: ProdutorSumAggregateOutputType | null
    _min: ProdutorMinAggregateOutputType | null
    _max: ProdutorMaxAggregateOutputType | null
  }

  type GetProdutorGroupByPayload<T extends ProdutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutorGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutorGroupByOutputType[P]>
        }
      >
    >


  export type ProdutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produtor?: boolean
    nome_produtor?: boolean
    cpf_produtor?: boolean
    cnpj_produtor?: boolean
    tb_fazenda?: boolean | Produtor$tb_fazendaArgs<ExtArgs>
    _count?: boolean | ProdutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtor"]>

  export type ProdutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produtor?: boolean
    nome_produtor?: boolean
    cpf_produtor?: boolean
    cnpj_produtor?: boolean
  }, ExtArgs["result"]["produtor"]>

  export type ProdutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produtor?: boolean
    nome_produtor?: boolean
    cpf_produtor?: boolean
    cnpj_produtor?: boolean
  }, ExtArgs["result"]["produtor"]>

  export type ProdutorSelectScalar = {
    id_produtor?: boolean
    nome_produtor?: boolean
    cpf_produtor?: boolean
    cnpj_produtor?: boolean
  }

  export type ProdutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produtor" | "nome_produtor" | "cpf_produtor" | "cnpj_produtor", ExtArgs["result"]["produtor"]>
  export type ProdutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_fazenda?: boolean | Produtor$tb_fazendaArgs<ExtArgs>
    _count?: boolean | ProdutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produtor"
    objects: {
      tb_fazenda: Prisma.$FazendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produtor: number
      nome_produtor: string
      cpf_produtor: string | null
      cnpj_produtor: string | null
    }, ExtArgs["result"]["produtor"]>
    composites: {}
  }

  type ProdutorGetPayload<S extends boolean | null | undefined | ProdutorDefaultArgs> = $Result.GetResult<Prisma.$ProdutorPayload, S>

  type ProdutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutorCountAggregateInputType | true
    }

  export interface ProdutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produtor'], meta: { name: 'Produtor' } }
    /**
     * Find zero or one Produtor that matches the filter.
     * @param {ProdutorFindUniqueArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutorFindUniqueArgs>(args: SelectSubset<T, ProdutorFindUniqueArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produtor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutorFindUniqueOrThrowArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorFindFirstArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutorFindFirstArgs>(args?: SelectSubset<T, ProdutorFindFirstArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorFindFirstOrThrowArgs} args - Arguments to find a Produtor
     * @example
     * // Get one Produtor
     * const produtor = await prisma.produtor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtors
     * const produtors = await prisma.produtor.findMany()
     * 
     * // Get first 10 Produtors
     * const produtors = await prisma.produtor.findMany({ take: 10 })
     * 
     * // Only select the `id_produtor`
     * const produtorWithId_produtorOnly = await prisma.produtor.findMany({ select: { id_produtor: true } })
     * 
     */
    findMany<T extends ProdutorFindManyArgs>(args?: SelectSubset<T, ProdutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produtor.
     * @param {ProdutorCreateArgs} args - Arguments to create a Produtor.
     * @example
     * // Create one Produtor
     * const Produtor = await prisma.produtor.create({
     *   data: {
     *     // ... data to create a Produtor
     *   }
     * })
     * 
     */
    create<T extends ProdutorCreateArgs>(args: SelectSubset<T, ProdutorCreateArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtors.
     * @param {ProdutorCreateManyArgs} args - Arguments to create many Produtors.
     * @example
     * // Create many Produtors
     * const produtor = await prisma.produtor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutorCreateManyArgs>(args?: SelectSubset<T, ProdutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtors and returns the data saved in the database.
     * @param {ProdutorCreateManyAndReturnArgs} args - Arguments to create many Produtors.
     * @example
     * // Create many Produtors
     * const produtor = await prisma.produtor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtors and only return the `id_produtor`
     * const produtorWithId_produtorOnly = await prisma.produtor.createManyAndReturn({
     *   select: { id_produtor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produtor.
     * @param {ProdutorDeleteArgs} args - Arguments to delete one Produtor.
     * @example
     * // Delete one Produtor
     * const Produtor = await prisma.produtor.delete({
     *   where: {
     *     // ... filter to delete one Produtor
     *   }
     * })
     * 
     */
    delete<T extends ProdutorDeleteArgs>(args: SelectSubset<T, ProdutorDeleteArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produtor.
     * @param {ProdutorUpdateArgs} args - Arguments to update one Produtor.
     * @example
     * // Update one Produtor
     * const produtor = await prisma.produtor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutorUpdateArgs>(args: SelectSubset<T, ProdutorUpdateArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtors.
     * @param {ProdutorDeleteManyArgs} args - Arguments to filter Produtors to delete.
     * @example
     * // Delete a few Produtors
     * const { count } = await prisma.produtor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutorDeleteManyArgs>(args?: SelectSubset<T, ProdutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtors
     * const produtor = await prisma.produtor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutorUpdateManyArgs>(args: SelectSubset<T, ProdutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtors and returns the data updated in the database.
     * @param {ProdutorUpdateManyAndReturnArgs} args - Arguments to update many Produtors.
     * @example
     * // Update many Produtors
     * const produtor = await prisma.produtor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtors and only return the `id_produtor`
     * const produtorWithId_produtorOnly = await prisma.produtor.updateManyAndReturn({
     *   select: { id_produtor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdutorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produtor.
     * @param {ProdutorUpsertArgs} args - Arguments to update or create a Produtor.
     * @example
     * // Update or create a Produtor
     * const produtor = await prisma.produtor.upsert({
     *   create: {
     *     // ... data to create a Produtor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtor we want to update
     *   }
     * })
     */
    upsert<T extends ProdutorUpsertArgs>(args: SelectSubset<T, ProdutorUpsertArgs<ExtArgs>>): Prisma__ProdutorClient<$Result.GetResult<Prisma.$ProdutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorCountArgs} args - Arguments to filter Produtors to count.
     * @example
     * // Count the number of Produtors
     * const count = await prisma.produtor.count({
     *   where: {
     *     // ... the filter for the Produtors we want to count
     *   }
     * })
    **/
    count<T extends ProdutorCountArgs>(
      args?: Subset<T, ProdutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutorAggregateArgs>(args: Subset<T, ProdutorAggregateArgs>): Prisma.PrismaPromise<GetProdutorAggregateType<T>>

    /**
     * Group by Produtor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutorGroupByArgs['orderBy'] }
        : { orderBy?: ProdutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produtor model
   */
  readonly fields: ProdutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produtor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_fazenda<T extends Produtor$tb_fazendaArgs<ExtArgs> = {}>(args?: Subset<T, Produtor$tb_fazendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produtor model
   */
  interface ProdutorFieldRefs {
    readonly id_produtor: FieldRef<"Produtor", 'Int'>
    readonly nome_produtor: FieldRef<"Produtor", 'String'>
    readonly cpf_produtor: FieldRef<"Produtor", 'String'>
    readonly cnpj_produtor: FieldRef<"Produtor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produtor findUnique
   */
  export type ProdutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor findUniqueOrThrow
   */
  export type ProdutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor findFirst
   */
  export type ProdutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtors.
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtors.
     */
    distinct?: ProdutorScalarFieldEnum | ProdutorScalarFieldEnum[]
  }

  /**
   * Produtor findFirstOrThrow
   */
  export type ProdutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtor to fetch.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtors.
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtors.
     */
    distinct?: ProdutorScalarFieldEnum | ProdutorScalarFieldEnum[]
  }

  /**
   * Produtor findMany
   */
  export type ProdutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter, which Produtors to fetch.
     */
    where?: ProdutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtors to fetch.
     */
    orderBy?: ProdutorOrderByWithRelationInput | ProdutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtors.
     */
    cursor?: ProdutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtors.
     */
    skip?: number
    distinct?: ProdutorScalarFieldEnum | ProdutorScalarFieldEnum[]
  }

  /**
   * Produtor create
   */
  export type ProdutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Produtor.
     */
    data: XOR<ProdutorCreateInput, ProdutorUncheckedCreateInput>
  }

  /**
   * Produtor createMany
   */
  export type ProdutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtors.
     */
    data: ProdutorCreateManyInput | ProdutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produtor createManyAndReturn
   */
  export type ProdutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * The data used to create many Produtors.
     */
    data: ProdutorCreateManyInput | ProdutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produtor update
   */
  export type ProdutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Produtor.
     */
    data: XOR<ProdutorUpdateInput, ProdutorUncheckedUpdateInput>
    /**
     * Choose, which Produtor to update.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor updateMany
   */
  export type ProdutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtors.
     */
    data: XOR<ProdutorUpdateManyMutationInput, ProdutorUncheckedUpdateManyInput>
    /**
     * Filter which Produtors to update
     */
    where?: ProdutorWhereInput
    /**
     * Limit how many Produtors to update.
     */
    limit?: number
  }

  /**
   * Produtor updateManyAndReturn
   */
  export type ProdutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * The data used to update Produtors.
     */
    data: XOR<ProdutorUpdateManyMutationInput, ProdutorUncheckedUpdateManyInput>
    /**
     * Filter which Produtors to update
     */
    where?: ProdutorWhereInput
    /**
     * Limit how many Produtors to update.
     */
    limit?: number
  }

  /**
   * Produtor upsert
   */
  export type ProdutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Produtor to update in case it exists.
     */
    where: ProdutorWhereUniqueInput
    /**
     * In case the Produtor found by the `where` argument doesn't exist, create a new Produtor with this data.
     */
    create: XOR<ProdutorCreateInput, ProdutorUncheckedCreateInput>
    /**
     * In case the Produtor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutorUpdateInput, ProdutorUncheckedUpdateInput>
  }

  /**
   * Produtor delete
   */
  export type ProdutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
    /**
     * Filter which Produtor to delete.
     */
    where: ProdutorWhereUniqueInput
  }

  /**
   * Produtor deleteMany
   */
  export type ProdutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtors to delete
     */
    where?: ProdutorWhereInput
    /**
     * Limit how many Produtors to delete.
     */
    limit?: number
  }

  /**
   * Produtor.tb_fazenda
   */
  export type Produtor$tb_fazendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    where?: FazendaWhereInput
    orderBy?: FazendaOrderByWithRelationInput | FazendaOrderByWithRelationInput[]
    cursor?: FazendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FazendaScalarFieldEnum | FazendaScalarFieldEnum[]
  }

  /**
   * Produtor without action
   */
  export type ProdutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtor
     */
    select?: ProdutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtor
     */
    omit?: ProdutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutorInclude<ExtArgs> | null
  }


  /**
   * Model Safra
   */

  export type AggregateSafra = {
    _count: SafraCountAggregateOutputType | null
    _avg: SafraAvgAggregateOutputType | null
    _sum: SafraSumAggregateOutputType | null
    _min: SafraMinAggregateOutputType | null
    _max: SafraMaxAggregateOutputType | null
  }

  export type SafraAvgAggregateOutputType = {
    id_safra: number | null
    id_fazenda: number | null
    id_culturas: number | null
    ano: number | null
  }

  export type SafraSumAggregateOutputType = {
    id_safra: number | null
    id_fazenda: number | null
    id_culturas: number | null
    ano: number | null
  }

  export type SafraMinAggregateOutputType = {
    id_safra: number | null
    id_fazenda: number | null
    id_culturas: number | null
    ano: number | null
  }

  export type SafraMaxAggregateOutputType = {
    id_safra: number | null
    id_fazenda: number | null
    id_culturas: number | null
    ano: number | null
  }

  export type SafraCountAggregateOutputType = {
    id_safra: number
    id_fazenda: number
    id_culturas: number
    ano: number
    _all: number
  }


  export type SafraAvgAggregateInputType = {
    id_safra?: true
    id_fazenda?: true
    id_culturas?: true
    ano?: true
  }

  export type SafraSumAggregateInputType = {
    id_safra?: true
    id_fazenda?: true
    id_culturas?: true
    ano?: true
  }

  export type SafraMinAggregateInputType = {
    id_safra?: true
    id_fazenda?: true
    id_culturas?: true
    ano?: true
  }

  export type SafraMaxAggregateInputType = {
    id_safra?: true
    id_fazenda?: true
    id_culturas?: true
    ano?: true
  }

  export type SafraCountAggregateInputType = {
    id_safra?: true
    id_fazenda?: true
    id_culturas?: true
    ano?: true
    _all?: true
  }

  export type SafraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Safra to aggregate.
     */
    where?: SafraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Safras to fetch.
     */
    orderBy?: SafraOrderByWithRelationInput | SafraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SafraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Safras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Safras
    **/
    _count?: true | SafraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SafraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SafraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SafraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SafraMaxAggregateInputType
  }

  export type GetSafraAggregateType<T extends SafraAggregateArgs> = {
        [P in keyof T & keyof AggregateSafra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSafra[P]>
      : GetScalarType<T[P], AggregateSafra[P]>
  }




  export type SafraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafraWhereInput
    orderBy?: SafraOrderByWithAggregationInput | SafraOrderByWithAggregationInput[]
    by: SafraScalarFieldEnum[] | SafraScalarFieldEnum
    having?: SafraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SafraCountAggregateInputType | true
    _avg?: SafraAvgAggregateInputType
    _sum?: SafraSumAggregateInputType
    _min?: SafraMinAggregateInputType
    _max?: SafraMaxAggregateInputType
  }

  export type SafraGroupByOutputType = {
    id_safra: number
    id_fazenda: number
    id_culturas: number
    ano: number
    _count: SafraCountAggregateOutputType | null
    _avg: SafraAvgAggregateOutputType | null
    _sum: SafraSumAggregateOutputType | null
    _min: SafraMinAggregateOutputType | null
    _max: SafraMaxAggregateOutputType | null
  }

  type GetSafraGroupByPayload<T extends SafraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SafraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SafraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SafraGroupByOutputType[P]>
            : GetScalarType<T[P], SafraGroupByOutputType[P]>
        }
      >
    >


  export type SafraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_safra?: boolean
    id_fazenda?: boolean
    id_culturas?: boolean
    ano?: boolean
    tb_culturas?: boolean | Safra$tb_culturasArgs<ExtArgs>
    tb_fazenda?: boolean | Safra$tb_fazendaArgs<ExtArgs>
  }, ExtArgs["result"]["safra"]>

  export type SafraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_safra?: boolean
    id_fazenda?: boolean
    id_culturas?: boolean
    ano?: boolean
    tb_culturas?: boolean | Safra$tb_culturasArgs<ExtArgs>
    tb_fazenda?: boolean | Safra$tb_fazendaArgs<ExtArgs>
  }, ExtArgs["result"]["safra"]>

  export type SafraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_safra?: boolean
    id_fazenda?: boolean
    id_culturas?: boolean
    ano?: boolean
    tb_culturas?: boolean | Safra$tb_culturasArgs<ExtArgs>
    tb_fazenda?: boolean | Safra$tb_fazendaArgs<ExtArgs>
  }, ExtArgs["result"]["safra"]>

  export type SafraSelectScalar = {
    id_safra?: boolean
    id_fazenda?: boolean
    id_culturas?: boolean
    ano?: boolean
  }

  export type SafraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_safra" | "id_fazenda" | "id_culturas" | "ano", ExtArgs["result"]["safra"]>
  export type SafraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_culturas?: boolean | Safra$tb_culturasArgs<ExtArgs>
    tb_fazenda?: boolean | Safra$tb_fazendaArgs<ExtArgs>
  }
  export type SafraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_culturas?: boolean | Safra$tb_culturasArgs<ExtArgs>
    tb_fazenda?: boolean | Safra$tb_fazendaArgs<ExtArgs>
  }
  export type SafraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_culturas?: boolean | Safra$tb_culturasArgs<ExtArgs>
    tb_fazenda?: boolean | Safra$tb_fazendaArgs<ExtArgs>
  }

  export type $SafraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Safra"
    objects: {
      tb_culturas: Prisma.$CulturasPayload<ExtArgs> | null
      tb_fazenda: Prisma.$FazendaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_safra: number
      id_fazenda: number
      id_culturas: number
      ano: number
    }, ExtArgs["result"]["safra"]>
    composites: {}
  }

  type SafraGetPayload<S extends boolean | null | undefined | SafraDefaultArgs> = $Result.GetResult<Prisma.$SafraPayload, S>

  type SafraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SafraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SafraCountAggregateInputType | true
    }

  export interface SafraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Safra'], meta: { name: 'Safra' } }
    /**
     * Find zero or one Safra that matches the filter.
     * @param {SafraFindUniqueArgs} args - Arguments to find a Safra
     * @example
     * // Get one Safra
     * const safra = await prisma.safra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SafraFindUniqueArgs>(args: SelectSubset<T, SafraFindUniqueArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Safra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SafraFindUniqueOrThrowArgs} args - Arguments to find a Safra
     * @example
     * // Get one Safra
     * const safra = await prisma.safra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SafraFindUniqueOrThrowArgs>(args: SelectSubset<T, SafraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Safra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafraFindFirstArgs} args - Arguments to find a Safra
     * @example
     * // Get one Safra
     * const safra = await prisma.safra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SafraFindFirstArgs>(args?: SelectSubset<T, SafraFindFirstArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Safra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafraFindFirstOrThrowArgs} args - Arguments to find a Safra
     * @example
     * // Get one Safra
     * const safra = await prisma.safra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SafraFindFirstOrThrowArgs>(args?: SelectSubset<T, SafraFindFirstOrThrowArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Safras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Safras
     * const safras = await prisma.safra.findMany()
     * 
     * // Get first 10 Safras
     * const safras = await prisma.safra.findMany({ take: 10 })
     * 
     * // Only select the `id_safra`
     * const safraWithId_safraOnly = await prisma.safra.findMany({ select: { id_safra: true } })
     * 
     */
    findMany<T extends SafraFindManyArgs>(args?: SelectSubset<T, SafraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Safra.
     * @param {SafraCreateArgs} args - Arguments to create a Safra.
     * @example
     * // Create one Safra
     * const Safra = await prisma.safra.create({
     *   data: {
     *     // ... data to create a Safra
     *   }
     * })
     * 
     */
    create<T extends SafraCreateArgs>(args: SelectSubset<T, SafraCreateArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Safras.
     * @param {SafraCreateManyArgs} args - Arguments to create many Safras.
     * @example
     * // Create many Safras
     * const safra = await prisma.safra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SafraCreateManyArgs>(args?: SelectSubset<T, SafraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Safras and returns the data saved in the database.
     * @param {SafraCreateManyAndReturnArgs} args - Arguments to create many Safras.
     * @example
     * // Create many Safras
     * const safra = await prisma.safra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Safras and only return the `id_safra`
     * const safraWithId_safraOnly = await prisma.safra.createManyAndReturn({
     *   select: { id_safra: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SafraCreateManyAndReturnArgs>(args?: SelectSubset<T, SafraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Safra.
     * @param {SafraDeleteArgs} args - Arguments to delete one Safra.
     * @example
     * // Delete one Safra
     * const Safra = await prisma.safra.delete({
     *   where: {
     *     // ... filter to delete one Safra
     *   }
     * })
     * 
     */
    delete<T extends SafraDeleteArgs>(args: SelectSubset<T, SafraDeleteArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Safra.
     * @param {SafraUpdateArgs} args - Arguments to update one Safra.
     * @example
     * // Update one Safra
     * const safra = await prisma.safra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SafraUpdateArgs>(args: SelectSubset<T, SafraUpdateArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Safras.
     * @param {SafraDeleteManyArgs} args - Arguments to filter Safras to delete.
     * @example
     * // Delete a few Safras
     * const { count } = await prisma.safra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SafraDeleteManyArgs>(args?: SelectSubset<T, SafraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Safras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Safras
     * const safra = await prisma.safra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SafraUpdateManyArgs>(args: SelectSubset<T, SafraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Safras and returns the data updated in the database.
     * @param {SafraUpdateManyAndReturnArgs} args - Arguments to update many Safras.
     * @example
     * // Update many Safras
     * const safra = await prisma.safra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Safras and only return the `id_safra`
     * const safraWithId_safraOnly = await prisma.safra.updateManyAndReturn({
     *   select: { id_safra: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SafraUpdateManyAndReturnArgs>(args: SelectSubset<T, SafraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Safra.
     * @param {SafraUpsertArgs} args - Arguments to update or create a Safra.
     * @example
     * // Update or create a Safra
     * const safra = await prisma.safra.upsert({
     *   create: {
     *     // ... data to create a Safra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Safra we want to update
     *   }
     * })
     */
    upsert<T extends SafraUpsertArgs>(args: SelectSubset<T, SafraUpsertArgs<ExtArgs>>): Prisma__SafraClient<$Result.GetResult<Prisma.$SafraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Safras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafraCountArgs} args - Arguments to filter Safras to count.
     * @example
     * // Count the number of Safras
     * const count = await prisma.safra.count({
     *   where: {
     *     // ... the filter for the Safras we want to count
     *   }
     * })
    **/
    count<T extends SafraCountArgs>(
      args?: Subset<T, SafraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SafraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Safra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SafraAggregateArgs>(args: Subset<T, SafraAggregateArgs>): Prisma.PrismaPromise<GetSafraAggregateType<T>>

    /**
     * Group by Safra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SafraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SafraGroupByArgs['orderBy'] }
        : { orderBy?: SafraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SafraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSafraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Safra model
   */
  readonly fields: SafraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Safra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SafraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_culturas<T extends Safra$tb_culturasArgs<ExtArgs> = {}>(args?: Subset<T, Safra$tb_culturasArgs<ExtArgs>>): Prisma__CulturasClient<$Result.GetResult<Prisma.$CulturasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tb_fazenda<T extends Safra$tb_fazendaArgs<ExtArgs> = {}>(args?: Subset<T, Safra$tb_fazendaArgs<ExtArgs>>): Prisma__FazendaClient<$Result.GetResult<Prisma.$FazendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Safra model
   */
  interface SafraFieldRefs {
    readonly id_safra: FieldRef<"Safra", 'Int'>
    readonly id_fazenda: FieldRef<"Safra", 'Int'>
    readonly id_culturas: FieldRef<"Safra", 'Int'>
    readonly ano: FieldRef<"Safra", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Safra findUnique
   */
  export type SafraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * Filter, which Safra to fetch.
     */
    where: SafraWhereUniqueInput
  }

  /**
   * Safra findUniqueOrThrow
   */
  export type SafraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * Filter, which Safra to fetch.
     */
    where: SafraWhereUniqueInput
  }

  /**
   * Safra findFirst
   */
  export type SafraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * Filter, which Safra to fetch.
     */
    where?: SafraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Safras to fetch.
     */
    orderBy?: SafraOrderByWithRelationInput | SafraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Safras.
     */
    cursor?: SafraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Safras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Safras.
     */
    distinct?: SafraScalarFieldEnum | SafraScalarFieldEnum[]
  }

  /**
   * Safra findFirstOrThrow
   */
  export type SafraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * Filter, which Safra to fetch.
     */
    where?: SafraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Safras to fetch.
     */
    orderBy?: SafraOrderByWithRelationInput | SafraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Safras.
     */
    cursor?: SafraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Safras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Safras.
     */
    distinct?: SafraScalarFieldEnum | SafraScalarFieldEnum[]
  }

  /**
   * Safra findMany
   */
  export type SafraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * Filter, which Safras to fetch.
     */
    where?: SafraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Safras to fetch.
     */
    orderBy?: SafraOrderByWithRelationInput | SafraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Safras.
     */
    cursor?: SafraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Safras.
     */
    skip?: number
    distinct?: SafraScalarFieldEnum | SafraScalarFieldEnum[]
  }

  /**
   * Safra create
   */
  export type SafraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * The data needed to create a Safra.
     */
    data: XOR<SafraCreateInput, SafraUncheckedCreateInput>
  }

  /**
   * Safra createMany
   */
  export type SafraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Safras.
     */
    data: SafraCreateManyInput | SafraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Safra createManyAndReturn
   */
  export type SafraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * The data used to create many Safras.
     */
    data: SafraCreateManyInput | SafraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Safra update
   */
  export type SafraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * The data needed to update a Safra.
     */
    data: XOR<SafraUpdateInput, SafraUncheckedUpdateInput>
    /**
     * Choose, which Safra to update.
     */
    where: SafraWhereUniqueInput
  }

  /**
   * Safra updateMany
   */
  export type SafraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Safras.
     */
    data: XOR<SafraUpdateManyMutationInput, SafraUncheckedUpdateManyInput>
    /**
     * Filter which Safras to update
     */
    where?: SafraWhereInput
    /**
     * Limit how many Safras to update.
     */
    limit?: number
  }

  /**
   * Safra updateManyAndReturn
   */
  export type SafraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * The data used to update Safras.
     */
    data: XOR<SafraUpdateManyMutationInput, SafraUncheckedUpdateManyInput>
    /**
     * Filter which Safras to update
     */
    where?: SafraWhereInput
    /**
     * Limit how many Safras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Safra upsert
   */
  export type SafraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * The filter to search for the Safra to update in case it exists.
     */
    where: SafraWhereUniqueInput
    /**
     * In case the Safra found by the `where` argument doesn't exist, create a new Safra with this data.
     */
    create: XOR<SafraCreateInput, SafraUncheckedCreateInput>
    /**
     * In case the Safra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SafraUpdateInput, SafraUncheckedUpdateInput>
  }

  /**
   * Safra delete
   */
  export type SafraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
    /**
     * Filter which Safra to delete.
     */
    where: SafraWhereUniqueInput
  }

  /**
   * Safra deleteMany
   */
  export type SafraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Safras to delete
     */
    where?: SafraWhereInput
    /**
     * Limit how many Safras to delete.
     */
    limit?: number
  }

  /**
   * Safra.tb_culturas
   */
  export type Safra$tb_culturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Culturas
     */
    select?: CulturasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Culturas
     */
    omit?: CulturasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CulturasInclude<ExtArgs> | null
    where?: CulturasWhereInput
  }

  /**
   * Safra.tb_fazenda
   */
  export type Safra$tb_fazendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fazenda
     */
    select?: FazendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fazenda
     */
    omit?: FazendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FazendaInclude<ExtArgs> | null
    where?: FazendaWhereInput
  }

  /**
   * Safra without action
   */
  export type SafraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Safra
     */
    select?: SafraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Safra
     */
    omit?: SafraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafraInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CulturasScalarFieldEnum: {
    id_culturas: 'id_culturas',
    cultura_plantada: 'cultura_plantada'
  };

  export type CulturasScalarFieldEnum = (typeof CulturasScalarFieldEnum)[keyof typeof CulturasScalarFieldEnum]


  export const FazendaScalarFieldEnum: {
    id_fazenda: 'id_fazenda',
    id_produtor: 'id_produtor',
    nome_fazenda: 'nome_fazenda',
    area_total: 'area_total',
    area_agricultavel: 'area_agricultavel',
    area_vegetacao: 'area_vegetacao',
    cidade: 'cidade',
    estado: 'estado'
  };

  export type FazendaScalarFieldEnum = (typeof FazendaScalarFieldEnum)[keyof typeof FazendaScalarFieldEnum]


  export const ProdutorScalarFieldEnum: {
    id_produtor: 'id_produtor',
    nome_produtor: 'nome_produtor',
    cpf_produtor: 'cpf_produtor',
    cnpj_produtor: 'cnpj_produtor'
  };

  export type ProdutorScalarFieldEnum = (typeof ProdutorScalarFieldEnum)[keyof typeof ProdutorScalarFieldEnum]


  export const SafraScalarFieldEnum: {
    id_safra: 'id_safra',
    id_fazenda: 'id_fazenda',
    id_culturas: 'id_culturas',
    ano: 'ano'
  };

  export type SafraScalarFieldEnum = (typeof SafraScalarFieldEnum)[keyof typeof SafraScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CulturasWhereInput = {
    AND?: CulturasWhereInput | CulturasWhereInput[]
    OR?: CulturasWhereInput[]
    NOT?: CulturasWhereInput | CulturasWhereInput[]
    id_culturas?: IntFilter<"Culturas"> | number
    cultura_plantada?: StringFilter<"Culturas"> | string
    tb_safra?: SafraListRelationFilter
  }

  export type CulturasOrderByWithRelationInput = {
    id_culturas?: SortOrder
    cultura_plantada?: SortOrder
    tb_safra?: SafraOrderByRelationAggregateInput
  }

  export type CulturasWhereUniqueInput = Prisma.AtLeast<{
    id_culturas?: number
    AND?: CulturasWhereInput | CulturasWhereInput[]
    OR?: CulturasWhereInput[]
    NOT?: CulturasWhereInput | CulturasWhereInput[]
    cultura_plantada?: StringFilter<"Culturas"> | string
    tb_safra?: SafraListRelationFilter
  }, "id_culturas">

  export type CulturasOrderByWithAggregationInput = {
    id_culturas?: SortOrder
    cultura_plantada?: SortOrder
    _count?: CulturasCountOrderByAggregateInput
    _avg?: CulturasAvgOrderByAggregateInput
    _max?: CulturasMaxOrderByAggregateInput
    _min?: CulturasMinOrderByAggregateInput
    _sum?: CulturasSumOrderByAggregateInput
  }

  export type CulturasScalarWhereWithAggregatesInput = {
    AND?: CulturasScalarWhereWithAggregatesInput | CulturasScalarWhereWithAggregatesInput[]
    OR?: CulturasScalarWhereWithAggregatesInput[]
    NOT?: CulturasScalarWhereWithAggregatesInput | CulturasScalarWhereWithAggregatesInput[]
    id_culturas?: IntWithAggregatesFilter<"Culturas"> | number
    cultura_plantada?: StringWithAggregatesFilter<"Culturas"> | string
  }

  export type FazendaWhereInput = {
    AND?: FazendaWhereInput | FazendaWhereInput[]
    OR?: FazendaWhereInput[]
    NOT?: FazendaWhereInput | FazendaWhereInput[]
    id_fazenda?: IntFilter<"Fazenda"> | number
    id_produtor?: IntFilter<"Fazenda"> | number
    nome_fazenda?: StringFilter<"Fazenda"> | string
    area_total?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    cidade?: StringFilter<"Fazenda"> | string
    estado?: StringFilter<"Fazenda"> | string
    tb_produtor?: XOR<ProdutorNullableScalarRelationFilter, ProdutorWhereInput> | null
    tb_safra?: SafraListRelationFilter
  }

  export type FazendaOrderByWithRelationInput = {
    id_fazenda?: SortOrder
    id_produtor?: SortOrder
    nome_fazenda?: SortOrder
    area_total?: SortOrder
    area_agricultavel?: SortOrder
    area_vegetacao?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    tb_produtor?: ProdutorOrderByWithRelationInput
    tb_safra?: SafraOrderByRelationAggregateInput
  }

  export type FazendaWhereUniqueInput = Prisma.AtLeast<{
    id_fazenda?: number
    AND?: FazendaWhereInput | FazendaWhereInput[]
    OR?: FazendaWhereInput[]
    NOT?: FazendaWhereInput | FazendaWhereInput[]
    id_produtor?: IntFilter<"Fazenda"> | number
    nome_fazenda?: StringFilter<"Fazenda"> | string
    area_total?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    cidade?: StringFilter<"Fazenda"> | string
    estado?: StringFilter<"Fazenda"> | string
    tb_produtor?: XOR<ProdutorNullableScalarRelationFilter, ProdutorWhereInput> | null
    tb_safra?: SafraListRelationFilter
  }, "id_fazenda">

  export type FazendaOrderByWithAggregationInput = {
    id_fazenda?: SortOrder
    id_produtor?: SortOrder
    nome_fazenda?: SortOrder
    area_total?: SortOrder
    area_agricultavel?: SortOrder
    area_vegetacao?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    _count?: FazendaCountOrderByAggregateInput
    _avg?: FazendaAvgOrderByAggregateInput
    _max?: FazendaMaxOrderByAggregateInput
    _min?: FazendaMinOrderByAggregateInput
    _sum?: FazendaSumOrderByAggregateInput
  }

  export type FazendaScalarWhereWithAggregatesInput = {
    AND?: FazendaScalarWhereWithAggregatesInput | FazendaScalarWhereWithAggregatesInput[]
    OR?: FazendaScalarWhereWithAggregatesInput[]
    NOT?: FazendaScalarWhereWithAggregatesInput | FazendaScalarWhereWithAggregatesInput[]
    id_fazenda?: IntWithAggregatesFilter<"Fazenda"> | number
    id_produtor?: IntWithAggregatesFilter<"Fazenda"> | number
    nome_fazenda?: StringWithAggregatesFilter<"Fazenda"> | string
    area_total?: DecimalWithAggregatesFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalWithAggregatesFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalWithAggregatesFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    cidade?: StringWithAggregatesFilter<"Fazenda"> | string
    estado?: StringWithAggregatesFilter<"Fazenda"> | string
  }

  export type ProdutorWhereInput = {
    AND?: ProdutorWhereInput | ProdutorWhereInput[]
    OR?: ProdutorWhereInput[]
    NOT?: ProdutorWhereInput | ProdutorWhereInput[]
    id_produtor?: IntFilter<"Produtor"> | number
    nome_produtor?: StringFilter<"Produtor"> | string
    cpf_produtor?: StringNullableFilter<"Produtor"> | string | null
    cnpj_produtor?: StringNullableFilter<"Produtor"> | string | null
    tb_fazenda?: FazendaListRelationFilter
  }

  export type ProdutorOrderByWithRelationInput = {
    id_produtor?: SortOrder
    nome_produtor?: SortOrder
    cpf_produtor?: SortOrderInput | SortOrder
    cnpj_produtor?: SortOrderInput | SortOrder
    tb_fazenda?: FazendaOrderByRelationAggregateInput
  }

  export type ProdutorWhereUniqueInput = Prisma.AtLeast<{
    id_produtor?: number
    AND?: ProdutorWhereInput | ProdutorWhereInput[]
    OR?: ProdutorWhereInput[]
    NOT?: ProdutorWhereInput | ProdutorWhereInput[]
    nome_produtor?: StringFilter<"Produtor"> | string
    cpf_produtor?: StringNullableFilter<"Produtor"> | string | null
    cnpj_produtor?: StringNullableFilter<"Produtor"> | string | null
    tb_fazenda?: FazendaListRelationFilter
  }, "id_produtor">

  export type ProdutorOrderByWithAggregationInput = {
    id_produtor?: SortOrder
    nome_produtor?: SortOrder
    cpf_produtor?: SortOrderInput | SortOrder
    cnpj_produtor?: SortOrderInput | SortOrder
    _count?: ProdutorCountOrderByAggregateInput
    _avg?: ProdutorAvgOrderByAggregateInput
    _max?: ProdutorMaxOrderByAggregateInput
    _min?: ProdutorMinOrderByAggregateInput
    _sum?: ProdutorSumOrderByAggregateInput
  }

  export type ProdutorScalarWhereWithAggregatesInput = {
    AND?: ProdutorScalarWhereWithAggregatesInput | ProdutorScalarWhereWithAggregatesInput[]
    OR?: ProdutorScalarWhereWithAggregatesInput[]
    NOT?: ProdutorScalarWhereWithAggregatesInput | ProdutorScalarWhereWithAggregatesInput[]
    id_produtor?: IntWithAggregatesFilter<"Produtor"> | number
    nome_produtor?: StringWithAggregatesFilter<"Produtor"> | string
    cpf_produtor?: StringNullableWithAggregatesFilter<"Produtor"> | string | null
    cnpj_produtor?: StringNullableWithAggregatesFilter<"Produtor"> | string | null
  }

  export type SafraWhereInput = {
    AND?: SafraWhereInput | SafraWhereInput[]
    OR?: SafraWhereInput[]
    NOT?: SafraWhereInput | SafraWhereInput[]
    id_safra?: IntFilter<"Safra"> | number
    id_fazenda?: IntFilter<"Safra"> | number
    id_culturas?: IntFilter<"Safra"> | number
    ano?: IntFilter<"Safra"> | number
    tb_culturas?: XOR<CulturasNullableScalarRelationFilter, CulturasWhereInput> | null
    tb_fazenda?: XOR<FazendaNullableScalarRelationFilter, FazendaWhereInput> | null
  }

  export type SafraOrderByWithRelationInput = {
    id_safra?: SortOrder
    id_fazenda?: SortOrder
    id_culturas?: SortOrder
    ano?: SortOrder
    tb_culturas?: CulturasOrderByWithRelationInput
    tb_fazenda?: FazendaOrderByWithRelationInput
  }

  export type SafraWhereUniqueInput = Prisma.AtLeast<{
    id_safra?: number
    AND?: SafraWhereInput | SafraWhereInput[]
    OR?: SafraWhereInput[]
    NOT?: SafraWhereInput | SafraWhereInput[]
    id_fazenda?: IntFilter<"Safra"> | number
    id_culturas?: IntFilter<"Safra"> | number
    ano?: IntFilter<"Safra"> | number
    tb_culturas?: XOR<CulturasNullableScalarRelationFilter, CulturasWhereInput> | null
    tb_fazenda?: XOR<FazendaNullableScalarRelationFilter, FazendaWhereInput> | null
  }, "id_safra">

  export type SafraOrderByWithAggregationInput = {
    id_safra?: SortOrder
    id_fazenda?: SortOrder
    id_culturas?: SortOrder
    ano?: SortOrder
    _count?: SafraCountOrderByAggregateInput
    _avg?: SafraAvgOrderByAggregateInput
    _max?: SafraMaxOrderByAggregateInput
    _min?: SafraMinOrderByAggregateInput
    _sum?: SafraSumOrderByAggregateInput
  }

  export type SafraScalarWhereWithAggregatesInput = {
    AND?: SafraScalarWhereWithAggregatesInput | SafraScalarWhereWithAggregatesInput[]
    OR?: SafraScalarWhereWithAggregatesInput[]
    NOT?: SafraScalarWhereWithAggregatesInput | SafraScalarWhereWithAggregatesInput[]
    id_safra?: IntWithAggregatesFilter<"Safra"> | number
    id_fazenda?: IntWithAggregatesFilter<"Safra"> | number
    id_culturas?: IntWithAggregatesFilter<"Safra"> | number
    ano?: IntWithAggregatesFilter<"Safra"> | number
  }

  export type CulturasCreateInput = {
    cultura_plantada: string
    tb_safra?: SafraCreateNestedManyWithoutTb_culturasInput
  }

  export type CulturasUncheckedCreateInput = {
    id_culturas?: number
    cultura_plantada: string
    tb_safra?: SafraUncheckedCreateNestedManyWithoutTb_culturasInput
  }

  export type CulturasUpdateInput = {
    cultura_plantada?: StringFieldUpdateOperationsInput | string
    tb_safra?: SafraUpdateManyWithoutTb_culturasNestedInput
  }

  export type CulturasUncheckedUpdateInput = {
    id_culturas?: IntFieldUpdateOperationsInput | number
    cultura_plantada?: StringFieldUpdateOperationsInput | string
    tb_safra?: SafraUncheckedUpdateManyWithoutTb_culturasNestedInput
  }

  export type CulturasCreateManyInput = {
    id_culturas?: number
    cultura_plantada: string
  }

  export type CulturasUpdateManyMutationInput = {
    cultura_plantada?: StringFieldUpdateOperationsInput | string
  }

  export type CulturasUncheckedUpdateManyInput = {
    id_culturas?: IntFieldUpdateOperationsInput | number
    cultura_plantada?: StringFieldUpdateOperationsInput | string
  }

  export type FazendaCreateInput = {
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
    tb_produtor?: ProdutorCreateNestedOneWithoutTb_fazendaInput
    tb_safra?: SafraCreateNestedManyWithoutTb_fazendaInput
  }

  export type FazendaUncheckedCreateInput = {
    id_fazenda?: number
    id_produtor: number
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
    tb_safra?: SafraUncheckedCreateNestedManyWithoutTb_fazendaInput
  }

  export type FazendaUpdateInput = {
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    tb_produtor?: ProdutorUpdateOneWithoutTb_fazendaNestedInput
    tb_safra?: SafraUpdateManyWithoutTb_fazendaNestedInput
  }

  export type FazendaUncheckedUpdateInput = {
    id_fazenda?: IntFieldUpdateOperationsInput | number
    id_produtor?: IntFieldUpdateOperationsInput | number
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    tb_safra?: SafraUncheckedUpdateManyWithoutTb_fazendaNestedInput
  }

  export type FazendaCreateManyInput = {
    id_fazenda?: number
    id_produtor: number
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
  }

  export type FazendaUpdateManyMutationInput = {
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type FazendaUncheckedUpdateManyInput = {
    id_fazenda?: IntFieldUpdateOperationsInput | number
    id_produtor?: IntFieldUpdateOperationsInput | number
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutorCreateInput = {
    nome_produtor: string
    cpf_produtor?: string | null
    cnpj_produtor?: string | null
    tb_fazenda?: FazendaCreateNestedManyWithoutTb_produtorInput
  }

  export type ProdutorUncheckedCreateInput = {
    id_produtor?: number
    nome_produtor: string
    cpf_produtor?: string | null
    cnpj_produtor?: string | null
    tb_fazenda?: FazendaUncheckedCreateNestedManyWithoutTb_produtorInput
  }

  export type ProdutorUpdateInput = {
    nome_produtor?: StringFieldUpdateOperationsInput | string
    cpf_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    tb_fazenda?: FazendaUpdateManyWithoutTb_produtorNestedInput
  }

  export type ProdutorUncheckedUpdateInput = {
    id_produtor?: IntFieldUpdateOperationsInput | number
    nome_produtor?: StringFieldUpdateOperationsInput | string
    cpf_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    tb_fazenda?: FazendaUncheckedUpdateManyWithoutTb_produtorNestedInput
  }

  export type ProdutorCreateManyInput = {
    id_produtor?: number
    nome_produtor: string
    cpf_produtor?: string | null
    cnpj_produtor?: string | null
  }

  export type ProdutorUpdateManyMutationInput = {
    nome_produtor?: StringFieldUpdateOperationsInput | string
    cpf_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj_produtor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutorUncheckedUpdateManyInput = {
    id_produtor?: IntFieldUpdateOperationsInput | number
    nome_produtor?: StringFieldUpdateOperationsInput | string
    cpf_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj_produtor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SafraCreateInput = {
    ano: number
    tb_culturas?: CulturasCreateNestedOneWithoutTb_safraInput
    tb_fazenda?: FazendaCreateNestedOneWithoutTb_safraInput
  }

  export type SafraUncheckedCreateInput = {
    id_safra?: number
    id_fazenda: number
    id_culturas: number
    ano: number
  }

  export type SafraUpdateInput = {
    ano?: IntFieldUpdateOperationsInput | number
    tb_culturas?: CulturasUpdateOneWithoutTb_safraNestedInput
    tb_fazenda?: FazendaUpdateOneWithoutTb_safraNestedInput
  }

  export type SafraUncheckedUpdateInput = {
    id_safra?: IntFieldUpdateOperationsInput | number
    id_fazenda?: IntFieldUpdateOperationsInput | number
    id_culturas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type SafraCreateManyInput = {
    id_safra?: number
    id_fazenda: number
    id_culturas: number
    ano: number
  }

  export type SafraUpdateManyMutationInput = {
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type SafraUncheckedUpdateManyInput = {
    id_safra?: IntFieldUpdateOperationsInput | number
    id_fazenda?: IntFieldUpdateOperationsInput | number
    id_culturas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SafraListRelationFilter = {
    every?: SafraWhereInput
    some?: SafraWhereInput
    none?: SafraWhereInput
  }

  export type SafraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CulturasCountOrderByAggregateInput = {
    id_culturas?: SortOrder
    cultura_plantada?: SortOrder
  }

  export type CulturasAvgOrderByAggregateInput = {
    id_culturas?: SortOrder
  }

  export type CulturasMaxOrderByAggregateInput = {
    id_culturas?: SortOrder
    cultura_plantada?: SortOrder
  }

  export type CulturasMinOrderByAggregateInput = {
    id_culturas?: SortOrder
    cultura_plantada?: SortOrder
  }

  export type CulturasSumOrderByAggregateInput = {
    id_culturas?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProdutorNullableScalarRelationFilter = {
    is?: ProdutorWhereInput | null
    isNot?: ProdutorWhereInput | null
  }

  export type FazendaCountOrderByAggregateInput = {
    id_fazenda?: SortOrder
    id_produtor?: SortOrder
    nome_fazenda?: SortOrder
    area_total?: SortOrder
    area_agricultavel?: SortOrder
    area_vegetacao?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type FazendaAvgOrderByAggregateInput = {
    id_fazenda?: SortOrder
    id_produtor?: SortOrder
    area_total?: SortOrder
    area_agricultavel?: SortOrder
    area_vegetacao?: SortOrder
  }

  export type FazendaMaxOrderByAggregateInput = {
    id_fazenda?: SortOrder
    id_produtor?: SortOrder
    nome_fazenda?: SortOrder
    area_total?: SortOrder
    area_agricultavel?: SortOrder
    area_vegetacao?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type FazendaMinOrderByAggregateInput = {
    id_fazenda?: SortOrder
    id_produtor?: SortOrder
    nome_fazenda?: SortOrder
    area_total?: SortOrder
    area_agricultavel?: SortOrder
    area_vegetacao?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
  }

  export type FazendaSumOrderByAggregateInput = {
    id_fazenda?: SortOrder
    id_produtor?: SortOrder
    area_total?: SortOrder
    area_agricultavel?: SortOrder
    area_vegetacao?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FazendaListRelationFilter = {
    every?: FazendaWhereInput
    some?: FazendaWhereInput
    none?: FazendaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FazendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutorCountOrderByAggregateInput = {
    id_produtor?: SortOrder
    nome_produtor?: SortOrder
    cpf_produtor?: SortOrder
    cnpj_produtor?: SortOrder
  }

  export type ProdutorAvgOrderByAggregateInput = {
    id_produtor?: SortOrder
  }

  export type ProdutorMaxOrderByAggregateInput = {
    id_produtor?: SortOrder
    nome_produtor?: SortOrder
    cpf_produtor?: SortOrder
    cnpj_produtor?: SortOrder
  }

  export type ProdutorMinOrderByAggregateInput = {
    id_produtor?: SortOrder
    nome_produtor?: SortOrder
    cpf_produtor?: SortOrder
    cnpj_produtor?: SortOrder
  }

  export type ProdutorSumOrderByAggregateInput = {
    id_produtor?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CulturasNullableScalarRelationFilter = {
    is?: CulturasWhereInput | null
    isNot?: CulturasWhereInput | null
  }

  export type FazendaNullableScalarRelationFilter = {
    is?: FazendaWhereInput | null
    isNot?: FazendaWhereInput | null
  }

  export type SafraCountOrderByAggregateInput = {
    id_safra?: SortOrder
    id_fazenda?: SortOrder
    id_culturas?: SortOrder
    ano?: SortOrder
  }

  export type SafraAvgOrderByAggregateInput = {
    id_safra?: SortOrder
    id_fazenda?: SortOrder
    id_culturas?: SortOrder
    ano?: SortOrder
  }

  export type SafraMaxOrderByAggregateInput = {
    id_safra?: SortOrder
    id_fazenda?: SortOrder
    id_culturas?: SortOrder
    ano?: SortOrder
  }

  export type SafraMinOrderByAggregateInput = {
    id_safra?: SortOrder
    id_fazenda?: SortOrder
    id_culturas?: SortOrder
    ano?: SortOrder
  }

  export type SafraSumOrderByAggregateInput = {
    id_safra?: SortOrder
    id_fazenda?: SortOrder
    id_culturas?: SortOrder
    ano?: SortOrder
  }

  export type SafraCreateNestedManyWithoutTb_culturasInput = {
    create?: XOR<SafraCreateWithoutTb_culturasInput, SafraUncheckedCreateWithoutTb_culturasInput> | SafraCreateWithoutTb_culturasInput[] | SafraUncheckedCreateWithoutTb_culturasInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_culturasInput | SafraCreateOrConnectWithoutTb_culturasInput[]
    createMany?: SafraCreateManyTb_culturasInputEnvelope
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
  }

  export type SafraUncheckedCreateNestedManyWithoutTb_culturasInput = {
    create?: XOR<SafraCreateWithoutTb_culturasInput, SafraUncheckedCreateWithoutTb_culturasInput> | SafraCreateWithoutTb_culturasInput[] | SafraUncheckedCreateWithoutTb_culturasInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_culturasInput | SafraCreateOrConnectWithoutTb_culturasInput[]
    createMany?: SafraCreateManyTb_culturasInputEnvelope
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SafraUpdateManyWithoutTb_culturasNestedInput = {
    create?: XOR<SafraCreateWithoutTb_culturasInput, SafraUncheckedCreateWithoutTb_culturasInput> | SafraCreateWithoutTb_culturasInput[] | SafraUncheckedCreateWithoutTb_culturasInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_culturasInput | SafraCreateOrConnectWithoutTb_culturasInput[]
    upsert?: SafraUpsertWithWhereUniqueWithoutTb_culturasInput | SafraUpsertWithWhereUniqueWithoutTb_culturasInput[]
    createMany?: SafraCreateManyTb_culturasInputEnvelope
    set?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    disconnect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    delete?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    update?: SafraUpdateWithWhereUniqueWithoutTb_culturasInput | SafraUpdateWithWhereUniqueWithoutTb_culturasInput[]
    updateMany?: SafraUpdateManyWithWhereWithoutTb_culturasInput | SafraUpdateManyWithWhereWithoutTb_culturasInput[]
    deleteMany?: SafraScalarWhereInput | SafraScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SafraUncheckedUpdateManyWithoutTb_culturasNestedInput = {
    create?: XOR<SafraCreateWithoutTb_culturasInput, SafraUncheckedCreateWithoutTb_culturasInput> | SafraCreateWithoutTb_culturasInput[] | SafraUncheckedCreateWithoutTb_culturasInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_culturasInput | SafraCreateOrConnectWithoutTb_culturasInput[]
    upsert?: SafraUpsertWithWhereUniqueWithoutTb_culturasInput | SafraUpsertWithWhereUniqueWithoutTb_culturasInput[]
    createMany?: SafraCreateManyTb_culturasInputEnvelope
    set?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    disconnect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    delete?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    update?: SafraUpdateWithWhereUniqueWithoutTb_culturasInput | SafraUpdateWithWhereUniqueWithoutTb_culturasInput[]
    updateMany?: SafraUpdateManyWithWhereWithoutTb_culturasInput | SafraUpdateManyWithWhereWithoutTb_culturasInput[]
    deleteMany?: SafraScalarWhereInput | SafraScalarWhereInput[]
  }

  export type ProdutorCreateNestedOneWithoutTb_fazendaInput = {
    create?: XOR<ProdutorCreateWithoutTb_fazendaInput, ProdutorUncheckedCreateWithoutTb_fazendaInput>
    connectOrCreate?: ProdutorCreateOrConnectWithoutTb_fazendaInput
    connect?: ProdutorWhereUniqueInput
  }

  export type SafraCreateNestedManyWithoutTb_fazendaInput = {
    create?: XOR<SafraCreateWithoutTb_fazendaInput, SafraUncheckedCreateWithoutTb_fazendaInput> | SafraCreateWithoutTb_fazendaInput[] | SafraUncheckedCreateWithoutTb_fazendaInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_fazendaInput | SafraCreateOrConnectWithoutTb_fazendaInput[]
    createMany?: SafraCreateManyTb_fazendaInputEnvelope
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
  }

  export type SafraUncheckedCreateNestedManyWithoutTb_fazendaInput = {
    create?: XOR<SafraCreateWithoutTb_fazendaInput, SafraUncheckedCreateWithoutTb_fazendaInput> | SafraCreateWithoutTb_fazendaInput[] | SafraUncheckedCreateWithoutTb_fazendaInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_fazendaInput | SafraCreateOrConnectWithoutTb_fazendaInput[]
    createMany?: SafraCreateManyTb_fazendaInputEnvelope
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProdutorUpdateOneWithoutTb_fazendaNestedInput = {
    create?: XOR<ProdutorCreateWithoutTb_fazendaInput, ProdutorUncheckedCreateWithoutTb_fazendaInput>
    connectOrCreate?: ProdutorCreateOrConnectWithoutTb_fazendaInput
    upsert?: ProdutorUpsertWithoutTb_fazendaInput
    disconnect?: ProdutorWhereInput | boolean
    delete?: ProdutorWhereInput | boolean
    connect?: ProdutorWhereUniqueInput
    update?: XOR<XOR<ProdutorUpdateToOneWithWhereWithoutTb_fazendaInput, ProdutorUpdateWithoutTb_fazendaInput>, ProdutorUncheckedUpdateWithoutTb_fazendaInput>
  }

  export type SafraUpdateManyWithoutTb_fazendaNestedInput = {
    create?: XOR<SafraCreateWithoutTb_fazendaInput, SafraUncheckedCreateWithoutTb_fazendaInput> | SafraCreateWithoutTb_fazendaInput[] | SafraUncheckedCreateWithoutTb_fazendaInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_fazendaInput | SafraCreateOrConnectWithoutTb_fazendaInput[]
    upsert?: SafraUpsertWithWhereUniqueWithoutTb_fazendaInput | SafraUpsertWithWhereUniqueWithoutTb_fazendaInput[]
    createMany?: SafraCreateManyTb_fazendaInputEnvelope
    set?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    disconnect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    delete?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    update?: SafraUpdateWithWhereUniqueWithoutTb_fazendaInput | SafraUpdateWithWhereUniqueWithoutTb_fazendaInput[]
    updateMany?: SafraUpdateManyWithWhereWithoutTb_fazendaInput | SafraUpdateManyWithWhereWithoutTb_fazendaInput[]
    deleteMany?: SafraScalarWhereInput | SafraScalarWhereInput[]
  }

  export type SafraUncheckedUpdateManyWithoutTb_fazendaNestedInput = {
    create?: XOR<SafraCreateWithoutTb_fazendaInput, SafraUncheckedCreateWithoutTb_fazendaInput> | SafraCreateWithoutTb_fazendaInput[] | SafraUncheckedCreateWithoutTb_fazendaInput[]
    connectOrCreate?: SafraCreateOrConnectWithoutTb_fazendaInput | SafraCreateOrConnectWithoutTb_fazendaInput[]
    upsert?: SafraUpsertWithWhereUniqueWithoutTb_fazendaInput | SafraUpsertWithWhereUniqueWithoutTb_fazendaInput[]
    createMany?: SafraCreateManyTb_fazendaInputEnvelope
    set?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    disconnect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    delete?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    connect?: SafraWhereUniqueInput | SafraWhereUniqueInput[]
    update?: SafraUpdateWithWhereUniqueWithoutTb_fazendaInput | SafraUpdateWithWhereUniqueWithoutTb_fazendaInput[]
    updateMany?: SafraUpdateManyWithWhereWithoutTb_fazendaInput | SafraUpdateManyWithWhereWithoutTb_fazendaInput[]
    deleteMany?: SafraScalarWhereInput | SafraScalarWhereInput[]
  }

  export type FazendaCreateNestedManyWithoutTb_produtorInput = {
    create?: XOR<FazendaCreateWithoutTb_produtorInput, FazendaUncheckedCreateWithoutTb_produtorInput> | FazendaCreateWithoutTb_produtorInput[] | FazendaUncheckedCreateWithoutTb_produtorInput[]
    connectOrCreate?: FazendaCreateOrConnectWithoutTb_produtorInput | FazendaCreateOrConnectWithoutTb_produtorInput[]
    createMany?: FazendaCreateManyTb_produtorInputEnvelope
    connect?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
  }

  export type FazendaUncheckedCreateNestedManyWithoutTb_produtorInput = {
    create?: XOR<FazendaCreateWithoutTb_produtorInput, FazendaUncheckedCreateWithoutTb_produtorInput> | FazendaCreateWithoutTb_produtorInput[] | FazendaUncheckedCreateWithoutTb_produtorInput[]
    connectOrCreate?: FazendaCreateOrConnectWithoutTb_produtorInput | FazendaCreateOrConnectWithoutTb_produtorInput[]
    createMany?: FazendaCreateManyTb_produtorInputEnvelope
    connect?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FazendaUpdateManyWithoutTb_produtorNestedInput = {
    create?: XOR<FazendaCreateWithoutTb_produtorInput, FazendaUncheckedCreateWithoutTb_produtorInput> | FazendaCreateWithoutTb_produtorInput[] | FazendaUncheckedCreateWithoutTb_produtorInput[]
    connectOrCreate?: FazendaCreateOrConnectWithoutTb_produtorInput | FazendaCreateOrConnectWithoutTb_produtorInput[]
    upsert?: FazendaUpsertWithWhereUniqueWithoutTb_produtorInput | FazendaUpsertWithWhereUniqueWithoutTb_produtorInput[]
    createMany?: FazendaCreateManyTb_produtorInputEnvelope
    set?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    disconnect?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    delete?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    connect?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    update?: FazendaUpdateWithWhereUniqueWithoutTb_produtorInput | FazendaUpdateWithWhereUniqueWithoutTb_produtorInput[]
    updateMany?: FazendaUpdateManyWithWhereWithoutTb_produtorInput | FazendaUpdateManyWithWhereWithoutTb_produtorInput[]
    deleteMany?: FazendaScalarWhereInput | FazendaScalarWhereInput[]
  }

  export type FazendaUncheckedUpdateManyWithoutTb_produtorNestedInput = {
    create?: XOR<FazendaCreateWithoutTb_produtorInput, FazendaUncheckedCreateWithoutTb_produtorInput> | FazendaCreateWithoutTb_produtorInput[] | FazendaUncheckedCreateWithoutTb_produtorInput[]
    connectOrCreate?: FazendaCreateOrConnectWithoutTb_produtorInput | FazendaCreateOrConnectWithoutTb_produtorInput[]
    upsert?: FazendaUpsertWithWhereUniqueWithoutTb_produtorInput | FazendaUpsertWithWhereUniqueWithoutTb_produtorInput[]
    createMany?: FazendaCreateManyTb_produtorInputEnvelope
    set?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    disconnect?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    delete?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    connect?: FazendaWhereUniqueInput | FazendaWhereUniqueInput[]
    update?: FazendaUpdateWithWhereUniqueWithoutTb_produtorInput | FazendaUpdateWithWhereUniqueWithoutTb_produtorInput[]
    updateMany?: FazendaUpdateManyWithWhereWithoutTb_produtorInput | FazendaUpdateManyWithWhereWithoutTb_produtorInput[]
    deleteMany?: FazendaScalarWhereInput | FazendaScalarWhereInput[]
  }

  export type CulturasCreateNestedOneWithoutTb_safraInput = {
    create?: XOR<CulturasCreateWithoutTb_safraInput, CulturasUncheckedCreateWithoutTb_safraInput>
    connectOrCreate?: CulturasCreateOrConnectWithoutTb_safraInput
    connect?: CulturasWhereUniqueInput
  }

  export type FazendaCreateNestedOneWithoutTb_safraInput = {
    create?: XOR<FazendaCreateWithoutTb_safraInput, FazendaUncheckedCreateWithoutTb_safraInput>
    connectOrCreate?: FazendaCreateOrConnectWithoutTb_safraInput
    connect?: FazendaWhereUniqueInput
  }

  export type CulturasUpdateOneWithoutTb_safraNestedInput = {
    create?: XOR<CulturasCreateWithoutTb_safraInput, CulturasUncheckedCreateWithoutTb_safraInput>
    connectOrCreate?: CulturasCreateOrConnectWithoutTb_safraInput
    upsert?: CulturasUpsertWithoutTb_safraInput
    disconnect?: CulturasWhereInput | boolean
    delete?: CulturasWhereInput | boolean
    connect?: CulturasWhereUniqueInput
    update?: XOR<XOR<CulturasUpdateToOneWithWhereWithoutTb_safraInput, CulturasUpdateWithoutTb_safraInput>, CulturasUncheckedUpdateWithoutTb_safraInput>
  }

  export type FazendaUpdateOneWithoutTb_safraNestedInput = {
    create?: XOR<FazendaCreateWithoutTb_safraInput, FazendaUncheckedCreateWithoutTb_safraInput>
    connectOrCreate?: FazendaCreateOrConnectWithoutTb_safraInput
    upsert?: FazendaUpsertWithoutTb_safraInput
    disconnect?: FazendaWhereInput | boolean
    delete?: FazendaWhereInput | boolean
    connect?: FazendaWhereUniqueInput
    update?: XOR<XOR<FazendaUpdateToOneWithWhereWithoutTb_safraInput, FazendaUpdateWithoutTb_safraInput>, FazendaUncheckedUpdateWithoutTb_safraInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SafraCreateWithoutTb_culturasInput = {
    ano: number
    tb_fazenda?: FazendaCreateNestedOneWithoutTb_safraInput
  }

  export type SafraUncheckedCreateWithoutTb_culturasInput = {
    id_safra?: number
    id_fazenda: number
    ano: number
  }

  export type SafraCreateOrConnectWithoutTb_culturasInput = {
    where: SafraWhereUniqueInput
    create: XOR<SafraCreateWithoutTb_culturasInput, SafraUncheckedCreateWithoutTb_culturasInput>
  }

  export type SafraCreateManyTb_culturasInputEnvelope = {
    data: SafraCreateManyTb_culturasInput | SafraCreateManyTb_culturasInput[]
    skipDuplicates?: boolean
  }

  export type SafraUpsertWithWhereUniqueWithoutTb_culturasInput = {
    where: SafraWhereUniqueInput
    update: XOR<SafraUpdateWithoutTb_culturasInput, SafraUncheckedUpdateWithoutTb_culturasInput>
    create: XOR<SafraCreateWithoutTb_culturasInput, SafraUncheckedCreateWithoutTb_culturasInput>
  }

  export type SafraUpdateWithWhereUniqueWithoutTb_culturasInput = {
    where: SafraWhereUniqueInput
    data: XOR<SafraUpdateWithoutTb_culturasInput, SafraUncheckedUpdateWithoutTb_culturasInput>
  }

  export type SafraUpdateManyWithWhereWithoutTb_culturasInput = {
    where: SafraScalarWhereInput
    data: XOR<SafraUpdateManyMutationInput, SafraUncheckedUpdateManyWithoutTb_culturasInput>
  }

  export type SafraScalarWhereInput = {
    AND?: SafraScalarWhereInput | SafraScalarWhereInput[]
    OR?: SafraScalarWhereInput[]
    NOT?: SafraScalarWhereInput | SafraScalarWhereInput[]
    id_safra?: IntFilter<"Safra"> | number
    id_fazenda?: IntFilter<"Safra"> | number
    id_culturas?: IntFilter<"Safra"> | number
    ano?: IntFilter<"Safra"> | number
  }

  export type ProdutorCreateWithoutTb_fazendaInput = {
    nome_produtor: string
    cpf_produtor?: string | null
    cnpj_produtor?: string | null
  }

  export type ProdutorUncheckedCreateWithoutTb_fazendaInput = {
    id_produtor?: number
    nome_produtor: string
    cpf_produtor?: string | null
    cnpj_produtor?: string | null
  }

  export type ProdutorCreateOrConnectWithoutTb_fazendaInput = {
    where: ProdutorWhereUniqueInput
    create: XOR<ProdutorCreateWithoutTb_fazendaInput, ProdutorUncheckedCreateWithoutTb_fazendaInput>
  }

  export type SafraCreateWithoutTb_fazendaInput = {
    ano: number
    tb_culturas?: CulturasCreateNestedOneWithoutTb_safraInput
  }

  export type SafraUncheckedCreateWithoutTb_fazendaInput = {
    id_safra?: number
    id_culturas: number
    ano: number
  }

  export type SafraCreateOrConnectWithoutTb_fazendaInput = {
    where: SafraWhereUniqueInput
    create: XOR<SafraCreateWithoutTb_fazendaInput, SafraUncheckedCreateWithoutTb_fazendaInput>
  }

  export type SafraCreateManyTb_fazendaInputEnvelope = {
    data: SafraCreateManyTb_fazendaInput | SafraCreateManyTb_fazendaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutorUpsertWithoutTb_fazendaInput = {
    update: XOR<ProdutorUpdateWithoutTb_fazendaInput, ProdutorUncheckedUpdateWithoutTb_fazendaInput>
    create: XOR<ProdutorCreateWithoutTb_fazendaInput, ProdutorUncheckedCreateWithoutTb_fazendaInput>
    where?: ProdutorWhereInput
  }

  export type ProdutorUpdateToOneWithWhereWithoutTb_fazendaInput = {
    where?: ProdutorWhereInput
    data: XOR<ProdutorUpdateWithoutTb_fazendaInput, ProdutorUncheckedUpdateWithoutTb_fazendaInput>
  }

  export type ProdutorUpdateWithoutTb_fazendaInput = {
    nome_produtor?: StringFieldUpdateOperationsInput | string
    cpf_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj_produtor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutorUncheckedUpdateWithoutTb_fazendaInput = {
    id_produtor?: IntFieldUpdateOperationsInput | number
    nome_produtor?: StringFieldUpdateOperationsInput | string
    cpf_produtor?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj_produtor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SafraUpsertWithWhereUniqueWithoutTb_fazendaInput = {
    where: SafraWhereUniqueInput
    update: XOR<SafraUpdateWithoutTb_fazendaInput, SafraUncheckedUpdateWithoutTb_fazendaInput>
    create: XOR<SafraCreateWithoutTb_fazendaInput, SafraUncheckedCreateWithoutTb_fazendaInput>
  }

  export type SafraUpdateWithWhereUniqueWithoutTb_fazendaInput = {
    where: SafraWhereUniqueInput
    data: XOR<SafraUpdateWithoutTb_fazendaInput, SafraUncheckedUpdateWithoutTb_fazendaInput>
  }

  export type SafraUpdateManyWithWhereWithoutTb_fazendaInput = {
    where: SafraScalarWhereInput
    data: XOR<SafraUpdateManyMutationInput, SafraUncheckedUpdateManyWithoutTb_fazendaInput>
  }

  export type FazendaCreateWithoutTb_produtorInput = {
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
    tb_safra?: SafraCreateNestedManyWithoutTb_fazendaInput
  }

  export type FazendaUncheckedCreateWithoutTb_produtorInput = {
    id_fazenda?: number
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
    tb_safra?: SafraUncheckedCreateNestedManyWithoutTb_fazendaInput
  }

  export type FazendaCreateOrConnectWithoutTb_produtorInput = {
    where: FazendaWhereUniqueInput
    create: XOR<FazendaCreateWithoutTb_produtorInput, FazendaUncheckedCreateWithoutTb_produtorInput>
  }

  export type FazendaCreateManyTb_produtorInputEnvelope = {
    data: FazendaCreateManyTb_produtorInput | FazendaCreateManyTb_produtorInput[]
    skipDuplicates?: boolean
  }

  export type FazendaUpsertWithWhereUniqueWithoutTb_produtorInput = {
    where: FazendaWhereUniqueInput
    update: XOR<FazendaUpdateWithoutTb_produtorInput, FazendaUncheckedUpdateWithoutTb_produtorInput>
    create: XOR<FazendaCreateWithoutTb_produtorInput, FazendaUncheckedCreateWithoutTb_produtorInput>
  }

  export type FazendaUpdateWithWhereUniqueWithoutTb_produtorInput = {
    where: FazendaWhereUniqueInput
    data: XOR<FazendaUpdateWithoutTb_produtorInput, FazendaUncheckedUpdateWithoutTb_produtorInput>
  }

  export type FazendaUpdateManyWithWhereWithoutTb_produtorInput = {
    where: FazendaScalarWhereInput
    data: XOR<FazendaUpdateManyMutationInput, FazendaUncheckedUpdateManyWithoutTb_produtorInput>
  }

  export type FazendaScalarWhereInput = {
    AND?: FazendaScalarWhereInput | FazendaScalarWhereInput[]
    OR?: FazendaScalarWhereInput[]
    NOT?: FazendaScalarWhereInput | FazendaScalarWhereInput[]
    id_fazenda?: IntFilter<"Fazenda"> | number
    id_produtor?: IntFilter<"Fazenda"> | number
    nome_fazenda?: StringFilter<"Fazenda"> | string
    area_total?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFilter<"Fazenda"> | Decimal | DecimalJsLike | number | string
    cidade?: StringFilter<"Fazenda"> | string
    estado?: StringFilter<"Fazenda"> | string
  }

  export type CulturasCreateWithoutTb_safraInput = {
    cultura_plantada: string
  }

  export type CulturasUncheckedCreateWithoutTb_safraInput = {
    id_culturas?: number
    cultura_plantada: string
  }

  export type CulturasCreateOrConnectWithoutTb_safraInput = {
    where: CulturasWhereUniqueInput
    create: XOR<CulturasCreateWithoutTb_safraInput, CulturasUncheckedCreateWithoutTb_safraInput>
  }

  export type FazendaCreateWithoutTb_safraInput = {
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
    tb_produtor?: ProdutorCreateNestedOneWithoutTb_fazendaInput
  }

  export type FazendaUncheckedCreateWithoutTb_safraInput = {
    id_fazenda?: number
    id_produtor: number
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
  }

  export type FazendaCreateOrConnectWithoutTb_safraInput = {
    where: FazendaWhereUniqueInput
    create: XOR<FazendaCreateWithoutTb_safraInput, FazendaUncheckedCreateWithoutTb_safraInput>
  }

  export type CulturasUpsertWithoutTb_safraInput = {
    update: XOR<CulturasUpdateWithoutTb_safraInput, CulturasUncheckedUpdateWithoutTb_safraInput>
    create: XOR<CulturasCreateWithoutTb_safraInput, CulturasUncheckedCreateWithoutTb_safraInput>
    where?: CulturasWhereInput
  }

  export type CulturasUpdateToOneWithWhereWithoutTb_safraInput = {
    where?: CulturasWhereInput
    data: XOR<CulturasUpdateWithoutTb_safraInput, CulturasUncheckedUpdateWithoutTb_safraInput>
  }

  export type CulturasUpdateWithoutTb_safraInput = {
    cultura_plantada?: StringFieldUpdateOperationsInput | string
  }

  export type CulturasUncheckedUpdateWithoutTb_safraInput = {
    id_culturas?: IntFieldUpdateOperationsInput | number
    cultura_plantada?: StringFieldUpdateOperationsInput | string
  }

  export type FazendaUpsertWithoutTb_safraInput = {
    update: XOR<FazendaUpdateWithoutTb_safraInput, FazendaUncheckedUpdateWithoutTb_safraInput>
    create: XOR<FazendaCreateWithoutTb_safraInput, FazendaUncheckedCreateWithoutTb_safraInput>
    where?: FazendaWhereInput
  }

  export type FazendaUpdateToOneWithWhereWithoutTb_safraInput = {
    where?: FazendaWhereInput
    data: XOR<FazendaUpdateWithoutTb_safraInput, FazendaUncheckedUpdateWithoutTb_safraInput>
  }

  export type FazendaUpdateWithoutTb_safraInput = {
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    tb_produtor?: ProdutorUpdateOneWithoutTb_fazendaNestedInput
  }

  export type FazendaUncheckedUpdateWithoutTb_safraInput = {
    id_fazenda?: IntFieldUpdateOperationsInput | number
    id_produtor?: IntFieldUpdateOperationsInput | number
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type SafraCreateManyTb_culturasInput = {
    id_safra?: number
    id_fazenda: number
    ano: number
  }

  export type SafraUpdateWithoutTb_culturasInput = {
    ano?: IntFieldUpdateOperationsInput | number
    tb_fazenda?: FazendaUpdateOneWithoutTb_safraNestedInput
  }

  export type SafraUncheckedUpdateWithoutTb_culturasInput = {
    id_safra?: IntFieldUpdateOperationsInput | number
    id_fazenda?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type SafraUncheckedUpdateManyWithoutTb_culturasInput = {
    id_safra?: IntFieldUpdateOperationsInput | number
    id_fazenda?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type SafraCreateManyTb_fazendaInput = {
    id_safra?: number
    id_culturas: number
    ano: number
  }

  export type SafraUpdateWithoutTb_fazendaInput = {
    ano?: IntFieldUpdateOperationsInput | number
    tb_culturas?: CulturasUpdateOneWithoutTb_safraNestedInput
  }

  export type SafraUncheckedUpdateWithoutTb_fazendaInput = {
    id_safra?: IntFieldUpdateOperationsInput | number
    id_culturas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type SafraUncheckedUpdateManyWithoutTb_fazendaInput = {
    id_safra?: IntFieldUpdateOperationsInput | number
    id_culturas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type FazendaCreateManyTb_produtorInput = {
    id_fazenda?: number
    nome_fazenda: string
    area_total: Decimal | DecimalJsLike | number | string
    area_agricultavel: Decimal | DecimalJsLike | number | string
    area_vegetacao: Decimal | DecimalJsLike | number | string
    cidade: string
    estado: string
  }

  export type FazendaUpdateWithoutTb_produtorInput = {
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    tb_safra?: SafraUpdateManyWithoutTb_fazendaNestedInput
  }

  export type FazendaUncheckedUpdateWithoutTb_produtorInput = {
    id_fazenda?: IntFieldUpdateOperationsInput | number
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    tb_safra?: SafraUncheckedUpdateManyWithoutTb_fazendaNestedInput
  }

  export type FazendaUncheckedUpdateManyWithoutTb_produtorInput = {
    id_fazenda?: IntFieldUpdateOperationsInput | number
    nome_fazenda?: StringFieldUpdateOperationsInput | string
    area_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_agricultavel?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    area_vegetacao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}