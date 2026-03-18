
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
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BorrowRequests
 * 
 */
export type BorrowRequests = $Result.DefaultSelection<Prisma.$BorrowRequestsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Borrower
 * 
 */
export type Borrower = $Result.DefaultSelection<Prisma.$BorrowerPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  BORROWER: 'BORROWER',
  ADMIN: 'ADMIN'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const StatusType: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type StatusType = (typeof StatusType)[keyof typeof StatusType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type StatusType = $Enums.StatusType

export const StatusType: typeof $Enums.StatusType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
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
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrowRequests`: Exposes CRUD operations for the **BorrowRequests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BorrowRequests
    * const borrowRequests = await prisma.borrowRequests.findMany()
    * ```
    */
  get borrowRequests(): Prisma.BorrowRequestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrower`: Exposes CRUD operations for the **Borrower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Borrowers
    * const borrowers = await prisma.borrower.findMany()
    * ```
    */
  get borrower(): Prisma.BorrowerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Book: 'Book',
    BorrowRequests: 'BorrowRequests',
    User: 'User',
    Borrower: 'Borrower',
    Admin: 'Admin'
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
      modelProps: "book" | "borrowRequests" | "user" | "borrower" | "admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BorrowRequests: {
        payload: Prisma.$BorrowRequestsPayload<ExtArgs>
        fields: Prisma.BorrowRequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowRequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowRequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload>
          }
          findFirst: {
            args: Prisma.BorrowRequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowRequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload>
          }
          findMany: {
            args: Prisma.BorrowRequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload>[]
          }
          create: {
            args: Prisma.BorrowRequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload>
          }
          createMany: {
            args: Prisma.BorrowRequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BorrowRequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload>
          }
          update: {
            args: Prisma.BorrowRequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload>
          }
          deleteMany: {
            args: Prisma.BorrowRequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowRequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BorrowRequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowRequestsPayload>
          }
          aggregate: {
            args: Prisma.BorrowRequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowRequests>
          }
          groupBy: {
            args: Prisma.BorrowRequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowRequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowRequestsCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowRequestsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Borrower: {
        payload: Prisma.$BorrowerPayload<ExtArgs>
        fields: Prisma.BorrowerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload>
          }
          findFirst: {
            args: Prisma.BorrowerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload>
          }
          findMany: {
            args: Prisma.BorrowerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload>[]
          }
          create: {
            args: Prisma.BorrowerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload>
          }
          createMany: {
            args: Prisma.BorrowerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BorrowerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload>
          }
          update: {
            args: Prisma.BorrowerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload>
          }
          deleteMany: {
            args: Prisma.BorrowerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BorrowerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowerPayload>
          }
          aggregate: {
            args: Prisma.BorrowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrower>
          }
          groupBy: {
            args: Prisma.BorrowerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowerCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowerCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    book?: BookOmit
    borrowRequests?: BorrowRequestsOmit
    user?: UserOmit
    borrower?: BorrowerOmit
    admin?: AdminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    requests: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | BookCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowRequestsWhereInput
  }


  /**
   * Count Type BorrowerCountOutputType
   */

  export type BorrowerCountOutputType = {
    requests: number
  }

  export type BorrowerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | BorrowerCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * BorrowerCountOutputType without action
   */
  export type BorrowerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowerCountOutputType
     */
    select?: BorrowerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BorrowerCountOutputType without action
   */
  export type BorrowerCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowRequestsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    available_qty: number | null
  }

  export type BookSumAggregateOutputType = {
    available_qty: number | null
  }

  export type BookMinAggregateOutputType = {
    isbn: string | null
    title: string | null
    author: string | null
    location: string | null
    available_qty: number | null
  }

  export type BookMaxAggregateOutputType = {
    isbn: string | null
    title: string | null
    author: string | null
    location: string | null
    available_qty: number | null
  }

  export type BookCountAggregateOutputType = {
    isbn: number
    title: number
    author: number
    location: number
    available_qty: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    available_qty?: true
  }

  export type BookSumAggregateInputType = {
    available_qty?: true
  }

  export type BookMinAggregateInputType = {
    isbn?: true
    title?: true
    author?: true
    location?: true
    available_qty?: true
  }

  export type BookMaxAggregateInputType = {
    isbn?: true
    title?: true
    author?: true
    location?: true
    available_qty?: true
  }

  export type BookCountAggregateInputType = {
    isbn?: true
    title?: true
    author?: true
    location?: true
    available_qty?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    isbn: string
    title: string
    author: string
    location: string | null
    available_qty: number | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    isbn?: boolean
    title?: boolean
    author?: boolean
    location?: boolean
    available_qty?: boolean
    requests?: boolean | Book$requestsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>



  export type BookSelectScalar = {
    isbn?: boolean
    title?: boolean
    author?: boolean
    location?: boolean
    available_qty?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"isbn" | "title" | "author" | "location" | "available_qty", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Book$requestsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      requests: Prisma.$BorrowRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      isbn: string
      title: string
      author: string
      location: string | null
      available_qty: number | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `isbn`
     * const bookWithIsbnOnly = await prisma.book.findMany({ select: { isbn: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Book$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Book$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly isbn: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly location: FieldRef<"Book", 'String'>
    readonly available_qty: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.requests
   */
  export type Book$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    where?: BorrowRequestsWhereInput
    orderBy?: BorrowRequestsOrderByWithRelationInput | BorrowRequestsOrderByWithRelationInput[]
    cursor?: BorrowRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowRequestsScalarFieldEnum | BorrowRequestsScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BorrowRequests
   */

  export type AggregateBorrowRequests = {
    _count: BorrowRequestsCountAggregateOutputType | null
    _avg: BorrowRequestsAvgAggregateOutputType | null
    _sum: BorrowRequestsSumAggregateOutputType | null
    _min: BorrowRequestsMinAggregateOutputType | null
    _max: BorrowRequestsMaxAggregateOutputType | null
  }

  export type BorrowRequestsAvgAggregateOutputType = {
    request_id: number | null
    bid: number | null
  }

  export type BorrowRequestsSumAggregateOutputType = {
    request_id: number | null
    bid: number | null
  }

  export type BorrowRequestsMinAggregateOutputType = {
    request_id: number | null
    bid: number | null
    isbn: string | null
    request_date: Date | null
    due_date: Date | null
    returned_at: Date | null
  }

  export type BorrowRequestsMaxAggregateOutputType = {
    request_id: number | null
    bid: number | null
    isbn: string | null
    request_date: Date | null
    due_date: Date | null
    returned_at: Date | null
  }

  export type BorrowRequestsCountAggregateOutputType = {
    request_id: number
    bid: number
    isbn: number
    request_date: number
    due_date: number
    returned_at: number
    _all: number
  }


  export type BorrowRequestsAvgAggregateInputType = {
    request_id?: true
    bid?: true
  }

  export type BorrowRequestsSumAggregateInputType = {
    request_id?: true
    bid?: true
  }

  export type BorrowRequestsMinAggregateInputType = {
    request_id?: true
    bid?: true
    isbn?: true
    request_date?: true
    due_date?: true
    returned_at?: true
  }

  export type BorrowRequestsMaxAggregateInputType = {
    request_id?: true
    bid?: true
    isbn?: true
    request_date?: true
    due_date?: true
    returned_at?: true
  }

  export type BorrowRequestsCountAggregateInputType = {
    request_id?: true
    bid?: true
    isbn?: true
    request_date?: true
    due_date?: true
    returned_at?: true
    _all?: true
  }

  export type BorrowRequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowRequests to aggregate.
     */
    where?: BorrowRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRequests to fetch.
     */
    orderBy?: BorrowRequestsOrderByWithRelationInput | BorrowRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BorrowRequests
    **/
    _count?: true | BorrowRequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowRequestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowRequestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowRequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowRequestsMaxAggregateInputType
  }

  export type GetBorrowRequestsAggregateType<T extends BorrowRequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowRequests[P]>
      : GetScalarType<T[P], AggregateBorrowRequests[P]>
  }




  export type BorrowRequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowRequestsWhereInput
    orderBy?: BorrowRequestsOrderByWithAggregationInput | BorrowRequestsOrderByWithAggregationInput[]
    by: BorrowRequestsScalarFieldEnum[] | BorrowRequestsScalarFieldEnum
    having?: BorrowRequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowRequestsCountAggregateInputType | true
    _avg?: BorrowRequestsAvgAggregateInputType
    _sum?: BorrowRequestsSumAggregateInputType
    _min?: BorrowRequestsMinAggregateInputType
    _max?: BorrowRequestsMaxAggregateInputType
  }

  export type BorrowRequestsGroupByOutputType = {
    request_id: number
    bid: number
    isbn: string
    request_date: Date | null
    due_date: Date
    returned_at: Date | null
    _count: BorrowRequestsCountAggregateOutputType | null
    _avg: BorrowRequestsAvgAggregateOutputType | null
    _sum: BorrowRequestsSumAggregateOutputType | null
    _min: BorrowRequestsMinAggregateOutputType | null
    _max: BorrowRequestsMaxAggregateOutputType | null
  }

  type GetBorrowRequestsGroupByPayload<T extends BorrowRequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowRequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowRequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowRequestsGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowRequestsGroupByOutputType[P]>
        }
      >
    >


  export type BorrowRequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    bid?: boolean
    isbn?: boolean
    request_date?: boolean
    due_date?: boolean
    returned_at?: boolean
    borrower?: boolean | BorrowerDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowRequests"]>



  export type BorrowRequestsSelectScalar = {
    request_id?: boolean
    bid?: boolean
    isbn?: boolean
    request_date?: boolean
    due_date?: boolean
    returned_at?: boolean
  }

  export type BorrowRequestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"request_id" | "bid" | "isbn" | "request_date" | "due_date" | "returned_at", ExtArgs["result"]["borrowRequests"]>
  export type BorrowRequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | BorrowerDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BorrowRequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BorrowRequests"
    objects: {
      borrower: Prisma.$BorrowerPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      request_id: number
      bid: number
      isbn: string
      request_date: Date | null
      due_date: Date
      returned_at: Date | null
    }, ExtArgs["result"]["borrowRequests"]>
    composites: {}
  }

  type BorrowRequestsGetPayload<S extends boolean | null | undefined | BorrowRequestsDefaultArgs> = $Result.GetResult<Prisma.$BorrowRequestsPayload, S>

  type BorrowRequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BorrowRequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowRequestsCountAggregateInputType | true
    }

  export interface BorrowRequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BorrowRequests'], meta: { name: 'BorrowRequests' } }
    /**
     * Find zero or one BorrowRequests that matches the filter.
     * @param {BorrowRequestsFindUniqueArgs} args - Arguments to find a BorrowRequests
     * @example
     * // Get one BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowRequestsFindUniqueArgs>(args: SelectSubset<T, BorrowRequestsFindUniqueArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BorrowRequests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowRequestsFindUniqueOrThrowArgs} args - Arguments to find a BorrowRequests
     * @example
     * // Get one BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowRequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowRequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRequestsFindFirstArgs} args - Arguments to find a BorrowRequests
     * @example
     * // Get one BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowRequestsFindFirstArgs>(args?: SelectSubset<T, BorrowRequestsFindFirstArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowRequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRequestsFindFirstOrThrowArgs} args - Arguments to find a BorrowRequests
     * @example
     * // Get one BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowRequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowRequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BorrowRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.findMany()
     * 
     * // Get first 10 BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.findMany({ take: 10 })
     * 
     * // Only select the `request_id`
     * const borrowRequestsWithRequest_idOnly = await prisma.borrowRequests.findMany({ select: { request_id: true } })
     * 
     */
    findMany<T extends BorrowRequestsFindManyArgs>(args?: SelectSubset<T, BorrowRequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BorrowRequests.
     * @param {BorrowRequestsCreateArgs} args - Arguments to create a BorrowRequests.
     * @example
     * // Create one BorrowRequests
     * const BorrowRequests = await prisma.borrowRequests.create({
     *   data: {
     *     // ... data to create a BorrowRequests
     *   }
     * })
     * 
     */
    create<T extends BorrowRequestsCreateArgs>(args: SelectSubset<T, BorrowRequestsCreateArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BorrowRequests.
     * @param {BorrowRequestsCreateManyArgs} args - Arguments to create many BorrowRequests.
     * @example
     * // Create many BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowRequestsCreateManyArgs>(args?: SelectSubset<T, BorrowRequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BorrowRequests.
     * @param {BorrowRequestsDeleteArgs} args - Arguments to delete one BorrowRequests.
     * @example
     * // Delete one BorrowRequests
     * const BorrowRequests = await prisma.borrowRequests.delete({
     *   where: {
     *     // ... filter to delete one BorrowRequests
     *   }
     * })
     * 
     */
    delete<T extends BorrowRequestsDeleteArgs>(args: SelectSubset<T, BorrowRequestsDeleteArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BorrowRequests.
     * @param {BorrowRequestsUpdateArgs} args - Arguments to update one BorrowRequests.
     * @example
     * // Update one BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowRequestsUpdateArgs>(args: SelectSubset<T, BorrowRequestsUpdateArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BorrowRequests.
     * @param {BorrowRequestsDeleteManyArgs} args - Arguments to filter BorrowRequests to delete.
     * @example
     * // Delete a few BorrowRequests
     * const { count } = await prisma.borrowRequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowRequestsDeleteManyArgs>(args?: SelectSubset<T, BorrowRequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowRequestsUpdateManyArgs>(args: SelectSubset<T, BorrowRequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BorrowRequests.
     * @param {BorrowRequestsUpsertArgs} args - Arguments to update or create a BorrowRequests.
     * @example
     * // Update or create a BorrowRequests
     * const borrowRequests = await prisma.borrowRequests.upsert({
     *   create: {
     *     // ... data to create a BorrowRequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BorrowRequests we want to update
     *   }
     * })
     */
    upsert<T extends BorrowRequestsUpsertArgs>(args: SelectSubset<T, BorrowRequestsUpsertArgs<ExtArgs>>): Prisma__BorrowRequestsClient<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BorrowRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRequestsCountArgs} args - Arguments to filter BorrowRequests to count.
     * @example
     * // Count the number of BorrowRequests
     * const count = await prisma.borrowRequests.count({
     *   where: {
     *     // ... the filter for the BorrowRequests we want to count
     *   }
     * })
    **/
    count<T extends BorrowRequestsCountArgs>(
      args?: Subset<T, BorrowRequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowRequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BorrowRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorrowRequestsAggregateArgs>(args: Subset<T, BorrowRequestsAggregateArgs>): Prisma.PrismaPromise<GetBorrowRequestsAggregateType<T>>

    /**
     * Group by BorrowRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRequestsGroupByArgs} args - Group by arguments.
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
      T extends BorrowRequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowRequestsGroupByArgs['orderBy'] }
        : { orderBy?: BorrowRequestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BorrowRequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BorrowRequests model
   */
  readonly fields: BorrowRequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BorrowRequests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowRequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrower<T extends BorrowerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BorrowerDefaultArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BorrowRequests model
   */
  interface BorrowRequestsFieldRefs {
    readonly request_id: FieldRef<"BorrowRequests", 'Int'>
    readonly bid: FieldRef<"BorrowRequests", 'Int'>
    readonly isbn: FieldRef<"BorrowRequests", 'String'>
    readonly request_date: FieldRef<"BorrowRequests", 'DateTime'>
    readonly due_date: FieldRef<"BorrowRequests", 'DateTime'>
    readonly returned_at: FieldRef<"BorrowRequests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BorrowRequests findUnique
   */
  export type BorrowRequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRequests to fetch.
     */
    where: BorrowRequestsWhereUniqueInput
  }

  /**
   * BorrowRequests findUniqueOrThrow
   */
  export type BorrowRequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRequests to fetch.
     */
    where: BorrowRequestsWhereUniqueInput
  }

  /**
   * BorrowRequests findFirst
   */
  export type BorrowRequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRequests to fetch.
     */
    where?: BorrowRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRequests to fetch.
     */
    orderBy?: BorrowRequestsOrderByWithRelationInput | BorrowRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowRequests.
     */
    cursor?: BorrowRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowRequests.
     */
    distinct?: BorrowRequestsScalarFieldEnum | BorrowRequestsScalarFieldEnum[]
  }

  /**
   * BorrowRequests findFirstOrThrow
   */
  export type BorrowRequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRequests to fetch.
     */
    where?: BorrowRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRequests to fetch.
     */
    orderBy?: BorrowRequestsOrderByWithRelationInput | BorrowRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowRequests.
     */
    cursor?: BorrowRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowRequests.
     */
    distinct?: BorrowRequestsScalarFieldEnum | BorrowRequestsScalarFieldEnum[]
  }

  /**
   * BorrowRequests findMany
   */
  export type BorrowRequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * Filter, which BorrowRequests to fetch.
     */
    where?: BorrowRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowRequests to fetch.
     */
    orderBy?: BorrowRequestsOrderByWithRelationInput | BorrowRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BorrowRequests.
     */
    cursor?: BorrowRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowRequests.
     */
    skip?: number
    distinct?: BorrowRequestsScalarFieldEnum | BorrowRequestsScalarFieldEnum[]
  }

  /**
   * BorrowRequests create
   */
  export type BorrowRequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a BorrowRequests.
     */
    data: XOR<BorrowRequestsCreateInput, BorrowRequestsUncheckedCreateInput>
  }

  /**
   * BorrowRequests createMany
   */
  export type BorrowRequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BorrowRequests.
     */
    data: BorrowRequestsCreateManyInput | BorrowRequestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BorrowRequests update
   */
  export type BorrowRequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a BorrowRequests.
     */
    data: XOR<BorrowRequestsUpdateInput, BorrowRequestsUncheckedUpdateInput>
    /**
     * Choose, which BorrowRequests to update.
     */
    where: BorrowRequestsWhereUniqueInput
  }

  /**
   * BorrowRequests updateMany
   */
  export type BorrowRequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BorrowRequests.
     */
    data: XOR<BorrowRequestsUpdateManyMutationInput, BorrowRequestsUncheckedUpdateManyInput>
    /**
     * Filter which BorrowRequests to update
     */
    where?: BorrowRequestsWhereInput
    /**
     * Limit how many BorrowRequests to update.
     */
    limit?: number
  }

  /**
   * BorrowRequests upsert
   */
  export type BorrowRequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the BorrowRequests to update in case it exists.
     */
    where: BorrowRequestsWhereUniqueInput
    /**
     * In case the BorrowRequests found by the `where` argument doesn't exist, create a new BorrowRequests with this data.
     */
    create: XOR<BorrowRequestsCreateInput, BorrowRequestsUncheckedCreateInput>
    /**
     * In case the BorrowRequests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowRequestsUpdateInput, BorrowRequestsUncheckedUpdateInput>
  }

  /**
   * BorrowRequests delete
   */
  export type BorrowRequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    /**
     * Filter which BorrowRequests to delete.
     */
    where: BorrowRequestsWhereUniqueInput
  }

  /**
   * BorrowRequests deleteMany
   */
  export type BorrowRequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowRequests to delete
     */
    where?: BorrowRequestsWhereInput
    /**
     * Limit how many BorrowRequests to delete.
     */
    limit?: number
  }

  /**
   * BorrowRequests without action
   */
  export type BorrowRequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    uid: number | null
  }

  export type UserSumAggregateOutputType = {
    uid: number | null
  }

  export type UserMinAggregateOutputType = {
    uid: number | null
    email: string | null
    name: string | null
    password: string | null
    user_type: $Enums.UserType | null
    status: $Enums.StatusType | null
    registeration_date: Date | null
  }

  export type UserMaxAggregateOutputType = {
    uid: number | null
    email: string | null
    name: string | null
    password: string | null
    user_type: $Enums.UserType | null
    status: $Enums.StatusType | null
    registeration_date: Date | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    email: number
    name: number
    password: number
    user_type: number
    status: number
    registeration_date: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    uid?: true
  }

  export type UserSumAggregateInputType = {
    uid?: true
  }

  export type UserMinAggregateInputType = {
    uid?: true
    email?: true
    name?: true
    password?: true
    user_type?: true
    status?: true
    registeration_date?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    email?: true
    name?: true
    password?: true
    user_type?: true
    status?: true
    registeration_date?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    email?: true
    name?: true
    password?: true
    user_type?: true
    status?: true
    registeration_date?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uid: number
    email: string
    name: string
    password: string
    user_type: $Enums.UserType
    status: $Enums.StatusType
    registeration_date: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    user_type?: boolean
    status?: boolean
    registeration_date?: boolean
    borrower?: boolean | User$borrowerArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    uid?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    user_type?: boolean
    status?: boolean
    registeration_date?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "email" | "name" | "password" | "user_type" | "status" | "registeration_date", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrower?: boolean | User$borrowerArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      borrower: Prisma.$BorrowerPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: number
      email: string
      name: string
      password: string
      user_type: $Enums.UserType
      status: $Enums.StatusType
      registeration_date: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrower<T extends User$borrowerArgs<ExtArgs> = {}>(args?: Subset<T, User$borrowerArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly uid: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'UserType'>
    readonly status: FieldRef<"User", 'StatusType'>
    readonly registeration_date: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.borrower
   */
  export type User$borrowerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    where?: BorrowerWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Borrower
   */

  export type AggregateBorrower = {
    _count: BorrowerCountAggregateOutputType | null
    _avg: BorrowerAvgAggregateOutputType | null
    _sum: BorrowerSumAggregateOutputType | null
    _min: BorrowerMinAggregateOutputType | null
    _max: BorrowerMaxAggregateOutputType | null
  }

  export type BorrowerAvgAggregateOutputType = {
    id: number | null
  }

  export type BorrowerSumAggregateOutputType = {
    id: number | null
  }

  export type BorrowerMinAggregateOutputType = {
    id: number | null
    membership_date: Date | null
    expiry_date: Date | null
  }

  export type BorrowerMaxAggregateOutputType = {
    id: number | null
    membership_date: Date | null
    expiry_date: Date | null
  }

  export type BorrowerCountAggregateOutputType = {
    id: number
    membership_date: number
    expiry_date: number
    _all: number
  }


  export type BorrowerAvgAggregateInputType = {
    id?: true
  }

  export type BorrowerSumAggregateInputType = {
    id?: true
  }

  export type BorrowerMinAggregateInputType = {
    id?: true
    membership_date?: true
    expiry_date?: true
  }

  export type BorrowerMaxAggregateInputType = {
    id?: true
    membership_date?: true
    expiry_date?: true
  }

  export type BorrowerCountAggregateInputType = {
    id?: true
    membership_date?: true
    expiry_date?: true
    _all?: true
  }

  export type BorrowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrower to aggregate.
     */
    where?: BorrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowers to fetch.
     */
    orderBy?: BorrowerOrderByWithRelationInput | BorrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Borrowers
    **/
    _count?: true | BorrowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowerMaxAggregateInputType
  }

  export type GetBorrowerAggregateType<T extends BorrowerAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrower[P]>
      : GetScalarType<T[P], AggregateBorrower[P]>
  }




  export type BorrowerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowerWhereInput
    orderBy?: BorrowerOrderByWithAggregationInput | BorrowerOrderByWithAggregationInput[]
    by: BorrowerScalarFieldEnum[] | BorrowerScalarFieldEnum
    having?: BorrowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowerCountAggregateInputType | true
    _avg?: BorrowerAvgAggregateInputType
    _sum?: BorrowerSumAggregateInputType
    _min?: BorrowerMinAggregateInputType
    _max?: BorrowerMaxAggregateInputType
  }

  export type BorrowerGroupByOutputType = {
    id: number
    membership_date: Date | null
    expiry_date: Date | null
    _count: BorrowerCountAggregateOutputType | null
    _avg: BorrowerAvgAggregateOutputType | null
    _sum: BorrowerSumAggregateOutputType | null
    _min: BorrowerMinAggregateOutputType | null
    _max: BorrowerMaxAggregateOutputType | null
  }

  type GetBorrowerGroupByPayload<T extends BorrowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowerGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowerGroupByOutputType[P]>
        }
      >
    >


  export type BorrowerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    membership_date?: boolean
    expiry_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Borrower$requestsArgs<ExtArgs>
    _count?: boolean | BorrowerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrower"]>



  export type BorrowerSelectScalar = {
    id?: boolean
    membership_date?: boolean
    expiry_date?: boolean
  }

  export type BorrowerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "membership_date" | "expiry_date", ExtArgs["result"]["borrower"]>
  export type BorrowerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Borrower$requestsArgs<ExtArgs>
    _count?: boolean | BorrowerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BorrowerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Borrower"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      requests: Prisma.$BorrowRequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      membership_date: Date | null
      expiry_date: Date | null
    }, ExtArgs["result"]["borrower"]>
    composites: {}
  }

  type BorrowerGetPayload<S extends boolean | null | undefined | BorrowerDefaultArgs> = $Result.GetResult<Prisma.$BorrowerPayload, S>

  type BorrowerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BorrowerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowerCountAggregateInputType | true
    }

  export interface BorrowerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Borrower'], meta: { name: 'Borrower' } }
    /**
     * Find zero or one Borrower that matches the filter.
     * @param {BorrowerFindUniqueArgs} args - Arguments to find a Borrower
     * @example
     * // Get one Borrower
     * const borrower = await prisma.borrower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowerFindUniqueArgs>(args: SelectSubset<T, BorrowerFindUniqueArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Borrower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowerFindUniqueOrThrowArgs} args - Arguments to find a Borrower
     * @example
     * // Get one Borrower
     * const borrower = await prisma.borrower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowerFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowerFindFirstArgs} args - Arguments to find a Borrower
     * @example
     * // Get one Borrower
     * const borrower = await prisma.borrower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowerFindFirstArgs>(args?: SelectSubset<T, BorrowerFindFirstArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowerFindFirstOrThrowArgs} args - Arguments to find a Borrower
     * @example
     * // Get one Borrower
     * const borrower = await prisma.borrower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowerFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Borrowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Borrowers
     * const borrowers = await prisma.borrower.findMany()
     * 
     * // Get first 10 Borrowers
     * const borrowers = await prisma.borrower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borrowerWithIdOnly = await prisma.borrower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BorrowerFindManyArgs>(args?: SelectSubset<T, BorrowerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Borrower.
     * @param {BorrowerCreateArgs} args - Arguments to create a Borrower.
     * @example
     * // Create one Borrower
     * const Borrower = await prisma.borrower.create({
     *   data: {
     *     // ... data to create a Borrower
     *   }
     * })
     * 
     */
    create<T extends BorrowerCreateArgs>(args: SelectSubset<T, BorrowerCreateArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Borrowers.
     * @param {BorrowerCreateManyArgs} args - Arguments to create many Borrowers.
     * @example
     * // Create many Borrowers
     * const borrower = await prisma.borrower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowerCreateManyArgs>(args?: SelectSubset<T, BorrowerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Borrower.
     * @param {BorrowerDeleteArgs} args - Arguments to delete one Borrower.
     * @example
     * // Delete one Borrower
     * const Borrower = await prisma.borrower.delete({
     *   where: {
     *     // ... filter to delete one Borrower
     *   }
     * })
     * 
     */
    delete<T extends BorrowerDeleteArgs>(args: SelectSubset<T, BorrowerDeleteArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Borrower.
     * @param {BorrowerUpdateArgs} args - Arguments to update one Borrower.
     * @example
     * // Update one Borrower
     * const borrower = await prisma.borrower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowerUpdateArgs>(args: SelectSubset<T, BorrowerUpdateArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Borrowers.
     * @param {BorrowerDeleteManyArgs} args - Arguments to filter Borrowers to delete.
     * @example
     * // Delete a few Borrowers
     * const { count } = await prisma.borrower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowerDeleteManyArgs>(args?: SelectSubset<T, BorrowerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Borrowers
     * const borrower = await prisma.borrower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowerUpdateManyArgs>(args: SelectSubset<T, BorrowerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Borrower.
     * @param {BorrowerUpsertArgs} args - Arguments to update or create a Borrower.
     * @example
     * // Update or create a Borrower
     * const borrower = await prisma.borrower.upsert({
     *   create: {
     *     // ... data to create a Borrower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Borrower we want to update
     *   }
     * })
     */
    upsert<T extends BorrowerUpsertArgs>(args: SelectSubset<T, BorrowerUpsertArgs<ExtArgs>>): Prisma__BorrowerClient<$Result.GetResult<Prisma.$BorrowerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Borrowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowerCountArgs} args - Arguments to filter Borrowers to count.
     * @example
     * // Count the number of Borrowers
     * const count = await prisma.borrower.count({
     *   where: {
     *     // ... the filter for the Borrowers we want to count
     *   }
     * })
    **/
    count<T extends BorrowerCountArgs>(
      args?: Subset<T, BorrowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Borrower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorrowerAggregateArgs>(args: Subset<T, BorrowerAggregateArgs>): Prisma.PrismaPromise<GetBorrowerAggregateType<T>>

    /**
     * Group by Borrower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowerGroupByArgs} args - Group by arguments.
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
      T extends BorrowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowerGroupByArgs['orderBy'] }
        : { orderBy?: BorrowerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BorrowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Borrower model
   */
  readonly fields: BorrowerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Borrower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends Borrower$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Borrower$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Borrower model
   */
  interface BorrowerFieldRefs {
    readonly id: FieldRef<"Borrower", 'Int'>
    readonly membership_date: FieldRef<"Borrower", 'DateTime'>
    readonly expiry_date: FieldRef<"Borrower", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Borrower findUnique
   */
  export type BorrowerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * Filter, which Borrower to fetch.
     */
    where: BorrowerWhereUniqueInput
  }

  /**
   * Borrower findUniqueOrThrow
   */
  export type BorrowerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * Filter, which Borrower to fetch.
     */
    where: BorrowerWhereUniqueInput
  }

  /**
   * Borrower findFirst
   */
  export type BorrowerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * Filter, which Borrower to fetch.
     */
    where?: BorrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowers to fetch.
     */
    orderBy?: BorrowerOrderByWithRelationInput | BorrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrowers.
     */
    cursor?: BorrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrowers.
     */
    distinct?: BorrowerScalarFieldEnum | BorrowerScalarFieldEnum[]
  }

  /**
   * Borrower findFirstOrThrow
   */
  export type BorrowerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * Filter, which Borrower to fetch.
     */
    where?: BorrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowers to fetch.
     */
    orderBy?: BorrowerOrderByWithRelationInput | BorrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrowers.
     */
    cursor?: BorrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrowers.
     */
    distinct?: BorrowerScalarFieldEnum | BorrowerScalarFieldEnum[]
  }

  /**
   * Borrower findMany
   */
  export type BorrowerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * Filter, which Borrowers to fetch.
     */
    where?: BorrowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowers to fetch.
     */
    orderBy?: BorrowerOrderByWithRelationInput | BorrowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Borrowers.
     */
    cursor?: BorrowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowers.
     */
    skip?: number
    distinct?: BorrowerScalarFieldEnum | BorrowerScalarFieldEnum[]
  }

  /**
   * Borrower create
   */
  export type BorrowerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * The data needed to create a Borrower.
     */
    data: XOR<BorrowerCreateInput, BorrowerUncheckedCreateInput>
  }

  /**
   * Borrower createMany
   */
  export type BorrowerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Borrowers.
     */
    data: BorrowerCreateManyInput | BorrowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Borrower update
   */
  export type BorrowerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * The data needed to update a Borrower.
     */
    data: XOR<BorrowerUpdateInput, BorrowerUncheckedUpdateInput>
    /**
     * Choose, which Borrower to update.
     */
    where: BorrowerWhereUniqueInput
  }

  /**
   * Borrower updateMany
   */
  export type BorrowerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Borrowers.
     */
    data: XOR<BorrowerUpdateManyMutationInput, BorrowerUncheckedUpdateManyInput>
    /**
     * Filter which Borrowers to update
     */
    where?: BorrowerWhereInput
    /**
     * Limit how many Borrowers to update.
     */
    limit?: number
  }

  /**
   * Borrower upsert
   */
  export type BorrowerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * The filter to search for the Borrower to update in case it exists.
     */
    where: BorrowerWhereUniqueInput
    /**
     * In case the Borrower found by the `where` argument doesn't exist, create a new Borrower with this data.
     */
    create: XOR<BorrowerCreateInput, BorrowerUncheckedCreateInput>
    /**
     * In case the Borrower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowerUpdateInput, BorrowerUncheckedUpdateInput>
  }

  /**
   * Borrower delete
   */
  export type BorrowerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
    /**
     * Filter which Borrower to delete.
     */
    where: BorrowerWhereUniqueInput
  }

  /**
   * Borrower deleteMany
   */
  export type BorrowerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrowers to delete
     */
    where?: BorrowerWhereInput
    /**
     * Limit how many Borrowers to delete.
     */
    limit?: number
  }

  /**
   * Borrower.requests
   */
  export type Borrower$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowRequests
     */
    select?: BorrowRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowRequests
     */
    omit?: BorrowRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowRequestsInclude<ExtArgs> | null
    where?: BorrowRequestsWhereInput
    orderBy?: BorrowRequestsOrderByWithRelationInput | BorrowRequestsOrderByWithRelationInput[]
    cursor?: BorrowRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowRequestsScalarFieldEnum | BorrowRequestsScalarFieldEnum[]
  }

  /**
   * Borrower without action
   */
  export type BorrowerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrower
     */
    select?: BorrowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrower
     */
    omit?: BorrowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowerInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    access_level: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    access_level: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    access_level: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    access_level: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    access_level: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    access_level?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    access_level?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    access_level?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    access_level?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    access_level?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    access_level: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    access_level?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    access_level?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "access_level", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      access_level: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly access_level: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
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


  export const BookScalarFieldEnum: {
    isbn: 'isbn',
    title: 'title',
    author: 'author',
    location: 'location',
    available_qty: 'available_qty'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BorrowRequestsScalarFieldEnum: {
    request_id: 'request_id',
    bid: 'bid',
    isbn: 'isbn',
    request_date: 'request_date',
    due_date: 'due_date',
    returned_at: 'returned_at'
  };

  export type BorrowRequestsScalarFieldEnum = (typeof BorrowRequestsScalarFieldEnum)[keyof typeof BorrowRequestsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    uid: 'uid',
    email: 'email',
    name: 'name',
    password: 'password',
    user_type: 'user_type',
    status: 'status',
    registeration_date: 'registeration_date'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BorrowerScalarFieldEnum: {
    id: 'id',
    membership_date: 'membership_date',
    expiry_date: 'expiry_date'
  };

  export type BorrowerScalarFieldEnum = (typeof BorrowerScalarFieldEnum)[keyof typeof BorrowerScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    access_level: 'access_level'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BookOrderByRelevanceFieldEnum: {
    isbn: 'isbn',
    title: 'title',
    author: 'author',
    location: 'location'
  };

  export type BookOrderByRelevanceFieldEnum = (typeof BookOrderByRelevanceFieldEnum)[keyof typeof BookOrderByRelevanceFieldEnum]


  export const BorrowRequestsOrderByRelevanceFieldEnum: {
    isbn: 'isbn'
  };

  export type BorrowRequestsOrderByRelevanceFieldEnum = (typeof BorrowRequestsOrderByRelevanceFieldEnum)[keyof typeof BorrowRequestsOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'StatusType'
   */
  export type EnumStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    isbn?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    location?: StringNullableFilter<"Book"> | string | null
    available_qty?: IntNullableFilter<"Book"> | number | null
    requests?: BorrowRequestsListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    isbn?: SortOrder
    title?: SortOrder
    author?: SortOrder
    location?: SortOrderInput | SortOrder
    available_qty?: SortOrderInput | SortOrder
    requests?: BorrowRequestsOrderByRelationAggregateInput
    _relevance?: BookOrderByRelevanceInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    isbn?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    location?: StringNullableFilter<"Book"> | string | null
    available_qty?: IntNullableFilter<"Book"> | number | null
    requests?: BorrowRequestsListRelationFilter
  }, "isbn">

  export type BookOrderByWithAggregationInput = {
    isbn?: SortOrder
    title?: SortOrder
    author?: SortOrder
    location?: SortOrderInput | SortOrder
    available_qty?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    isbn?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    location?: StringNullableWithAggregatesFilter<"Book"> | string | null
    available_qty?: IntNullableWithAggregatesFilter<"Book"> | number | null
  }

  export type BorrowRequestsWhereInput = {
    AND?: BorrowRequestsWhereInput | BorrowRequestsWhereInput[]
    OR?: BorrowRequestsWhereInput[]
    NOT?: BorrowRequestsWhereInput | BorrowRequestsWhereInput[]
    request_id?: IntFilter<"BorrowRequests"> | number
    bid?: IntFilter<"BorrowRequests"> | number
    isbn?: StringFilter<"BorrowRequests"> | string
    request_date?: DateTimeNullableFilter<"BorrowRequests"> | Date | string | null
    due_date?: DateTimeFilter<"BorrowRequests"> | Date | string
    returned_at?: DateTimeNullableFilter<"BorrowRequests"> | Date | string | null
    borrower?: XOR<BorrowerScalarRelationFilter, BorrowerWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BorrowRequestsOrderByWithRelationInput = {
    request_id?: SortOrder
    bid?: SortOrder
    isbn?: SortOrder
    request_date?: SortOrderInput | SortOrder
    due_date?: SortOrder
    returned_at?: SortOrderInput | SortOrder
    borrower?: BorrowerOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
    _relevance?: BorrowRequestsOrderByRelevanceInput
  }

  export type BorrowRequestsWhereUniqueInput = Prisma.AtLeast<{
    request_id?: number
    AND?: BorrowRequestsWhereInput | BorrowRequestsWhereInput[]
    OR?: BorrowRequestsWhereInput[]
    NOT?: BorrowRequestsWhereInput | BorrowRequestsWhereInput[]
    bid?: IntFilter<"BorrowRequests"> | number
    isbn?: StringFilter<"BorrowRequests"> | string
    request_date?: DateTimeNullableFilter<"BorrowRequests"> | Date | string | null
    due_date?: DateTimeFilter<"BorrowRequests"> | Date | string
    returned_at?: DateTimeNullableFilter<"BorrowRequests"> | Date | string | null
    borrower?: XOR<BorrowerScalarRelationFilter, BorrowerWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "request_id">

  export type BorrowRequestsOrderByWithAggregationInput = {
    request_id?: SortOrder
    bid?: SortOrder
    isbn?: SortOrder
    request_date?: SortOrderInput | SortOrder
    due_date?: SortOrder
    returned_at?: SortOrderInput | SortOrder
    _count?: BorrowRequestsCountOrderByAggregateInput
    _avg?: BorrowRequestsAvgOrderByAggregateInput
    _max?: BorrowRequestsMaxOrderByAggregateInput
    _min?: BorrowRequestsMinOrderByAggregateInput
    _sum?: BorrowRequestsSumOrderByAggregateInput
  }

  export type BorrowRequestsScalarWhereWithAggregatesInput = {
    AND?: BorrowRequestsScalarWhereWithAggregatesInput | BorrowRequestsScalarWhereWithAggregatesInput[]
    OR?: BorrowRequestsScalarWhereWithAggregatesInput[]
    NOT?: BorrowRequestsScalarWhereWithAggregatesInput | BorrowRequestsScalarWhereWithAggregatesInput[]
    request_id?: IntWithAggregatesFilter<"BorrowRequests"> | number
    bid?: IntWithAggregatesFilter<"BorrowRequests"> | number
    isbn?: StringWithAggregatesFilter<"BorrowRequests"> | string
    request_date?: DateTimeNullableWithAggregatesFilter<"BorrowRequests"> | Date | string | null
    due_date?: DateTimeWithAggregatesFilter<"BorrowRequests"> | Date | string
    returned_at?: DateTimeNullableWithAggregatesFilter<"BorrowRequests"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uid?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumStatusTypeFilter<"User"> | $Enums.StatusType
    registeration_date?: DateTimeNullableFilter<"User"> | Date | string | null
    borrower?: XOR<BorrowerNullableScalarRelationFilter, BorrowerWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    registeration_date?: SortOrderInput | SortOrder
    borrower?: BorrowerOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uid?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumStatusTypeFilter<"User"> | $Enums.StatusType
    registeration_date?: DateTimeNullableFilter<"User"> | Date | string | null
    borrower?: XOR<BorrowerNullableScalarRelationFilter, BorrowerWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "uid" | "email">

  export type UserOrderByWithAggregationInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    registeration_date?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uid?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    user_type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    status?: EnumStatusTypeWithAggregatesFilter<"User"> | $Enums.StatusType
    registeration_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BorrowerWhereInput = {
    AND?: BorrowerWhereInput | BorrowerWhereInput[]
    OR?: BorrowerWhereInput[]
    NOT?: BorrowerWhereInput | BorrowerWhereInput[]
    id?: IntFilter<"Borrower"> | number
    membership_date?: DateTimeNullableFilter<"Borrower"> | Date | string | null
    expiry_date?: DateTimeNullableFilter<"Borrower"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: BorrowRequestsListRelationFilter
  }

  export type BorrowerOrderByWithRelationInput = {
    id?: SortOrder
    membership_date?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    requests?: BorrowRequestsOrderByRelationAggregateInput
  }

  export type BorrowerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BorrowerWhereInput | BorrowerWhereInput[]
    OR?: BorrowerWhereInput[]
    NOT?: BorrowerWhereInput | BorrowerWhereInput[]
    membership_date?: DateTimeNullableFilter<"Borrower"> | Date | string | null
    expiry_date?: DateTimeNullableFilter<"Borrower"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    requests?: BorrowRequestsListRelationFilter
  }, "id">

  export type BorrowerOrderByWithAggregationInput = {
    id?: SortOrder
    membership_date?: SortOrderInput | SortOrder
    expiry_date?: SortOrderInput | SortOrder
    _count?: BorrowerCountOrderByAggregateInput
    _avg?: BorrowerAvgOrderByAggregateInput
    _max?: BorrowerMaxOrderByAggregateInput
    _min?: BorrowerMinOrderByAggregateInput
    _sum?: BorrowerSumOrderByAggregateInput
  }

  export type BorrowerScalarWhereWithAggregatesInput = {
    AND?: BorrowerScalarWhereWithAggregatesInput | BorrowerScalarWhereWithAggregatesInput[]
    OR?: BorrowerScalarWhereWithAggregatesInput[]
    NOT?: BorrowerScalarWhereWithAggregatesInput | BorrowerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Borrower"> | number
    membership_date?: DateTimeNullableWithAggregatesFilter<"Borrower"> | Date | string | null
    expiry_date?: DateTimeNullableWithAggregatesFilter<"Borrower"> | Date | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    access_level?: IntFilter<"Admin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    access_level?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    access_level?: IntFilter<"Admin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    access_level?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    access_level?: IntWithAggregatesFilter<"Admin"> | number
  }

  export type BookCreateInput = {
    isbn: string
    title: string
    author: string
    location?: string | null
    available_qty?: number | null
    requests?: BorrowRequestsCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    isbn: string
    title: string
    author: string
    location?: string | null
    available_qty?: number | null
    requests?: BorrowRequestsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    available_qty?: NullableIntFieldUpdateOperationsInput | number | null
    requests?: BorrowRequestsUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    available_qty?: NullableIntFieldUpdateOperationsInput | number | null
    requests?: BorrowRequestsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    isbn: string
    title: string
    author: string
    location?: string | null
    available_qty?: number | null
  }

  export type BookUpdateManyMutationInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    available_qty?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookUncheckedUpdateManyInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    available_qty?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BorrowRequestsCreateInput = {
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
    borrower: BorrowerCreateNestedOneWithoutRequestsInput
    book: BookCreateNestedOneWithoutRequestsInput
  }

  export type BorrowRequestsUncheckedCreateInput = {
    request_id?: number
    bid: number
    isbn: string
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type BorrowRequestsUpdateInput = {
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: BorrowerUpdateOneRequiredWithoutRequestsNestedInput
    book?: BookUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type BorrowRequestsUncheckedUpdateInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowRequestsCreateManyInput = {
    request_id?: number
    bid: number
    isbn: string
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type BorrowRequestsUpdateManyMutationInput = {
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowRequestsUncheckedUpdateManyInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    user_type?: $Enums.UserType
    status?: $Enums.StatusType
    registeration_date?: Date | string | null
    borrower?: BorrowerCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uid?: number
    email: string
    name: string
    password: string
    user_type?: $Enums.UserType
    status?: $Enums.StatusType
    registeration_date?: Date | string | null
    borrower?: BorrowerUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: BorrowerUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: BorrowerUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uid?: number
    email: string
    name: string
    password: string
    user_type?: $Enums.UserType
    status?: $Enums.StatusType
    registeration_date?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    uid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowerCreateInput = {
    membership_date?: Date | string | null
    expiry_date?: Date | string | null
    user: UserCreateNestedOneWithoutBorrowerInput
    requests?: BorrowRequestsCreateNestedManyWithoutBorrowerInput
  }

  export type BorrowerUncheckedCreateInput = {
    id: number
    membership_date?: Date | string | null
    expiry_date?: Date | string | null
    requests?: BorrowRequestsUncheckedCreateNestedManyWithoutBorrowerInput
  }

  export type BorrowerUpdateInput = {
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBorrowerNestedInput
    requests?: BorrowRequestsUpdateManyWithoutBorrowerNestedInput
  }

  export type BorrowerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: BorrowRequestsUncheckedUpdateManyWithoutBorrowerNestedInput
  }

  export type BorrowerCreateManyInput = {
    id: number
    membership_date?: Date | string | null
    expiry_date?: Date | string | null
  }

  export type BorrowerUpdateManyMutationInput = {
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateInput = {
    access_level?: number
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id: number
    access_level?: number
  }

  export type AdminUpdateInput = {
    access_level?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateManyInput = {
    id: number
    access_level?: number
  }

  export type AdminUpdateManyMutationInput = {
    access_level?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_level?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BorrowRequestsListRelationFilter = {
    every?: BorrowRequestsWhereInput
    some?: BorrowRequestsWhereInput
    none?: BorrowRequestsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BorrowRequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelevanceInput = {
    fields: BookOrderByRelevanceFieldEnum | BookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookCountOrderByAggregateInput = {
    isbn?: SortOrder
    title?: SortOrder
    author?: SortOrder
    location?: SortOrder
    available_qty?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    available_qty?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    isbn?: SortOrder
    title?: SortOrder
    author?: SortOrder
    location?: SortOrder
    available_qty?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    isbn?: SortOrder
    title?: SortOrder
    author?: SortOrder
    location?: SortOrder
    available_qty?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    available_qty?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BorrowerScalarRelationFilter = {
    is?: BorrowerWhereInput
    isNot?: BorrowerWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BorrowRequestsOrderByRelevanceInput = {
    fields: BorrowRequestsOrderByRelevanceFieldEnum | BorrowRequestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BorrowRequestsCountOrderByAggregateInput = {
    request_id?: SortOrder
    bid?: SortOrder
    isbn?: SortOrder
    request_date?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrder
  }

  export type BorrowRequestsAvgOrderByAggregateInput = {
    request_id?: SortOrder
    bid?: SortOrder
  }

  export type BorrowRequestsMaxOrderByAggregateInput = {
    request_id?: SortOrder
    bid?: SortOrder
    isbn?: SortOrder
    request_date?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrder
  }

  export type BorrowRequestsMinOrderByAggregateInput = {
    request_id?: SortOrder
    bid?: SortOrder
    isbn?: SortOrder
    request_date?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrder
  }

  export type BorrowRequestsSumOrderByAggregateInput = {
    request_id?: SortOrder
    bid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type EnumStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[]
    notIn?: $Enums.StatusType[]
    not?: NestedEnumStatusTypeFilter<$PrismaModel> | $Enums.StatusType
  }

  export type BorrowerNullableScalarRelationFilter = {
    is?: BorrowerWhereInput | null
    isNot?: BorrowerWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    registeration_date?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    registeration_date?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    status?: SortOrder
    registeration_date?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    uid?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[]
    notIn?: $Enums.StatusType[]
    not?: NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumStatusTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BorrowerCountOrderByAggregateInput = {
    id?: SortOrder
    membership_date?: SortOrder
    expiry_date?: SortOrder
  }

  export type BorrowerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BorrowerMaxOrderByAggregateInput = {
    id?: SortOrder
    membership_date?: SortOrder
    expiry_date?: SortOrder
  }

  export type BorrowerMinOrderByAggregateInput = {
    id?: SortOrder
    membership_date?: SortOrder
    expiry_date?: SortOrder
  }

  export type BorrowerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    access_level?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    access_level?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    access_level?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    access_level?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    access_level?: SortOrder
  }

  export type BorrowRequestsCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowRequestsCreateWithoutBookInput, BorrowRequestsUncheckedCreateWithoutBookInput> | BorrowRequestsCreateWithoutBookInput[] | BorrowRequestsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBookInput | BorrowRequestsCreateOrConnectWithoutBookInput[]
    createMany?: BorrowRequestsCreateManyBookInputEnvelope
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
  }

  export type BorrowRequestsUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BorrowRequestsCreateWithoutBookInput, BorrowRequestsUncheckedCreateWithoutBookInput> | BorrowRequestsCreateWithoutBookInput[] | BorrowRequestsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBookInput | BorrowRequestsCreateOrConnectWithoutBookInput[]
    createMany?: BorrowRequestsCreateManyBookInputEnvelope
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BorrowRequestsUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowRequestsCreateWithoutBookInput, BorrowRequestsUncheckedCreateWithoutBookInput> | BorrowRequestsCreateWithoutBookInput[] | BorrowRequestsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBookInput | BorrowRequestsCreateOrConnectWithoutBookInput[]
    upsert?: BorrowRequestsUpsertWithWhereUniqueWithoutBookInput | BorrowRequestsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowRequestsCreateManyBookInputEnvelope
    set?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    disconnect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    delete?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    update?: BorrowRequestsUpdateWithWhereUniqueWithoutBookInput | BorrowRequestsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowRequestsUpdateManyWithWhereWithoutBookInput | BorrowRequestsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowRequestsScalarWhereInput | BorrowRequestsScalarWhereInput[]
  }

  export type BorrowRequestsUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BorrowRequestsCreateWithoutBookInput, BorrowRequestsUncheckedCreateWithoutBookInput> | BorrowRequestsCreateWithoutBookInput[] | BorrowRequestsUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBookInput | BorrowRequestsCreateOrConnectWithoutBookInput[]
    upsert?: BorrowRequestsUpsertWithWhereUniqueWithoutBookInput | BorrowRequestsUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BorrowRequestsCreateManyBookInputEnvelope
    set?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    disconnect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    delete?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    update?: BorrowRequestsUpdateWithWhereUniqueWithoutBookInput | BorrowRequestsUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BorrowRequestsUpdateManyWithWhereWithoutBookInput | BorrowRequestsUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BorrowRequestsScalarWhereInput | BorrowRequestsScalarWhereInput[]
  }

  export type BorrowerCreateNestedOneWithoutRequestsInput = {
    create?: XOR<BorrowerCreateWithoutRequestsInput, BorrowerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: BorrowerCreateOrConnectWithoutRequestsInput
    connect?: BorrowerWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutRequestsInput = {
    create?: XOR<BookCreateWithoutRequestsInput, BookUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: BookCreateOrConnectWithoutRequestsInput
    connect?: BookWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BorrowerUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<BorrowerCreateWithoutRequestsInput, BorrowerUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: BorrowerCreateOrConnectWithoutRequestsInput
    upsert?: BorrowerUpsertWithoutRequestsInput
    connect?: BorrowerWhereUniqueInput
    update?: XOR<XOR<BorrowerUpdateToOneWithWhereWithoutRequestsInput, BorrowerUpdateWithoutRequestsInput>, BorrowerUncheckedUpdateWithoutRequestsInput>
  }

  export type BookUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<BookCreateWithoutRequestsInput, BookUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: BookCreateOrConnectWithoutRequestsInput
    upsert?: BookUpsertWithoutRequestsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutRequestsInput, BookUpdateWithoutRequestsInput>, BookUncheckedUpdateWithoutRequestsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BorrowerCreateNestedOneWithoutUserInput = {
    create?: XOR<BorrowerCreateWithoutUserInput, BorrowerUncheckedCreateWithoutUserInput>
    connectOrCreate?: BorrowerCreateOrConnectWithoutUserInput
    connect?: BorrowerWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type BorrowerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BorrowerCreateWithoutUserInput, BorrowerUncheckedCreateWithoutUserInput>
    connectOrCreate?: BorrowerCreateOrConnectWithoutUserInput
    connect?: BorrowerWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type EnumStatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.StatusType
  }

  export type BorrowerUpdateOneWithoutUserNestedInput = {
    create?: XOR<BorrowerCreateWithoutUserInput, BorrowerUncheckedCreateWithoutUserInput>
    connectOrCreate?: BorrowerCreateOrConnectWithoutUserInput
    upsert?: BorrowerUpsertWithoutUserInput
    disconnect?: BorrowerWhereInput | boolean
    delete?: BorrowerWhereInput | boolean
    connect?: BorrowerWhereUniqueInput
    update?: XOR<XOR<BorrowerUpdateToOneWithWhereWithoutUserInput, BorrowerUpdateWithoutUserInput>, BorrowerUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type BorrowerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BorrowerCreateWithoutUserInput, BorrowerUncheckedCreateWithoutUserInput>
    connectOrCreate?: BorrowerCreateOrConnectWithoutUserInput
    upsert?: BorrowerUpsertWithoutUserInput
    disconnect?: BorrowerWhereInput | boolean
    delete?: BorrowerWhereInput | boolean
    connect?: BorrowerWhereUniqueInput
    update?: XOR<XOR<BorrowerUpdateToOneWithWhereWithoutUserInput, BorrowerUpdateWithoutUserInput>, BorrowerUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutBorrowerInput = {
    create?: XOR<UserCreateWithoutBorrowerInput, UserUncheckedCreateWithoutBorrowerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowerInput
    connect?: UserWhereUniqueInput
  }

  export type BorrowRequestsCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<BorrowRequestsCreateWithoutBorrowerInput, BorrowRequestsUncheckedCreateWithoutBorrowerInput> | BorrowRequestsCreateWithoutBorrowerInput[] | BorrowRequestsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBorrowerInput | BorrowRequestsCreateOrConnectWithoutBorrowerInput[]
    createMany?: BorrowRequestsCreateManyBorrowerInputEnvelope
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
  }

  export type BorrowRequestsUncheckedCreateNestedManyWithoutBorrowerInput = {
    create?: XOR<BorrowRequestsCreateWithoutBorrowerInput, BorrowRequestsUncheckedCreateWithoutBorrowerInput> | BorrowRequestsCreateWithoutBorrowerInput[] | BorrowRequestsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBorrowerInput | BorrowRequestsCreateOrConnectWithoutBorrowerInput[]
    createMany?: BorrowRequestsCreateManyBorrowerInputEnvelope
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBorrowerNestedInput = {
    create?: XOR<UserCreateWithoutBorrowerInput, UserUncheckedCreateWithoutBorrowerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowerInput
    upsert?: UserUpsertWithoutBorrowerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBorrowerInput, UserUpdateWithoutBorrowerInput>, UserUncheckedUpdateWithoutBorrowerInput>
  }

  export type BorrowRequestsUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<BorrowRequestsCreateWithoutBorrowerInput, BorrowRequestsUncheckedCreateWithoutBorrowerInput> | BorrowRequestsCreateWithoutBorrowerInput[] | BorrowRequestsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBorrowerInput | BorrowRequestsCreateOrConnectWithoutBorrowerInput[]
    upsert?: BorrowRequestsUpsertWithWhereUniqueWithoutBorrowerInput | BorrowRequestsUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: BorrowRequestsCreateManyBorrowerInputEnvelope
    set?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    disconnect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    delete?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    update?: BorrowRequestsUpdateWithWhereUniqueWithoutBorrowerInput | BorrowRequestsUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: BorrowRequestsUpdateManyWithWhereWithoutBorrowerInput | BorrowRequestsUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: BorrowRequestsScalarWhereInput | BorrowRequestsScalarWhereInput[]
  }

  export type BorrowRequestsUncheckedUpdateManyWithoutBorrowerNestedInput = {
    create?: XOR<BorrowRequestsCreateWithoutBorrowerInput, BorrowRequestsUncheckedCreateWithoutBorrowerInput> | BorrowRequestsCreateWithoutBorrowerInput[] | BorrowRequestsUncheckedCreateWithoutBorrowerInput[]
    connectOrCreate?: BorrowRequestsCreateOrConnectWithoutBorrowerInput | BorrowRequestsCreateOrConnectWithoutBorrowerInput[]
    upsert?: BorrowRequestsUpsertWithWhereUniqueWithoutBorrowerInput | BorrowRequestsUpsertWithWhereUniqueWithoutBorrowerInput[]
    createMany?: BorrowRequestsCreateManyBorrowerInputEnvelope
    set?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    disconnect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    delete?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    connect?: BorrowRequestsWhereUniqueInput | BorrowRequestsWhereUniqueInput[]
    update?: BorrowRequestsUpdateWithWhereUniqueWithoutBorrowerInput | BorrowRequestsUpdateWithWhereUniqueWithoutBorrowerInput[]
    updateMany?: BorrowRequestsUpdateManyWithWhereWithoutBorrowerInput | BorrowRequestsUpdateManyWithWhereWithoutBorrowerInput[]
    deleteMany?: BorrowRequestsScalarWhereInput | BorrowRequestsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[]
    notIn?: $Enums.StatusType[]
    not?: NestedEnumStatusTypeFilter<$PrismaModel> | $Enums.StatusType
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[]
    notIn?: $Enums.StatusType[]
    not?: NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumStatusTypeFilter<$PrismaModel>
  }

  export type BorrowRequestsCreateWithoutBookInput = {
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
    borrower: BorrowerCreateNestedOneWithoutRequestsInput
  }

  export type BorrowRequestsUncheckedCreateWithoutBookInput = {
    request_id?: number
    bid: number
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type BorrowRequestsCreateOrConnectWithoutBookInput = {
    where: BorrowRequestsWhereUniqueInput
    create: XOR<BorrowRequestsCreateWithoutBookInput, BorrowRequestsUncheckedCreateWithoutBookInput>
  }

  export type BorrowRequestsCreateManyBookInputEnvelope = {
    data: BorrowRequestsCreateManyBookInput | BorrowRequestsCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BorrowRequestsUpsertWithWhereUniqueWithoutBookInput = {
    where: BorrowRequestsWhereUniqueInput
    update: XOR<BorrowRequestsUpdateWithoutBookInput, BorrowRequestsUncheckedUpdateWithoutBookInput>
    create: XOR<BorrowRequestsCreateWithoutBookInput, BorrowRequestsUncheckedCreateWithoutBookInput>
  }

  export type BorrowRequestsUpdateWithWhereUniqueWithoutBookInput = {
    where: BorrowRequestsWhereUniqueInput
    data: XOR<BorrowRequestsUpdateWithoutBookInput, BorrowRequestsUncheckedUpdateWithoutBookInput>
  }

  export type BorrowRequestsUpdateManyWithWhereWithoutBookInput = {
    where: BorrowRequestsScalarWhereInput
    data: XOR<BorrowRequestsUpdateManyMutationInput, BorrowRequestsUncheckedUpdateManyWithoutBookInput>
  }

  export type BorrowRequestsScalarWhereInput = {
    AND?: BorrowRequestsScalarWhereInput | BorrowRequestsScalarWhereInput[]
    OR?: BorrowRequestsScalarWhereInput[]
    NOT?: BorrowRequestsScalarWhereInput | BorrowRequestsScalarWhereInput[]
    request_id?: IntFilter<"BorrowRequests"> | number
    bid?: IntFilter<"BorrowRequests"> | number
    isbn?: StringFilter<"BorrowRequests"> | string
    request_date?: DateTimeNullableFilter<"BorrowRequests"> | Date | string | null
    due_date?: DateTimeFilter<"BorrowRequests"> | Date | string
    returned_at?: DateTimeNullableFilter<"BorrowRequests"> | Date | string | null
  }

  export type BorrowerCreateWithoutRequestsInput = {
    membership_date?: Date | string | null
    expiry_date?: Date | string | null
    user: UserCreateNestedOneWithoutBorrowerInput
  }

  export type BorrowerUncheckedCreateWithoutRequestsInput = {
    id: number
    membership_date?: Date | string | null
    expiry_date?: Date | string | null
  }

  export type BorrowerCreateOrConnectWithoutRequestsInput = {
    where: BorrowerWhereUniqueInput
    create: XOR<BorrowerCreateWithoutRequestsInput, BorrowerUncheckedCreateWithoutRequestsInput>
  }

  export type BookCreateWithoutRequestsInput = {
    isbn: string
    title: string
    author: string
    location?: string | null
    available_qty?: number | null
  }

  export type BookUncheckedCreateWithoutRequestsInput = {
    isbn: string
    title: string
    author: string
    location?: string | null
    available_qty?: number | null
  }

  export type BookCreateOrConnectWithoutRequestsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutRequestsInput, BookUncheckedCreateWithoutRequestsInput>
  }

  export type BorrowerUpsertWithoutRequestsInput = {
    update: XOR<BorrowerUpdateWithoutRequestsInput, BorrowerUncheckedUpdateWithoutRequestsInput>
    create: XOR<BorrowerCreateWithoutRequestsInput, BorrowerUncheckedCreateWithoutRequestsInput>
    where?: BorrowerWhereInput
  }

  export type BorrowerUpdateToOneWithWhereWithoutRequestsInput = {
    where?: BorrowerWhereInput
    data: XOR<BorrowerUpdateWithoutRequestsInput, BorrowerUncheckedUpdateWithoutRequestsInput>
  }

  export type BorrowerUpdateWithoutRequestsInput = {
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBorrowerNestedInput
  }

  export type BorrowerUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookUpsertWithoutRequestsInput = {
    update: XOR<BookUpdateWithoutRequestsInput, BookUncheckedUpdateWithoutRequestsInput>
    create: XOR<BookCreateWithoutRequestsInput, BookUncheckedCreateWithoutRequestsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutRequestsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutRequestsInput, BookUncheckedUpdateWithoutRequestsInput>
  }

  export type BookUpdateWithoutRequestsInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    available_qty?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookUncheckedUpdateWithoutRequestsInput = {
    isbn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    available_qty?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BorrowerCreateWithoutUserInput = {
    membership_date?: Date | string | null
    expiry_date?: Date | string | null
    requests?: BorrowRequestsCreateNestedManyWithoutBorrowerInput
  }

  export type BorrowerUncheckedCreateWithoutUserInput = {
    membership_date?: Date | string | null
    expiry_date?: Date | string | null
    requests?: BorrowRequestsUncheckedCreateNestedManyWithoutBorrowerInput
  }

  export type BorrowerCreateOrConnectWithoutUserInput = {
    where: BorrowerWhereUniqueInput
    create: XOR<BorrowerCreateWithoutUserInput, BorrowerUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    access_level?: number
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    access_level?: number
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type BorrowerUpsertWithoutUserInput = {
    update: XOR<BorrowerUpdateWithoutUserInput, BorrowerUncheckedUpdateWithoutUserInput>
    create: XOR<BorrowerCreateWithoutUserInput, BorrowerUncheckedCreateWithoutUserInput>
    where?: BorrowerWhereInput
  }

  export type BorrowerUpdateToOneWithWhereWithoutUserInput = {
    where?: BorrowerWhereInput
    data: XOR<BorrowerUpdateWithoutUserInput, BorrowerUncheckedUpdateWithoutUserInput>
  }

  export type BorrowerUpdateWithoutUserInput = {
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: BorrowRequestsUpdateManyWithoutBorrowerNestedInput
  }

  export type BorrowerUncheckedUpdateWithoutUserInput = {
    membership_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: BorrowRequestsUncheckedUpdateManyWithoutBorrowerNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    access_level?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    access_level?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutBorrowerInput = {
    email: string
    name: string
    password: string
    user_type?: $Enums.UserType
    status?: $Enums.StatusType
    registeration_date?: Date | string | null
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBorrowerInput = {
    uid?: number
    email: string
    name: string
    password: string
    user_type?: $Enums.UserType
    status?: $Enums.StatusType
    registeration_date?: Date | string | null
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBorrowerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBorrowerInput, UserUncheckedCreateWithoutBorrowerInput>
  }

  export type BorrowRequestsCreateWithoutBorrowerInput = {
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
    book: BookCreateNestedOneWithoutRequestsInput
  }

  export type BorrowRequestsUncheckedCreateWithoutBorrowerInput = {
    request_id?: number
    isbn: string
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type BorrowRequestsCreateOrConnectWithoutBorrowerInput = {
    where: BorrowRequestsWhereUniqueInput
    create: XOR<BorrowRequestsCreateWithoutBorrowerInput, BorrowRequestsUncheckedCreateWithoutBorrowerInput>
  }

  export type BorrowRequestsCreateManyBorrowerInputEnvelope = {
    data: BorrowRequestsCreateManyBorrowerInput | BorrowRequestsCreateManyBorrowerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBorrowerInput = {
    update: XOR<UserUpdateWithoutBorrowerInput, UserUncheckedUpdateWithoutBorrowerInput>
    create: XOR<UserCreateWithoutBorrowerInput, UserUncheckedCreateWithoutBorrowerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBorrowerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBorrowerInput, UserUncheckedUpdateWithoutBorrowerInput>
  }

  export type UserUpdateWithoutBorrowerInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBorrowerInput = {
    uid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BorrowRequestsUpsertWithWhereUniqueWithoutBorrowerInput = {
    where: BorrowRequestsWhereUniqueInput
    update: XOR<BorrowRequestsUpdateWithoutBorrowerInput, BorrowRequestsUncheckedUpdateWithoutBorrowerInput>
    create: XOR<BorrowRequestsCreateWithoutBorrowerInput, BorrowRequestsUncheckedCreateWithoutBorrowerInput>
  }

  export type BorrowRequestsUpdateWithWhereUniqueWithoutBorrowerInput = {
    where: BorrowRequestsWhereUniqueInput
    data: XOR<BorrowRequestsUpdateWithoutBorrowerInput, BorrowRequestsUncheckedUpdateWithoutBorrowerInput>
  }

  export type BorrowRequestsUpdateManyWithWhereWithoutBorrowerInput = {
    where: BorrowRequestsScalarWhereInput
    data: XOR<BorrowRequestsUpdateManyMutationInput, BorrowRequestsUncheckedUpdateManyWithoutBorrowerInput>
  }

  export type UserCreateWithoutAdminInput = {
    email: string
    name: string
    password: string
    user_type?: $Enums.UserType
    status?: $Enums.StatusType
    registeration_date?: Date | string | null
    borrower?: BorrowerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    uid?: number
    email: string
    name: string
    password: string
    user_type?: $Enums.UserType
    status?: $Enums.StatusType
    registeration_date?: Date | string | null
    borrower?: BorrowerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: BorrowerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    uid?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    registeration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: BorrowerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BorrowRequestsCreateManyBookInput = {
    request_id?: number
    bid: number
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type BorrowRequestsUpdateWithoutBookInput = {
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrower?: BorrowerUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type BorrowRequestsUncheckedUpdateWithoutBookInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowRequestsUncheckedUpdateManyWithoutBookInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    bid?: IntFieldUpdateOperationsInput | number
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowRequestsCreateManyBorrowerInput = {
    request_id?: number
    isbn: string
    request_date?: Date | string | null
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type BorrowRequestsUpdateWithoutBorrowerInput = {
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: BookUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type BorrowRequestsUncheckedUpdateWithoutBorrowerInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowRequestsUncheckedUpdateManyWithoutBorrowerInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    isbn?: StringFieldUpdateOperationsInput | string
    request_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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