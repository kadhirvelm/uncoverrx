
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Exploration
 * 
 */
export type Exploration = {
  exploration_rid: string
  metadata: Prisma.JsonValue
}

/**
 * Model ExplorationXQueryRequest
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type ExplorationXQueryRequest = {
  exploration_x_query_request_id: number
  position: string
  exploration_rid: string
  query_request_rid: string
}

/**
 * Model QueryRequest
 * 
 */
export type QueryRequest = {
  query_request_rid: string
  status: string
  input: Prisma.JsonValue
  request_date: Date
  completion_date: Date | null
  result: Prisma.JsonValue | null
}

/**
 * Model auth_group
 * 
 */
export type auth_group = {
  id: number
  name: string
}

/**
 * Model auth_group_permissions
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_group_permissions = {
  id: bigint
  group_id: number
  permission_id: number
}

/**
 * Model auth_permission
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_permission = {
  id: number
  name: string
  content_type_id: number
  codename: string
}

/**
 * Model auth_user
 * 
 */
export type auth_user = {
  id: number
  password: string
  last_login: Date | null
  is_superuser: boolean
  username: string
  first_name: string
  last_name: string
  email: string
  is_staff: boolean
  is_active: boolean
  date_joined: Date
}

/**
 * Model auth_user_groups
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_user_groups = {
  id: bigint
  user_id: number
  group_id: number
}

/**
 * Model auth_user_user_permissions
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type auth_user_user_permissions = {
  id: bigint
  user_id: number
  permission_id: number
}

/**
 * Model django_admin_log
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info.
 */
export type django_admin_log = {
  id: number
  action_time: Date
  object_id: string | null
  object_repr: string
  action_flag: number
  change_message: string
  content_type_id: number | null
  user_id: number
}

/**
 * Model django_content_type
 * 
 */
export type django_content_type = {
  id: number
  app_label: string
  model: string
}

/**
 * Model django_migrations
 * 
 */
export type django_migrations = {
  id: bigint
  app: string
  name: string
  applied: Date
}

/**
 * Model django_session
 * 
 */
export type django_session = {
  session_key: string
  session_data: string
  expire_date: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Explorations
 * const explorations = await prisma.exploration.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Explorations
   * const explorations = await prisma.exploration.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.exploration`: Exposes CRUD operations for the **Exploration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Explorations
    * const explorations = await prisma.exploration.findMany()
    * ```
    */
  get exploration(): Prisma.ExplorationDelegate<GlobalReject>;

  /**
   * `prisma.explorationXQueryRequest`: Exposes CRUD operations for the **ExplorationXQueryRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExplorationXQueryRequests
    * const explorationXQueryRequests = await prisma.explorationXQueryRequest.findMany()
    * ```
    */
  get explorationXQueryRequest(): Prisma.ExplorationXQueryRequestDelegate<GlobalReject>;

  /**
   * `prisma.queryRequest`: Exposes CRUD operations for the **QueryRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueryRequests
    * const queryRequests = await prisma.queryRequest.findMany()
    * ```
    */
  get queryRequest(): Prisma.QueryRequestDelegate<GlobalReject>;

  /**
   * `prisma.auth_group`: Exposes CRUD operations for the **auth_group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_groups
    * const auth_groups = await prisma.auth_group.findMany()
    * ```
    */
  get auth_group(): Prisma.auth_groupDelegate<GlobalReject>;

  /**
   * `prisma.auth_group_permissions`: Exposes CRUD operations for the **auth_group_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_group_permissions
    * const auth_group_permissions = await prisma.auth_group_permissions.findMany()
    * ```
    */
  get auth_group_permissions(): Prisma.auth_group_permissionsDelegate<GlobalReject>;

  /**
   * `prisma.auth_permission`: Exposes CRUD operations for the **auth_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_permissions
    * const auth_permissions = await prisma.auth_permission.findMany()
    * ```
    */
  get auth_permission(): Prisma.auth_permissionDelegate<GlobalReject>;

  /**
   * `prisma.auth_user`: Exposes CRUD operations for the **auth_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_users
    * const auth_users = await prisma.auth_user.findMany()
    * ```
    */
  get auth_user(): Prisma.auth_userDelegate<GlobalReject>;

  /**
   * `prisma.auth_user_groups`: Exposes CRUD operations for the **auth_user_groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_user_groups
    * const auth_user_groups = await prisma.auth_user_groups.findMany()
    * ```
    */
  get auth_user_groups(): Prisma.auth_user_groupsDelegate<GlobalReject>;

  /**
   * `prisma.auth_user_user_permissions`: Exposes CRUD operations for the **auth_user_user_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_user_user_permissions
    * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findMany()
    * ```
    */
  get auth_user_user_permissions(): Prisma.auth_user_user_permissionsDelegate<GlobalReject>;

  /**
   * `prisma.django_admin_log`: Exposes CRUD operations for the **django_admin_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_admin_logs
    * const django_admin_logs = await prisma.django_admin_log.findMany()
    * ```
    */
  get django_admin_log(): Prisma.django_admin_logDelegate<GlobalReject>;

  /**
   * `prisma.django_content_type`: Exposes CRUD operations for the **django_content_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_content_types
    * const django_content_types = await prisma.django_content_type.findMany()
    * ```
    */
  get django_content_type(): Prisma.django_content_typeDelegate<GlobalReject>;

  /**
   * `prisma.django_migrations`: Exposes CRUD operations for the **django_migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_migrations
    * const django_migrations = await prisma.django_migrations.findMany()
    * ```
    */
  get django_migrations(): Prisma.django_migrationsDelegate<GlobalReject>;

  /**
   * `prisma.django_session`: Exposes CRUD operations for the **django_session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Django_sessions
    * const django_sessions = await prisma.django_session.findMany()
    * ```
    */
  get django_session(): Prisma.django_sessionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Exploration: 'Exploration',
    ExplorationXQueryRequest: 'ExplorationXQueryRequest',
    QueryRequest: 'QueryRequest',
    auth_group: 'auth_group',
    auth_group_permissions: 'auth_group_permissions',
    auth_permission: 'auth_permission',
    auth_user: 'auth_user',
    auth_user_groups: 'auth_user_groups',
    auth_user_user_permissions: 'auth_user_user_permissions',
    django_admin_log: 'django_admin_log',
    django_content_type: 'django_content_type',
    django_migrations: 'django_migrations',
    django_session: 'django_session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExplorationCountOutputType
   */


  export type ExplorationCountOutputType = {
    ExplorationXQueryRequest: number
  }

  export type ExplorationCountOutputTypeSelect = {
    ExplorationXQueryRequest?: boolean
  }

  export type ExplorationCountOutputTypeGetPayload<S extends boolean | null | undefined | ExplorationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExplorationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ExplorationCountOutputTypeArgs)
    ? ExplorationCountOutputType 
    : S extends { select: any } & (ExplorationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ExplorationCountOutputType ? ExplorationCountOutputType[P] : never
  } 
      : ExplorationCountOutputType




  // Custom InputTypes

  /**
   * ExplorationCountOutputType without action
   */
  export type ExplorationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ExplorationCountOutputType
     */
    select?: ExplorationCountOutputTypeSelect | null
  }



  /**
   * Count Type QueryRequestCountOutputType
   */


  export type QueryRequestCountOutputType = {
    ExplorationXQueryRequest: number
  }

  export type QueryRequestCountOutputTypeSelect = {
    ExplorationXQueryRequest?: boolean
  }

  export type QueryRequestCountOutputTypeGetPayload<S extends boolean | null | undefined | QueryRequestCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QueryRequestCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (QueryRequestCountOutputTypeArgs)
    ? QueryRequestCountOutputType 
    : S extends { select: any } & (QueryRequestCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof QueryRequestCountOutputType ? QueryRequestCountOutputType[P] : never
  } 
      : QueryRequestCountOutputType




  // Custom InputTypes

  /**
   * QueryRequestCountOutputType without action
   */
  export type QueryRequestCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QueryRequestCountOutputType
     */
    select?: QueryRequestCountOutputTypeSelect | null
  }



  /**
   * Count Type Auth_groupCountOutputType
   */


  export type Auth_groupCountOutputType = {
    auth_group_permissions: number
    auth_user_groups: number
  }

  export type Auth_groupCountOutputTypeSelect = {
    auth_group_permissions?: boolean
    auth_user_groups?: boolean
  }

  export type Auth_groupCountOutputTypeGetPayload<S extends boolean | null | undefined | Auth_groupCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Auth_groupCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Auth_groupCountOutputTypeArgs)
    ? Auth_groupCountOutputType 
    : S extends { select: any } & (Auth_groupCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Auth_groupCountOutputType ? Auth_groupCountOutputType[P] : never
  } 
      : Auth_groupCountOutputType




  // Custom InputTypes

  /**
   * Auth_groupCountOutputType without action
   */
  export type Auth_groupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Auth_groupCountOutputType
     */
    select?: Auth_groupCountOutputTypeSelect | null
  }



  /**
   * Count Type Auth_permissionCountOutputType
   */


  export type Auth_permissionCountOutputType = {
    auth_group_permissions: number
    auth_user_user_permissions: number
  }

  export type Auth_permissionCountOutputTypeSelect = {
    auth_group_permissions?: boolean
    auth_user_user_permissions?: boolean
  }

  export type Auth_permissionCountOutputTypeGetPayload<S extends boolean | null | undefined | Auth_permissionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Auth_permissionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Auth_permissionCountOutputTypeArgs)
    ? Auth_permissionCountOutputType 
    : S extends { select: any } & (Auth_permissionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Auth_permissionCountOutputType ? Auth_permissionCountOutputType[P] : never
  } 
      : Auth_permissionCountOutputType




  // Custom InputTypes

  /**
   * Auth_permissionCountOutputType without action
   */
  export type Auth_permissionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Auth_permissionCountOutputType
     */
    select?: Auth_permissionCountOutputTypeSelect | null
  }



  /**
   * Count Type Auth_userCountOutputType
   */


  export type Auth_userCountOutputType = {
    auth_user_groups: number
    auth_user_user_permissions: number
    django_admin_log: number
  }

  export type Auth_userCountOutputTypeSelect = {
    auth_user_groups?: boolean
    auth_user_user_permissions?: boolean
    django_admin_log?: boolean
  }

  export type Auth_userCountOutputTypeGetPayload<S extends boolean | null | undefined | Auth_userCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Auth_userCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Auth_userCountOutputTypeArgs)
    ? Auth_userCountOutputType 
    : S extends { select: any } & (Auth_userCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Auth_userCountOutputType ? Auth_userCountOutputType[P] : never
  } 
      : Auth_userCountOutputType




  // Custom InputTypes

  /**
   * Auth_userCountOutputType without action
   */
  export type Auth_userCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Auth_userCountOutputType
     */
    select?: Auth_userCountOutputTypeSelect | null
  }



  /**
   * Count Type Django_content_typeCountOutputType
   */


  export type Django_content_typeCountOutputType = {
    auth_permission: number
    django_admin_log: number
  }

  export type Django_content_typeCountOutputTypeSelect = {
    auth_permission?: boolean
    django_admin_log?: boolean
  }

  export type Django_content_typeCountOutputTypeGetPayload<S extends boolean | null | undefined | Django_content_typeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Django_content_typeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Django_content_typeCountOutputTypeArgs)
    ? Django_content_typeCountOutputType 
    : S extends { select: any } & (Django_content_typeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Django_content_typeCountOutputType ? Django_content_typeCountOutputType[P] : never
  } 
      : Django_content_typeCountOutputType




  // Custom InputTypes

  /**
   * Django_content_typeCountOutputType without action
   */
  export type Django_content_typeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Django_content_typeCountOutputType
     */
    select?: Django_content_typeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Exploration
   */


  export type AggregateExploration = {
    _count: ExplorationCountAggregateOutputType | null
    _min: ExplorationMinAggregateOutputType | null
    _max: ExplorationMaxAggregateOutputType | null
  }

  export type ExplorationMinAggregateOutputType = {
    exploration_rid: string | null
  }

  export type ExplorationMaxAggregateOutputType = {
    exploration_rid: string | null
  }

  export type ExplorationCountAggregateOutputType = {
    exploration_rid: number
    metadata: number
    _all: number
  }


  export type ExplorationMinAggregateInputType = {
    exploration_rid?: true
  }

  export type ExplorationMaxAggregateInputType = {
    exploration_rid?: true
  }

  export type ExplorationCountAggregateInputType = {
    exploration_rid?: true
    metadata?: true
    _all?: true
  }

  export type ExplorationAggregateArgs = {
    /**
     * Filter which Exploration to aggregate.
     */
    where?: ExplorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Explorations to fetch.
     */
    orderBy?: Enumerable<ExplorationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExplorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Explorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Explorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Explorations
    **/
    _count?: true | ExplorationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExplorationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExplorationMaxAggregateInputType
  }

  export type GetExplorationAggregateType<T extends ExplorationAggregateArgs> = {
        [P in keyof T & keyof AggregateExploration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExploration[P]>
      : GetScalarType<T[P], AggregateExploration[P]>
  }




  export type ExplorationGroupByArgs = {
    where?: ExplorationWhereInput
    orderBy?: Enumerable<ExplorationOrderByWithAggregationInput>
    by: ExplorationScalarFieldEnum[]
    having?: ExplorationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExplorationCountAggregateInputType | true
    _min?: ExplorationMinAggregateInputType
    _max?: ExplorationMaxAggregateInputType
  }


  export type ExplorationGroupByOutputType = {
    exploration_rid: string
    metadata: JsonValue
    _count: ExplorationCountAggregateOutputType | null
    _min: ExplorationMinAggregateOutputType | null
    _max: ExplorationMaxAggregateOutputType | null
  }

  type GetExplorationGroupByPayload<T extends ExplorationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExplorationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExplorationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExplorationGroupByOutputType[P]>
            : GetScalarType<T[P], ExplorationGroupByOutputType[P]>
        }
      >
    >


  export type ExplorationSelect = {
    exploration_rid?: boolean
    metadata?: boolean
    ExplorationXQueryRequest?: boolean | Exploration$ExplorationXQueryRequestArgs
    _count?: boolean | ExplorationCountOutputTypeArgs
  }


  export type ExplorationInclude = {
    ExplorationXQueryRequest?: boolean | Exploration$ExplorationXQueryRequestArgs
    _count?: boolean | ExplorationCountOutputTypeArgs
  }

  export type ExplorationGetPayload<S extends boolean | null | undefined | ExplorationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Exploration :
    S extends undefined ? never :
    S extends { include: any } & (ExplorationArgs | ExplorationFindManyArgs)
    ? Exploration  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ExplorationXQueryRequest' ? Array < ExplorationXQueryRequestGetPayload<S['include'][P]>>  :
        P extends '_count' ? ExplorationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExplorationArgs | ExplorationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ExplorationXQueryRequest' ? Array < ExplorationXQueryRequestGetPayload<S['select'][P]>>  :
        P extends '_count' ? ExplorationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Exploration ? Exploration[P] : never
  } 
      : Exploration


  type ExplorationCountArgs = 
    Omit<ExplorationFindManyArgs, 'select' | 'include'> & {
      select?: ExplorationCountAggregateInputType | true
    }

  export interface ExplorationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Exploration that matches the filter.
     * @param {ExplorationFindUniqueArgs} args - Arguments to find a Exploration
     * @example
     * // Get one Exploration
     * const exploration = await prisma.exploration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExplorationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExplorationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Exploration'> extends True ? Prisma__ExplorationClient<ExplorationGetPayload<T>> : Prisma__ExplorationClient<ExplorationGetPayload<T> | null, null>

    /**
     * Find one Exploration that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExplorationFindUniqueOrThrowArgs} args - Arguments to find a Exploration
     * @example
     * // Get one Exploration
     * const exploration = await prisma.exploration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExplorationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExplorationFindUniqueOrThrowArgs>
    ): Prisma__ExplorationClient<ExplorationGetPayload<T>>

    /**
     * Find the first Exploration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationFindFirstArgs} args - Arguments to find a Exploration
     * @example
     * // Get one Exploration
     * const exploration = await prisma.exploration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExplorationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExplorationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Exploration'> extends True ? Prisma__ExplorationClient<ExplorationGetPayload<T>> : Prisma__ExplorationClient<ExplorationGetPayload<T> | null, null>

    /**
     * Find the first Exploration that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationFindFirstOrThrowArgs} args - Arguments to find a Exploration
     * @example
     * // Get one Exploration
     * const exploration = await prisma.exploration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExplorationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExplorationFindFirstOrThrowArgs>
    ): Prisma__ExplorationClient<ExplorationGetPayload<T>>

    /**
     * Find zero or more Explorations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Explorations
     * const explorations = await prisma.exploration.findMany()
     * 
     * // Get first 10 Explorations
     * const explorations = await prisma.exploration.findMany({ take: 10 })
     * 
     * // Only select the `exploration_rid`
     * const explorationWithExploration_ridOnly = await prisma.exploration.findMany({ select: { exploration_rid: true } })
     * 
    **/
    findMany<T extends ExplorationFindManyArgs>(
      args?: SelectSubset<T, ExplorationFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExplorationGetPayload<T>>>

    /**
     * Create a Exploration.
     * @param {ExplorationCreateArgs} args - Arguments to create a Exploration.
     * @example
     * // Create one Exploration
     * const Exploration = await prisma.exploration.create({
     *   data: {
     *     // ... data to create a Exploration
     *   }
     * })
     * 
    **/
    create<T extends ExplorationCreateArgs>(
      args: SelectSubset<T, ExplorationCreateArgs>
    ): Prisma__ExplorationClient<ExplorationGetPayload<T>>

    /**
     * Create many Explorations.
     *     @param {ExplorationCreateManyArgs} args - Arguments to create many Explorations.
     *     @example
     *     // Create many Explorations
     *     const exploration = await prisma.exploration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExplorationCreateManyArgs>(
      args?: SelectSubset<T, ExplorationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exploration.
     * @param {ExplorationDeleteArgs} args - Arguments to delete one Exploration.
     * @example
     * // Delete one Exploration
     * const Exploration = await prisma.exploration.delete({
     *   where: {
     *     // ... filter to delete one Exploration
     *   }
     * })
     * 
    **/
    delete<T extends ExplorationDeleteArgs>(
      args: SelectSubset<T, ExplorationDeleteArgs>
    ): Prisma__ExplorationClient<ExplorationGetPayload<T>>

    /**
     * Update one Exploration.
     * @param {ExplorationUpdateArgs} args - Arguments to update one Exploration.
     * @example
     * // Update one Exploration
     * const exploration = await prisma.exploration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExplorationUpdateArgs>(
      args: SelectSubset<T, ExplorationUpdateArgs>
    ): Prisma__ExplorationClient<ExplorationGetPayload<T>>

    /**
     * Delete zero or more Explorations.
     * @param {ExplorationDeleteManyArgs} args - Arguments to filter Explorations to delete.
     * @example
     * // Delete a few Explorations
     * const { count } = await prisma.exploration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExplorationDeleteManyArgs>(
      args?: SelectSubset<T, ExplorationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Explorations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Explorations
     * const exploration = await prisma.exploration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExplorationUpdateManyArgs>(
      args: SelectSubset<T, ExplorationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exploration.
     * @param {ExplorationUpsertArgs} args - Arguments to update or create a Exploration.
     * @example
     * // Update or create a Exploration
     * const exploration = await prisma.exploration.upsert({
     *   create: {
     *     // ... data to create a Exploration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exploration we want to update
     *   }
     * })
    **/
    upsert<T extends ExplorationUpsertArgs>(
      args: SelectSubset<T, ExplorationUpsertArgs>
    ): Prisma__ExplorationClient<ExplorationGetPayload<T>>

    /**
     * Count the number of Explorations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationCountArgs} args - Arguments to filter Explorations to count.
     * @example
     * // Count the number of Explorations
     * const count = await prisma.exploration.count({
     *   where: {
     *     // ... the filter for the Explorations we want to count
     *   }
     * })
    **/
    count<T extends ExplorationCountArgs>(
      args?: Subset<T, ExplorationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExplorationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exploration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExplorationAggregateArgs>(args: Subset<T, ExplorationAggregateArgs>): Prisma.PrismaPromise<GetExplorationAggregateType<T>>

    /**
     * Group by Exploration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationGroupByArgs} args - Group by arguments.
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
      T extends ExplorationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExplorationGroupByArgs['orderBy'] }
        : { orderBy?: ExplorationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExplorationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExplorationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Exploration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExplorationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ExplorationXQueryRequest<T extends Exploration$ExplorationXQueryRequestArgs= {}>(args?: Subset<T, Exploration$ExplorationXQueryRequestArgs>): Prisma.PrismaPromise<Array<ExplorationXQueryRequestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Exploration base type for findUnique actions
   */
  export type ExplorationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * Filter, which Exploration to fetch.
     */
    where: ExplorationWhereUniqueInput
  }

  /**
   * Exploration findUnique
   */
  export interface ExplorationFindUniqueArgs extends ExplorationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exploration findUniqueOrThrow
   */
  export type ExplorationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * Filter, which Exploration to fetch.
     */
    where: ExplorationWhereUniqueInput
  }


  /**
   * Exploration base type for findFirst actions
   */
  export type ExplorationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * Filter, which Exploration to fetch.
     */
    where?: ExplorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Explorations to fetch.
     */
    orderBy?: Enumerable<ExplorationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Explorations.
     */
    cursor?: ExplorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Explorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Explorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Explorations.
     */
    distinct?: Enumerable<ExplorationScalarFieldEnum>
  }

  /**
   * Exploration findFirst
   */
  export interface ExplorationFindFirstArgs extends ExplorationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exploration findFirstOrThrow
   */
  export type ExplorationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * Filter, which Exploration to fetch.
     */
    where?: ExplorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Explorations to fetch.
     */
    orderBy?: Enumerable<ExplorationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Explorations.
     */
    cursor?: ExplorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Explorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Explorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Explorations.
     */
    distinct?: Enumerable<ExplorationScalarFieldEnum>
  }


  /**
   * Exploration findMany
   */
  export type ExplorationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * Filter, which Explorations to fetch.
     */
    where?: ExplorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Explorations to fetch.
     */
    orderBy?: Enumerable<ExplorationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Explorations.
     */
    cursor?: ExplorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Explorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Explorations.
     */
    skip?: number
    distinct?: Enumerable<ExplorationScalarFieldEnum>
  }


  /**
   * Exploration create
   */
  export type ExplorationCreateArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * The data needed to create a Exploration.
     */
    data: XOR<ExplorationCreateInput, ExplorationUncheckedCreateInput>
  }


  /**
   * Exploration createMany
   */
  export type ExplorationCreateManyArgs = {
    /**
     * The data used to create many Explorations.
     */
    data: Enumerable<ExplorationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Exploration update
   */
  export type ExplorationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * The data needed to update a Exploration.
     */
    data: XOR<ExplorationUpdateInput, ExplorationUncheckedUpdateInput>
    /**
     * Choose, which Exploration to update.
     */
    where: ExplorationWhereUniqueInput
  }


  /**
   * Exploration updateMany
   */
  export type ExplorationUpdateManyArgs = {
    /**
     * The data used to update Explorations.
     */
    data: XOR<ExplorationUpdateManyMutationInput, ExplorationUncheckedUpdateManyInput>
    /**
     * Filter which Explorations to update
     */
    where?: ExplorationWhereInput
  }


  /**
   * Exploration upsert
   */
  export type ExplorationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * The filter to search for the Exploration to update in case it exists.
     */
    where: ExplorationWhereUniqueInput
    /**
     * In case the Exploration found by the `where` argument doesn't exist, create a new Exploration with this data.
     */
    create: XOR<ExplorationCreateInput, ExplorationUncheckedCreateInput>
    /**
     * In case the Exploration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExplorationUpdateInput, ExplorationUncheckedUpdateInput>
  }


  /**
   * Exploration delete
   */
  export type ExplorationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
    /**
     * Filter which Exploration to delete.
     */
    where: ExplorationWhereUniqueInput
  }


  /**
   * Exploration deleteMany
   */
  export type ExplorationDeleteManyArgs = {
    /**
     * Filter which Explorations to delete
     */
    where?: ExplorationWhereInput
  }


  /**
   * Exploration.ExplorationXQueryRequest
   */
  export type Exploration$ExplorationXQueryRequestArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    where?: ExplorationXQueryRequestWhereInput
    orderBy?: Enumerable<ExplorationXQueryRequestOrderByWithRelationInput>
    cursor?: ExplorationXQueryRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExplorationXQueryRequestScalarFieldEnum>
  }


  /**
   * Exploration without action
   */
  export type ExplorationArgs = {
    /**
     * Select specific fields to fetch from the Exploration
     */
    select?: ExplorationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationInclude | null
  }



  /**
   * Model ExplorationXQueryRequest
   */


  export type AggregateExplorationXQueryRequest = {
    _count: ExplorationXQueryRequestCountAggregateOutputType | null
    _avg: ExplorationXQueryRequestAvgAggregateOutputType | null
    _sum: ExplorationXQueryRequestSumAggregateOutputType | null
    _min: ExplorationXQueryRequestMinAggregateOutputType | null
    _max: ExplorationXQueryRequestMaxAggregateOutputType | null
  }

  export type ExplorationXQueryRequestAvgAggregateOutputType = {
    exploration_x_query_request_id: number | null
  }

  export type ExplorationXQueryRequestSumAggregateOutputType = {
    exploration_x_query_request_id: number | null
  }

  export type ExplorationXQueryRequestMinAggregateOutputType = {
    exploration_x_query_request_id: number | null
    position: string | null
    exploration_rid: string | null
    query_request_rid: string | null
  }

  export type ExplorationXQueryRequestMaxAggregateOutputType = {
    exploration_x_query_request_id: number | null
    position: string | null
    exploration_rid: string | null
    query_request_rid: string | null
  }

  export type ExplorationXQueryRequestCountAggregateOutputType = {
    exploration_x_query_request_id: number
    position: number
    exploration_rid: number
    query_request_rid: number
    _all: number
  }


  export type ExplorationXQueryRequestAvgAggregateInputType = {
    exploration_x_query_request_id?: true
  }

  export type ExplorationXQueryRequestSumAggregateInputType = {
    exploration_x_query_request_id?: true
  }

  export type ExplorationXQueryRequestMinAggregateInputType = {
    exploration_x_query_request_id?: true
    position?: true
    exploration_rid?: true
    query_request_rid?: true
  }

  export type ExplorationXQueryRequestMaxAggregateInputType = {
    exploration_x_query_request_id?: true
    position?: true
    exploration_rid?: true
    query_request_rid?: true
  }

  export type ExplorationXQueryRequestCountAggregateInputType = {
    exploration_x_query_request_id?: true
    position?: true
    exploration_rid?: true
    query_request_rid?: true
    _all?: true
  }

  export type ExplorationXQueryRequestAggregateArgs = {
    /**
     * Filter which ExplorationXQueryRequest to aggregate.
     */
    where?: ExplorationXQueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationXQueryRequests to fetch.
     */
    orderBy?: Enumerable<ExplorationXQueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExplorationXQueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationXQueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationXQueryRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExplorationXQueryRequests
    **/
    _count?: true | ExplorationXQueryRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExplorationXQueryRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExplorationXQueryRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExplorationXQueryRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExplorationXQueryRequestMaxAggregateInputType
  }

  export type GetExplorationXQueryRequestAggregateType<T extends ExplorationXQueryRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateExplorationXQueryRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExplorationXQueryRequest[P]>
      : GetScalarType<T[P], AggregateExplorationXQueryRequest[P]>
  }




  export type ExplorationXQueryRequestGroupByArgs = {
    where?: ExplorationXQueryRequestWhereInput
    orderBy?: Enumerable<ExplorationXQueryRequestOrderByWithAggregationInput>
    by: ExplorationXQueryRequestScalarFieldEnum[]
    having?: ExplorationXQueryRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExplorationXQueryRequestCountAggregateInputType | true
    _avg?: ExplorationXQueryRequestAvgAggregateInputType
    _sum?: ExplorationXQueryRequestSumAggregateInputType
    _min?: ExplorationXQueryRequestMinAggregateInputType
    _max?: ExplorationXQueryRequestMaxAggregateInputType
  }


  export type ExplorationXQueryRequestGroupByOutputType = {
    exploration_x_query_request_id: number
    position: string
    exploration_rid: string
    query_request_rid: string
    _count: ExplorationXQueryRequestCountAggregateOutputType | null
    _avg: ExplorationXQueryRequestAvgAggregateOutputType | null
    _sum: ExplorationXQueryRequestSumAggregateOutputType | null
    _min: ExplorationXQueryRequestMinAggregateOutputType | null
    _max: ExplorationXQueryRequestMaxAggregateOutputType | null
  }

  type GetExplorationXQueryRequestGroupByPayload<T extends ExplorationXQueryRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExplorationXQueryRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExplorationXQueryRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExplorationXQueryRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ExplorationXQueryRequestGroupByOutputType[P]>
        }
      >
    >


  export type ExplorationXQueryRequestSelect = {
    exploration_x_query_request_id?: boolean
    position?: boolean
    exploration_rid?: boolean
    query_request_rid?: boolean
    Exploration?: boolean | ExplorationArgs
    QueryRequest?: boolean | QueryRequestArgs
  }


  export type ExplorationXQueryRequestInclude = {
    Exploration?: boolean | ExplorationArgs
    QueryRequest?: boolean | QueryRequestArgs
  }

  export type ExplorationXQueryRequestGetPayload<S extends boolean | null | undefined | ExplorationXQueryRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExplorationXQueryRequest :
    S extends undefined ? never :
    S extends { include: any } & (ExplorationXQueryRequestArgs | ExplorationXQueryRequestFindManyArgs)
    ? ExplorationXQueryRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Exploration' ? ExplorationGetPayload<S['include'][P]> :
        P extends 'QueryRequest' ? QueryRequestGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExplorationXQueryRequestArgs | ExplorationXQueryRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Exploration' ? ExplorationGetPayload<S['select'][P]> :
        P extends 'QueryRequest' ? QueryRequestGetPayload<S['select'][P]> :  P extends keyof ExplorationXQueryRequest ? ExplorationXQueryRequest[P] : never
  } 
      : ExplorationXQueryRequest


  type ExplorationXQueryRequestCountArgs = 
    Omit<ExplorationXQueryRequestFindManyArgs, 'select' | 'include'> & {
      select?: ExplorationXQueryRequestCountAggregateInputType | true
    }

  export interface ExplorationXQueryRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ExplorationXQueryRequest that matches the filter.
     * @param {ExplorationXQueryRequestFindUniqueArgs} args - Arguments to find a ExplorationXQueryRequest
     * @example
     * // Get one ExplorationXQueryRequest
     * const explorationXQueryRequest = await prisma.explorationXQueryRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExplorationXQueryRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExplorationXQueryRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ExplorationXQueryRequest'> extends True ? Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>> : Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T> | null, null>

    /**
     * Find one ExplorationXQueryRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExplorationXQueryRequestFindUniqueOrThrowArgs} args - Arguments to find a ExplorationXQueryRequest
     * @example
     * // Get one ExplorationXQueryRequest
     * const explorationXQueryRequest = await prisma.explorationXQueryRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExplorationXQueryRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExplorationXQueryRequestFindUniqueOrThrowArgs>
    ): Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>>

    /**
     * Find the first ExplorationXQueryRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationXQueryRequestFindFirstArgs} args - Arguments to find a ExplorationXQueryRequest
     * @example
     * // Get one ExplorationXQueryRequest
     * const explorationXQueryRequest = await prisma.explorationXQueryRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExplorationXQueryRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExplorationXQueryRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ExplorationXQueryRequest'> extends True ? Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>> : Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T> | null, null>

    /**
     * Find the first ExplorationXQueryRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationXQueryRequestFindFirstOrThrowArgs} args - Arguments to find a ExplorationXQueryRequest
     * @example
     * // Get one ExplorationXQueryRequest
     * const explorationXQueryRequest = await prisma.explorationXQueryRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExplorationXQueryRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExplorationXQueryRequestFindFirstOrThrowArgs>
    ): Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>>

    /**
     * Find zero or more ExplorationXQueryRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationXQueryRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExplorationXQueryRequests
     * const explorationXQueryRequests = await prisma.explorationXQueryRequest.findMany()
     * 
     * // Get first 10 ExplorationXQueryRequests
     * const explorationXQueryRequests = await prisma.explorationXQueryRequest.findMany({ take: 10 })
     * 
     * // Only select the `exploration_x_query_request_id`
     * const explorationXQueryRequestWithExploration_x_query_request_idOnly = await prisma.explorationXQueryRequest.findMany({ select: { exploration_x_query_request_id: true } })
     * 
    **/
    findMany<T extends ExplorationXQueryRequestFindManyArgs>(
      args?: SelectSubset<T, ExplorationXQueryRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExplorationXQueryRequestGetPayload<T>>>

    /**
     * Create a ExplorationXQueryRequest.
     * @param {ExplorationXQueryRequestCreateArgs} args - Arguments to create a ExplorationXQueryRequest.
     * @example
     * // Create one ExplorationXQueryRequest
     * const ExplorationXQueryRequest = await prisma.explorationXQueryRequest.create({
     *   data: {
     *     // ... data to create a ExplorationXQueryRequest
     *   }
     * })
     * 
    **/
    create<T extends ExplorationXQueryRequestCreateArgs>(
      args: SelectSubset<T, ExplorationXQueryRequestCreateArgs>
    ): Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>>

    /**
     * Create many ExplorationXQueryRequests.
     *     @param {ExplorationXQueryRequestCreateManyArgs} args - Arguments to create many ExplorationXQueryRequests.
     *     @example
     *     // Create many ExplorationXQueryRequests
     *     const explorationXQueryRequest = await prisma.explorationXQueryRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExplorationXQueryRequestCreateManyArgs>(
      args?: SelectSubset<T, ExplorationXQueryRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExplorationXQueryRequest.
     * @param {ExplorationXQueryRequestDeleteArgs} args - Arguments to delete one ExplorationXQueryRequest.
     * @example
     * // Delete one ExplorationXQueryRequest
     * const ExplorationXQueryRequest = await prisma.explorationXQueryRequest.delete({
     *   where: {
     *     // ... filter to delete one ExplorationXQueryRequest
     *   }
     * })
     * 
    **/
    delete<T extends ExplorationXQueryRequestDeleteArgs>(
      args: SelectSubset<T, ExplorationXQueryRequestDeleteArgs>
    ): Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>>

    /**
     * Update one ExplorationXQueryRequest.
     * @param {ExplorationXQueryRequestUpdateArgs} args - Arguments to update one ExplorationXQueryRequest.
     * @example
     * // Update one ExplorationXQueryRequest
     * const explorationXQueryRequest = await prisma.explorationXQueryRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExplorationXQueryRequestUpdateArgs>(
      args: SelectSubset<T, ExplorationXQueryRequestUpdateArgs>
    ): Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>>

    /**
     * Delete zero or more ExplorationXQueryRequests.
     * @param {ExplorationXQueryRequestDeleteManyArgs} args - Arguments to filter ExplorationXQueryRequests to delete.
     * @example
     * // Delete a few ExplorationXQueryRequests
     * const { count } = await prisma.explorationXQueryRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExplorationXQueryRequestDeleteManyArgs>(
      args?: SelectSubset<T, ExplorationXQueryRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExplorationXQueryRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationXQueryRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExplorationXQueryRequests
     * const explorationXQueryRequest = await prisma.explorationXQueryRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExplorationXQueryRequestUpdateManyArgs>(
      args: SelectSubset<T, ExplorationXQueryRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExplorationXQueryRequest.
     * @param {ExplorationXQueryRequestUpsertArgs} args - Arguments to update or create a ExplorationXQueryRequest.
     * @example
     * // Update or create a ExplorationXQueryRequest
     * const explorationXQueryRequest = await prisma.explorationXQueryRequest.upsert({
     *   create: {
     *     // ... data to create a ExplorationXQueryRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExplorationXQueryRequest we want to update
     *   }
     * })
    **/
    upsert<T extends ExplorationXQueryRequestUpsertArgs>(
      args: SelectSubset<T, ExplorationXQueryRequestUpsertArgs>
    ): Prisma__ExplorationXQueryRequestClient<ExplorationXQueryRequestGetPayload<T>>

    /**
     * Count the number of ExplorationXQueryRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationXQueryRequestCountArgs} args - Arguments to filter ExplorationXQueryRequests to count.
     * @example
     * // Count the number of ExplorationXQueryRequests
     * const count = await prisma.explorationXQueryRequest.count({
     *   where: {
     *     // ... the filter for the ExplorationXQueryRequests we want to count
     *   }
     * })
    **/
    count<T extends ExplorationXQueryRequestCountArgs>(
      args?: Subset<T, ExplorationXQueryRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExplorationXQueryRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExplorationXQueryRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationXQueryRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExplorationXQueryRequestAggregateArgs>(args: Subset<T, ExplorationXQueryRequestAggregateArgs>): Prisma.PrismaPromise<GetExplorationXQueryRequestAggregateType<T>>

    /**
     * Group by ExplorationXQueryRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExplorationXQueryRequestGroupByArgs} args - Group by arguments.
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
      T extends ExplorationXQueryRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExplorationXQueryRequestGroupByArgs['orderBy'] }
        : { orderBy?: ExplorationXQueryRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExplorationXQueryRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExplorationXQueryRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ExplorationXQueryRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExplorationXQueryRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Exploration<T extends ExplorationArgs= {}>(args?: Subset<T, ExplorationArgs>): Prisma__ExplorationClient<ExplorationGetPayload<T> | Null>;

    QueryRequest<T extends QueryRequestArgs= {}>(args?: Subset<T, QueryRequestArgs>): Prisma__QueryRequestClient<QueryRequestGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ExplorationXQueryRequest base type for findUnique actions
   */
  export type ExplorationXQueryRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * Filter, which ExplorationXQueryRequest to fetch.
     */
    where: ExplorationXQueryRequestWhereUniqueInput
  }

  /**
   * ExplorationXQueryRequest findUnique
   */
  export interface ExplorationXQueryRequestFindUniqueArgs extends ExplorationXQueryRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExplorationXQueryRequest findUniqueOrThrow
   */
  export type ExplorationXQueryRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * Filter, which ExplorationXQueryRequest to fetch.
     */
    where: ExplorationXQueryRequestWhereUniqueInput
  }


  /**
   * ExplorationXQueryRequest base type for findFirst actions
   */
  export type ExplorationXQueryRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * Filter, which ExplorationXQueryRequest to fetch.
     */
    where?: ExplorationXQueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationXQueryRequests to fetch.
     */
    orderBy?: Enumerable<ExplorationXQueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExplorationXQueryRequests.
     */
    cursor?: ExplorationXQueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationXQueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationXQueryRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExplorationXQueryRequests.
     */
    distinct?: Enumerable<ExplorationXQueryRequestScalarFieldEnum>
  }

  /**
   * ExplorationXQueryRequest findFirst
   */
  export interface ExplorationXQueryRequestFindFirstArgs extends ExplorationXQueryRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExplorationXQueryRequest findFirstOrThrow
   */
  export type ExplorationXQueryRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * Filter, which ExplorationXQueryRequest to fetch.
     */
    where?: ExplorationXQueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationXQueryRequests to fetch.
     */
    orderBy?: Enumerable<ExplorationXQueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExplorationXQueryRequests.
     */
    cursor?: ExplorationXQueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationXQueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationXQueryRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExplorationXQueryRequests.
     */
    distinct?: Enumerable<ExplorationXQueryRequestScalarFieldEnum>
  }


  /**
   * ExplorationXQueryRequest findMany
   */
  export type ExplorationXQueryRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * Filter, which ExplorationXQueryRequests to fetch.
     */
    where?: ExplorationXQueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExplorationXQueryRequests to fetch.
     */
    orderBy?: Enumerable<ExplorationXQueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExplorationXQueryRequests.
     */
    cursor?: ExplorationXQueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExplorationXQueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExplorationXQueryRequests.
     */
    skip?: number
    distinct?: Enumerable<ExplorationXQueryRequestScalarFieldEnum>
  }


  /**
   * ExplorationXQueryRequest create
   */
  export type ExplorationXQueryRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * The data needed to create a ExplorationXQueryRequest.
     */
    data: XOR<ExplorationXQueryRequestCreateInput, ExplorationXQueryRequestUncheckedCreateInput>
  }


  /**
   * ExplorationXQueryRequest createMany
   */
  export type ExplorationXQueryRequestCreateManyArgs = {
    /**
     * The data used to create many ExplorationXQueryRequests.
     */
    data: Enumerable<ExplorationXQueryRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ExplorationXQueryRequest update
   */
  export type ExplorationXQueryRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * The data needed to update a ExplorationXQueryRequest.
     */
    data: XOR<ExplorationXQueryRequestUpdateInput, ExplorationXQueryRequestUncheckedUpdateInput>
    /**
     * Choose, which ExplorationXQueryRequest to update.
     */
    where: ExplorationXQueryRequestWhereUniqueInput
  }


  /**
   * ExplorationXQueryRequest updateMany
   */
  export type ExplorationXQueryRequestUpdateManyArgs = {
    /**
     * The data used to update ExplorationXQueryRequests.
     */
    data: XOR<ExplorationXQueryRequestUpdateManyMutationInput, ExplorationXQueryRequestUncheckedUpdateManyInput>
    /**
     * Filter which ExplorationXQueryRequests to update
     */
    where?: ExplorationXQueryRequestWhereInput
  }


  /**
   * ExplorationXQueryRequest upsert
   */
  export type ExplorationXQueryRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * The filter to search for the ExplorationXQueryRequest to update in case it exists.
     */
    where: ExplorationXQueryRequestWhereUniqueInput
    /**
     * In case the ExplorationXQueryRequest found by the `where` argument doesn't exist, create a new ExplorationXQueryRequest with this data.
     */
    create: XOR<ExplorationXQueryRequestCreateInput, ExplorationXQueryRequestUncheckedCreateInput>
    /**
     * In case the ExplorationXQueryRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExplorationXQueryRequestUpdateInput, ExplorationXQueryRequestUncheckedUpdateInput>
  }


  /**
   * ExplorationXQueryRequest delete
   */
  export type ExplorationXQueryRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    /**
     * Filter which ExplorationXQueryRequest to delete.
     */
    where: ExplorationXQueryRequestWhereUniqueInput
  }


  /**
   * ExplorationXQueryRequest deleteMany
   */
  export type ExplorationXQueryRequestDeleteManyArgs = {
    /**
     * Filter which ExplorationXQueryRequests to delete
     */
    where?: ExplorationXQueryRequestWhereInput
  }


  /**
   * ExplorationXQueryRequest without action
   */
  export type ExplorationXQueryRequestArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
  }



  /**
   * Model QueryRequest
   */


  export type AggregateQueryRequest = {
    _count: QueryRequestCountAggregateOutputType | null
    _min: QueryRequestMinAggregateOutputType | null
    _max: QueryRequestMaxAggregateOutputType | null
  }

  export type QueryRequestMinAggregateOutputType = {
    query_request_rid: string | null
    status: string | null
    request_date: Date | null
    completion_date: Date | null
  }

  export type QueryRequestMaxAggregateOutputType = {
    query_request_rid: string | null
    status: string | null
    request_date: Date | null
    completion_date: Date | null
  }

  export type QueryRequestCountAggregateOutputType = {
    query_request_rid: number
    status: number
    input: number
    request_date: number
    completion_date: number
    result: number
    _all: number
  }


  export type QueryRequestMinAggregateInputType = {
    query_request_rid?: true
    status?: true
    request_date?: true
    completion_date?: true
  }

  export type QueryRequestMaxAggregateInputType = {
    query_request_rid?: true
    status?: true
    request_date?: true
    completion_date?: true
  }

  export type QueryRequestCountAggregateInputType = {
    query_request_rid?: true
    status?: true
    input?: true
    request_date?: true
    completion_date?: true
    result?: true
    _all?: true
  }

  export type QueryRequestAggregateArgs = {
    /**
     * Filter which QueryRequest to aggregate.
     */
    where?: QueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryRequests to fetch.
     */
    orderBy?: Enumerable<QueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueryRequests
    **/
    _count?: true | QueryRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryRequestMaxAggregateInputType
  }

  export type GetQueryRequestAggregateType<T extends QueryRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateQueryRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueryRequest[P]>
      : GetScalarType<T[P], AggregateQueryRequest[P]>
  }




  export type QueryRequestGroupByArgs = {
    where?: QueryRequestWhereInput
    orderBy?: Enumerable<QueryRequestOrderByWithAggregationInput>
    by: QueryRequestScalarFieldEnum[]
    having?: QueryRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryRequestCountAggregateInputType | true
    _min?: QueryRequestMinAggregateInputType
    _max?: QueryRequestMaxAggregateInputType
  }


  export type QueryRequestGroupByOutputType = {
    query_request_rid: string
    status: string
    input: JsonValue
    request_date: Date
    completion_date: Date | null
    result: JsonValue | null
    _count: QueryRequestCountAggregateOutputType | null
    _min: QueryRequestMinAggregateOutputType | null
    _max: QueryRequestMaxAggregateOutputType | null
  }

  type GetQueryRequestGroupByPayload<T extends QueryRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QueryRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryRequestGroupByOutputType[P]>
            : GetScalarType<T[P], QueryRequestGroupByOutputType[P]>
        }
      >
    >


  export type QueryRequestSelect = {
    query_request_rid?: boolean
    status?: boolean
    input?: boolean
    request_date?: boolean
    completion_date?: boolean
    result?: boolean
    ExplorationXQueryRequest?: boolean | QueryRequest$ExplorationXQueryRequestArgs
    _count?: boolean | QueryRequestCountOutputTypeArgs
  }


  export type QueryRequestInclude = {
    ExplorationXQueryRequest?: boolean | QueryRequest$ExplorationXQueryRequestArgs
    _count?: boolean | QueryRequestCountOutputTypeArgs
  }

  export type QueryRequestGetPayload<S extends boolean | null | undefined | QueryRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QueryRequest :
    S extends undefined ? never :
    S extends { include: any } & (QueryRequestArgs | QueryRequestFindManyArgs)
    ? QueryRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ExplorationXQueryRequest' ? Array < ExplorationXQueryRequestGetPayload<S['include'][P]>>  :
        P extends '_count' ? QueryRequestCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QueryRequestArgs | QueryRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ExplorationXQueryRequest' ? Array < ExplorationXQueryRequestGetPayload<S['select'][P]>>  :
        P extends '_count' ? QueryRequestCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof QueryRequest ? QueryRequest[P] : never
  } 
      : QueryRequest


  type QueryRequestCountArgs = 
    Omit<QueryRequestFindManyArgs, 'select' | 'include'> & {
      select?: QueryRequestCountAggregateInputType | true
    }

  export interface QueryRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one QueryRequest that matches the filter.
     * @param {QueryRequestFindUniqueArgs} args - Arguments to find a QueryRequest
     * @example
     * // Get one QueryRequest
     * const queryRequest = await prisma.queryRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QueryRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QueryRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QueryRequest'> extends True ? Prisma__QueryRequestClient<QueryRequestGetPayload<T>> : Prisma__QueryRequestClient<QueryRequestGetPayload<T> | null, null>

    /**
     * Find one QueryRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QueryRequestFindUniqueOrThrowArgs} args - Arguments to find a QueryRequest
     * @example
     * // Get one QueryRequest
     * const queryRequest = await prisma.queryRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QueryRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QueryRequestFindUniqueOrThrowArgs>
    ): Prisma__QueryRequestClient<QueryRequestGetPayload<T>>

    /**
     * Find the first QueryRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryRequestFindFirstArgs} args - Arguments to find a QueryRequest
     * @example
     * // Get one QueryRequest
     * const queryRequest = await prisma.queryRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QueryRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QueryRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QueryRequest'> extends True ? Prisma__QueryRequestClient<QueryRequestGetPayload<T>> : Prisma__QueryRequestClient<QueryRequestGetPayload<T> | null, null>

    /**
     * Find the first QueryRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryRequestFindFirstOrThrowArgs} args - Arguments to find a QueryRequest
     * @example
     * // Get one QueryRequest
     * const queryRequest = await prisma.queryRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QueryRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QueryRequestFindFirstOrThrowArgs>
    ): Prisma__QueryRequestClient<QueryRequestGetPayload<T>>

    /**
     * Find zero or more QueryRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueryRequests
     * const queryRequests = await prisma.queryRequest.findMany()
     * 
     * // Get first 10 QueryRequests
     * const queryRequests = await prisma.queryRequest.findMany({ take: 10 })
     * 
     * // Only select the `query_request_rid`
     * const queryRequestWithQuery_request_ridOnly = await prisma.queryRequest.findMany({ select: { query_request_rid: true } })
     * 
    **/
    findMany<T extends QueryRequestFindManyArgs>(
      args?: SelectSubset<T, QueryRequestFindManyArgs>
    ): Prisma.PrismaPromise<Array<QueryRequestGetPayload<T>>>

    /**
     * Create a QueryRequest.
     * @param {QueryRequestCreateArgs} args - Arguments to create a QueryRequest.
     * @example
     * // Create one QueryRequest
     * const QueryRequest = await prisma.queryRequest.create({
     *   data: {
     *     // ... data to create a QueryRequest
     *   }
     * })
     * 
    **/
    create<T extends QueryRequestCreateArgs>(
      args: SelectSubset<T, QueryRequestCreateArgs>
    ): Prisma__QueryRequestClient<QueryRequestGetPayload<T>>

    /**
     * Create many QueryRequests.
     *     @param {QueryRequestCreateManyArgs} args - Arguments to create many QueryRequests.
     *     @example
     *     // Create many QueryRequests
     *     const queryRequest = await prisma.queryRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QueryRequestCreateManyArgs>(
      args?: SelectSubset<T, QueryRequestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QueryRequest.
     * @param {QueryRequestDeleteArgs} args - Arguments to delete one QueryRequest.
     * @example
     * // Delete one QueryRequest
     * const QueryRequest = await prisma.queryRequest.delete({
     *   where: {
     *     // ... filter to delete one QueryRequest
     *   }
     * })
     * 
    **/
    delete<T extends QueryRequestDeleteArgs>(
      args: SelectSubset<T, QueryRequestDeleteArgs>
    ): Prisma__QueryRequestClient<QueryRequestGetPayload<T>>

    /**
     * Update one QueryRequest.
     * @param {QueryRequestUpdateArgs} args - Arguments to update one QueryRequest.
     * @example
     * // Update one QueryRequest
     * const queryRequest = await prisma.queryRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QueryRequestUpdateArgs>(
      args: SelectSubset<T, QueryRequestUpdateArgs>
    ): Prisma__QueryRequestClient<QueryRequestGetPayload<T>>

    /**
     * Delete zero or more QueryRequests.
     * @param {QueryRequestDeleteManyArgs} args - Arguments to filter QueryRequests to delete.
     * @example
     * // Delete a few QueryRequests
     * const { count } = await prisma.queryRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QueryRequestDeleteManyArgs>(
      args?: SelectSubset<T, QueryRequestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueryRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueryRequests
     * const queryRequest = await prisma.queryRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QueryRequestUpdateManyArgs>(
      args: SelectSubset<T, QueryRequestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QueryRequest.
     * @param {QueryRequestUpsertArgs} args - Arguments to update or create a QueryRequest.
     * @example
     * // Update or create a QueryRequest
     * const queryRequest = await prisma.queryRequest.upsert({
     *   create: {
     *     // ... data to create a QueryRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueryRequest we want to update
     *   }
     * })
    **/
    upsert<T extends QueryRequestUpsertArgs>(
      args: SelectSubset<T, QueryRequestUpsertArgs>
    ): Prisma__QueryRequestClient<QueryRequestGetPayload<T>>

    /**
     * Count the number of QueryRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryRequestCountArgs} args - Arguments to filter QueryRequests to count.
     * @example
     * // Count the number of QueryRequests
     * const count = await prisma.queryRequest.count({
     *   where: {
     *     // ... the filter for the QueryRequests we want to count
     *   }
     * })
    **/
    count<T extends QueryRequestCountArgs>(
      args?: Subset<T, QueryRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueryRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueryRequestAggregateArgs>(args: Subset<T, QueryRequestAggregateArgs>): Prisma.PrismaPromise<GetQueryRequestAggregateType<T>>

    /**
     * Group by QueryRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryRequestGroupByArgs} args - Group by arguments.
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
      T extends QueryRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryRequestGroupByArgs['orderBy'] }
        : { orderBy?: QueryRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QueryRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for QueryRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QueryRequestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ExplorationXQueryRequest<T extends QueryRequest$ExplorationXQueryRequestArgs= {}>(args?: Subset<T, QueryRequest$ExplorationXQueryRequestArgs>): Prisma.PrismaPromise<Array<ExplorationXQueryRequestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * QueryRequest base type for findUnique actions
   */
  export type QueryRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * Filter, which QueryRequest to fetch.
     */
    where: QueryRequestWhereUniqueInput
  }

  /**
   * QueryRequest findUnique
   */
  export interface QueryRequestFindUniqueArgs extends QueryRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QueryRequest findUniqueOrThrow
   */
  export type QueryRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * Filter, which QueryRequest to fetch.
     */
    where: QueryRequestWhereUniqueInput
  }


  /**
   * QueryRequest base type for findFirst actions
   */
  export type QueryRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * Filter, which QueryRequest to fetch.
     */
    where?: QueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryRequests to fetch.
     */
    orderBy?: Enumerable<QueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryRequests.
     */
    cursor?: QueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryRequests.
     */
    distinct?: Enumerable<QueryRequestScalarFieldEnum>
  }

  /**
   * QueryRequest findFirst
   */
  export interface QueryRequestFindFirstArgs extends QueryRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QueryRequest findFirstOrThrow
   */
  export type QueryRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * Filter, which QueryRequest to fetch.
     */
    where?: QueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryRequests to fetch.
     */
    orderBy?: Enumerable<QueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryRequests.
     */
    cursor?: QueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryRequests.
     */
    distinct?: Enumerable<QueryRequestScalarFieldEnum>
  }


  /**
   * QueryRequest findMany
   */
  export type QueryRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * Filter, which QueryRequests to fetch.
     */
    where?: QueryRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryRequests to fetch.
     */
    orderBy?: Enumerable<QueryRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueryRequests.
     */
    cursor?: QueryRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryRequests.
     */
    skip?: number
    distinct?: Enumerable<QueryRequestScalarFieldEnum>
  }


  /**
   * QueryRequest create
   */
  export type QueryRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * The data needed to create a QueryRequest.
     */
    data: XOR<QueryRequestCreateInput, QueryRequestUncheckedCreateInput>
  }


  /**
   * QueryRequest createMany
   */
  export type QueryRequestCreateManyArgs = {
    /**
     * The data used to create many QueryRequests.
     */
    data: Enumerable<QueryRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QueryRequest update
   */
  export type QueryRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * The data needed to update a QueryRequest.
     */
    data: XOR<QueryRequestUpdateInput, QueryRequestUncheckedUpdateInput>
    /**
     * Choose, which QueryRequest to update.
     */
    where: QueryRequestWhereUniqueInput
  }


  /**
   * QueryRequest updateMany
   */
  export type QueryRequestUpdateManyArgs = {
    /**
     * The data used to update QueryRequests.
     */
    data: XOR<QueryRequestUpdateManyMutationInput, QueryRequestUncheckedUpdateManyInput>
    /**
     * Filter which QueryRequests to update
     */
    where?: QueryRequestWhereInput
  }


  /**
   * QueryRequest upsert
   */
  export type QueryRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * The filter to search for the QueryRequest to update in case it exists.
     */
    where: QueryRequestWhereUniqueInput
    /**
     * In case the QueryRequest found by the `where` argument doesn't exist, create a new QueryRequest with this data.
     */
    create: XOR<QueryRequestCreateInput, QueryRequestUncheckedCreateInput>
    /**
     * In case the QueryRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryRequestUpdateInput, QueryRequestUncheckedUpdateInput>
  }


  /**
   * QueryRequest delete
   */
  export type QueryRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
    /**
     * Filter which QueryRequest to delete.
     */
    where: QueryRequestWhereUniqueInput
  }


  /**
   * QueryRequest deleteMany
   */
  export type QueryRequestDeleteManyArgs = {
    /**
     * Filter which QueryRequests to delete
     */
    where?: QueryRequestWhereInput
  }


  /**
   * QueryRequest.ExplorationXQueryRequest
   */
  export type QueryRequest$ExplorationXQueryRequestArgs = {
    /**
     * Select specific fields to fetch from the ExplorationXQueryRequest
     */
    select?: ExplorationXQueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExplorationXQueryRequestInclude | null
    where?: ExplorationXQueryRequestWhereInput
    orderBy?: Enumerable<ExplorationXQueryRequestOrderByWithRelationInput>
    cursor?: ExplorationXQueryRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExplorationXQueryRequestScalarFieldEnum>
  }


  /**
   * QueryRequest without action
   */
  export type QueryRequestArgs = {
    /**
     * Select specific fields to fetch from the QueryRequest
     */
    select?: QueryRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QueryRequestInclude | null
  }



  /**
   * Model auth_group
   */


  export type AggregateAuth_group = {
    _count: Auth_groupCountAggregateOutputType | null
    _avg: Auth_groupAvgAggregateOutputType | null
    _sum: Auth_groupSumAggregateOutputType | null
    _min: Auth_groupMinAggregateOutputType | null
    _max: Auth_groupMaxAggregateOutputType | null
  }

  export type Auth_groupAvgAggregateOutputType = {
    id: number | null
  }

  export type Auth_groupSumAggregateOutputType = {
    id: number | null
  }

  export type Auth_groupMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Auth_groupMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Auth_groupCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Auth_groupAvgAggregateInputType = {
    id?: true
  }

  export type Auth_groupSumAggregateInputType = {
    id?: true
  }

  export type Auth_groupMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Auth_groupMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Auth_groupCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Auth_groupAggregateArgs = {
    /**
     * Filter which auth_group to aggregate.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: Enumerable<auth_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_groups
    **/
    _count?: true | Auth_groupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_groupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_groupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_groupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_groupMaxAggregateInputType
  }

  export type GetAuth_groupAggregateType<T extends Auth_groupAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_group]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_group[P]>
      : GetScalarType<T[P], AggregateAuth_group[P]>
  }




  export type Auth_groupGroupByArgs = {
    where?: auth_groupWhereInput
    orderBy?: Enumerable<auth_groupOrderByWithAggregationInput>
    by: Auth_groupScalarFieldEnum[]
    having?: auth_groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_groupCountAggregateInputType | true
    _avg?: Auth_groupAvgAggregateInputType
    _sum?: Auth_groupSumAggregateInputType
    _min?: Auth_groupMinAggregateInputType
    _max?: Auth_groupMaxAggregateInputType
  }


  export type Auth_groupGroupByOutputType = {
    id: number
    name: string
    _count: Auth_groupCountAggregateOutputType | null
    _avg: Auth_groupAvgAggregateOutputType | null
    _sum: Auth_groupSumAggregateOutputType | null
    _min: Auth_groupMinAggregateOutputType | null
    _max: Auth_groupMaxAggregateOutputType | null
  }

  type GetAuth_groupGroupByPayload<T extends Auth_groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Auth_groupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_groupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_groupGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_groupGroupByOutputType[P]>
        }
      >
    >


  export type auth_groupSelect = {
    id?: boolean
    name?: boolean
    auth_group_permissions?: boolean | auth_group$auth_group_permissionsArgs
    auth_user_groups?: boolean | auth_group$auth_user_groupsArgs
    _count?: boolean | Auth_groupCountOutputTypeArgs
  }


  export type auth_groupInclude = {
    auth_group_permissions?: boolean | auth_group$auth_group_permissionsArgs
    auth_user_groups?: boolean | auth_group$auth_user_groupsArgs
    _count?: boolean | Auth_groupCountOutputTypeArgs
  }

  export type auth_groupGetPayload<S extends boolean | null | undefined | auth_groupArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? auth_group :
    S extends undefined ? never :
    S extends { include: any } & (auth_groupArgs | auth_groupFindManyArgs)
    ? auth_group  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'auth_group_permissions' ? Array < auth_group_permissionsGetPayload<S['include'][P]>>  :
        P extends 'auth_user_groups' ? Array < auth_user_groupsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Auth_groupCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (auth_groupArgs | auth_groupFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'auth_group_permissions' ? Array < auth_group_permissionsGetPayload<S['select'][P]>>  :
        P extends 'auth_user_groups' ? Array < auth_user_groupsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Auth_groupCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof auth_group ? auth_group[P] : never
  } 
      : auth_group


  type auth_groupCountArgs = 
    Omit<auth_groupFindManyArgs, 'select' | 'include'> & {
      select?: Auth_groupCountAggregateInputType | true
    }

  export interface auth_groupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Auth_group that matches the filter.
     * @param {auth_groupFindUniqueArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auth_groupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auth_groupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auth_group'> extends True ? Prisma__auth_groupClient<auth_groupGetPayload<T>> : Prisma__auth_groupClient<auth_groupGetPayload<T> | null, null>

    /**
     * Find one Auth_group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auth_groupFindUniqueOrThrowArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auth_groupFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auth_groupFindUniqueOrThrowArgs>
    ): Prisma__auth_groupClient<auth_groupGetPayload<T>>

    /**
     * Find the first Auth_group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupFindFirstArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auth_groupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auth_groupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auth_group'> extends True ? Prisma__auth_groupClient<auth_groupGetPayload<T>> : Prisma__auth_groupClient<auth_groupGetPayload<T> | null, null>

    /**
     * Find the first Auth_group that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupFindFirstOrThrowArgs} args - Arguments to find a Auth_group
     * @example
     * // Get one Auth_group
     * const auth_group = await prisma.auth_group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auth_groupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auth_groupFindFirstOrThrowArgs>
    ): Prisma__auth_groupClient<auth_groupGetPayload<T>>

    /**
     * Find zero or more Auth_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_groups
     * const auth_groups = await prisma.auth_group.findMany()
     * 
     * // Get first 10 Auth_groups
     * const auth_groups = await prisma.auth_group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_groupWithIdOnly = await prisma.auth_group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends auth_groupFindManyArgs>(
      args?: SelectSubset<T, auth_groupFindManyArgs>
    ): Prisma.PrismaPromise<Array<auth_groupGetPayload<T>>>

    /**
     * Create a Auth_group.
     * @param {auth_groupCreateArgs} args - Arguments to create a Auth_group.
     * @example
     * // Create one Auth_group
     * const Auth_group = await prisma.auth_group.create({
     *   data: {
     *     // ... data to create a Auth_group
     *   }
     * })
     * 
    **/
    create<T extends auth_groupCreateArgs>(
      args: SelectSubset<T, auth_groupCreateArgs>
    ): Prisma__auth_groupClient<auth_groupGetPayload<T>>

    /**
     * Create many Auth_groups.
     *     @param {auth_groupCreateManyArgs} args - Arguments to create many Auth_groups.
     *     @example
     *     // Create many Auth_groups
     *     const auth_group = await prisma.auth_group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auth_groupCreateManyArgs>(
      args?: SelectSubset<T, auth_groupCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_group.
     * @param {auth_groupDeleteArgs} args - Arguments to delete one Auth_group.
     * @example
     * // Delete one Auth_group
     * const Auth_group = await prisma.auth_group.delete({
     *   where: {
     *     // ... filter to delete one Auth_group
     *   }
     * })
     * 
    **/
    delete<T extends auth_groupDeleteArgs>(
      args: SelectSubset<T, auth_groupDeleteArgs>
    ): Prisma__auth_groupClient<auth_groupGetPayload<T>>

    /**
     * Update one Auth_group.
     * @param {auth_groupUpdateArgs} args - Arguments to update one Auth_group.
     * @example
     * // Update one Auth_group
     * const auth_group = await prisma.auth_group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auth_groupUpdateArgs>(
      args: SelectSubset<T, auth_groupUpdateArgs>
    ): Prisma__auth_groupClient<auth_groupGetPayload<T>>

    /**
     * Delete zero or more Auth_groups.
     * @param {auth_groupDeleteManyArgs} args - Arguments to filter Auth_groups to delete.
     * @example
     * // Delete a few Auth_groups
     * const { count } = await prisma.auth_group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auth_groupDeleteManyArgs>(
      args?: SelectSubset<T, auth_groupDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_groups
     * const auth_group = await prisma.auth_group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auth_groupUpdateManyArgs>(
      args: SelectSubset<T, auth_groupUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_group.
     * @param {auth_groupUpsertArgs} args - Arguments to update or create a Auth_group.
     * @example
     * // Update or create a Auth_group
     * const auth_group = await prisma.auth_group.upsert({
     *   create: {
     *     // ... data to create a Auth_group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_group we want to update
     *   }
     * })
    **/
    upsert<T extends auth_groupUpsertArgs>(
      args: SelectSubset<T, auth_groupUpsertArgs>
    ): Prisma__auth_groupClient<auth_groupGetPayload<T>>

    /**
     * Count the number of Auth_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_groupCountArgs} args - Arguments to filter Auth_groups to count.
     * @example
     * // Count the number of Auth_groups
     * const count = await prisma.auth_group.count({
     *   where: {
     *     // ... the filter for the Auth_groups we want to count
     *   }
     * })
    **/
    count<T extends auth_groupCountArgs>(
      args?: Subset<T, auth_groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_groupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_groupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_groupAggregateArgs>(args: Subset<T, Auth_groupAggregateArgs>): Prisma.PrismaPromise<GetAuth_groupAggregateType<T>>

    /**
     * Group by Auth_group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_groupGroupByArgs} args - Group by arguments.
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
      T extends Auth_groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auth_groupGroupByArgs['orderBy'] }
        : { orderBy?: Auth_groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Auth_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auth_groupClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    auth_group_permissions<T extends auth_group$auth_group_permissionsArgs= {}>(args?: Subset<T, auth_group$auth_group_permissionsArgs>): Prisma.PrismaPromise<Array<auth_group_permissionsGetPayload<T>>| Null>;

    auth_user_groups<T extends auth_group$auth_user_groupsArgs= {}>(args?: Subset<T, auth_group$auth_user_groupsArgs>): Prisma.PrismaPromise<Array<auth_user_groupsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * auth_group base type for findUnique actions
   */
  export type auth_groupFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * Filter, which auth_group to fetch.
     */
    where: auth_groupWhereUniqueInput
  }

  /**
   * auth_group findUnique
   */
  export interface auth_groupFindUniqueArgs extends auth_groupFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_group findUniqueOrThrow
   */
  export type auth_groupFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * Filter, which auth_group to fetch.
     */
    where: auth_groupWhereUniqueInput
  }


  /**
   * auth_group base type for findFirst actions
   */
  export type auth_groupFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * Filter, which auth_group to fetch.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: Enumerable<auth_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_groups.
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_groups.
     */
    distinct?: Enumerable<Auth_groupScalarFieldEnum>
  }

  /**
   * auth_group findFirst
   */
  export interface auth_groupFindFirstArgs extends auth_groupFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_group findFirstOrThrow
   */
  export type auth_groupFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * Filter, which auth_group to fetch.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: Enumerable<auth_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_groups.
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_groups.
     */
    distinct?: Enumerable<Auth_groupScalarFieldEnum>
  }


  /**
   * auth_group findMany
   */
  export type auth_groupFindManyArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * Filter, which auth_groups to fetch.
     */
    where?: auth_groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_groups to fetch.
     */
    orderBy?: Enumerable<auth_groupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_groups.
     */
    cursor?: auth_groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_groups.
     */
    skip?: number
    distinct?: Enumerable<Auth_groupScalarFieldEnum>
  }


  /**
   * auth_group create
   */
  export type auth_groupCreateArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * The data needed to create a auth_group.
     */
    data: XOR<auth_groupCreateInput, auth_groupUncheckedCreateInput>
  }


  /**
   * auth_group createMany
   */
  export type auth_groupCreateManyArgs = {
    /**
     * The data used to create many auth_groups.
     */
    data: Enumerable<auth_groupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * auth_group update
   */
  export type auth_groupUpdateArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * The data needed to update a auth_group.
     */
    data: XOR<auth_groupUpdateInput, auth_groupUncheckedUpdateInput>
    /**
     * Choose, which auth_group to update.
     */
    where: auth_groupWhereUniqueInput
  }


  /**
   * auth_group updateMany
   */
  export type auth_groupUpdateManyArgs = {
    /**
     * The data used to update auth_groups.
     */
    data: XOR<auth_groupUpdateManyMutationInput, auth_groupUncheckedUpdateManyInput>
    /**
     * Filter which auth_groups to update
     */
    where?: auth_groupWhereInput
  }


  /**
   * auth_group upsert
   */
  export type auth_groupUpsertArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * The filter to search for the auth_group to update in case it exists.
     */
    where: auth_groupWhereUniqueInput
    /**
     * In case the auth_group found by the `where` argument doesn't exist, create a new auth_group with this data.
     */
    create: XOR<auth_groupCreateInput, auth_groupUncheckedCreateInput>
    /**
     * In case the auth_group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_groupUpdateInput, auth_groupUncheckedUpdateInput>
  }


  /**
   * auth_group delete
   */
  export type auth_groupDeleteArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
    /**
     * Filter which auth_group to delete.
     */
    where: auth_groupWhereUniqueInput
  }


  /**
   * auth_group deleteMany
   */
  export type auth_groupDeleteManyArgs = {
    /**
     * Filter which auth_groups to delete
     */
    where?: auth_groupWhereInput
  }


  /**
   * auth_group.auth_group_permissions
   */
  export type auth_group$auth_group_permissionsArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    where?: auth_group_permissionsWhereInput
    orderBy?: Enumerable<auth_group_permissionsOrderByWithRelationInput>
    cursor?: auth_group_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Auth_group_permissionsScalarFieldEnum>
  }


  /**
   * auth_group.auth_user_groups
   */
  export type auth_group$auth_user_groupsArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    where?: auth_user_groupsWhereInput
    orderBy?: Enumerable<auth_user_groupsOrderByWithRelationInput>
    cursor?: auth_user_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Auth_user_groupsScalarFieldEnum>
  }


  /**
   * auth_group without action
   */
  export type auth_groupArgs = {
    /**
     * Select specific fields to fetch from the auth_group
     */
    select?: auth_groupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_groupInclude | null
  }



  /**
   * Model auth_group_permissions
   */


  export type AggregateAuth_group_permissions = {
    _count: Auth_group_permissionsCountAggregateOutputType | null
    _avg: Auth_group_permissionsAvgAggregateOutputType | null
    _sum: Auth_group_permissionsSumAggregateOutputType | null
    _min: Auth_group_permissionsMinAggregateOutputType | null
    _max: Auth_group_permissionsMaxAggregateOutputType | null
  }

  export type Auth_group_permissionsAvgAggregateOutputType = {
    id: number | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsSumAggregateOutputType = {
    id: bigint | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsMinAggregateOutputType = {
    id: bigint | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsMaxAggregateOutputType = {
    id: bigint | null
    group_id: number | null
    permission_id: number | null
  }

  export type Auth_group_permissionsCountAggregateOutputType = {
    id: number
    group_id: number
    permission_id: number
    _all: number
  }


  export type Auth_group_permissionsAvgAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsSumAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsMinAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsMaxAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
  }

  export type Auth_group_permissionsCountAggregateInputType = {
    id?: true
    group_id?: true
    permission_id?: true
    _all?: true
  }

  export type Auth_group_permissionsAggregateArgs = {
    /**
     * Filter which auth_group_permissions to aggregate.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: Enumerable<auth_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_group_permissions
    **/
    _count?: true | Auth_group_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_group_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_group_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_group_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_group_permissionsMaxAggregateInputType
  }

  export type GetAuth_group_permissionsAggregateType<T extends Auth_group_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_group_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_group_permissions[P]>
      : GetScalarType<T[P], AggregateAuth_group_permissions[P]>
  }




  export type Auth_group_permissionsGroupByArgs = {
    where?: auth_group_permissionsWhereInput
    orderBy?: Enumerable<auth_group_permissionsOrderByWithAggregationInput>
    by: Auth_group_permissionsScalarFieldEnum[]
    having?: auth_group_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_group_permissionsCountAggregateInputType | true
    _avg?: Auth_group_permissionsAvgAggregateInputType
    _sum?: Auth_group_permissionsSumAggregateInputType
    _min?: Auth_group_permissionsMinAggregateInputType
    _max?: Auth_group_permissionsMaxAggregateInputType
  }


  export type Auth_group_permissionsGroupByOutputType = {
    id: bigint
    group_id: number
    permission_id: number
    _count: Auth_group_permissionsCountAggregateOutputType | null
    _avg: Auth_group_permissionsAvgAggregateOutputType | null
    _sum: Auth_group_permissionsSumAggregateOutputType | null
    _min: Auth_group_permissionsMinAggregateOutputType | null
    _max: Auth_group_permissionsMaxAggregateOutputType | null
  }

  type GetAuth_group_permissionsGroupByPayload<T extends Auth_group_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Auth_group_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_group_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_group_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_group_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type auth_group_permissionsSelect = {
    id?: boolean
    group_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionArgs
    auth_group?: boolean | auth_groupArgs
  }


  export type auth_group_permissionsInclude = {
    auth_permission?: boolean | auth_permissionArgs
    auth_group?: boolean | auth_groupArgs
  }

  export type auth_group_permissionsGetPayload<S extends boolean | null | undefined | auth_group_permissionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? auth_group_permissions :
    S extends undefined ? never :
    S extends { include: any } & (auth_group_permissionsArgs | auth_group_permissionsFindManyArgs)
    ? auth_group_permissions  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'auth_permission' ? auth_permissionGetPayload<S['include'][P]> :
        P extends 'auth_group' ? auth_groupGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (auth_group_permissionsArgs | auth_group_permissionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'auth_permission' ? auth_permissionGetPayload<S['select'][P]> :
        P extends 'auth_group' ? auth_groupGetPayload<S['select'][P]> :  P extends keyof auth_group_permissions ? auth_group_permissions[P] : never
  } 
      : auth_group_permissions


  type auth_group_permissionsCountArgs = 
    Omit<auth_group_permissionsFindManyArgs, 'select' | 'include'> & {
      select?: Auth_group_permissionsCountAggregateInputType | true
    }

  export interface auth_group_permissionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Auth_group_permissions that matches the filter.
     * @param {auth_group_permissionsFindUniqueArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auth_group_permissionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auth_group_permissionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auth_group_permissions'> extends True ? Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>> : Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T> | null, null>

    /**
     * Find one Auth_group_permissions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auth_group_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auth_group_permissionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auth_group_permissionsFindUniqueOrThrowArgs>
    ): Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>>

    /**
     * Find the first Auth_group_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsFindFirstArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auth_group_permissionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auth_group_permissionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auth_group_permissions'> extends True ? Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>> : Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T> | null, null>

    /**
     * Find the first Auth_group_permissions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsFindFirstOrThrowArgs} args - Arguments to find a Auth_group_permissions
     * @example
     * // Get one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auth_group_permissionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auth_group_permissionsFindFirstOrThrowArgs>
    ): Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>>

    /**
     * Find zero or more Auth_group_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findMany()
     * 
     * // Get first 10 Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_group_permissionsWithIdOnly = await prisma.auth_group_permissions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends auth_group_permissionsFindManyArgs>(
      args?: SelectSubset<T, auth_group_permissionsFindManyArgs>
    ): Prisma.PrismaPromise<Array<auth_group_permissionsGetPayload<T>>>

    /**
     * Create a Auth_group_permissions.
     * @param {auth_group_permissionsCreateArgs} args - Arguments to create a Auth_group_permissions.
     * @example
     * // Create one Auth_group_permissions
     * const Auth_group_permissions = await prisma.auth_group_permissions.create({
     *   data: {
     *     // ... data to create a Auth_group_permissions
     *   }
     * })
     * 
    **/
    create<T extends auth_group_permissionsCreateArgs>(
      args: SelectSubset<T, auth_group_permissionsCreateArgs>
    ): Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>>

    /**
     * Create many Auth_group_permissions.
     *     @param {auth_group_permissionsCreateManyArgs} args - Arguments to create many Auth_group_permissions.
     *     @example
     *     // Create many Auth_group_permissions
     *     const auth_group_permissions = await prisma.auth_group_permissions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auth_group_permissionsCreateManyArgs>(
      args?: SelectSubset<T, auth_group_permissionsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_group_permissions.
     * @param {auth_group_permissionsDeleteArgs} args - Arguments to delete one Auth_group_permissions.
     * @example
     * // Delete one Auth_group_permissions
     * const Auth_group_permissions = await prisma.auth_group_permissions.delete({
     *   where: {
     *     // ... filter to delete one Auth_group_permissions
     *   }
     * })
     * 
    **/
    delete<T extends auth_group_permissionsDeleteArgs>(
      args: SelectSubset<T, auth_group_permissionsDeleteArgs>
    ): Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>>

    /**
     * Update one Auth_group_permissions.
     * @param {auth_group_permissionsUpdateArgs} args - Arguments to update one Auth_group_permissions.
     * @example
     * // Update one Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auth_group_permissionsUpdateArgs>(
      args: SelectSubset<T, auth_group_permissionsUpdateArgs>
    ): Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>>

    /**
     * Delete zero or more Auth_group_permissions.
     * @param {auth_group_permissionsDeleteManyArgs} args - Arguments to filter Auth_group_permissions to delete.
     * @example
     * // Delete a few Auth_group_permissions
     * const { count } = await prisma.auth_group_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auth_group_permissionsDeleteManyArgs>(
      args?: SelectSubset<T, auth_group_permissionsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auth_group_permissionsUpdateManyArgs>(
      args: SelectSubset<T, auth_group_permissionsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_group_permissions.
     * @param {auth_group_permissionsUpsertArgs} args - Arguments to update or create a Auth_group_permissions.
     * @example
     * // Update or create a Auth_group_permissions
     * const auth_group_permissions = await prisma.auth_group_permissions.upsert({
     *   create: {
     *     // ... data to create a Auth_group_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_group_permissions we want to update
     *   }
     * })
    **/
    upsert<T extends auth_group_permissionsUpsertArgs>(
      args: SelectSubset<T, auth_group_permissionsUpsertArgs>
    ): Prisma__auth_group_permissionsClient<auth_group_permissionsGetPayload<T>>

    /**
     * Count the number of Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_group_permissionsCountArgs} args - Arguments to filter Auth_group_permissions to count.
     * @example
     * // Count the number of Auth_group_permissions
     * const count = await prisma.auth_group_permissions.count({
     *   where: {
     *     // ... the filter for the Auth_group_permissions we want to count
     *   }
     * })
    **/
    count<T extends auth_group_permissionsCountArgs>(
      args?: Subset<T, auth_group_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_group_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_group_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_group_permissionsAggregateArgs>(args: Subset<T, Auth_group_permissionsAggregateArgs>): Prisma.PrismaPromise<GetAuth_group_permissionsAggregateType<T>>

    /**
     * Group by Auth_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_group_permissionsGroupByArgs} args - Group by arguments.
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
      T extends Auth_group_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auth_group_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: Auth_group_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Auth_group_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_group_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_group_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auth_group_permissionsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    auth_permission<T extends auth_permissionArgs= {}>(args?: Subset<T, auth_permissionArgs>): Prisma__auth_permissionClient<auth_permissionGetPayload<T> | Null>;

    auth_group<T extends auth_groupArgs= {}>(args?: Subset<T, auth_groupArgs>): Prisma__auth_groupClient<auth_groupGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * auth_group_permissions base type for findUnique actions
   */
  export type auth_group_permissionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where: auth_group_permissionsWhereUniqueInput
  }

  /**
   * auth_group_permissions findUnique
   */
  export interface auth_group_permissionsFindUniqueArgs extends auth_group_permissionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_group_permissions findUniqueOrThrow
   */
  export type auth_group_permissionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where: auth_group_permissionsWhereUniqueInput
  }


  /**
   * auth_group_permissions base type for findFirst actions
   */
  export type auth_group_permissionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: Enumerable<auth_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_group_permissions.
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_group_permissions.
     */
    distinct?: Enumerable<Auth_group_permissionsScalarFieldEnum>
  }

  /**
   * auth_group_permissions findFirst
   */
  export interface auth_group_permissionsFindFirstArgs extends auth_group_permissionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_group_permissions findFirstOrThrow
   */
  export type auth_group_permissionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: Enumerable<auth_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_group_permissions.
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_group_permissions.
     */
    distinct?: Enumerable<Auth_group_permissionsScalarFieldEnum>
  }


  /**
   * auth_group_permissions findMany
   */
  export type auth_group_permissionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * Filter, which auth_group_permissions to fetch.
     */
    where?: auth_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_group_permissions to fetch.
     */
    orderBy?: Enumerable<auth_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_group_permissions.
     */
    cursor?: auth_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_group_permissions.
     */
    skip?: number
    distinct?: Enumerable<Auth_group_permissionsScalarFieldEnum>
  }


  /**
   * auth_group_permissions create
   */
  export type auth_group_permissionsCreateArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * The data needed to create a auth_group_permissions.
     */
    data: XOR<auth_group_permissionsCreateInput, auth_group_permissionsUncheckedCreateInput>
  }


  /**
   * auth_group_permissions createMany
   */
  export type auth_group_permissionsCreateManyArgs = {
    /**
     * The data used to create many auth_group_permissions.
     */
    data: Enumerable<auth_group_permissionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * auth_group_permissions update
   */
  export type auth_group_permissionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * The data needed to update a auth_group_permissions.
     */
    data: XOR<auth_group_permissionsUpdateInput, auth_group_permissionsUncheckedUpdateInput>
    /**
     * Choose, which auth_group_permissions to update.
     */
    where: auth_group_permissionsWhereUniqueInput
  }


  /**
   * auth_group_permissions updateMany
   */
  export type auth_group_permissionsUpdateManyArgs = {
    /**
     * The data used to update auth_group_permissions.
     */
    data: XOR<auth_group_permissionsUpdateManyMutationInput, auth_group_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which auth_group_permissions to update
     */
    where?: auth_group_permissionsWhereInput
  }


  /**
   * auth_group_permissions upsert
   */
  export type auth_group_permissionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * The filter to search for the auth_group_permissions to update in case it exists.
     */
    where: auth_group_permissionsWhereUniqueInput
    /**
     * In case the auth_group_permissions found by the `where` argument doesn't exist, create a new auth_group_permissions with this data.
     */
    create: XOR<auth_group_permissionsCreateInput, auth_group_permissionsUncheckedCreateInput>
    /**
     * In case the auth_group_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_group_permissionsUpdateInput, auth_group_permissionsUncheckedUpdateInput>
  }


  /**
   * auth_group_permissions delete
   */
  export type auth_group_permissionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    /**
     * Filter which auth_group_permissions to delete.
     */
    where: auth_group_permissionsWhereUniqueInput
  }


  /**
   * auth_group_permissions deleteMany
   */
  export type auth_group_permissionsDeleteManyArgs = {
    /**
     * Filter which auth_group_permissions to delete
     */
    where?: auth_group_permissionsWhereInput
  }


  /**
   * auth_group_permissions without action
   */
  export type auth_group_permissionsArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
  }



  /**
   * Model auth_permission
   */


  export type AggregateAuth_permission = {
    _count: Auth_permissionCountAggregateOutputType | null
    _avg: Auth_permissionAvgAggregateOutputType | null
    _sum: Auth_permissionSumAggregateOutputType | null
    _min: Auth_permissionMinAggregateOutputType | null
    _max: Auth_permissionMaxAggregateOutputType | null
  }

  export type Auth_permissionAvgAggregateOutputType = {
    id: number | null
    content_type_id: number | null
  }

  export type Auth_permissionSumAggregateOutputType = {
    id: number | null
    content_type_id: number | null
  }

  export type Auth_permissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    content_type_id: number | null
    codename: string | null
  }

  export type Auth_permissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    content_type_id: number | null
    codename: string | null
  }

  export type Auth_permissionCountAggregateOutputType = {
    id: number
    name: number
    content_type_id: number
    codename: number
    _all: number
  }


  export type Auth_permissionAvgAggregateInputType = {
    id?: true
    content_type_id?: true
  }

  export type Auth_permissionSumAggregateInputType = {
    id?: true
    content_type_id?: true
  }

  export type Auth_permissionMinAggregateInputType = {
    id?: true
    name?: true
    content_type_id?: true
    codename?: true
  }

  export type Auth_permissionMaxAggregateInputType = {
    id?: true
    name?: true
    content_type_id?: true
    codename?: true
  }

  export type Auth_permissionCountAggregateInputType = {
    id?: true
    name?: true
    content_type_id?: true
    codename?: true
    _all?: true
  }

  export type Auth_permissionAggregateArgs = {
    /**
     * Filter which auth_permission to aggregate.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: Enumerable<auth_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_permissions
    **/
    _count?: true | Auth_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_permissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_permissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_permissionMaxAggregateInputType
  }

  export type GetAuth_permissionAggregateType<T extends Auth_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_permission[P]>
      : GetScalarType<T[P], AggregateAuth_permission[P]>
  }




  export type Auth_permissionGroupByArgs = {
    where?: auth_permissionWhereInput
    orderBy?: Enumerable<auth_permissionOrderByWithAggregationInput>
    by: Auth_permissionScalarFieldEnum[]
    having?: auth_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_permissionCountAggregateInputType | true
    _avg?: Auth_permissionAvgAggregateInputType
    _sum?: Auth_permissionSumAggregateInputType
    _min?: Auth_permissionMinAggregateInputType
    _max?: Auth_permissionMaxAggregateInputType
  }


  export type Auth_permissionGroupByOutputType = {
    id: number
    name: string
    content_type_id: number
    codename: string
    _count: Auth_permissionCountAggregateOutputType | null
    _avg: Auth_permissionAvgAggregateOutputType | null
    _sum: Auth_permissionSumAggregateOutputType | null
    _min: Auth_permissionMinAggregateOutputType | null
    _max: Auth_permissionMaxAggregateOutputType | null
  }

  type GetAuth_permissionGroupByPayload<T extends Auth_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Auth_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_permissionGroupByOutputType[P]>
        }
      >
    >


  export type auth_permissionSelect = {
    id?: boolean
    name?: boolean
    content_type_id?: boolean
    codename?: boolean
    auth_group_permissions?: boolean | auth_permission$auth_group_permissionsArgs
    django_content_type?: boolean | django_content_typeArgs
    auth_user_user_permissions?: boolean | auth_permission$auth_user_user_permissionsArgs
    _count?: boolean | Auth_permissionCountOutputTypeArgs
  }


  export type auth_permissionInclude = {
    auth_group_permissions?: boolean | auth_permission$auth_group_permissionsArgs
    django_content_type?: boolean | django_content_typeArgs
    auth_user_user_permissions?: boolean | auth_permission$auth_user_user_permissionsArgs
    _count?: boolean | Auth_permissionCountOutputTypeArgs
  }

  export type auth_permissionGetPayload<S extends boolean | null | undefined | auth_permissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? auth_permission :
    S extends undefined ? never :
    S extends { include: any } & (auth_permissionArgs | auth_permissionFindManyArgs)
    ? auth_permission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'auth_group_permissions' ? Array < auth_group_permissionsGetPayload<S['include'][P]>>  :
        P extends 'django_content_type' ? django_content_typeGetPayload<S['include'][P]> :
        P extends 'auth_user_user_permissions' ? Array < auth_user_user_permissionsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Auth_permissionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (auth_permissionArgs | auth_permissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'auth_group_permissions' ? Array < auth_group_permissionsGetPayload<S['select'][P]>>  :
        P extends 'django_content_type' ? django_content_typeGetPayload<S['select'][P]> :
        P extends 'auth_user_user_permissions' ? Array < auth_user_user_permissionsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Auth_permissionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof auth_permission ? auth_permission[P] : never
  } 
      : auth_permission


  type auth_permissionCountArgs = 
    Omit<auth_permissionFindManyArgs, 'select' | 'include'> & {
      select?: Auth_permissionCountAggregateInputType | true
    }

  export interface auth_permissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Auth_permission that matches the filter.
     * @param {auth_permissionFindUniqueArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auth_permissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auth_permissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auth_permission'> extends True ? Prisma__auth_permissionClient<auth_permissionGetPayload<T>> : Prisma__auth_permissionClient<auth_permissionGetPayload<T> | null, null>

    /**
     * Find one Auth_permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auth_permissionFindUniqueOrThrowArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auth_permissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auth_permissionFindUniqueOrThrowArgs>
    ): Prisma__auth_permissionClient<auth_permissionGetPayload<T>>

    /**
     * Find the first Auth_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionFindFirstArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auth_permissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auth_permissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auth_permission'> extends True ? Prisma__auth_permissionClient<auth_permissionGetPayload<T>> : Prisma__auth_permissionClient<auth_permissionGetPayload<T> | null, null>

    /**
     * Find the first Auth_permission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionFindFirstOrThrowArgs} args - Arguments to find a Auth_permission
     * @example
     * // Get one Auth_permission
     * const auth_permission = await prisma.auth_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auth_permissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auth_permissionFindFirstOrThrowArgs>
    ): Prisma__auth_permissionClient<auth_permissionGetPayload<T>>

    /**
     * Find zero or more Auth_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_permissions
     * const auth_permissions = await prisma.auth_permission.findMany()
     * 
     * // Get first 10 Auth_permissions
     * const auth_permissions = await prisma.auth_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_permissionWithIdOnly = await prisma.auth_permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends auth_permissionFindManyArgs>(
      args?: SelectSubset<T, auth_permissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<auth_permissionGetPayload<T>>>

    /**
     * Create a Auth_permission.
     * @param {auth_permissionCreateArgs} args - Arguments to create a Auth_permission.
     * @example
     * // Create one Auth_permission
     * const Auth_permission = await prisma.auth_permission.create({
     *   data: {
     *     // ... data to create a Auth_permission
     *   }
     * })
     * 
    **/
    create<T extends auth_permissionCreateArgs>(
      args: SelectSubset<T, auth_permissionCreateArgs>
    ): Prisma__auth_permissionClient<auth_permissionGetPayload<T>>

    /**
     * Create many Auth_permissions.
     *     @param {auth_permissionCreateManyArgs} args - Arguments to create many Auth_permissions.
     *     @example
     *     // Create many Auth_permissions
     *     const auth_permission = await prisma.auth_permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auth_permissionCreateManyArgs>(
      args?: SelectSubset<T, auth_permissionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_permission.
     * @param {auth_permissionDeleteArgs} args - Arguments to delete one Auth_permission.
     * @example
     * // Delete one Auth_permission
     * const Auth_permission = await prisma.auth_permission.delete({
     *   where: {
     *     // ... filter to delete one Auth_permission
     *   }
     * })
     * 
    **/
    delete<T extends auth_permissionDeleteArgs>(
      args: SelectSubset<T, auth_permissionDeleteArgs>
    ): Prisma__auth_permissionClient<auth_permissionGetPayload<T>>

    /**
     * Update one Auth_permission.
     * @param {auth_permissionUpdateArgs} args - Arguments to update one Auth_permission.
     * @example
     * // Update one Auth_permission
     * const auth_permission = await prisma.auth_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auth_permissionUpdateArgs>(
      args: SelectSubset<T, auth_permissionUpdateArgs>
    ): Prisma__auth_permissionClient<auth_permissionGetPayload<T>>

    /**
     * Delete zero or more Auth_permissions.
     * @param {auth_permissionDeleteManyArgs} args - Arguments to filter Auth_permissions to delete.
     * @example
     * // Delete a few Auth_permissions
     * const { count } = await prisma.auth_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auth_permissionDeleteManyArgs>(
      args?: SelectSubset<T, auth_permissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_permissions
     * const auth_permission = await prisma.auth_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auth_permissionUpdateManyArgs>(
      args: SelectSubset<T, auth_permissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_permission.
     * @param {auth_permissionUpsertArgs} args - Arguments to update or create a Auth_permission.
     * @example
     * // Update or create a Auth_permission
     * const auth_permission = await prisma.auth_permission.upsert({
     *   create: {
     *     // ... data to create a Auth_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_permission we want to update
     *   }
     * })
    **/
    upsert<T extends auth_permissionUpsertArgs>(
      args: SelectSubset<T, auth_permissionUpsertArgs>
    ): Prisma__auth_permissionClient<auth_permissionGetPayload<T>>

    /**
     * Count the number of Auth_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_permissionCountArgs} args - Arguments to filter Auth_permissions to count.
     * @example
     * // Count the number of Auth_permissions
     * const count = await prisma.auth_permission.count({
     *   where: {
     *     // ... the filter for the Auth_permissions we want to count
     *   }
     * })
    **/
    count<T extends auth_permissionCountArgs>(
      args?: Subset<T, auth_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_permissionAggregateArgs>(args: Subset<T, Auth_permissionAggregateArgs>): Prisma.PrismaPromise<GetAuth_permissionAggregateType<T>>

    /**
     * Group by Auth_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_permissionGroupByArgs} args - Group by arguments.
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
      T extends Auth_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auth_permissionGroupByArgs['orderBy'] }
        : { orderBy?: Auth_permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Auth_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auth_permissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    auth_group_permissions<T extends auth_permission$auth_group_permissionsArgs= {}>(args?: Subset<T, auth_permission$auth_group_permissionsArgs>): Prisma.PrismaPromise<Array<auth_group_permissionsGetPayload<T>>| Null>;

    django_content_type<T extends django_content_typeArgs= {}>(args?: Subset<T, django_content_typeArgs>): Prisma__django_content_typeClient<django_content_typeGetPayload<T> | Null>;

    auth_user_user_permissions<T extends auth_permission$auth_user_user_permissionsArgs= {}>(args?: Subset<T, auth_permission$auth_user_user_permissionsArgs>): Prisma.PrismaPromise<Array<auth_user_user_permissionsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * auth_permission base type for findUnique actions
   */
  export type auth_permissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where: auth_permissionWhereUniqueInput
  }

  /**
   * auth_permission findUnique
   */
  export interface auth_permissionFindUniqueArgs extends auth_permissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_permission findUniqueOrThrow
   */
  export type auth_permissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where: auth_permissionWhereUniqueInput
  }


  /**
   * auth_permission base type for findFirst actions
   */
  export type auth_permissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: Enumerable<auth_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_permissions.
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_permissions.
     */
    distinct?: Enumerable<Auth_permissionScalarFieldEnum>
  }

  /**
   * auth_permission findFirst
   */
  export interface auth_permissionFindFirstArgs extends auth_permissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_permission findFirstOrThrow
   */
  export type auth_permissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * Filter, which auth_permission to fetch.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: Enumerable<auth_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_permissions.
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_permissions.
     */
    distinct?: Enumerable<Auth_permissionScalarFieldEnum>
  }


  /**
   * auth_permission findMany
   */
  export type auth_permissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * Filter, which auth_permissions to fetch.
     */
    where?: auth_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_permissions to fetch.
     */
    orderBy?: Enumerable<auth_permissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_permissions.
     */
    cursor?: auth_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_permissions.
     */
    skip?: number
    distinct?: Enumerable<Auth_permissionScalarFieldEnum>
  }


  /**
   * auth_permission create
   */
  export type auth_permissionCreateArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * The data needed to create a auth_permission.
     */
    data: XOR<auth_permissionCreateInput, auth_permissionUncheckedCreateInput>
  }


  /**
   * auth_permission createMany
   */
  export type auth_permissionCreateManyArgs = {
    /**
     * The data used to create many auth_permissions.
     */
    data: Enumerable<auth_permissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * auth_permission update
   */
  export type auth_permissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * The data needed to update a auth_permission.
     */
    data: XOR<auth_permissionUpdateInput, auth_permissionUncheckedUpdateInput>
    /**
     * Choose, which auth_permission to update.
     */
    where: auth_permissionWhereUniqueInput
  }


  /**
   * auth_permission updateMany
   */
  export type auth_permissionUpdateManyArgs = {
    /**
     * The data used to update auth_permissions.
     */
    data: XOR<auth_permissionUpdateManyMutationInput, auth_permissionUncheckedUpdateManyInput>
    /**
     * Filter which auth_permissions to update
     */
    where?: auth_permissionWhereInput
  }


  /**
   * auth_permission upsert
   */
  export type auth_permissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * The filter to search for the auth_permission to update in case it exists.
     */
    where: auth_permissionWhereUniqueInput
    /**
     * In case the auth_permission found by the `where` argument doesn't exist, create a new auth_permission with this data.
     */
    create: XOR<auth_permissionCreateInput, auth_permissionUncheckedCreateInput>
    /**
     * In case the auth_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_permissionUpdateInput, auth_permissionUncheckedUpdateInput>
  }


  /**
   * auth_permission delete
   */
  export type auth_permissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    /**
     * Filter which auth_permission to delete.
     */
    where: auth_permissionWhereUniqueInput
  }


  /**
   * auth_permission deleteMany
   */
  export type auth_permissionDeleteManyArgs = {
    /**
     * Filter which auth_permissions to delete
     */
    where?: auth_permissionWhereInput
  }


  /**
   * auth_permission.auth_group_permissions
   */
  export type auth_permission$auth_group_permissionsArgs = {
    /**
     * Select specific fields to fetch from the auth_group_permissions
     */
    select?: auth_group_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_group_permissionsInclude | null
    where?: auth_group_permissionsWhereInput
    orderBy?: Enumerable<auth_group_permissionsOrderByWithRelationInput>
    cursor?: auth_group_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Auth_group_permissionsScalarFieldEnum>
  }


  /**
   * auth_permission.auth_user_user_permissions
   */
  export type auth_permission$auth_user_user_permissionsArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    where?: auth_user_user_permissionsWhereInput
    orderBy?: Enumerable<auth_user_user_permissionsOrderByWithRelationInput>
    cursor?: auth_user_user_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Auth_user_user_permissionsScalarFieldEnum>
  }


  /**
   * auth_permission without action
   */
  export type auth_permissionArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
  }



  /**
   * Model auth_user
   */


  export type AggregateAuth_user = {
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  export type Auth_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Auth_userSumAggregateOutputType = {
    id: number | null
  }

  export type Auth_userMinAggregateOutputType = {
    id: number | null
    password: string | null
    last_login: Date | null
    is_superuser: boolean | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_staff: boolean | null
    is_active: boolean | null
    date_joined: Date | null
  }

  export type Auth_userMaxAggregateOutputType = {
    id: number | null
    password: string | null
    last_login: Date | null
    is_superuser: boolean | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_staff: boolean | null
    is_active: boolean | null
    date_joined: Date | null
  }

  export type Auth_userCountAggregateOutputType = {
    id: number
    password: number
    last_login: number
    is_superuser: number
    username: number
    first_name: number
    last_name: number
    email: number
    is_staff: number
    is_active: number
    date_joined: number
    _all: number
  }


  export type Auth_userAvgAggregateInputType = {
    id?: true
  }

  export type Auth_userSumAggregateInputType = {
    id?: true
  }

  export type Auth_userMinAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
  }

  export type Auth_userMaxAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
  }

  export type Auth_userCountAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
    _all?: true
  }

  export type Auth_userAggregateArgs = {
    /**
     * Filter which auth_user to aggregate.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: Enumerable<auth_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_users
    **/
    _count?: true | Auth_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_userMaxAggregateInputType
  }

  export type GetAuth_userAggregateType<T extends Auth_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user[P]>
      : GetScalarType<T[P], AggregateAuth_user[P]>
  }




  export type Auth_userGroupByArgs = {
    where?: auth_userWhereInput
    orderBy?: Enumerable<auth_userOrderByWithAggregationInput>
    by: Auth_userScalarFieldEnum[]
    having?: auth_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_userCountAggregateInputType | true
    _avg?: Auth_userAvgAggregateInputType
    _sum?: Auth_userSumAggregateInputType
    _min?: Auth_userMinAggregateInputType
    _max?: Auth_userMaxAggregateInputType
  }


  export type Auth_userGroupByOutputType = {
    id: number
    password: string
    last_login: Date | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  type GetAuth_userGroupByPayload<T extends Auth_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Auth_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
        }
      >
    >


  export type auth_userSelect = {
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
    auth_user_groups?: boolean | auth_user$auth_user_groupsArgs
    auth_user_user_permissions?: boolean | auth_user$auth_user_user_permissionsArgs
    django_admin_log?: boolean | auth_user$django_admin_logArgs
    _count?: boolean | Auth_userCountOutputTypeArgs
  }


  export type auth_userInclude = {
    auth_user_groups?: boolean | auth_user$auth_user_groupsArgs
    auth_user_user_permissions?: boolean | auth_user$auth_user_user_permissionsArgs
    django_admin_log?: boolean | auth_user$django_admin_logArgs
    _count?: boolean | Auth_userCountOutputTypeArgs
  }

  export type auth_userGetPayload<S extends boolean | null | undefined | auth_userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? auth_user :
    S extends undefined ? never :
    S extends { include: any } & (auth_userArgs | auth_userFindManyArgs)
    ? auth_user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'auth_user_groups' ? Array < auth_user_groupsGetPayload<S['include'][P]>>  :
        P extends 'auth_user_user_permissions' ? Array < auth_user_user_permissionsGetPayload<S['include'][P]>>  :
        P extends 'django_admin_log' ? Array < django_admin_logGetPayload<S['include'][P]>>  :
        P extends '_count' ? Auth_userCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (auth_userArgs | auth_userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'auth_user_groups' ? Array < auth_user_groupsGetPayload<S['select'][P]>>  :
        P extends 'auth_user_user_permissions' ? Array < auth_user_user_permissionsGetPayload<S['select'][P]>>  :
        P extends 'django_admin_log' ? Array < django_admin_logGetPayload<S['select'][P]>>  :
        P extends '_count' ? Auth_userCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof auth_user ? auth_user[P] : never
  } 
      : auth_user


  type auth_userCountArgs = 
    Omit<auth_userFindManyArgs, 'select' | 'include'> & {
      select?: Auth_userCountAggregateInputType | true
    }

  export interface auth_userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Auth_user that matches the filter.
     * @param {auth_userFindUniqueArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auth_userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auth_userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auth_user'> extends True ? Prisma__auth_userClient<auth_userGetPayload<T>> : Prisma__auth_userClient<auth_userGetPayload<T> | null, null>

    /**
     * Find one Auth_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auth_userFindUniqueOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auth_userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auth_userFindUniqueOrThrowArgs>
    ): Prisma__auth_userClient<auth_userGetPayload<T>>

    /**
     * Find the first Auth_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auth_userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auth_userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auth_user'> extends True ? Prisma__auth_userClient<auth_userGetPayload<T>> : Prisma__auth_userClient<auth_userGetPayload<T> | null, null>

    /**
     * Find the first Auth_user that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auth_userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auth_userFindFirstOrThrowArgs>
    ): Prisma__auth_userClient<auth_userGetPayload<T>>

    /**
     * Find zero or more Auth_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_users
     * const auth_users = await prisma.auth_user.findMany()
     * 
     * // Get first 10 Auth_users
     * const auth_users = await prisma.auth_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends auth_userFindManyArgs>(
      args?: SelectSubset<T, auth_userFindManyArgs>
    ): Prisma.PrismaPromise<Array<auth_userGetPayload<T>>>

    /**
     * Create a Auth_user.
     * @param {auth_userCreateArgs} args - Arguments to create a Auth_user.
     * @example
     * // Create one Auth_user
     * const Auth_user = await prisma.auth_user.create({
     *   data: {
     *     // ... data to create a Auth_user
     *   }
     * })
     * 
    **/
    create<T extends auth_userCreateArgs>(
      args: SelectSubset<T, auth_userCreateArgs>
    ): Prisma__auth_userClient<auth_userGetPayload<T>>

    /**
     * Create many Auth_users.
     *     @param {auth_userCreateManyArgs} args - Arguments to create many Auth_users.
     *     @example
     *     // Create many Auth_users
     *     const auth_user = await prisma.auth_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auth_userCreateManyArgs>(
      args?: SelectSubset<T, auth_userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_user.
     * @param {auth_userDeleteArgs} args - Arguments to delete one Auth_user.
     * @example
     * // Delete one Auth_user
     * const Auth_user = await prisma.auth_user.delete({
     *   where: {
     *     // ... filter to delete one Auth_user
     *   }
     * })
     * 
    **/
    delete<T extends auth_userDeleteArgs>(
      args: SelectSubset<T, auth_userDeleteArgs>
    ): Prisma__auth_userClient<auth_userGetPayload<T>>

    /**
     * Update one Auth_user.
     * @param {auth_userUpdateArgs} args - Arguments to update one Auth_user.
     * @example
     * // Update one Auth_user
     * const auth_user = await prisma.auth_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auth_userUpdateArgs>(
      args: SelectSubset<T, auth_userUpdateArgs>
    ): Prisma__auth_userClient<auth_userGetPayload<T>>

    /**
     * Delete zero or more Auth_users.
     * @param {auth_userDeleteManyArgs} args - Arguments to filter Auth_users to delete.
     * @example
     * // Delete a few Auth_users
     * const { count } = await prisma.auth_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auth_userDeleteManyArgs>(
      args?: SelectSubset<T, auth_userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_users
     * const auth_user = await prisma.auth_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auth_userUpdateManyArgs>(
      args: SelectSubset<T, auth_userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_user.
     * @param {auth_userUpsertArgs} args - Arguments to update or create a Auth_user.
     * @example
     * // Update or create a Auth_user
     * const auth_user = await prisma.auth_user.upsert({
     *   create: {
     *     // ... data to create a Auth_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user we want to update
     *   }
     * })
    **/
    upsert<T extends auth_userUpsertArgs>(
      args: SelectSubset<T, auth_userUpsertArgs>
    ): Prisma__auth_userClient<auth_userGetPayload<T>>

    /**
     * Count the number of Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userCountArgs} args - Arguments to filter Auth_users to count.
     * @example
     * // Count the number of Auth_users
     * const count = await prisma.auth_user.count({
     *   where: {
     *     // ... the filter for the Auth_users we want to count
     *   }
     * })
    **/
    count<T extends auth_userCountArgs>(
      args?: Subset<T, auth_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_userAggregateArgs>(args: Subset<T, Auth_userAggregateArgs>): Prisma.PrismaPromise<GetAuth_userAggregateType<T>>

    /**
     * Group by Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_userGroupByArgs} args - Group by arguments.
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
      T extends Auth_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auth_userGroupByArgs['orderBy'] }
        : { orderBy?: Auth_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Auth_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auth_userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    auth_user_groups<T extends auth_user$auth_user_groupsArgs= {}>(args?: Subset<T, auth_user$auth_user_groupsArgs>): Prisma.PrismaPromise<Array<auth_user_groupsGetPayload<T>>| Null>;

    auth_user_user_permissions<T extends auth_user$auth_user_user_permissionsArgs= {}>(args?: Subset<T, auth_user$auth_user_user_permissionsArgs>): Prisma.PrismaPromise<Array<auth_user_user_permissionsGetPayload<T>>| Null>;

    django_admin_log<T extends auth_user$django_admin_logArgs= {}>(args?: Subset<T, auth_user$django_admin_logArgs>): Prisma.PrismaPromise<Array<django_admin_logGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * auth_user base type for findUnique actions
   */
  export type auth_userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user findUnique
   */
  export interface auth_userFindUniqueArgs extends auth_userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_user findUniqueOrThrow
   */
  export type auth_userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }


  /**
   * auth_user base type for findFirst actions
   */
  export type auth_userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: Enumerable<auth_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Enumerable<Auth_userScalarFieldEnum>
  }

  /**
   * auth_user findFirst
   */
  export interface auth_userFindFirstArgs extends auth_userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_user findFirstOrThrow
   */
  export type auth_userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: Enumerable<auth_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Enumerable<Auth_userScalarFieldEnum>
  }


  /**
   * auth_user findMany
   */
  export type auth_userFindManyArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * Filter, which auth_users to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: Enumerable<auth_userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    distinct?: Enumerable<Auth_userScalarFieldEnum>
  }


  /**
   * auth_user create
   */
  export type auth_userCreateArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * The data needed to create a auth_user.
     */
    data: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
  }


  /**
   * auth_user createMany
   */
  export type auth_userCreateManyArgs = {
    /**
     * The data used to create many auth_users.
     */
    data: Enumerable<auth_userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * auth_user update
   */
  export type auth_userUpdateArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * The data needed to update a auth_user.
     */
    data: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
    /**
     * Choose, which auth_user to update.
     */
    where: auth_userWhereUniqueInput
  }


  /**
   * auth_user updateMany
   */
  export type auth_userUpdateManyArgs = {
    /**
     * The data used to update auth_users.
     */
    data: XOR<auth_userUpdateManyMutationInput, auth_userUncheckedUpdateManyInput>
    /**
     * Filter which auth_users to update
     */
    where?: auth_userWhereInput
  }


  /**
   * auth_user upsert
   */
  export type auth_userUpsertArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * The filter to search for the auth_user to update in case it exists.
     */
    where: auth_userWhereUniqueInput
    /**
     * In case the auth_user found by the `where` argument doesn't exist, create a new auth_user with this data.
     */
    create: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
    /**
     * In case the auth_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
  }


  /**
   * auth_user delete
   */
  export type auth_userDeleteArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
    /**
     * Filter which auth_user to delete.
     */
    where: auth_userWhereUniqueInput
  }


  /**
   * auth_user deleteMany
   */
  export type auth_userDeleteManyArgs = {
    /**
     * Filter which auth_users to delete
     */
    where?: auth_userWhereInput
  }


  /**
   * auth_user.auth_user_groups
   */
  export type auth_user$auth_user_groupsArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    where?: auth_user_groupsWhereInput
    orderBy?: Enumerable<auth_user_groupsOrderByWithRelationInput>
    cursor?: auth_user_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Auth_user_groupsScalarFieldEnum>
  }


  /**
   * auth_user.auth_user_user_permissions
   */
  export type auth_user$auth_user_user_permissionsArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    where?: auth_user_user_permissionsWhereInput
    orderBy?: Enumerable<auth_user_user_permissionsOrderByWithRelationInput>
    cursor?: auth_user_user_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Auth_user_user_permissionsScalarFieldEnum>
  }


  /**
   * auth_user.django_admin_log
   */
  export type auth_user$django_admin_logArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    where?: django_admin_logWhereInput
    orderBy?: Enumerable<django_admin_logOrderByWithRelationInput>
    cursor?: django_admin_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Django_admin_logScalarFieldEnum>
  }


  /**
   * auth_user without action
   */
  export type auth_userArgs = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_userInclude | null
  }



  /**
   * Model auth_user_groups
   */


  export type AggregateAuth_user_groups = {
    _count: Auth_user_groupsCountAggregateOutputType | null
    _avg: Auth_user_groupsAvgAggregateOutputType | null
    _sum: Auth_user_groupsSumAggregateOutputType | null
    _min: Auth_user_groupsMinAggregateOutputType | null
    _max: Auth_user_groupsMaxAggregateOutputType | null
  }

  export type Auth_user_groupsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsSumAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsMinAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsMaxAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    group_id: number | null
  }

  export type Auth_user_groupsCountAggregateOutputType = {
    id: number
    user_id: number
    group_id: number
    _all: number
  }


  export type Auth_user_groupsAvgAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsSumAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsMinAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsMaxAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
  }

  export type Auth_user_groupsCountAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
    _all?: true
  }

  export type Auth_user_groupsAggregateArgs = {
    /**
     * Filter which auth_user_groups to aggregate.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: Enumerable<auth_user_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_user_groups
    **/
    _count?: true | Auth_user_groupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_user_groupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_user_groupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_user_groupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_user_groupsMaxAggregateInputType
  }

  export type GetAuth_user_groupsAggregateType<T extends Auth_user_groupsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user_groups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user_groups[P]>
      : GetScalarType<T[P], AggregateAuth_user_groups[P]>
  }




  export type Auth_user_groupsGroupByArgs = {
    where?: auth_user_groupsWhereInput
    orderBy?: Enumerable<auth_user_groupsOrderByWithAggregationInput>
    by: Auth_user_groupsScalarFieldEnum[]
    having?: auth_user_groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_user_groupsCountAggregateInputType | true
    _avg?: Auth_user_groupsAvgAggregateInputType
    _sum?: Auth_user_groupsSumAggregateInputType
    _min?: Auth_user_groupsMinAggregateInputType
    _max?: Auth_user_groupsMaxAggregateInputType
  }


  export type Auth_user_groupsGroupByOutputType = {
    id: bigint
    user_id: number
    group_id: number
    _count: Auth_user_groupsCountAggregateOutputType | null
    _avg: Auth_user_groupsAvgAggregateOutputType | null
    _sum: Auth_user_groupsSumAggregateOutputType | null
    _min: Auth_user_groupsMinAggregateOutputType | null
    _max: Auth_user_groupsMaxAggregateOutputType | null
  }

  type GetAuth_user_groupsGroupByPayload<T extends Auth_user_groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Auth_user_groupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_user_groupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_user_groupsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_user_groupsGroupByOutputType[P]>
        }
      >
    >


  export type auth_user_groupsSelect = {
    id?: boolean
    user_id?: boolean
    group_id?: boolean
    auth_group?: boolean | auth_groupArgs
    auth_user?: boolean | auth_userArgs
  }


  export type auth_user_groupsInclude = {
    auth_group?: boolean | auth_groupArgs
    auth_user?: boolean | auth_userArgs
  }

  export type auth_user_groupsGetPayload<S extends boolean | null | undefined | auth_user_groupsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? auth_user_groups :
    S extends undefined ? never :
    S extends { include: any } & (auth_user_groupsArgs | auth_user_groupsFindManyArgs)
    ? auth_user_groups  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'auth_group' ? auth_groupGetPayload<S['include'][P]> :
        P extends 'auth_user' ? auth_userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (auth_user_groupsArgs | auth_user_groupsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'auth_group' ? auth_groupGetPayload<S['select'][P]> :
        P extends 'auth_user' ? auth_userGetPayload<S['select'][P]> :  P extends keyof auth_user_groups ? auth_user_groups[P] : never
  } 
      : auth_user_groups


  type auth_user_groupsCountArgs = 
    Omit<auth_user_groupsFindManyArgs, 'select' | 'include'> & {
      select?: Auth_user_groupsCountAggregateInputType | true
    }

  export interface auth_user_groupsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Auth_user_groups that matches the filter.
     * @param {auth_user_groupsFindUniqueArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auth_user_groupsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auth_user_groupsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auth_user_groups'> extends True ? Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>> : Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T> | null, null>

    /**
     * Find one Auth_user_groups that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auth_user_groupsFindUniqueOrThrowArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auth_user_groupsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auth_user_groupsFindUniqueOrThrowArgs>
    ): Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>>

    /**
     * Find the first Auth_user_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsFindFirstArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auth_user_groupsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auth_user_groupsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auth_user_groups'> extends True ? Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>> : Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T> | null, null>

    /**
     * Find the first Auth_user_groups that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsFindFirstOrThrowArgs} args - Arguments to find a Auth_user_groups
     * @example
     * // Get one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auth_user_groupsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auth_user_groupsFindFirstOrThrowArgs>
    ): Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>>

    /**
     * Find zero or more Auth_user_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findMany()
     * 
     * // Get first 10 Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_user_groupsWithIdOnly = await prisma.auth_user_groups.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends auth_user_groupsFindManyArgs>(
      args?: SelectSubset<T, auth_user_groupsFindManyArgs>
    ): Prisma.PrismaPromise<Array<auth_user_groupsGetPayload<T>>>

    /**
     * Create a Auth_user_groups.
     * @param {auth_user_groupsCreateArgs} args - Arguments to create a Auth_user_groups.
     * @example
     * // Create one Auth_user_groups
     * const Auth_user_groups = await prisma.auth_user_groups.create({
     *   data: {
     *     // ... data to create a Auth_user_groups
     *   }
     * })
     * 
    **/
    create<T extends auth_user_groupsCreateArgs>(
      args: SelectSubset<T, auth_user_groupsCreateArgs>
    ): Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>>

    /**
     * Create many Auth_user_groups.
     *     @param {auth_user_groupsCreateManyArgs} args - Arguments to create many Auth_user_groups.
     *     @example
     *     // Create many Auth_user_groups
     *     const auth_user_groups = await prisma.auth_user_groups.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auth_user_groupsCreateManyArgs>(
      args?: SelectSubset<T, auth_user_groupsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_user_groups.
     * @param {auth_user_groupsDeleteArgs} args - Arguments to delete one Auth_user_groups.
     * @example
     * // Delete one Auth_user_groups
     * const Auth_user_groups = await prisma.auth_user_groups.delete({
     *   where: {
     *     // ... filter to delete one Auth_user_groups
     *   }
     * })
     * 
    **/
    delete<T extends auth_user_groupsDeleteArgs>(
      args: SelectSubset<T, auth_user_groupsDeleteArgs>
    ): Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>>

    /**
     * Update one Auth_user_groups.
     * @param {auth_user_groupsUpdateArgs} args - Arguments to update one Auth_user_groups.
     * @example
     * // Update one Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auth_user_groupsUpdateArgs>(
      args: SelectSubset<T, auth_user_groupsUpdateArgs>
    ): Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>>

    /**
     * Delete zero or more Auth_user_groups.
     * @param {auth_user_groupsDeleteManyArgs} args - Arguments to filter Auth_user_groups to delete.
     * @example
     * // Delete a few Auth_user_groups
     * const { count } = await prisma.auth_user_groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auth_user_groupsDeleteManyArgs>(
      args?: SelectSubset<T, auth_user_groupsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auth_user_groupsUpdateManyArgs>(
      args: SelectSubset<T, auth_user_groupsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_user_groups.
     * @param {auth_user_groupsUpsertArgs} args - Arguments to update or create a Auth_user_groups.
     * @example
     * // Update or create a Auth_user_groups
     * const auth_user_groups = await prisma.auth_user_groups.upsert({
     *   create: {
     *     // ... data to create a Auth_user_groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user_groups we want to update
     *   }
     * })
    **/
    upsert<T extends auth_user_groupsUpsertArgs>(
      args: SelectSubset<T, auth_user_groupsUpsertArgs>
    ): Prisma__auth_user_groupsClient<auth_user_groupsGetPayload<T>>

    /**
     * Count the number of Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_groupsCountArgs} args - Arguments to filter Auth_user_groups to count.
     * @example
     * // Count the number of Auth_user_groups
     * const count = await prisma.auth_user_groups.count({
     *   where: {
     *     // ... the filter for the Auth_user_groups we want to count
     *   }
     * })
    **/
    count<T extends auth_user_groupsCountArgs>(
      args?: Subset<T, auth_user_groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_user_groupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_user_groupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_user_groupsAggregateArgs>(args: Subset<T, Auth_user_groupsAggregateArgs>): Prisma.PrismaPromise<GetAuth_user_groupsAggregateType<T>>

    /**
     * Group by Auth_user_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_user_groupsGroupByArgs} args - Group by arguments.
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
      T extends Auth_user_groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auth_user_groupsGroupByArgs['orderBy'] }
        : { orderBy?: Auth_user_groupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Auth_user_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_user_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user_groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auth_user_groupsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    auth_group<T extends auth_groupArgs= {}>(args?: Subset<T, auth_groupArgs>): Prisma__auth_groupClient<auth_groupGetPayload<T> | Null>;

    auth_user<T extends auth_userArgs= {}>(args?: Subset<T, auth_userArgs>): Prisma__auth_userClient<auth_userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * auth_user_groups base type for findUnique actions
   */
  export type auth_user_groupsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where: auth_user_groupsWhereUniqueInput
  }

  /**
   * auth_user_groups findUnique
   */
  export interface auth_user_groupsFindUniqueArgs extends auth_user_groupsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_user_groups findUniqueOrThrow
   */
  export type auth_user_groupsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where: auth_user_groupsWhereUniqueInput
  }


  /**
   * auth_user_groups base type for findFirst actions
   */
  export type auth_user_groupsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: Enumerable<auth_user_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_groups.
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_groups.
     */
    distinct?: Enumerable<Auth_user_groupsScalarFieldEnum>
  }

  /**
   * auth_user_groups findFirst
   */
  export interface auth_user_groupsFindFirstArgs extends auth_user_groupsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_user_groups findFirstOrThrow
   */
  export type auth_user_groupsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: Enumerable<auth_user_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_groups.
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_groups.
     */
    distinct?: Enumerable<Auth_user_groupsScalarFieldEnum>
  }


  /**
   * auth_user_groups findMany
   */
  export type auth_user_groupsFindManyArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * Filter, which auth_user_groups to fetch.
     */
    where?: auth_user_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_groups to fetch.
     */
    orderBy?: Enumerable<auth_user_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_user_groups.
     */
    cursor?: auth_user_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_groups.
     */
    skip?: number
    distinct?: Enumerable<Auth_user_groupsScalarFieldEnum>
  }


  /**
   * auth_user_groups create
   */
  export type auth_user_groupsCreateArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * The data needed to create a auth_user_groups.
     */
    data: XOR<auth_user_groupsCreateInput, auth_user_groupsUncheckedCreateInput>
  }


  /**
   * auth_user_groups createMany
   */
  export type auth_user_groupsCreateManyArgs = {
    /**
     * The data used to create many auth_user_groups.
     */
    data: Enumerable<auth_user_groupsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * auth_user_groups update
   */
  export type auth_user_groupsUpdateArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * The data needed to update a auth_user_groups.
     */
    data: XOR<auth_user_groupsUpdateInput, auth_user_groupsUncheckedUpdateInput>
    /**
     * Choose, which auth_user_groups to update.
     */
    where: auth_user_groupsWhereUniqueInput
  }


  /**
   * auth_user_groups updateMany
   */
  export type auth_user_groupsUpdateManyArgs = {
    /**
     * The data used to update auth_user_groups.
     */
    data: XOR<auth_user_groupsUpdateManyMutationInput, auth_user_groupsUncheckedUpdateManyInput>
    /**
     * Filter which auth_user_groups to update
     */
    where?: auth_user_groupsWhereInput
  }


  /**
   * auth_user_groups upsert
   */
  export type auth_user_groupsUpsertArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * The filter to search for the auth_user_groups to update in case it exists.
     */
    where: auth_user_groupsWhereUniqueInput
    /**
     * In case the auth_user_groups found by the `where` argument doesn't exist, create a new auth_user_groups with this data.
     */
    create: XOR<auth_user_groupsCreateInput, auth_user_groupsUncheckedCreateInput>
    /**
     * In case the auth_user_groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_user_groupsUpdateInput, auth_user_groupsUncheckedUpdateInput>
  }


  /**
   * auth_user_groups delete
   */
  export type auth_user_groupsDeleteArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
    /**
     * Filter which auth_user_groups to delete.
     */
    where: auth_user_groupsWhereUniqueInput
  }


  /**
   * auth_user_groups deleteMany
   */
  export type auth_user_groupsDeleteManyArgs = {
    /**
     * Filter which auth_user_groups to delete
     */
    where?: auth_user_groupsWhereInput
  }


  /**
   * auth_user_groups without action
   */
  export type auth_user_groupsArgs = {
    /**
     * Select specific fields to fetch from the auth_user_groups
     */
    select?: auth_user_groupsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_groupsInclude | null
  }



  /**
   * Model auth_user_user_permissions
   */


  export type AggregateAuth_user_user_permissions = {
    _count: Auth_user_user_permissionsCountAggregateOutputType | null
    _avg: Auth_user_user_permissionsAvgAggregateOutputType | null
    _sum: Auth_user_user_permissionsSumAggregateOutputType | null
    _min: Auth_user_user_permissionsMinAggregateOutputType | null
    _max: Auth_user_user_permissionsMaxAggregateOutputType | null
  }

  export type Auth_user_user_permissionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsSumAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsMinAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsMaxAggregateOutputType = {
    id: bigint | null
    user_id: number | null
    permission_id: number | null
  }

  export type Auth_user_user_permissionsCountAggregateOutputType = {
    id: number
    user_id: number
    permission_id: number
    _all: number
  }


  export type Auth_user_user_permissionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsSumAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsMinAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
  }

  export type Auth_user_user_permissionsCountAggregateInputType = {
    id?: true
    user_id?: true
    permission_id?: true
    _all?: true
  }

  export type Auth_user_user_permissionsAggregateArgs = {
    /**
     * Filter which auth_user_user_permissions to aggregate.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: Enumerable<auth_user_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_user_user_permissions
    **/
    _count?: true | Auth_user_user_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_user_user_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_user_user_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_user_user_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_user_user_permissionsMaxAggregateInputType
  }

  export type GetAuth_user_user_permissionsAggregateType<T extends Auth_user_user_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user_user_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user_user_permissions[P]>
      : GetScalarType<T[P], AggregateAuth_user_user_permissions[P]>
  }




  export type Auth_user_user_permissionsGroupByArgs = {
    where?: auth_user_user_permissionsWhereInput
    orderBy?: Enumerable<auth_user_user_permissionsOrderByWithAggregationInput>
    by: Auth_user_user_permissionsScalarFieldEnum[]
    having?: auth_user_user_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_user_user_permissionsCountAggregateInputType | true
    _avg?: Auth_user_user_permissionsAvgAggregateInputType
    _sum?: Auth_user_user_permissionsSumAggregateInputType
    _min?: Auth_user_user_permissionsMinAggregateInputType
    _max?: Auth_user_user_permissionsMaxAggregateInputType
  }


  export type Auth_user_user_permissionsGroupByOutputType = {
    id: bigint
    user_id: number
    permission_id: number
    _count: Auth_user_user_permissionsCountAggregateOutputType | null
    _avg: Auth_user_user_permissionsAvgAggregateOutputType | null
    _sum: Auth_user_user_permissionsSumAggregateOutputType | null
    _min: Auth_user_user_permissionsMinAggregateOutputType | null
    _max: Auth_user_user_permissionsMaxAggregateOutputType | null
  }

  type GetAuth_user_user_permissionsGroupByPayload<T extends Auth_user_user_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Auth_user_user_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_user_user_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_user_user_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_user_user_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type auth_user_user_permissionsSelect = {
    id?: boolean
    user_id?: boolean
    permission_id?: boolean
    auth_permission?: boolean | auth_permissionArgs
    auth_user?: boolean | auth_userArgs
  }


  export type auth_user_user_permissionsInclude = {
    auth_permission?: boolean | auth_permissionArgs
    auth_user?: boolean | auth_userArgs
  }

  export type auth_user_user_permissionsGetPayload<S extends boolean | null | undefined | auth_user_user_permissionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? auth_user_user_permissions :
    S extends undefined ? never :
    S extends { include: any } & (auth_user_user_permissionsArgs | auth_user_user_permissionsFindManyArgs)
    ? auth_user_user_permissions  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'auth_permission' ? auth_permissionGetPayload<S['include'][P]> :
        P extends 'auth_user' ? auth_userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (auth_user_user_permissionsArgs | auth_user_user_permissionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'auth_permission' ? auth_permissionGetPayload<S['select'][P]> :
        P extends 'auth_user' ? auth_userGetPayload<S['select'][P]> :  P extends keyof auth_user_user_permissions ? auth_user_user_permissions[P] : never
  } 
      : auth_user_user_permissions


  type auth_user_user_permissionsCountArgs = 
    Omit<auth_user_user_permissionsFindManyArgs, 'select' | 'include'> & {
      select?: Auth_user_user_permissionsCountAggregateInputType | true
    }

  export interface auth_user_user_permissionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Auth_user_user_permissions that matches the filter.
     * @param {auth_user_user_permissionsFindUniqueArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auth_user_user_permissionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, auth_user_user_permissionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'auth_user_user_permissions'> extends True ? Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>> : Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T> | null, null>

    /**
     * Find one Auth_user_user_permissions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auth_user_user_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auth_user_user_permissionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, auth_user_user_permissionsFindUniqueOrThrowArgs>
    ): Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>>

    /**
     * Find the first Auth_user_user_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsFindFirstArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auth_user_user_permissionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, auth_user_user_permissionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'auth_user_user_permissions'> extends True ? Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>> : Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T> | null, null>

    /**
     * Find the first Auth_user_user_permissions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsFindFirstOrThrowArgs} args - Arguments to find a Auth_user_user_permissions
     * @example
     * // Get one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auth_user_user_permissionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, auth_user_user_permissionsFindFirstOrThrowArgs>
    ): Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>>

    /**
     * Find zero or more Auth_user_user_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findMany()
     * 
     * // Get first 10 Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_user_user_permissionsWithIdOnly = await prisma.auth_user_user_permissions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends auth_user_user_permissionsFindManyArgs>(
      args?: SelectSubset<T, auth_user_user_permissionsFindManyArgs>
    ): Prisma.PrismaPromise<Array<auth_user_user_permissionsGetPayload<T>>>

    /**
     * Create a Auth_user_user_permissions.
     * @param {auth_user_user_permissionsCreateArgs} args - Arguments to create a Auth_user_user_permissions.
     * @example
     * // Create one Auth_user_user_permissions
     * const Auth_user_user_permissions = await prisma.auth_user_user_permissions.create({
     *   data: {
     *     // ... data to create a Auth_user_user_permissions
     *   }
     * })
     * 
    **/
    create<T extends auth_user_user_permissionsCreateArgs>(
      args: SelectSubset<T, auth_user_user_permissionsCreateArgs>
    ): Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>>

    /**
     * Create many Auth_user_user_permissions.
     *     @param {auth_user_user_permissionsCreateManyArgs} args - Arguments to create many Auth_user_user_permissions.
     *     @example
     *     // Create many Auth_user_user_permissions
     *     const auth_user_user_permissions = await prisma.auth_user_user_permissions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auth_user_user_permissionsCreateManyArgs>(
      args?: SelectSubset<T, auth_user_user_permissionsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auth_user_user_permissions.
     * @param {auth_user_user_permissionsDeleteArgs} args - Arguments to delete one Auth_user_user_permissions.
     * @example
     * // Delete one Auth_user_user_permissions
     * const Auth_user_user_permissions = await prisma.auth_user_user_permissions.delete({
     *   where: {
     *     // ... filter to delete one Auth_user_user_permissions
     *   }
     * })
     * 
    **/
    delete<T extends auth_user_user_permissionsDeleteArgs>(
      args: SelectSubset<T, auth_user_user_permissionsDeleteArgs>
    ): Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>>

    /**
     * Update one Auth_user_user_permissions.
     * @param {auth_user_user_permissionsUpdateArgs} args - Arguments to update one Auth_user_user_permissions.
     * @example
     * // Update one Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auth_user_user_permissionsUpdateArgs>(
      args: SelectSubset<T, auth_user_user_permissionsUpdateArgs>
    ): Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>>

    /**
     * Delete zero or more Auth_user_user_permissions.
     * @param {auth_user_user_permissionsDeleteManyArgs} args - Arguments to filter Auth_user_user_permissions to delete.
     * @example
     * // Delete a few Auth_user_user_permissions
     * const { count } = await prisma.auth_user_user_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auth_user_user_permissionsDeleteManyArgs>(
      args?: SelectSubset<T, auth_user_user_permissionsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auth_user_user_permissionsUpdateManyArgs>(
      args: SelectSubset<T, auth_user_user_permissionsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_user_user_permissions.
     * @param {auth_user_user_permissionsUpsertArgs} args - Arguments to update or create a Auth_user_user_permissions.
     * @example
     * // Update or create a Auth_user_user_permissions
     * const auth_user_user_permissions = await prisma.auth_user_user_permissions.upsert({
     *   create: {
     *     // ... data to create a Auth_user_user_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user_user_permissions we want to update
     *   }
     * })
    **/
    upsert<T extends auth_user_user_permissionsUpsertArgs>(
      args: SelectSubset<T, auth_user_user_permissionsUpsertArgs>
    ): Prisma__auth_user_user_permissionsClient<auth_user_user_permissionsGetPayload<T>>

    /**
     * Count the number of Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_user_user_permissionsCountArgs} args - Arguments to filter Auth_user_user_permissions to count.
     * @example
     * // Count the number of Auth_user_user_permissions
     * const count = await prisma.auth_user_user_permissions.count({
     *   where: {
     *     // ... the filter for the Auth_user_user_permissions we want to count
     *   }
     * })
    **/
    count<T extends auth_user_user_permissionsCountArgs>(
      args?: Subset<T, auth_user_user_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_user_user_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_user_user_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auth_user_user_permissionsAggregateArgs>(args: Subset<T, Auth_user_user_permissionsAggregateArgs>): Prisma.PrismaPromise<GetAuth_user_user_permissionsAggregateType<T>>

    /**
     * Group by Auth_user_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_user_user_permissionsGroupByArgs} args - Group by arguments.
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
      T extends Auth_user_user_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auth_user_user_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: Auth_user_user_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Auth_user_user_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_user_user_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user_user_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__auth_user_user_permissionsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    auth_permission<T extends auth_permissionArgs= {}>(args?: Subset<T, auth_permissionArgs>): Prisma__auth_permissionClient<auth_permissionGetPayload<T> | Null>;

    auth_user<T extends auth_userArgs= {}>(args?: Subset<T, auth_userArgs>): Prisma__auth_userClient<auth_userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * auth_user_user_permissions base type for findUnique actions
   */
  export type auth_user_user_permissionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }

  /**
   * auth_user_user_permissions findUnique
   */
  export interface auth_user_user_permissionsFindUniqueArgs extends auth_user_user_permissionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_user_user_permissions findUniqueOrThrow
   */
  export type auth_user_user_permissionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }


  /**
   * auth_user_user_permissions base type for findFirst actions
   */
  export type auth_user_user_permissionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: Enumerable<auth_user_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_user_permissions.
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_user_permissions.
     */
    distinct?: Enumerable<Auth_user_user_permissionsScalarFieldEnum>
  }

  /**
   * auth_user_user_permissions findFirst
   */
  export interface auth_user_user_permissionsFindFirstArgs extends auth_user_user_permissionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * auth_user_user_permissions findFirstOrThrow
   */
  export type auth_user_user_permissionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: Enumerable<auth_user_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_user_user_permissions.
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_user_user_permissions.
     */
    distinct?: Enumerable<Auth_user_user_permissionsScalarFieldEnum>
  }


  /**
   * auth_user_user_permissions findMany
   */
  export type auth_user_user_permissionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * Filter, which auth_user_user_permissions to fetch.
     */
    where?: auth_user_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_user_user_permissions to fetch.
     */
    orderBy?: Enumerable<auth_user_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_user_user_permissions.
     */
    cursor?: auth_user_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_user_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_user_user_permissions.
     */
    skip?: number
    distinct?: Enumerable<Auth_user_user_permissionsScalarFieldEnum>
  }


  /**
   * auth_user_user_permissions create
   */
  export type auth_user_user_permissionsCreateArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * The data needed to create a auth_user_user_permissions.
     */
    data: XOR<auth_user_user_permissionsCreateInput, auth_user_user_permissionsUncheckedCreateInput>
  }


  /**
   * auth_user_user_permissions createMany
   */
  export type auth_user_user_permissionsCreateManyArgs = {
    /**
     * The data used to create many auth_user_user_permissions.
     */
    data: Enumerable<auth_user_user_permissionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * auth_user_user_permissions update
   */
  export type auth_user_user_permissionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * The data needed to update a auth_user_user_permissions.
     */
    data: XOR<auth_user_user_permissionsUpdateInput, auth_user_user_permissionsUncheckedUpdateInput>
    /**
     * Choose, which auth_user_user_permissions to update.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }


  /**
   * auth_user_user_permissions updateMany
   */
  export type auth_user_user_permissionsUpdateManyArgs = {
    /**
     * The data used to update auth_user_user_permissions.
     */
    data: XOR<auth_user_user_permissionsUpdateManyMutationInput, auth_user_user_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which auth_user_user_permissions to update
     */
    where?: auth_user_user_permissionsWhereInput
  }


  /**
   * auth_user_user_permissions upsert
   */
  export type auth_user_user_permissionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * The filter to search for the auth_user_user_permissions to update in case it exists.
     */
    where: auth_user_user_permissionsWhereUniqueInput
    /**
     * In case the auth_user_user_permissions found by the `where` argument doesn't exist, create a new auth_user_user_permissions with this data.
     */
    create: XOR<auth_user_user_permissionsCreateInput, auth_user_user_permissionsUncheckedCreateInput>
    /**
     * In case the auth_user_user_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_user_user_permissionsUpdateInput, auth_user_user_permissionsUncheckedUpdateInput>
  }


  /**
   * auth_user_user_permissions delete
   */
  export type auth_user_user_permissionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
    /**
     * Filter which auth_user_user_permissions to delete.
     */
    where: auth_user_user_permissionsWhereUniqueInput
  }


  /**
   * auth_user_user_permissions deleteMany
   */
  export type auth_user_user_permissionsDeleteManyArgs = {
    /**
     * Filter which auth_user_user_permissions to delete
     */
    where?: auth_user_user_permissionsWhereInput
  }


  /**
   * auth_user_user_permissions without action
   */
  export type auth_user_user_permissionsArgs = {
    /**
     * Select specific fields to fetch from the auth_user_user_permissions
     */
    select?: auth_user_user_permissionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_user_user_permissionsInclude | null
  }



  /**
   * Model django_admin_log
   */


  export type AggregateDjango_admin_log = {
    _count: Django_admin_logCountAggregateOutputType | null
    _avg: Django_admin_logAvgAggregateOutputType | null
    _sum: Django_admin_logSumAggregateOutputType | null
    _min: Django_admin_logMinAggregateOutputType | null
    _max: Django_admin_logMaxAggregateOutputType | null
  }

  export type Django_admin_logAvgAggregateOutputType = {
    id: number | null
    action_flag: number | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logSumAggregateOutputType = {
    id: number | null
    action_flag: number | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logMinAggregateOutputType = {
    id: number | null
    action_time: Date | null
    object_id: string | null
    object_repr: string | null
    action_flag: number | null
    change_message: string | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logMaxAggregateOutputType = {
    id: number | null
    action_time: Date | null
    object_id: string | null
    object_repr: string | null
    action_flag: number | null
    change_message: string | null
    content_type_id: number | null
    user_id: number | null
  }

  export type Django_admin_logCountAggregateOutputType = {
    id: number
    action_time: number
    object_id: number
    object_repr: number
    action_flag: number
    change_message: number
    content_type_id: number
    user_id: number
    _all: number
  }


  export type Django_admin_logAvgAggregateInputType = {
    id?: true
    action_flag?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logSumAggregateInputType = {
    id?: true
    action_flag?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logMinAggregateInputType = {
    id?: true
    action_time?: true
    object_id?: true
    object_repr?: true
    action_flag?: true
    change_message?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logMaxAggregateInputType = {
    id?: true
    action_time?: true
    object_id?: true
    object_repr?: true
    action_flag?: true
    change_message?: true
    content_type_id?: true
    user_id?: true
  }

  export type Django_admin_logCountAggregateInputType = {
    id?: true
    action_time?: true
    object_id?: true
    object_repr?: true
    action_flag?: true
    change_message?: true
    content_type_id?: true
    user_id?: true
    _all?: true
  }

  export type Django_admin_logAggregateArgs = {
    /**
     * Filter which django_admin_log to aggregate.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: Enumerable<django_admin_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_admin_logs
    **/
    _count?: true | Django_admin_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Django_admin_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Django_admin_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_admin_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_admin_logMaxAggregateInputType
  }

  export type GetDjango_admin_logAggregateType<T extends Django_admin_logAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_admin_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_admin_log[P]>
      : GetScalarType<T[P], AggregateDjango_admin_log[P]>
  }




  export type Django_admin_logGroupByArgs = {
    where?: django_admin_logWhereInput
    orderBy?: Enumerable<django_admin_logOrderByWithAggregationInput>
    by: Django_admin_logScalarFieldEnum[]
    having?: django_admin_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_admin_logCountAggregateInputType | true
    _avg?: Django_admin_logAvgAggregateInputType
    _sum?: Django_admin_logSumAggregateInputType
    _min?: Django_admin_logMinAggregateInputType
    _max?: Django_admin_logMaxAggregateInputType
  }


  export type Django_admin_logGroupByOutputType = {
    id: number
    action_time: Date
    object_id: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id: number | null
    user_id: number
    _count: Django_admin_logCountAggregateOutputType | null
    _avg: Django_admin_logAvgAggregateOutputType | null
    _sum: Django_admin_logSumAggregateOutputType | null
    _min: Django_admin_logMinAggregateOutputType | null
    _max: Django_admin_logMaxAggregateOutputType | null
  }

  type GetDjango_admin_logGroupByPayload<T extends Django_admin_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Django_admin_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_admin_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_admin_logGroupByOutputType[P]>
            : GetScalarType<T[P], Django_admin_logGroupByOutputType[P]>
        }
      >
    >


  export type django_admin_logSelect = {
    id?: boolean
    action_time?: boolean
    object_id?: boolean
    object_repr?: boolean
    action_flag?: boolean
    change_message?: boolean
    content_type_id?: boolean
    user_id?: boolean
    django_content_type?: boolean | django_content_typeArgs
    auth_user?: boolean | auth_userArgs
  }


  export type django_admin_logInclude = {
    django_content_type?: boolean | django_content_typeArgs
    auth_user?: boolean | auth_userArgs
  }

  export type django_admin_logGetPayload<S extends boolean | null | undefined | django_admin_logArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? django_admin_log :
    S extends undefined ? never :
    S extends { include: any } & (django_admin_logArgs | django_admin_logFindManyArgs)
    ? django_admin_log  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'django_content_type' ? django_content_typeGetPayload<S['include'][P]> | null :
        P extends 'auth_user' ? auth_userGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (django_admin_logArgs | django_admin_logFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'django_content_type' ? django_content_typeGetPayload<S['select'][P]> | null :
        P extends 'auth_user' ? auth_userGetPayload<S['select'][P]> :  P extends keyof django_admin_log ? django_admin_log[P] : never
  } 
      : django_admin_log


  type django_admin_logCountArgs = 
    Omit<django_admin_logFindManyArgs, 'select' | 'include'> & {
      select?: Django_admin_logCountAggregateInputType | true
    }

  export interface django_admin_logDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Django_admin_log that matches the filter.
     * @param {django_admin_logFindUniqueArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends django_admin_logFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, django_admin_logFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'django_admin_log'> extends True ? Prisma__django_admin_logClient<django_admin_logGetPayload<T>> : Prisma__django_admin_logClient<django_admin_logGetPayload<T> | null, null>

    /**
     * Find one Django_admin_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {django_admin_logFindUniqueOrThrowArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends django_admin_logFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, django_admin_logFindUniqueOrThrowArgs>
    ): Prisma__django_admin_logClient<django_admin_logGetPayload<T>>

    /**
     * Find the first Django_admin_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logFindFirstArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends django_admin_logFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, django_admin_logFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'django_admin_log'> extends True ? Prisma__django_admin_logClient<django_admin_logGetPayload<T>> : Prisma__django_admin_logClient<django_admin_logGetPayload<T> | null, null>

    /**
     * Find the first Django_admin_log that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logFindFirstOrThrowArgs} args - Arguments to find a Django_admin_log
     * @example
     * // Get one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends django_admin_logFindFirstOrThrowArgs>(
      args?: SelectSubset<T, django_admin_logFindFirstOrThrowArgs>
    ): Prisma__django_admin_logClient<django_admin_logGetPayload<T>>

    /**
     * Find zero or more Django_admin_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_admin_logs
     * const django_admin_logs = await prisma.django_admin_log.findMany()
     * 
     * // Get first 10 Django_admin_logs
     * const django_admin_logs = await prisma.django_admin_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const django_admin_logWithIdOnly = await prisma.django_admin_log.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends django_admin_logFindManyArgs>(
      args?: SelectSubset<T, django_admin_logFindManyArgs>
    ): Prisma.PrismaPromise<Array<django_admin_logGetPayload<T>>>

    /**
     * Create a Django_admin_log.
     * @param {django_admin_logCreateArgs} args - Arguments to create a Django_admin_log.
     * @example
     * // Create one Django_admin_log
     * const Django_admin_log = await prisma.django_admin_log.create({
     *   data: {
     *     // ... data to create a Django_admin_log
     *   }
     * })
     * 
    **/
    create<T extends django_admin_logCreateArgs>(
      args: SelectSubset<T, django_admin_logCreateArgs>
    ): Prisma__django_admin_logClient<django_admin_logGetPayload<T>>

    /**
     * Create many Django_admin_logs.
     *     @param {django_admin_logCreateManyArgs} args - Arguments to create many Django_admin_logs.
     *     @example
     *     // Create many Django_admin_logs
     *     const django_admin_log = await prisma.django_admin_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends django_admin_logCreateManyArgs>(
      args?: SelectSubset<T, django_admin_logCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Django_admin_log.
     * @param {django_admin_logDeleteArgs} args - Arguments to delete one Django_admin_log.
     * @example
     * // Delete one Django_admin_log
     * const Django_admin_log = await prisma.django_admin_log.delete({
     *   where: {
     *     // ... filter to delete one Django_admin_log
     *   }
     * })
     * 
    **/
    delete<T extends django_admin_logDeleteArgs>(
      args: SelectSubset<T, django_admin_logDeleteArgs>
    ): Prisma__django_admin_logClient<django_admin_logGetPayload<T>>

    /**
     * Update one Django_admin_log.
     * @param {django_admin_logUpdateArgs} args - Arguments to update one Django_admin_log.
     * @example
     * // Update one Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends django_admin_logUpdateArgs>(
      args: SelectSubset<T, django_admin_logUpdateArgs>
    ): Prisma__django_admin_logClient<django_admin_logGetPayload<T>>

    /**
     * Delete zero or more Django_admin_logs.
     * @param {django_admin_logDeleteManyArgs} args - Arguments to filter Django_admin_logs to delete.
     * @example
     * // Delete a few Django_admin_logs
     * const { count } = await prisma.django_admin_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends django_admin_logDeleteManyArgs>(
      args?: SelectSubset<T, django_admin_logDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_admin_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_admin_logs
     * const django_admin_log = await prisma.django_admin_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends django_admin_logUpdateManyArgs>(
      args: SelectSubset<T, django_admin_logUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Django_admin_log.
     * @param {django_admin_logUpsertArgs} args - Arguments to update or create a Django_admin_log.
     * @example
     * // Update or create a Django_admin_log
     * const django_admin_log = await prisma.django_admin_log.upsert({
     *   create: {
     *     // ... data to create a Django_admin_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_admin_log we want to update
     *   }
     * })
    **/
    upsert<T extends django_admin_logUpsertArgs>(
      args: SelectSubset<T, django_admin_logUpsertArgs>
    ): Prisma__django_admin_logClient<django_admin_logGetPayload<T>>

    /**
     * Count the number of Django_admin_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_admin_logCountArgs} args - Arguments to filter Django_admin_logs to count.
     * @example
     * // Count the number of Django_admin_logs
     * const count = await prisma.django_admin_log.count({
     *   where: {
     *     // ... the filter for the Django_admin_logs we want to count
     *   }
     * })
    **/
    count<T extends django_admin_logCountArgs>(
      args?: Subset<T, django_admin_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_admin_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_admin_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_admin_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Django_admin_logAggregateArgs>(args: Subset<T, Django_admin_logAggregateArgs>): Prisma.PrismaPromise<GetDjango_admin_logAggregateType<T>>

    /**
     * Group by Django_admin_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_admin_logGroupByArgs} args - Group by arguments.
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
      T extends Django_admin_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Django_admin_logGroupByArgs['orderBy'] }
        : { orderBy?: Django_admin_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Django_admin_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_admin_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for django_admin_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__django_admin_logClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    django_content_type<T extends django_content_typeArgs= {}>(args?: Subset<T, django_content_typeArgs>): Prisma__django_content_typeClient<django_content_typeGetPayload<T> | Null>;

    auth_user<T extends auth_userArgs= {}>(args?: Subset<T, auth_userArgs>): Prisma__auth_userClient<auth_userGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * django_admin_log base type for findUnique actions
   */
  export type django_admin_logFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where: django_admin_logWhereUniqueInput
  }

  /**
   * django_admin_log findUnique
   */
  export interface django_admin_logFindUniqueArgs extends django_admin_logFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_admin_log findUniqueOrThrow
   */
  export type django_admin_logFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where: django_admin_logWhereUniqueInput
  }


  /**
   * django_admin_log base type for findFirst actions
   */
  export type django_admin_logFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: Enumerable<django_admin_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_admin_logs.
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_admin_logs.
     */
    distinct?: Enumerable<Django_admin_logScalarFieldEnum>
  }

  /**
   * django_admin_log findFirst
   */
  export interface django_admin_logFindFirstArgs extends django_admin_logFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_admin_log findFirstOrThrow
   */
  export type django_admin_logFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * Filter, which django_admin_log to fetch.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: Enumerable<django_admin_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_admin_logs.
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_admin_logs.
     */
    distinct?: Enumerable<Django_admin_logScalarFieldEnum>
  }


  /**
   * django_admin_log findMany
   */
  export type django_admin_logFindManyArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * Filter, which django_admin_logs to fetch.
     */
    where?: django_admin_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_admin_logs to fetch.
     */
    orderBy?: Enumerable<django_admin_logOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_admin_logs.
     */
    cursor?: django_admin_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_admin_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_admin_logs.
     */
    skip?: number
    distinct?: Enumerable<Django_admin_logScalarFieldEnum>
  }


  /**
   * django_admin_log create
   */
  export type django_admin_logCreateArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * The data needed to create a django_admin_log.
     */
    data: XOR<django_admin_logCreateInput, django_admin_logUncheckedCreateInput>
  }


  /**
   * django_admin_log createMany
   */
  export type django_admin_logCreateManyArgs = {
    /**
     * The data used to create many django_admin_logs.
     */
    data: Enumerable<django_admin_logCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * django_admin_log update
   */
  export type django_admin_logUpdateArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * The data needed to update a django_admin_log.
     */
    data: XOR<django_admin_logUpdateInput, django_admin_logUncheckedUpdateInput>
    /**
     * Choose, which django_admin_log to update.
     */
    where: django_admin_logWhereUniqueInput
  }


  /**
   * django_admin_log updateMany
   */
  export type django_admin_logUpdateManyArgs = {
    /**
     * The data used to update django_admin_logs.
     */
    data: XOR<django_admin_logUpdateManyMutationInput, django_admin_logUncheckedUpdateManyInput>
    /**
     * Filter which django_admin_logs to update
     */
    where?: django_admin_logWhereInput
  }


  /**
   * django_admin_log upsert
   */
  export type django_admin_logUpsertArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * The filter to search for the django_admin_log to update in case it exists.
     */
    where: django_admin_logWhereUniqueInput
    /**
     * In case the django_admin_log found by the `where` argument doesn't exist, create a new django_admin_log with this data.
     */
    create: XOR<django_admin_logCreateInput, django_admin_logUncheckedCreateInput>
    /**
     * In case the django_admin_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_admin_logUpdateInput, django_admin_logUncheckedUpdateInput>
  }


  /**
   * django_admin_log delete
   */
  export type django_admin_logDeleteArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    /**
     * Filter which django_admin_log to delete.
     */
    where: django_admin_logWhereUniqueInput
  }


  /**
   * django_admin_log deleteMany
   */
  export type django_admin_logDeleteManyArgs = {
    /**
     * Filter which django_admin_logs to delete
     */
    where?: django_admin_logWhereInput
  }


  /**
   * django_admin_log without action
   */
  export type django_admin_logArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
  }



  /**
   * Model django_content_type
   */


  export type AggregateDjango_content_type = {
    _count: Django_content_typeCountAggregateOutputType | null
    _avg: Django_content_typeAvgAggregateOutputType | null
    _sum: Django_content_typeSumAggregateOutputType | null
    _min: Django_content_typeMinAggregateOutputType | null
    _max: Django_content_typeMaxAggregateOutputType | null
  }

  export type Django_content_typeAvgAggregateOutputType = {
    id: number | null
  }

  export type Django_content_typeSumAggregateOutputType = {
    id: number | null
  }

  export type Django_content_typeMinAggregateOutputType = {
    id: number | null
    app_label: string | null
    model: string | null
  }

  export type Django_content_typeMaxAggregateOutputType = {
    id: number | null
    app_label: string | null
    model: string | null
  }

  export type Django_content_typeCountAggregateOutputType = {
    id: number
    app_label: number
    model: number
    _all: number
  }


  export type Django_content_typeAvgAggregateInputType = {
    id?: true
  }

  export type Django_content_typeSumAggregateInputType = {
    id?: true
  }

  export type Django_content_typeMinAggregateInputType = {
    id?: true
    app_label?: true
    model?: true
  }

  export type Django_content_typeMaxAggregateInputType = {
    id?: true
    app_label?: true
    model?: true
  }

  export type Django_content_typeCountAggregateInputType = {
    id?: true
    app_label?: true
    model?: true
    _all?: true
  }

  export type Django_content_typeAggregateArgs = {
    /**
     * Filter which django_content_type to aggregate.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: Enumerable<django_content_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_content_types
    **/
    _count?: true | Django_content_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Django_content_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Django_content_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_content_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_content_typeMaxAggregateInputType
  }

  export type GetDjango_content_typeAggregateType<T extends Django_content_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_content_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_content_type[P]>
      : GetScalarType<T[P], AggregateDjango_content_type[P]>
  }




  export type Django_content_typeGroupByArgs = {
    where?: django_content_typeWhereInput
    orderBy?: Enumerable<django_content_typeOrderByWithAggregationInput>
    by: Django_content_typeScalarFieldEnum[]
    having?: django_content_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_content_typeCountAggregateInputType | true
    _avg?: Django_content_typeAvgAggregateInputType
    _sum?: Django_content_typeSumAggregateInputType
    _min?: Django_content_typeMinAggregateInputType
    _max?: Django_content_typeMaxAggregateInputType
  }


  export type Django_content_typeGroupByOutputType = {
    id: number
    app_label: string
    model: string
    _count: Django_content_typeCountAggregateOutputType | null
    _avg: Django_content_typeAvgAggregateOutputType | null
    _sum: Django_content_typeSumAggregateOutputType | null
    _min: Django_content_typeMinAggregateOutputType | null
    _max: Django_content_typeMaxAggregateOutputType | null
  }

  type GetDjango_content_typeGroupByPayload<T extends Django_content_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Django_content_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_content_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_content_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Django_content_typeGroupByOutputType[P]>
        }
      >
    >


  export type django_content_typeSelect = {
    id?: boolean
    app_label?: boolean
    model?: boolean
    auth_permission?: boolean | django_content_type$auth_permissionArgs
    django_admin_log?: boolean | django_content_type$django_admin_logArgs
    _count?: boolean | Django_content_typeCountOutputTypeArgs
  }


  export type django_content_typeInclude = {
    auth_permission?: boolean | django_content_type$auth_permissionArgs
    django_admin_log?: boolean | django_content_type$django_admin_logArgs
    _count?: boolean | Django_content_typeCountOutputTypeArgs
  }

  export type django_content_typeGetPayload<S extends boolean | null | undefined | django_content_typeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? django_content_type :
    S extends undefined ? never :
    S extends { include: any } & (django_content_typeArgs | django_content_typeFindManyArgs)
    ? django_content_type  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'auth_permission' ? Array < auth_permissionGetPayload<S['include'][P]>>  :
        P extends 'django_admin_log' ? Array < django_admin_logGetPayload<S['include'][P]>>  :
        P extends '_count' ? Django_content_typeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (django_content_typeArgs | django_content_typeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'auth_permission' ? Array < auth_permissionGetPayload<S['select'][P]>>  :
        P extends 'django_admin_log' ? Array < django_admin_logGetPayload<S['select'][P]>>  :
        P extends '_count' ? Django_content_typeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof django_content_type ? django_content_type[P] : never
  } 
      : django_content_type


  type django_content_typeCountArgs = 
    Omit<django_content_typeFindManyArgs, 'select' | 'include'> & {
      select?: Django_content_typeCountAggregateInputType | true
    }

  export interface django_content_typeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Django_content_type that matches the filter.
     * @param {django_content_typeFindUniqueArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends django_content_typeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, django_content_typeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'django_content_type'> extends True ? Prisma__django_content_typeClient<django_content_typeGetPayload<T>> : Prisma__django_content_typeClient<django_content_typeGetPayload<T> | null, null>

    /**
     * Find one Django_content_type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {django_content_typeFindUniqueOrThrowArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends django_content_typeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, django_content_typeFindUniqueOrThrowArgs>
    ): Prisma__django_content_typeClient<django_content_typeGetPayload<T>>

    /**
     * Find the first Django_content_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeFindFirstArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends django_content_typeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, django_content_typeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'django_content_type'> extends True ? Prisma__django_content_typeClient<django_content_typeGetPayload<T>> : Prisma__django_content_typeClient<django_content_typeGetPayload<T> | null, null>

    /**
     * Find the first Django_content_type that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeFindFirstOrThrowArgs} args - Arguments to find a Django_content_type
     * @example
     * // Get one Django_content_type
     * const django_content_type = await prisma.django_content_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends django_content_typeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, django_content_typeFindFirstOrThrowArgs>
    ): Prisma__django_content_typeClient<django_content_typeGetPayload<T>>

    /**
     * Find zero or more Django_content_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_content_types
     * const django_content_types = await prisma.django_content_type.findMany()
     * 
     * // Get first 10 Django_content_types
     * const django_content_types = await prisma.django_content_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const django_content_typeWithIdOnly = await prisma.django_content_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends django_content_typeFindManyArgs>(
      args?: SelectSubset<T, django_content_typeFindManyArgs>
    ): Prisma.PrismaPromise<Array<django_content_typeGetPayload<T>>>

    /**
     * Create a Django_content_type.
     * @param {django_content_typeCreateArgs} args - Arguments to create a Django_content_type.
     * @example
     * // Create one Django_content_type
     * const Django_content_type = await prisma.django_content_type.create({
     *   data: {
     *     // ... data to create a Django_content_type
     *   }
     * })
     * 
    **/
    create<T extends django_content_typeCreateArgs>(
      args: SelectSubset<T, django_content_typeCreateArgs>
    ): Prisma__django_content_typeClient<django_content_typeGetPayload<T>>

    /**
     * Create many Django_content_types.
     *     @param {django_content_typeCreateManyArgs} args - Arguments to create many Django_content_types.
     *     @example
     *     // Create many Django_content_types
     *     const django_content_type = await prisma.django_content_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends django_content_typeCreateManyArgs>(
      args?: SelectSubset<T, django_content_typeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Django_content_type.
     * @param {django_content_typeDeleteArgs} args - Arguments to delete one Django_content_type.
     * @example
     * // Delete one Django_content_type
     * const Django_content_type = await prisma.django_content_type.delete({
     *   where: {
     *     // ... filter to delete one Django_content_type
     *   }
     * })
     * 
    **/
    delete<T extends django_content_typeDeleteArgs>(
      args: SelectSubset<T, django_content_typeDeleteArgs>
    ): Prisma__django_content_typeClient<django_content_typeGetPayload<T>>

    /**
     * Update one Django_content_type.
     * @param {django_content_typeUpdateArgs} args - Arguments to update one Django_content_type.
     * @example
     * // Update one Django_content_type
     * const django_content_type = await prisma.django_content_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends django_content_typeUpdateArgs>(
      args: SelectSubset<T, django_content_typeUpdateArgs>
    ): Prisma__django_content_typeClient<django_content_typeGetPayload<T>>

    /**
     * Delete zero or more Django_content_types.
     * @param {django_content_typeDeleteManyArgs} args - Arguments to filter Django_content_types to delete.
     * @example
     * // Delete a few Django_content_types
     * const { count } = await prisma.django_content_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends django_content_typeDeleteManyArgs>(
      args?: SelectSubset<T, django_content_typeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_content_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_content_types
     * const django_content_type = await prisma.django_content_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends django_content_typeUpdateManyArgs>(
      args: SelectSubset<T, django_content_typeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Django_content_type.
     * @param {django_content_typeUpsertArgs} args - Arguments to update or create a Django_content_type.
     * @example
     * // Update or create a Django_content_type
     * const django_content_type = await prisma.django_content_type.upsert({
     *   create: {
     *     // ... data to create a Django_content_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_content_type we want to update
     *   }
     * })
    **/
    upsert<T extends django_content_typeUpsertArgs>(
      args: SelectSubset<T, django_content_typeUpsertArgs>
    ): Prisma__django_content_typeClient<django_content_typeGetPayload<T>>

    /**
     * Count the number of Django_content_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_content_typeCountArgs} args - Arguments to filter Django_content_types to count.
     * @example
     * // Count the number of Django_content_types
     * const count = await prisma.django_content_type.count({
     *   where: {
     *     // ... the filter for the Django_content_types we want to count
     *   }
     * })
    **/
    count<T extends django_content_typeCountArgs>(
      args?: Subset<T, django_content_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_content_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_content_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_content_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Django_content_typeAggregateArgs>(args: Subset<T, Django_content_typeAggregateArgs>): Prisma.PrismaPromise<GetDjango_content_typeAggregateType<T>>

    /**
     * Group by Django_content_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_content_typeGroupByArgs} args - Group by arguments.
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
      T extends Django_content_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Django_content_typeGroupByArgs['orderBy'] }
        : { orderBy?: Django_content_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Django_content_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_content_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for django_content_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__django_content_typeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    auth_permission<T extends django_content_type$auth_permissionArgs= {}>(args?: Subset<T, django_content_type$auth_permissionArgs>): Prisma.PrismaPromise<Array<auth_permissionGetPayload<T>>| Null>;

    django_admin_log<T extends django_content_type$django_admin_logArgs= {}>(args?: Subset<T, django_content_type$django_admin_logArgs>): Prisma.PrismaPromise<Array<django_admin_logGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * django_content_type base type for findUnique actions
   */
  export type django_content_typeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where: django_content_typeWhereUniqueInput
  }

  /**
   * django_content_type findUnique
   */
  export interface django_content_typeFindUniqueArgs extends django_content_typeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_content_type findUniqueOrThrow
   */
  export type django_content_typeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where: django_content_typeWhereUniqueInput
  }


  /**
   * django_content_type base type for findFirst actions
   */
  export type django_content_typeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: Enumerable<django_content_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_content_types.
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_content_types.
     */
    distinct?: Enumerable<Django_content_typeScalarFieldEnum>
  }

  /**
   * django_content_type findFirst
   */
  export interface django_content_typeFindFirstArgs extends django_content_typeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_content_type findFirstOrThrow
   */
  export type django_content_typeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * Filter, which django_content_type to fetch.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: Enumerable<django_content_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_content_types.
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_content_types.
     */
    distinct?: Enumerable<Django_content_typeScalarFieldEnum>
  }


  /**
   * django_content_type findMany
   */
  export type django_content_typeFindManyArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * Filter, which django_content_types to fetch.
     */
    where?: django_content_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_content_types to fetch.
     */
    orderBy?: Enumerable<django_content_typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_content_types.
     */
    cursor?: django_content_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_content_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_content_types.
     */
    skip?: number
    distinct?: Enumerable<Django_content_typeScalarFieldEnum>
  }


  /**
   * django_content_type create
   */
  export type django_content_typeCreateArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * The data needed to create a django_content_type.
     */
    data: XOR<django_content_typeCreateInput, django_content_typeUncheckedCreateInput>
  }


  /**
   * django_content_type createMany
   */
  export type django_content_typeCreateManyArgs = {
    /**
     * The data used to create many django_content_types.
     */
    data: Enumerable<django_content_typeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * django_content_type update
   */
  export type django_content_typeUpdateArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * The data needed to update a django_content_type.
     */
    data: XOR<django_content_typeUpdateInput, django_content_typeUncheckedUpdateInput>
    /**
     * Choose, which django_content_type to update.
     */
    where: django_content_typeWhereUniqueInput
  }


  /**
   * django_content_type updateMany
   */
  export type django_content_typeUpdateManyArgs = {
    /**
     * The data used to update django_content_types.
     */
    data: XOR<django_content_typeUpdateManyMutationInput, django_content_typeUncheckedUpdateManyInput>
    /**
     * Filter which django_content_types to update
     */
    where?: django_content_typeWhereInput
  }


  /**
   * django_content_type upsert
   */
  export type django_content_typeUpsertArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * The filter to search for the django_content_type to update in case it exists.
     */
    where: django_content_typeWhereUniqueInput
    /**
     * In case the django_content_type found by the `where` argument doesn't exist, create a new django_content_type with this data.
     */
    create: XOR<django_content_typeCreateInput, django_content_typeUncheckedCreateInput>
    /**
     * In case the django_content_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_content_typeUpdateInput, django_content_typeUncheckedUpdateInput>
  }


  /**
   * django_content_type delete
   */
  export type django_content_typeDeleteArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
    /**
     * Filter which django_content_type to delete.
     */
    where: django_content_typeWhereUniqueInput
  }


  /**
   * django_content_type deleteMany
   */
  export type django_content_typeDeleteManyArgs = {
    /**
     * Filter which django_content_types to delete
     */
    where?: django_content_typeWhereInput
  }


  /**
   * django_content_type.auth_permission
   */
  export type django_content_type$auth_permissionArgs = {
    /**
     * Select specific fields to fetch from the auth_permission
     */
    select?: auth_permissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: auth_permissionInclude | null
    where?: auth_permissionWhereInput
    orderBy?: Enumerable<auth_permissionOrderByWithRelationInput>
    cursor?: auth_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Auth_permissionScalarFieldEnum>
  }


  /**
   * django_content_type.django_admin_log
   */
  export type django_content_type$django_admin_logArgs = {
    /**
     * Select specific fields to fetch from the django_admin_log
     */
    select?: django_admin_logSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_admin_logInclude | null
    where?: django_admin_logWhereInput
    orderBy?: Enumerable<django_admin_logOrderByWithRelationInput>
    cursor?: django_admin_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Django_admin_logScalarFieldEnum>
  }


  /**
   * django_content_type without action
   */
  export type django_content_typeArgs = {
    /**
     * Select specific fields to fetch from the django_content_type
     */
    select?: django_content_typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: django_content_typeInclude | null
  }



  /**
   * Model django_migrations
   */


  export type AggregateDjango_migrations = {
    _count: Django_migrationsCountAggregateOutputType | null
    _avg: Django_migrationsAvgAggregateOutputType | null
    _sum: Django_migrationsSumAggregateOutputType | null
    _min: Django_migrationsMinAggregateOutputType | null
    _max: Django_migrationsMaxAggregateOutputType | null
  }

  export type Django_migrationsAvgAggregateOutputType = {
    id: number | null
  }

  export type Django_migrationsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Django_migrationsMinAggregateOutputType = {
    id: bigint | null
    app: string | null
    name: string | null
    applied: Date | null
  }

  export type Django_migrationsMaxAggregateOutputType = {
    id: bigint | null
    app: string | null
    name: string | null
    applied: Date | null
  }

  export type Django_migrationsCountAggregateOutputType = {
    id: number
    app: number
    name: number
    applied: number
    _all: number
  }


  export type Django_migrationsAvgAggregateInputType = {
    id?: true
  }

  export type Django_migrationsSumAggregateInputType = {
    id?: true
  }

  export type Django_migrationsMinAggregateInputType = {
    id?: true
    app?: true
    name?: true
    applied?: true
  }

  export type Django_migrationsMaxAggregateInputType = {
    id?: true
    app?: true
    name?: true
    applied?: true
  }

  export type Django_migrationsCountAggregateInputType = {
    id?: true
    app?: true
    name?: true
    applied?: true
    _all?: true
  }

  export type Django_migrationsAggregateArgs = {
    /**
     * Filter which django_migrations to aggregate.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: Enumerable<django_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_migrations
    **/
    _count?: true | Django_migrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Django_migrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Django_migrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_migrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_migrationsMaxAggregateInputType
  }

  export type GetDjango_migrationsAggregateType<T extends Django_migrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_migrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_migrations[P]>
      : GetScalarType<T[P], AggregateDjango_migrations[P]>
  }




  export type Django_migrationsGroupByArgs = {
    where?: django_migrationsWhereInput
    orderBy?: Enumerable<django_migrationsOrderByWithAggregationInput>
    by: Django_migrationsScalarFieldEnum[]
    having?: django_migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_migrationsCountAggregateInputType | true
    _avg?: Django_migrationsAvgAggregateInputType
    _sum?: Django_migrationsSumAggregateInputType
    _min?: Django_migrationsMinAggregateInputType
    _max?: Django_migrationsMaxAggregateInputType
  }


  export type Django_migrationsGroupByOutputType = {
    id: bigint
    app: string
    name: string
    applied: Date
    _count: Django_migrationsCountAggregateOutputType | null
    _avg: Django_migrationsAvgAggregateOutputType | null
    _sum: Django_migrationsSumAggregateOutputType | null
    _min: Django_migrationsMinAggregateOutputType | null
    _max: Django_migrationsMaxAggregateOutputType | null
  }

  type GetDjango_migrationsGroupByPayload<T extends Django_migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Django_migrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_migrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_migrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Django_migrationsGroupByOutputType[P]>
        }
      >
    >


  export type django_migrationsSelect = {
    id?: boolean
    app?: boolean
    name?: boolean
    applied?: boolean
  }


  export type django_migrationsGetPayload<S extends boolean | null | undefined | django_migrationsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? django_migrations :
    S extends undefined ? never :
    S extends { include: any } & (django_migrationsArgs | django_migrationsFindManyArgs)
    ? django_migrations 
    : S extends { select: any } & (django_migrationsArgs | django_migrationsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof django_migrations ? django_migrations[P] : never
  } 
      : django_migrations


  type django_migrationsCountArgs = 
    Omit<django_migrationsFindManyArgs, 'select' | 'include'> & {
      select?: Django_migrationsCountAggregateInputType | true
    }

  export interface django_migrationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Django_migrations that matches the filter.
     * @param {django_migrationsFindUniqueArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends django_migrationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, django_migrationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'django_migrations'> extends True ? Prisma__django_migrationsClient<django_migrationsGetPayload<T>> : Prisma__django_migrationsClient<django_migrationsGetPayload<T> | null, null>

    /**
     * Find one Django_migrations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {django_migrationsFindUniqueOrThrowArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends django_migrationsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, django_migrationsFindUniqueOrThrowArgs>
    ): Prisma__django_migrationsClient<django_migrationsGetPayload<T>>

    /**
     * Find the first Django_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsFindFirstArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends django_migrationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, django_migrationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'django_migrations'> extends True ? Prisma__django_migrationsClient<django_migrationsGetPayload<T>> : Prisma__django_migrationsClient<django_migrationsGetPayload<T> | null, null>

    /**
     * Find the first Django_migrations that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsFindFirstOrThrowArgs} args - Arguments to find a Django_migrations
     * @example
     * // Get one Django_migrations
     * const django_migrations = await prisma.django_migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends django_migrationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, django_migrationsFindFirstOrThrowArgs>
    ): Prisma__django_migrationsClient<django_migrationsGetPayload<T>>

    /**
     * Find zero or more Django_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_migrations
     * const django_migrations = await prisma.django_migrations.findMany()
     * 
     * // Get first 10 Django_migrations
     * const django_migrations = await prisma.django_migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const django_migrationsWithIdOnly = await prisma.django_migrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends django_migrationsFindManyArgs>(
      args?: SelectSubset<T, django_migrationsFindManyArgs>
    ): Prisma.PrismaPromise<Array<django_migrationsGetPayload<T>>>

    /**
     * Create a Django_migrations.
     * @param {django_migrationsCreateArgs} args - Arguments to create a Django_migrations.
     * @example
     * // Create one Django_migrations
     * const Django_migrations = await prisma.django_migrations.create({
     *   data: {
     *     // ... data to create a Django_migrations
     *   }
     * })
     * 
    **/
    create<T extends django_migrationsCreateArgs>(
      args: SelectSubset<T, django_migrationsCreateArgs>
    ): Prisma__django_migrationsClient<django_migrationsGetPayload<T>>

    /**
     * Create many Django_migrations.
     *     @param {django_migrationsCreateManyArgs} args - Arguments to create many Django_migrations.
     *     @example
     *     // Create many Django_migrations
     *     const django_migrations = await prisma.django_migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends django_migrationsCreateManyArgs>(
      args?: SelectSubset<T, django_migrationsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Django_migrations.
     * @param {django_migrationsDeleteArgs} args - Arguments to delete one Django_migrations.
     * @example
     * // Delete one Django_migrations
     * const Django_migrations = await prisma.django_migrations.delete({
     *   where: {
     *     // ... filter to delete one Django_migrations
     *   }
     * })
     * 
    **/
    delete<T extends django_migrationsDeleteArgs>(
      args: SelectSubset<T, django_migrationsDeleteArgs>
    ): Prisma__django_migrationsClient<django_migrationsGetPayload<T>>

    /**
     * Update one Django_migrations.
     * @param {django_migrationsUpdateArgs} args - Arguments to update one Django_migrations.
     * @example
     * // Update one Django_migrations
     * const django_migrations = await prisma.django_migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends django_migrationsUpdateArgs>(
      args: SelectSubset<T, django_migrationsUpdateArgs>
    ): Prisma__django_migrationsClient<django_migrationsGetPayload<T>>

    /**
     * Delete zero or more Django_migrations.
     * @param {django_migrationsDeleteManyArgs} args - Arguments to filter Django_migrations to delete.
     * @example
     * // Delete a few Django_migrations
     * const { count } = await prisma.django_migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends django_migrationsDeleteManyArgs>(
      args?: SelectSubset<T, django_migrationsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_migrations
     * const django_migrations = await prisma.django_migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends django_migrationsUpdateManyArgs>(
      args: SelectSubset<T, django_migrationsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Django_migrations.
     * @param {django_migrationsUpsertArgs} args - Arguments to update or create a Django_migrations.
     * @example
     * // Update or create a Django_migrations
     * const django_migrations = await prisma.django_migrations.upsert({
     *   create: {
     *     // ... data to create a Django_migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_migrations we want to update
     *   }
     * })
    **/
    upsert<T extends django_migrationsUpsertArgs>(
      args: SelectSubset<T, django_migrationsUpsertArgs>
    ): Prisma__django_migrationsClient<django_migrationsGetPayload<T>>

    /**
     * Count the number of Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_migrationsCountArgs} args - Arguments to filter Django_migrations to count.
     * @example
     * // Count the number of Django_migrations
     * const count = await prisma.django_migrations.count({
     *   where: {
     *     // ... the filter for the Django_migrations we want to count
     *   }
     * })
    **/
    count<T extends django_migrationsCountArgs>(
      args?: Subset<T, django_migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_migrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_migrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Django_migrationsAggregateArgs>(args: Subset<T, Django_migrationsAggregateArgs>): Prisma.PrismaPromise<GetDjango_migrationsAggregateType<T>>

    /**
     * Group by Django_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_migrationsGroupByArgs} args - Group by arguments.
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
      T extends Django_migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Django_migrationsGroupByArgs['orderBy'] }
        : { orderBy?: Django_migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Django_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for django_migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__django_migrationsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * django_migrations base type for findUnique actions
   */
  export type django_migrationsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where: django_migrationsWhereUniqueInput
  }

  /**
   * django_migrations findUnique
   */
  export interface django_migrationsFindUniqueArgs extends django_migrationsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_migrations findUniqueOrThrow
   */
  export type django_migrationsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where: django_migrationsWhereUniqueInput
  }


  /**
   * django_migrations base type for findFirst actions
   */
  export type django_migrationsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: Enumerable<django_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_migrations.
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_migrations.
     */
    distinct?: Enumerable<Django_migrationsScalarFieldEnum>
  }

  /**
   * django_migrations findFirst
   */
  export interface django_migrationsFindFirstArgs extends django_migrationsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_migrations findFirstOrThrow
   */
  export type django_migrationsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: Enumerable<django_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_migrations.
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_migrations.
     */
    distinct?: Enumerable<Django_migrationsScalarFieldEnum>
  }


  /**
   * django_migrations findMany
   */
  export type django_migrationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * Filter, which django_migrations to fetch.
     */
    where?: django_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_migrations to fetch.
     */
    orderBy?: Enumerable<django_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_migrations.
     */
    cursor?: django_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_migrations.
     */
    skip?: number
    distinct?: Enumerable<Django_migrationsScalarFieldEnum>
  }


  /**
   * django_migrations create
   */
  export type django_migrationsCreateArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * The data needed to create a django_migrations.
     */
    data: XOR<django_migrationsCreateInput, django_migrationsUncheckedCreateInput>
  }


  /**
   * django_migrations createMany
   */
  export type django_migrationsCreateManyArgs = {
    /**
     * The data used to create many django_migrations.
     */
    data: Enumerable<django_migrationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * django_migrations update
   */
  export type django_migrationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * The data needed to update a django_migrations.
     */
    data: XOR<django_migrationsUpdateInput, django_migrationsUncheckedUpdateInput>
    /**
     * Choose, which django_migrations to update.
     */
    where: django_migrationsWhereUniqueInput
  }


  /**
   * django_migrations updateMany
   */
  export type django_migrationsUpdateManyArgs = {
    /**
     * The data used to update django_migrations.
     */
    data: XOR<django_migrationsUpdateManyMutationInput, django_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which django_migrations to update
     */
    where?: django_migrationsWhereInput
  }


  /**
   * django_migrations upsert
   */
  export type django_migrationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * The filter to search for the django_migrations to update in case it exists.
     */
    where: django_migrationsWhereUniqueInput
    /**
     * In case the django_migrations found by the `where` argument doesn't exist, create a new django_migrations with this data.
     */
    create: XOR<django_migrationsCreateInput, django_migrationsUncheckedCreateInput>
    /**
     * In case the django_migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_migrationsUpdateInput, django_migrationsUncheckedUpdateInput>
  }


  /**
   * django_migrations delete
   */
  export type django_migrationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
    /**
     * Filter which django_migrations to delete.
     */
    where: django_migrationsWhereUniqueInput
  }


  /**
   * django_migrations deleteMany
   */
  export type django_migrationsDeleteManyArgs = {
    /**
     * Filter which django_migrations to delete
     */
    where?: django_migrationsWhereInput
  }


  /**
   * django_migrations without action
   */
  export type django_migrationsArgs = {
    /**
     * Select specific fields to fetch from the django_migrations
     */
    select?: django_migrationsSelect | null
  }



  /**
   * Model django_session
   */


  export type AggregateDjango_session = {
    _count: Django_sessionCountAggregateOutputType | null
    _min: Django_sessionMinAggregateOutputType | null
    _max: Django_sessionMaxAggregateOutputType | null
  }

  export type Django_sessionMinAggregateOutputType = {
    session_key: string | null
    session_data: string | null
    expire_date: Date | null
  }

  export type Django_sessionMaxAggregateOutputType = {
    session_key: string | null
    session_data: string | null
    expire_date: Date | null
  }

  export type Django_sessionCountAggregateOutputType = {
    session_key: number
    session_data: number
    expire_date: number
    _all: number
  }


  export type Django_sessionMinAggregateInputType = {
    session_key?: true
    session_data?: true
    expire_date?: true
  }

  export type Django_sessionMaxAggregateInputType = {
    session_key?: true
    session_data?: true
    expire_date?: true
  }

  export type Django_sessionCountAggregateInputType = {
    session_key?: true
    session_data?: true
    expire_date?: true
    _all?: true
  }

  export type Django_sessionAggregateArgs = {
    /**
     * Filter which django_session to aggregate.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: Enumerable<django_sessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned django_sessions
    **/
    _count?: true | Django_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Django_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Django_sessionMaxAggregateInputType
  }

  export type GetDjango_sessionAggregateType<T extends Django_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDjango_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDjango_session[P]>
      : GetScalarType<T[P], AggregateDjango_session[P]>
  }




  export type Django_sessionGroupByArgs = {
    where?: django_sessionWhereInput
    orderBy?: Enumerable<django_sessionOrderByWithAggregationInput>
    by: Django_sessionScalarFieldEnum[]
    having?: django_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Django_sessionCountAggregateInputType | true
    _min?: Django_sessionMinAggregateInputType
    _max?: Django_sessionMaxAggregateInputType
  }


  export type Django_sessionGroupByOutputType = {
    session_key: string
    session_data: string
    expire_date: Date
    _count: Django_sessionCountAggregateOutputType | null
    _min: Django_sessionMinAggregateOutputType | null
    _max: Django_sessionMaxAggregateOutputType | null
  }

  type GetDjango_sessionGroupByPayload<T extends Django_sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Django_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Django_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Django_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], Django_sessionGroupByOutputType[P]>
        }
      >
    >


  export type django_sessionSelect = {
    session_key?: boolean
    session_data?: boolean
    expire_date?: boolean
  }


  export type django_sessionGetPayload<S extends boolean | null | undefined | django_sessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? django_session :
    S extends undefined ? never :
    S extends { include: any } & (django_sessionArgs | django_sessionFindManyArgs)
    ? django_session 
    : S extends { select: any } & (django_sessionArgs | django_sessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof django_session ? django_session[P] : never
  } 
      : django_session


  type django_sessionCountArgs = 
    Omit<django_sessionFindManyArgs, 'select' | 'include'> & {
      select?: Django_sessionCountAggregateInputType | true
    }

  export interface django_sessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Django_session that matches the filter.
     * @param {django_sessionFindUniqueArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends django_sessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, django_sessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'django_session'> extends True ? Prisma__django_sessionClient<django_sessionGetPayload<T>> : Prisma__django_sessionClient<django_sessionGetPayload<T> | null, null>

    /**
     * Find one Django_session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {django_sessionFindUniqueOrThrowArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends django_sessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, django_sessionFindUniqueOrThrowArgs>
    ): Prisma__django_sessionClient<django_sessionGetPayload<T>>

    /**
     * Find the first Django_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionFindFirstArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends django_sessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, django_sessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'django_session'> extends True ? Prisma__django_sessionClient<django_sessionGetPayload<T>> : Prisma__django_sessionClient<django_sessionGetPayload<T> | null, null>

    /**
     * Find the first Django_session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionFindFirstOrThrowArgs} args - Arguments to find a Django_session
     * @example
     * // Get one Django_session
     * const django_session = await prisma.django_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends django_sessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, django_sessionFindFirstOrThrowArgs>
    ): Prisma__django_sessionClient<django_sessionGetPayload<T>>

    /**
     * Find zero or more Django_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Django_sessions
     * const django_sessions = await prisma.django_session.findMany()
     * 
     * // Get first 10 Django_sessions
     * const django_sessions = await prisma.django_session.findMany({ take: 10 })
     * 
     * // Only select the `session_key`
     * const django_sessionWithSession_keyOnly = await prisma.django_session.findMany({ select: { session_key: true } })
     * 
    **/
    findMany<T extends django_sessionFindManyArgs>(
      args?: SelectSubset<T, django_sessionFindManyArgs>
    ): Prisma.PrismaPromise<Array<django_sessionGetPayload<T>>>

    /**
     * Create a Django_session.
     * @param {django_sessionCreateArgs} args - Arguments to create a Django_session.
     * @example
     * // Create one Django_session
     * const Django_session = await prisma.django_session.create({
     *   data: {
     *     // ... data to create a Django_session
     *   }
     * })
     * 
    **/
    create<T extends django_sessionCreateArgs>(
      args: SelectSubset<T, django_sessionCreateArgs>
    ): Prisma__django_sessionClient<django_sessionGetPayload<T>>

    /**
     * Create many Django_sessions.
     *     @param {django_sessionCreateManyArgs} args - Arguments to create many Django_sessions.
     *     @example
     *     // Create many Django_sessions
     *     const django_session = await prisma.django_session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends django_sessionCreateManyArgs>(
      args?: SelectSubset<T, django_sessionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Django_session.
     * @param {django_sessionDeleteArgs} args - Arguments to delete one Django_session.
     * @example
     * // Delete one Django_session
     * const Django_session = await prisma.django_session.delete({
     *   where: {
     *     // ... filter to delete one Django_session
     *   }
     * })
     * 
    **/
    delete<T extends django_sessionDeleteArgs>(
      args: SelectSubset<T, django_sessionDeleteArgs>
    ): Prisma__django_sessionClient<django_sessionGetPayload<T>>

    /**
     * Update one Django_session.
     * @param {django_sessionUpdateArgs} args - Arguments to update one Django_session.
     * @example
     * // Update one Django_session
     * const django_session = await prisma.django_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends django_sessionUpdateArgs>(
      args: SelectSubset<T, django_sessionUpdateArgs>
    ): Prisma__django_sessionClient<django_sessionGetPayload<T>>

    /**
     * Delete zero or more Django_sessions.
     * @param {django_sessionDeleteManyArgs} args - Arguments to filter Django_sessions to delete.
     * @example
     * // Delete a few Django_sessions
     * const { count } = await prisma.django_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends django_sessionDeleteManyArgs>(
      args?: SelectSubset<T, django_sessionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Django_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Django_sessions
     * const django_session = await prisma.django_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends django_sessionUpdateManyArgs>(
      args: SelectSubset<T, django_sessionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Django_session.
     * @param {django_sessionUpsertArgs} args - Arguments to update or create a Django_session.
     * @example
     * // Update or create a Django_session
     * const django_session = await prisma.django_session.upsert({
     *   create: {
     *     // ... data to create a Django_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Django_session we want to update
     *   }
     * })
    **/
    upsert<T extends django_sessionUpsertArgs>(
      args: SelectSubset<T, django_sessionUpsertArgs>
    ): Prisma__django_sessionClient<django_sessionGetPayload<T>>

    /**
     * Count the number of Django_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {django_sessionCountArgs} args - Arguments to filter Django_sessions to count.
     * @example
     * // Count the number of Django_sessions
     * const count = await prisma.django_session.count({
     *   where: {
     *     // ... the filter for the Django_sessions we want to count
     *   }
     * })
    **/
    count<T extends django_sessionCountArgs>(
      args?: Subset<T, django_sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Django_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Django_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Django_sessionAggregateArgs>(args: Subset<T, Django_sessionAggregateArgs>): Prisma.PrismaPromise<GetDjango_sessionAggregateType<T>>

    /**
     * Group by Django_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Django_sessionGroupByArgs} args - Group by arguments.
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
      T extends Django_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Django_sessionGroupByArgs['orderBy'] }
        : { orderBy?: Django_sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Django_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjango_sessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for django_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__django_sessionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * django_session base type for findUnique actions
   */
  export type django_sessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * Filter, which django_session to fetch.
     */
    where: django_sessionWhereUniqueInput
  }

  /**
   * django_session findUnique
   */
  export interface django_sessionFindUniqueArgs extends django_sessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_session findUniqueOrThrow
   */
  export type django_sessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * Filter, which django_session to fetch.
     */
    where: django_sessionWhereUniqueInput
  }


  /**
   * django_session base type for findFirst actions
   */
  export type django_sessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * Filter, which django_session to fetch.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: Enumerable<django_sessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_sessions.
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_sessions.
     */
    distinct?: Enumerable<Django_sessionScalarFieldEnum>
  }

  /**
   * django_session findFirst
   */
  export interface django_sessionFindFirstArgs extends django_sessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * django_session findFirstOrThrow
   */
  export type django_sessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * Filter, which django_session to fetch.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: Enumerable<django_sessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for django_sessions.
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of django_sessions.
     */
    distinct?: Enumerable<Django_sessionScalarFieldEnum>
  }


  /**
   * django_session findMany
   */
  export type django_sessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * Filter, which django_sessions to fetch.
     */
    where?: django_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of django_sessions to fetch.
     */
    orderBy?: Enumerable<django_sessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing django_sessions.
     */
    cursor?: django_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` django_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` django_sessions.
     */
    skip?: number
    distinct?: Enumerable<Django_sessionScalarFieldEnum>
  }


  /**
   * django_session create
   */
  export type django_sessionCreateArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * The data needed to create a django_session.
     */
    data: XOR<django_sessionCreateInput, django_sessionUncheckedCreateInput>
  }


  /**
   * django_session createMany
   */
  export type django_sessionCreateManyArgs = {
    /**
     * The data used to create many django_sessions.
     */
    data: Enumerable<django_sessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * django_session update
   */
  export type django_sessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * The data needed to update a django_session.
     */
    data: XOR<django_sessionUpdateInput, django_sessionUncheckedUpdateInput>
    /**
     * Choose, which django_session to update.
     */
    where: django_sessionWhereUniqueInput
  }


  /**
   * django_session updateMany
   */
  export type django_sessionUpdateManyArgs = {
    /**
     * The data used to update django_sessions.
     */
    data: XOR<django_sessionUpdateManyMutationInput, django_sessionUncheckedUpdateManyInput>
    /**
     * Filter which django_sessions to update
     */
    where?: django_sessionWhereInput
  }


  /**
   * django_session upsert
   */
  export type django_sessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * The filter to search for the django_session to update in case it exists.
     */
    where: django_sessionWhereUniqueInput
    /**
     * In case the django_session found by the `where` argument doesn't exist, create a new django_session with this data.
     */
    create: XOR<django_sessionCreateInput, django_sessionUncheckedCreateInput>
    /**
     * In case the django_session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<django_sessionUpdateInput, django_sessionUncheckedUpdateInput>
  }


  /**
   * django_session delete
   */
  export type django_sessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
    /**
     * Filter which django_session to delete.
     */
    where: django_sessionWhereUniqueInput
  }


  /**
   * django_session deleteMany
   */
  export type django_sessionDeleteManyArgs = {
    /**
     * Filter which django_sessions to delete
     */
    where?: django_sessionWhereInput
  }


  /**
   * django_session without action
   */
  export type django_sessionArgs = {
    /**
     * Select specific fields to fetch from the django_session
     */
    select?: django_sessionSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Auth_groupScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Auth_groupScalarFieldEnum = (typeof Auth_groupScalarFieldEnum)[keyof typeof Auth_groupScalarFieldEnum]


  export const Auth_group_permissionsScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    permission_id: 'permission_id'
  };

  export type Auth_group_permissionsScalarFieldEnum = (typeof Auth_group_permissionsScalarFieldEnum)[keyof typeof Auth_group_permissionsScalarFieldEnum]


  export const Auth_permissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content_type_id: 'content_type_id',
    codename: 'codename'
  };

  export type Auth_permissionScalarFieldEnum = (typeof Auth_permissionScalarFieldEnum)[keyof typeof Auth_permissionScalarFieldEnum]


  export const Auth_userScalarFieldEnum: {
    id: 'id',
    password: 'password',
    last_login: 'last_login',
    is_superuser: 'is_superuser',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    is_staff: 'is_staff',
    is_active: 'is_active',
    date_joined: 'date_joined'
  };

  export type Auth_userScalarFieldEnum = (typeof Auth_userScalarFieldEnum)[keyof typeof Auth_userScalarFieldEnum]


  export const Auth_user_groupsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    group_id: 'group_id'
  };

  export type Auth_user_groupsScalarFieldEnum = (typeof Auth_user_groupsScalarFieldEnum)[keyof typeof Auth_user_groupsScalarFieldEnum]


  export const Auth_user_user_permissionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    permission_id: 'permission_id'
  };

  export type Auth_user_user_permissionsScalarFieldEnum = (typeof Auth_user_user_permissionsScalarFieldEnum)[keyof typeof Auth_user_user_permissionsScalarFieldEnum]


  export const Django_admin_logScalarFieldEnum: {
    id: 'id',
    action_time: 'action_time',
    object_id: 'object_id',
    object_repr: 'object_repr',
    action_flag: 'action_flag',
    change_message: 'change_message',
    content_type_id: 'content_type_id',
    user_id: 'user_id'
  };

  export type Django_admin_logScalarFieldEnum = (typeof Django_admin_logScalarFieldEnum)[keyof typeof Django_admin_logScalarFieldEnum]


  export const Django_content_typeScalarFieldEnum: {
    id: 'id',
    app_label: 'app_label',
    model: 'model'
  };

  export type Django_content_typeScalarFieldEnum = (typeof Django_content_typeScalarFieldEnum)[keyof typeof Django_content_typeScalarFieldEnum]


  export const Django_migrationsScalarFieldEnum: {
    id: 'id',
    app: 'app',
    name: 'name',
    applied: 'applied'
  };

  export type Django_migrationsScalarFieldEnum = (typeof Django_migrationsScalarFieldEnum)[keyof typeof Django_migrationsScalarFieldEnum]


  export const Django_sessionScalarFieldEnum: {
    session_key: 'session_key',
    session_data: 'session_data',
    expire_date: 'expire_date'
  };

  export type Django_sessionScalarFieldEnum = (typeof Django_sessionScalarFieldEnum)[keyof typeof Django_sessionScalarFieldEnum]


  export const ExplorationScalarFieldEnum: {
    exploration_rid: 'exploration_rid',
    metadata: 'metadata'
  };

  export type ExplorationScalarFieldEnum = (typeof ExplorationScalarFieldEnum)[keyof typeof ExplorationScalarFieldEnum]


  export const ExplorationXQueryRequestScalarFieldEnum: {
    exploration_x_query_request_id: 'exploration_x_query_request_id',
    position: 'position',
    exploration_rid: 'exploration_rid',
    query_request_rid: 'query_request_rid'
  };

  export type ExplorationXQueryRequestScalarFieldEnum = (typeof ExplorationXQueryRequestScalarFieldEnum)[keyof typeof ExplorationXQueryRequestScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QueryRequestScalarFieldEnum: {
    query_request_rid: 'query_request_rid',
    status: 'status',
    input: 'input',
    request_date: 'request_date',
    completion_date: 'completion_date',
    result: 'result'
  };

  export type QueryRequestScalarFieldEnum = (typeof QueryRequestScalarFieldEnum)[keyof typeof QueryRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ExplorationWhereInput = {
    AND?: Enumerable<ExplorationWhereInput>
    OR?: Enumerable<ExplorationWhereInput>
    NOT?: Enumerable<ExplorationWhereInput>
    exploration_rid?: UuidFilter | string
    metadata?: JsonFilter
    ExplorationXQueryRequest?: ExplorationXQueryRequestListRelationFilter
  }

  export type ExplorationOrderByWithRelationInput = {
    exploration_rid?: SortOrder
    metadata?: SortOrder
    ExplorationXQueryRequest?: ExplorationXQueryRequestOrderByRelationAggregateInput
  }

  export type ExplorationWhereUniqueInput = {
    exploration_rid?: string
  }

  export type ExplorationOrderByWithAggregationInput = {
    exploration_rid?: SortOrder
    metadata?: SortOrder
    _count?: ExplorationCountOrderByAggregateInput
    _max?: ExplorationMaxOrderByAggregateInput
    _min?: ExplorationMinOrderByAggregateInput
  }

  export type ExplorationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExplorationScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExplorationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExplorationScalarWhereWithAggregatesInput>
    exploration_rid?: UuidWithAggregatesFilter | string
    metadata?: JsonWithAggregatesFilter
  }

  export type ExplorationXQueryRequestWhereInput = {
    AND?: Enumerable<ExplorationXQueryRequestWhereInput>
    OR?: Enumerable<ExplorationXQueryRequestWhereInput>
    NOT?: Enumerable<ExplorationXQueryRequestWhereInput>
    exploration_x_query_request_id?: IntFilter | number
    position?: StringFilter | string
    exploration_rid?: UuidFilter | string
    query_request_rid?: UuidFilter | string
    Exploration?: XOR<ExplorationRelationFilter, ExplorationWhereInput>
    QueryRequest?: XOR<QueryRequestRelationFilter, QueryRequestWhereInput>
  }

  export type ExplorationXQueryRequestOrderByWithRelationInput = {
    exploration_x_query_request_id?: SortOrder
    position?: SortOrder
    exploration_rid?: SortOrder
    query_request_rid?: SortOrder
    Exploration?: ExplorationOrderByWithRelationInput
    QueryRequest?: QueryRequestOrderByWithRelationInput
  }

  export type ExplorationXQueryRequestWhereUniqueInput = {
    exploration_x_query_request_id?: number
  }

  export type ExplorationXQueryRequestOrderByWithAggregationInput = {
    exploration_x_query_request_id?: SortOrder
    position?: SortOrder
    exploration_rid?: SortOrder
    query_request_rid?: SortOrder
    _count?: ExplorationXQueryRequestCountOrderByAggregateInput
    _avg?: ExplorationXQueryRequestAvgOrderByAggregateInput
    _max?: ExplorationXQueryRequestMaxOrderByAggregateInput
    _min?: ExplorationXQueryRequestMinOrderByAggregateInput
    _sum?: ExplorationXQueryRequestSumOrderByAggregateInput
  }

  export type ExplorationXQueryRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExplorationXQueryRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExplorationXQueryRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExplorationXQueryRequestScalarWhereWithAggregatesInput>
    exploration_x_query_request_id?: IntWithAggregatesFilter | number
    position?: StringWithAggregatesFilter | string
    exploration_rid?: UuidWithAggregatesFilter | string
    query_request_rid?: UuidWithAggregatesFilter | string
  }

  export type QueryRequestWhereInput = {
    AND?: Enumerable<QueryRequestWhereInput>
    OR?: Enumerable<QueryRequestWhereInput>
    NOT?: Enumerable<QueryRequestWhereInput>
    query_request_rid?: UuidFilter | string
    status?: StringFilter | string
    input?: JsonFilter
    request_date?: DateTimeFilter | Date | string
    completion_date?: DateTimeNullableFilter | Date | string | null
    result?: JsonNullableFilter
    ExplorationXQueryRequest?: ExplorationXQueryRequestListRelationFilter
  }

  export type QueryRequestOrderByWithRelationInput = {
    query_request_rid?: SortOrder
    status?: SortOrder
    input?: SortOrder
    request_date?: SortOrder
    completion_date?: SortOrder
    result?: SortOrder
    ExplorationXQueryRequest?: ExplorationXQueryRequestOrderByRelationAggregateInput
  }

  export type QueryRequestWhereUniqueInput = {
    query_request_rid?: string
  }

  export type QueryRequestOrderByWithAggregationInput = {
    query_request_rid?: SortOrder
    status?: SortOrder
    input?: SortOrder
    request_date?: SortOrder
    completion_date?: SortOrder
    result?: SortOrder
    _count?: QueryRequestCountOrderByAggregateInput
    _max?: QueryRequestMaxOrderByAggregateInput
    _min?: QueryRequestMinOrderByAggregateInput
  }

  export type QueryRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QueryRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<QueryRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QueryRequestScalarWhereWithAggregatesInput>
    query_request_rid?: UuidWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    input?: JsonWithAggregatesFilter
    request_date?: DateTimeWithAggregatesFilter | Date | string
    completion_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    result?: JsonNullableWithAggregatesFilter
  }

  export type auth_groupWhereInput = {
    AND?: Enumerable<auth_groupWhereInput>
    OR?: Enumerable<auth_groupWhereInput>
    NOT?: Enumerable<auth_groupWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    auth_group_permissions?: Auth_group_permissionsListRelationFilter
    auth_user_groups?: Auth_user_groupsListRelationFilter
  }

  export type auth_groupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    auth_group_permissions?: auth_group_permissionsOrderByRelationAggregateInput
    auth_user_groups?: auth_user_groupsOrderByRelationAggregateInput
  }

  export type auth_groupWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type auth_groupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: auth_groupCountOrderByAggregateInput
    _avg?: auth_groupAvgOrderByAggregateInput
    _max?: auth_groupMaxOrderByAggregateInput
    _min?: auth_groupMinOrderByAggregateInput
    _sum?: auth_groupSumOrderByAggregateInput
  }

  export type auth_groupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auth_groupScalarWhereWithAggregatesInput>
    OR?: Enumerable<auth_groupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auth_groupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type auth_group_permissionsWhereInput = {
    AND?: Enumerable<auth_group_permissionsWhereInput>
    OR?: Enumerable<auth_group_permissionsWhereInput>
    NOT?: Enumerable<auth_group_permissionsWhereInput>
    id?: BigIntFilter | bigint | number
    group_id?: IntFilter | number
    permission_id?: IntFilter | number
    auth_permission?: XOR<Auth_permissionRelationFilter, auth_permissionWhereInput>
    auth_group?: XOR<Auth_groupRelationFilter, auth_groupWhereInput>
  }

  export type auth_group_permissionsOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
    auth_permission?: auth_permissionOrderByWithRelationInput
    auth_group?: auth_groupOrderByWithRelationInput
  }

  export type auth_group_permissionsWhereUniqueInput = {
    id?: bigint | number
    group_id_permission_id?: auth_group_permissionsGroup_idPermission_idCompoundUniqueInput
  }

  export type auth_group_permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
    _count?: auth_group_permissionsCountOrderByAggregateInput
    _avg?: auth_group_permissionsAvgOrderByAggregateInput
    _max?: auth_group_permissionsMaxOrderByAggregateInput
    _min?: auth_group_permissionsMinOrderByAggregateInput
    _sum?: auth_group_permissionsSumOrderByAggregateInput
  }

  export type auth_group_permissionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auth_group_permissionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<auth_group_permissionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auth_group_permissionsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    group_id?: IntWithAggregatesFilter | number
    permission_id?: IntWithAggregatesFilter | number
  }

  export type auth_permissionWhereInput = {
    AND?: Enumerable<auth_permissionWhereInput>
    OR?: Enumerable<auth_permissionWhereInput>
    NOT?: Enumerable<auth_permissionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    content_type_id?: IntFilter | number
    codename?: StringFilter | string
    auth_group_permissions?: Auth_group_permissionsListRelationFilter
    django_content_type?: XOR<Django_content_typeRelationFilter, django_content_typeWhereInput>
    auth_user_user_permissions?: Auth_user_user_permissionsListRelationFilter
  }

  export type auth_permissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
    auth_group_permissions?: auth_group_permissionsOrderByRelationAggregateInput
    django_content_type?: django_content_typeOrderByWithRelationInput
    auth_user_user_permissions?: auth_user_user_permissionsOrderByRelationAggregateInput
  }

  export type auth_permissionWhereUniqueInput = {
    id?: number
    content_type_id_codename?: auth_permissionContent_type_idCodenameCompoundUniqueInput
  }

  export type auth_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
    _count?: auth_permissionCountOrderByAggregateInput
    _avg?: auth_permissionAvgOrderByAggregateInput
    _max?: auth_permissionMaxOrderByAggregateInput
    _min?: auth_permissionMinOrderByAggregateInput
    _sum?: auth_permissionSumOrderByAggregateInput
  }

  export type auth_permissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auth_permissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<auth_permissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auth_permissionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    content_type_id?: IntWithAggregatesFilter | number
    codename?: StringWithAggregatesFilter | string
  }

  export type auth_userWhereInput = {
    AND?: Enumerable<auth_userWhereInput>
    OR?: Enumerable<auth_userWhereInput>
    NOT?: Enumerable<auth_userWhereInput>
    id?: IntFilter | number
    password?: StringFilter | string
    last_login?: DateTimeNullableFilter | Date | string | null
    is_superuser?: BoolFilter | boolean
    username?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringFilter | string
    is_staff?: BoolFilter | boolean
    is_active?: BoolFilter | boolean
    date_joined?: DateTimeFilter | Date | string
    auth_user_groups?: Auth_user_groupsListRelationFilter
    auth_user_user_permissions?: Auth_user_user_permissionsListRelationFilter
    django_admin_log?: Django_admin_logListRelationFilter
  }

  export type auth_userOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
    auth_user_groups?: auth_user_groupsOrderByRelationAggregateInput
    auth_user_user_permissions?: auth_user_user_permissionsOrderByRelationAggregateInput
    django_admin_log?: django_admin_logOrderByRelationAggregateInput
  }

  export type auth_userWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type auth_userOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
    _count?: auth_userCountOrderByAggregateInput
    _avg?: auth_userAvgOrderByAggregateInput
    _max?: auth_userMaxOrderByAggregateInput
    _min?: auth_userMinOrderByAggregateInput
    _sum?: auth_userSumOrderByAggregateInput
  }

  export type auth_userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auth_userScalarWhereWithAggregatesInput>
    OR?: Enumerable<auth_userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auth_userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    password?: StringWithAggregatesFilter | string
    last_login?: DateTimeNullableWithAggregatesFilter | Date | string | null
    is_superuser?: BoolWithAggregatesFilter | boolean
    username?: StringWithAggregatesFilter | string
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    is_staff?: BoolWithAggregatesFilter | boolean
    is_active?: BoolWithAggregatesFilter | boolean
    date_joined?: DateTimeWithAggregatesFilter | Date | string
  }

  export type auth_user_groupsWhereInput = {
    AND?: Enumerable<auth_user_groupsWhereInput>
    OR?: Enumerable<auth_user_groupsWhereInput>
    NOT?: Enumerable<auth_user_groupsWhereInput>
    id?: BigIntFilter | bigint | number
    user_id?: IntFilter | number
    group_id?: IntFilter | number
    auth_group?: XOR<Auth_groupRelationFilter, auth_groupWhereInput>
    auth_user?: XOR<Auth_userRelationFilter, auth_userWhereInput>
  }

  export type auth_user_groupsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    auth_group?: auth_groupOrderByWithRelationInput
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type auth_user_groupsWhereUniqueInput = {
    id?: bigint | number
    user_id_group_id?: auth_user_groupsUser_idGroup_idCompoundUniqueInput
  }

  export type auth_user_groupsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    _count?: auth_user_groupsCountOrderByAggregateInput
    _avg?: auth_user_groupsAvgOrderByAggregateInput
    _max?: auth_user_groupsMaxOrderByAggregateInput
    _min?: auth_user_groupsMinOrderByAggregateInput
    _sum?: auth_user_groupsSumOrderByAggregateInput
  }

  export type auth_user_groupsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auth_user_groupsScalarWhereWithAggregatesInput>
    OR?: Enumerable<auth_user_groupsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auth_user_groupsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    user_id?: IntWithAggregatesFilter | number
    group_id?: IntWithAggregatesFilter | number
  }

  export type auth_user_user_permissionsWhereInput = {
    AND?: Enumerable<auth_user_user_permissionsWhereInput>
    OR?: Enumerable<auth_user_user_permissionsWhereInput>
    NOT?: Enumerable<auth_user_user_permissionsWhereInput>
    id?: BigIntFilter | bigint | number
    user_id?: IntFilter | number
    permission_id?: IntFilter | number
    auth_permission?: XOR<Auth_permissionRelationFilter, auth_permissionWhereInput>
    auth_user?: XOR<Auth_userRelationFilter, auth_userWhereInput>
  }

  export type auth_user_user_permissionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
    auth_permission?: auth_permissionOrderByWithRelationInput
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type auth_user_user_permissionsWhereUniqueInput = {
    id?: bigint | number
    user_id_permission_id?: auth_user_user_permissionsUser_idPermission_idCompoundUniqueInput
  }

  export type auth_user_user_permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
    _count?: auth_user_user_permissionsCountOrderByAggregateInput
    _avg?: auth_user_user_permissionsAvgOrderByAggregateInput
    _max?: auth_user_user_permissionsMaxOrderByAggregateInput
    _min?: auth_user_user_permissionsMinOrderByAggregateInput
    _sum?: auth_user_user_permissionsSumOrderByAggregateInput
  }

  export type auth_user_user_permissionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<auth_user_user_permissionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<auth_user_user_permissionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<auth_user_user_permissionsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    user_id?: IntWithAggregatesFilter | number
    permission_id?: IntWithAggregatesFilter | number
  }

  export type django_admin_logWhereInput = {
    AND?: Enumerable<django_admin_logWhereInput>
    OR?: Enumerable<django_admin_logWhereInput>
    NOT?: Enumerable<django_admin_logWhereInput>
    id?: IntFilter | number
    action_time?: DateTimeFilter | Date | string
    object_id?: StringNullableFilter | string | null
    object_repr?: StringFilter | string
    action_flag?: IntFilter | number
    change_message?: StringFilter | string
    content_type_id?: IntNullableFilter | number | null
    user_id?: IntFilter | number
    django_content_type?: XOR<Django_content_typeRelationFilter, django_content_typeWhereInput> | null
    auth_user?: XOR<Auth_userRelationFilter, auth_userWhereInput>
  }

  export type django_admin_logOrderByWithRelationInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
    django_content_type?: django_content_typeOrderByWithRelationInput
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type django_admin_logWhereUniqueInput = {
    id?: number
  }

  export type django_admin_logOrderByWithAggregationInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
    _count?: django_admin_logCountOrderByAggregateInput
    _avg?: django_admin_logAvgOrderByAggregateInput
    _max?: django_admin_logMaxOrderByAggregateInput
    _min?: django_admin_logMinOrderByAggregateInput
    _sum?: django_admin_logSumOrderByAggregateInput
  }

  export type django_admin_logScalarWhereWithAggregatesInput = {
    AND?: Enumerable<django_admin_logScalarWhereWithAggregatesInput>
    OR?: Enumerable<django_admin_logScalarWhereWithAggregatesInput>
    NOT?: Enumerable<django_admin_logScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    action_time?: DateTimeWithAggregatesFilter | Date | string
    object_id?: StringNullableWithAggregatesFilter | string | null
    object_repr?: StringWithAggregatesFilter | string
    action_flag?: IntWithAggregatesFilter | number
    change_message?: StringWithAggregatesFilter | string
    content_type_id?: IntNullableWithAggregatesFilter | number | null
    user_id?: IntWithAggregatesFilter | number
  }

  export type django_content_typeWhereInput = {
    AND?: Enumerable<django_content_typeWhereInput>
    OR?: Enumerable<django_content_typeWhereInput>
    NOT?: Enumerable<django_content_typeWhereInput>
    id?: IntFilter | number
    app_label?: StringFilter | string
    model?: StringFilter | string
    auth_permission?: Auth_permissionListRelationFilter
    django_admin_log?: Django_admin_logListRelationFilter
  }

  export type django_content_typeOrderByWithRelationInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
    auth_permission?: auth_permissionOrderByRelationAggregateInput
    django_admin_log?: django_admin_logOrderByRelationAggregateInput
  }

  export type django_content_typeWhereUniqueInput = {
    id?: number
    app_label_model?: django_content_typeApp_labelModelCompoundUniqueInput
  }

  export type django_content_typeOrderByWithAggregationInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
    _count?: django_content_typeCountOrderByAggregateInput
    _avg?: django_content_typeAvgOrderByAggregateInput
    _max?: django_content_typeMaxOrderByAggregateInput
    _min?: django_content_typeMinOrderByAggregateInput
    _sum?: django_content_typeSumOrderByAggregateInput
  }

  export type django_content_typeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<django_content_typeScalarWhereWithAggregatesInput>
    OR?: Enumerable<django_content_typeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<django_content_typeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    app_label?: StringWithAggregatesFilter | string
    model?: StringWithAggregatesFilter | string
  }

  export type django_migrationsWhereInput = {
    AND?: Enumerable<django_migrationsWhereInput>
    OR?: Enumerable<django_migrationsWhereInput>
    NOT?: Enumerable<django_migrationsWhereInput>
    id?: BigIntFilter | bigint | number
    app?: StringFilter | string
    name?: StringFilter | string
    applied?: DateTimeFilter | Date | string
  }

  export type django_migrationsOrderByWithRelationInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsWhereUniqueInput = {
    id?: bigint | number
  }

  export type django_migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
    _count?: django_migrationsCountOrderByAggregateInput
    _avg?: django_migrationsAvgOrderByAggregateInput
    _max?: django_migrationsMaxOrderByAggregateInput
    _min?: django_migrationsMinOrderByAggregateInput
    _sum?: django_migrationsSumOrderByAggregateInput
  }

  export type django_migrationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<django_migrationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<django_migrationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<django_migrationsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    app?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    applied?: DateTimeWithAggregatesFilter | Date | string
  }

  export type django_sessionWhereInput = {
    AND?: Enumerable<django_sessionWhereInput>
    OR?: Enumerable<django_sessionWhereInput>
    NOT?: Enumerable<django_sessionWhereInput>
    session_key?: StringFilter | string
    session_data?: StringFilter | string
    expire_date?: DateTimeFilter | Date | string
  }

  export type django_sessionOrderByWithRelationInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type django_sessionWhereUniqueInput = {
    session_key?: string
  }

  export type django_sessionOrderByWithAggregationInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
    _count?: django_sessionCountOrderByAggregateInput
    _max?: django_sessionMaxOrderByAggregateInput
    _min?: django_sessionMinOrderByAggregateInput
  }

  export type django_sessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<django_sessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<django_sessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<django_sessionScalarWhereWithAggregatesInput>
    session_key?: StringWithAggregatesFilter | string
    session_data?: StringWithAggregatesFilter | string
    expire_date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ExplorationCreateInput = {
    exploration_rid: string
    metadata: JsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestCreateNestedManyWithoutExplorationInput
  }

  export type ExplorationUncheckedCreateInput = {
    exploration_rid: string
    metadata: JsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestUncheckedCreateNestedManyWithoutExplorationInput
  }

  export type ExplorationUpdateInput = {
    exploration_rid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestUpdateManyWithoutExplorationNestedInput
  }

  export type ExplorationUncheckedUpdateInput = {
    exploration_rid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestUncheckedUpdateManyWithoutExplorationNestedInput
  }

  export type ExplorationCreateManyInput = {
    exploration_rid: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ExplorationUpdateManyMutationInput = {
    exploration_rid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ExplorationUncheckedUpdateManyInput = {
    exploration_rid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ExplorationXQueryRequestCreateInput = {
    position: string
    Exploration: ExplorationCreateNestedOneWithoutExplorationXQueryRequestInput
    QueryRequest: QueryRequestCreateNestedOneWithoutExplorationXQueryRequestInput
  }

  export type ExplorationXQueryRequestUncheckedCreateInput = {
    exploration_x_query_request_id?: number
    position: string
    exploration_rid: string
    query_request_rid: string
  }

  export type ExplorationXQueryRequestUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    Exploration?: ExplorationUpdateOneRequiredWithoutExplorationXQueryRequestNestedInput
    QueryRequest?: QueryRequestUpdateOneRequiredWithoutExplorationXQueryRequestNestedInput
  }

  export type ExplorationXQueryRequestUncheckedUpdateInput = {
    exploration_x_query_request_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    exploration_rid?: StringFieldUpdateOperationsInput | string
    query_request_rid?: StringFieldUpdateOperationsInput | string
  }

  export type ExplorationXQueryRequestCreateManyInput = {
    exploration_x_query_request_id?: number
    position: string
    exploration_rid: string
    query_request_rid: string
  }

  export type ExplorationXQueryRequestUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
  }

  export type ExplorationXQueryRequestUncheckedUpdateManyInput = {
    exploration_x_query_request_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    exploration_rid?: StringFieldUpdateOperationsInput | string
    query_request_rid?: StringFieldUpdateOperationsInput | string
  }

  export type QueryRequestCreateInput = {
    query_request_rid: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    request_date: Date | string
    completion_date?: Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestCreateNestedManyWithoutQueryRequestInput
  }

  export type QueryRequestUncheckedCreateInput = {
    query_request_rid: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    request_date: Date | string
    completion_date?: Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestUncheckedCreateNestedManyWithoutQueryRequestInput
  }

  export type QueryRequestUpdateInput = {
    query_request_rid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestUpdateManyWithoutQueryRequestNestedInput
  }

  export type QueryRequestUncheckedUpdateInput = {
    query_request_rid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
    ExplorationXQueryRequest?: ExplorationXQueryRequestUncheckedUpdateManyWithoutQueryRequestNestedInput
  }

  export type QueryRequestCreateManyInput = {
    query_request_rid: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    request_date: Date | string
    completion_date?: Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QueryRequestUpdateManyMutationInput = {
    query_request_rid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QueryRequestUncheckedUpdateManyInput = {
    query_request_rid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
  }

  export type auth_groupCreateInput = {
    name: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_groupInput
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUncheckedCreateInput = {
    id?: number
    name: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_groupInput
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_groupNestedInput
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupNestedInput
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupCreateManyInput = {
    id?: number
    name: string
  }

  export type auth_groupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type auth_groupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type auth_group_permissionsCreateInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput
    auth_group: auth_groupCreateNestedOneWithoutAuth_group_permissionsInput
  }

  export type auth_group_permissionsUncheckedCreateInput = {
    id?: bigint | number
    group_id: number
    permission_id: number
  }

  export type auth_group_permissionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
  }

  export type auth_group_permissionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_group_permissionsCreateManyInput = {
    id?: bigint | number
    group_id: number
    permission_id: number
  }

  export type auth_group_permissionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auth_group_permissionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_permissionCreateInput = {
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput
    django_content_type: django_content_typeCreateNestedOneWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput
    django_content_type?: django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionCreateManyInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
  }

  export type auth_permissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
  }

  export type auth_permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
  }

  export type auth_userCreateInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userCreateManyInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
  }

  export type auth_userUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_user_groupsCreateInput = {
    id?: bigint | number
    auth_group: auth_groupCreateNestedOneWithoutAuth_user_groupsInput
    auth_user: auth_userCreateNestedOneWithoutAuth_user_groupsInput
  }

  export type auth_user_groupsUncheckedCreateInput = {
    id?: bigint | number
    user_id: number
    group_id: number
  }

  export type auth_user_groupsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput
  }

  export type auth_user_groupsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsCreateManyInput = {
    id?: bigint | number
    user_id: number
    group_id: number
  }

  export type auth_user_groupsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auth_user_groupsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsCreateInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput
    auth_user: auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput
  }

  export type auth_user_user_permissionsUncheckedCreateInput = {
    id?: bigint | number
    user_id: number
    permission_id: number
  }

  export type auth_user_user_permissionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
  }

  export type auth_user_user_permissionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsCreateManyInput = {
    id?: bigint | number
    user_id: number
    permission_id: number
  }

  export type auth_user_user_permissionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auth_user_user_permissionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_admin_logCreateInput = {
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    django_content_type?: django_content_typeCreateNestedOneWithoutDjango_admin_logInput
    auth_user: auth_userCreateNestedOneWithoutDjango_admin_logInput
  }

  export type django_admin_logUncheckedCreateInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
    user_id: number
  }

  export type django_admin_logUpdateInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    django_content_type?: django_content_typeUpdateOneWithoutDjango_admin_logNestedInput
    auth_user?: auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput
  }

  export type django_admin_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_admin_logCreateManyInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
    user_id: number
  }

  export type django_admin_logUpdateManyMutationInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
  }

  export type django_admin_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_content_typeCreateInput = {
    app_label: string
    model: string
    auth_permission?: auth_permissionCreateNestedManyWithoutDjango_content_typeInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUncheckedCreateInput = {
    id?: number
    app_label: string
    model: string
    auth_permission?: auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUpdateInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUpdateManyWithoutDjango_content_typeNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeCreateManyInput = {
    id?: number
    app_label: string
    model: string
  }

  export type django_content_typeUpdateManyMutationInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type django_content_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type django_migrationsCreateInput = {
    id?: bigint | number
    app: string
    name: string
    applied: Date | string
  }

  export type django_migrationsUncheckedCreateInput = {
    id?: bigint | number
    app: string
    name: string
    applied: Date | string
  }

  export type django_migrationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_migrationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_migrationsCreateManyInput = {
    id?: bigint | number
    app: string
    name: string
    applied: Date | string
  }

  export type django_migrationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_migrationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    app?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    applied?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionCreateInput = {
    session_key: string
    session_data: string
    expire_date: Date | string
  }

  export type django_sessionUncheckedCreateInput = {
    session_key: string
    session_data: string
    expire_date: Date | string
  }

  export type django_sessionUpdateInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionUncheckedUpdateInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionCreateManyInput = {
    session_key: string
    session_data: string
    expire_date: Date | string
  }

  export type django_sessionUpdateManyMutationInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type django_sessionUncheckedUpdateManyInput = {
    session_key?: StringFieldUpdateOperationsInput | string
    session_data?: StringFieldUpdateOperationsInput | string
    expire_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type ExplorationXQueryRequestListRelationFilter = {
    every?: ExplorationXQueryRequestWhereInput
    some?: ExplorationXQueryRequestWhereInput
    none?: ExplorationXQueryRequestWhereInput
  }

  export type ExplorationXQueryRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExplorationCountOrderByAggregateInput = {
    exploration_rid?: SortOrder
    metadata?: SortOrder
  }

  export type ExplorationMaxOrderByAggregateInput = {
    exploration_rid?: SortOrder
  }

  export type ExplorationMinOrderByAggregateInput = {
    exploration_rid?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ExplorationRelationFilter = {
    is?: ExplorationWhereInput
    isNot?: ExplorationWhereInput
  }

  export type QueryRequestRelationFilter = {
    is?: QueryRequestWhereInput
    isNot?: QueryRequestWhereInput
  }

  export type ExplorationXQueryRequestCountOrderByAggregateInput = {
    exploration_x_query_request_id?: SortOrder
    position?: SortOrder
    exploration_rid?: SortOrder
    query_request_rid?: SortOrder
  }

  export type ExplorationXQueryRequestAvgOrderByAggregateInput = {
    exploration_x_query_request_id?: SortOrder
  }

  export type ExplorationXQueryRequestMaxOrderByAggregateInput = {
    exploration_x_query_request_id?: SortOrder
    position?: SortOrder
    exploration_rid?: SortOrder
    query_request_rid?: SortOrder
  }

  export type ExplorationXQueryRequestMinOrderByAggregateInput = {
    exploration_x_query_request_id?: SortOrder
    position?: SortOrder
    exploration_rid?: SortOrder
    query_request_rid?: SortOrder
  }

  export type ExplorationXQueryRequestSumOrderByAggregateInput = {
    exploration_x_query_request_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type QueryRequestCountOrderByAggregateInput = {
    query_request_rid?: SortOrder
    status?: SortOrder
    input?: SortOrder
    request_date?: SortOrder
    completion_date?: SortOrder
    result?: SortOrder
  }

  export type QueryRequestMaxOrderByAggregateInput = {
    query_request_rid?: SortOrder
    status?: SortOrder
    request_date?: SortOrder
    completion_date?: SortOrder
  }

  export type QueryRequestMinOrderByAggregateInput = {
    query_request_rid?: SortOrder
    status?: SortOrder
    request_date?: SortOrder
    completion_date?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type Auth_group_permissionsListRelationFilter = {
    every?: auth_group_permissionsWhereInput
    some?: auth_group_permissionsWhereInput
    none?: auth_group_permissionsWhereInput
  }

  export type Auth_user_groupsListRelationFilter = {
    every?: auth_user_groupsWhereInput
    some?: auth_user_groupsWhereInput
    none?: auth_user_groupsWhereInput
  }

  export type auth_group_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_user_groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_groupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type auth_groupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auth_groupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type auth_groupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type auth_groupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type Auth_permissionRelationFilter = {
    is?: auth_permissionWhereInput
    isNot?: auth_permissionWhereInput
  }

  export type Auth_groupRelationFilter = {
    is?: auth_groupWhereInput
    isNot?: auth_groupWhereInput
  }

  export type auth_group_permissionsGroup_idPermission_idCompoundUniqueInput = {
    group_id: number
    permission_id: number
  }

  export type auth_group_permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_group_permissionsSumOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    permission_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type Django_content_typeRelationFilter = {
    is?: django_content_typeWhereInput | null
    isNot?: django_content_typeWhereInput | null
  }

  export type Auth_user_user_permissionsListRelationFilter = {
    every?: auth_user_user_permissionsWhereInput
    some?: auth_user_user_permissionsWhereInput
    none?: auth_user_user_permissionsWhereInput
  }

  export type auth_user_user_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_permissionContent_type_idCodenameCompoundUniqueInput = {
    content_type_id: number
    codename: string
  }

  export type auth_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
  }

  export type auth_permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    content_type_id?: SortOrder
  }

  export type auth_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
  }

  export type auth_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content_type_id?: SortOrder
    codename?: SortOrder
  }

  export type auth_permissionSumOrderByAggregateInput = {
    id?: SortOrder
    content_type_id?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type Django_admin_logListRelationFilter = {
    every?: django_admin_logWhereInput
    some?: django_admin_logWhereInput
    none?: django_admin_logWhereInput
  }

  export type django_admin_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_userCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auth_userMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type Auth_userRelationFilter = {
    is?: auth_userWhereInput
    isNot?: auth_userWhereInput
  }

  export type auth_user_groupsUser_idGroup_idCompoundUniqueInput = {
    user_id: number
    group_id: number
  }

  export type auth_user_groupsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_groupsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type auth_user_user_permissionsUser_idPermission_idCompoundUniqueInput = {
    user_id: number
    permission_id: number
  }

  export type auth_user_user_permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type auth_user_user_permissionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permission_id?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type django_admin_logCountOrderByAggregateInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logAvgOrderByAggregateInput = {
    id?: SortOrder
    action_flag?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logMaxOrderByAggregateInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logMinOrderByAggregateInput = {
    id?: SortOrder
    action_time?: SortOrder
    object_id?: SortOrder
    object_repr?: SortOrder
    action_flag?: SortOrder
    change_message?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type django_admin_logSumOrderByAggregateInput = {
    id?: SortOrder
    action_flag?: SortOrder
    content_type_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type Auth_permissionListRelationFilter = {
    every?: auth_permissionWhereInput
    some?: auth_permissionWhereInput
    none?: auth_permissionWhereInput
  }

  export type auth_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type django_content_typeApp_labelModelCompoundUniqueInput = {
    app_label: string
    model: string
  }

  export type django_content_typeCountOrderByAggregateInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
  }

  export type django_content_typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_content_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
  }

  export type django_content_typeMinOrderByAggregateInput = {
    id?: SortOrder
    app_label?: SortOrder
    model?: SortOrder
  }

  export type django_content_typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    app?: SortOrder
    name?: SortOrder
    applied?: SortOrder
  }

  export type django_migrationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type django_sessionCountOrderByAggregateInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type django_sessionMaxOrderByAggregateInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type django_sessionMinOrderByAggregateInput = {
    session_key?: SortOrder
    session_data?: SortOrder
    expire_date?: SortOrder
  }

  export type ExplorationXQueryRequestCreateNestedManyWithoutExplorationInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutExplorationInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutExplorationInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutExplorationInput>
    createMany?: ExplorationXQueryRequestCreateManyExplorationInputEnvelope
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
  }

  export type ExplorationXQueryRequestUncheckedCreateNestedManyWithoutExplorationInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutExplorationInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutExplorationInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutExplorationInput>
    createMany?: ExplorationXQueryRequestCreateManyExplorationInputEnvelope
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ExplorationXQueryRequestUpdateManyWithoutExplorationNestedInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutExplorationInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutExplorationInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutExplorationInput>
    upsert?: Enumerable<ExplorationXQueryRequestUpsertWithWhereUniqueWithoutExplorationInput>
    createMany?: ExplorationXQueryRequestCreateManyExplorationInputEnvelope
    set?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    disconnect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    delete?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    update?: Enumerable<ExplorationXQueryRequestUpdateWithWhereUniqueWithoutExplorationInput>
    updateMany?: Enumerable<ExplorationXQueryRequestUpdateManyWithWhereWithoutExplorationInput>
    deleteMany?: Enumerable<ExplorationXQueryRequestScalarWhereInput>
  }

  export type ExplorationXQueryRequestUncheckedUpdateManyWithoutExplorationNestedInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutExplorationInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutExplorationInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutExplorationInput>
    upsert?: Enumerable<ExplorationXQueryRequestUpsertWithWhereUniqueWithoutExplorationInput>
    createMany?: ExplorationXQueryRequestCreateManyExplorationInputEnvelope
    set?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    disconnect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    delete?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    update?: Enumerable<ExplorationXQueryRequestUpdateWithWhereUniqueWithoutExplorationInput>
    updateMany?: Enumerable<ExplorationXQueryRequestUpdateManyWithWhereWithoutExplorationInput>
    deleteMany?: Enumerable<ExplorationXQueryRequestScalarWhereInput>
  }

  export type ExplorationCreateNestedOneWithoutExplorationXQueryRequestInput = {
    create?: XOR<ExplorationCreateWithoutExplorationXQueryRequestInput, ExplorationUncheckedCreateWithoutExplorationXQueryRequestInput>
    connectOrCreate?: ExplorationCreateOrConnectWithoutExplorationXQueryRequestInput
    connect?: ExplorationWhereUniqueInput
  }

  export type QueryRequestCreateNestedOneWithoutExplorationXQueryRequestInput = {
    create?: XOR<QueryRequestCreateWithoutExplorationXQueryRequestInput, QueryRequestUncheckedCreateWithoutExplorationXQueryRequestInput>
    connectOrCreate?: QueryRequestCreateOrConnectWithoutExplorationXQueryRequestInput
    connect?: QueryRequestWhereUniqueInput
  }

  export type ExplorationUpdateOneRequiredWithoutExplorationXQueryRequestNestedInput = {
    create?: XOR<ExplorationCreateWithoutExplorationXQueryRequestInput, ExplorationUncheckedCreateWithoutExplorationXQueryRequestInput>
    connectOrCreate?: ExplorationCreateOrConnectWithoutExplorationXQueryRequestInput
    upsert?: ExplorationUpsertWithoutExplorationXQueryRequestInput
    connect?: ExplorationWhereUniqueInput
    update?: XOR<ExplorationUpdateWithoutExplorationXQueryRequestInput, ExplorationUncheckedUpdateWithoutExplorationXQueryRequestInput>
  }

  export type QueryRequestUpdateOneRequiredWithoutExplorationXQueryRequestNestedInput = {
    create?: XOR<QueryRequestCreateWithoutExplorationXQueryRequestInput, QueryRequestUncheckedCreateWithoutExplorationXQueryRequestInput>
    connectOrCreate?: QueryRequestCreateOrConnectWithoutExplorationXQueryRequestInput
    upsert?: QueryRequestUpsertWithoutExplorationXQueryRequestInput
    connect?: QueryRequestWhereUniqueInput
    update?: XOR<QueryRequestUpdateWithoutExplorationXQueryRequestInput, QueryRequestUncheckedUpdateWithoutExplorationXQueryRequestInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExplorationXQueryRequestCreateNestedManyWithoutQueryRequestInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutQueryRequestInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutQueryRequestInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutQueryRequestInput>
    createMany?: ExplorationXQueryRequestCreateManyQueryRequestInputEnvelope
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
  }

  export type ExplorationXQueryRequestUncheckedCreateNestedManyWithoutQueryRequestInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutQueryRequestInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutQueryRequestInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutQueryRequestInput>
    createMany?: ExplorationXQueryRequestCreateManyQueryRequestInputEnvelope
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ExplorationXQueryRequestUpdateManyWithoutQueryRequestNestedInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutQueryRequestInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutQueryRequestInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutQueryRequestInput>
    upsert?: Enumerable<ExplorationXQueryRequestUpsertWithWhereUniqueWithoutQueryRequestInput>
    createMany?: ExplorationXQueryRequestCreateManyQueryRequestInputEnvelope
    set?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    disconnect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    delete?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    update?: Enumerable<ExplorationXQueryRequestUpdateWithWhereUniqueWithoutQueryRequestInput>
    updateMany?: Enumerable<ExplorationXQueryRequestUpdateManyWithWhereWithoutQueryRequestInput>
    deleteMany?: Enumerable<ExplorationXQueryRequestScalarWhereInput>
  }

  export type ExplorationXQueryRequestUncheckedUpdateManyWithoutQueryRequestNestedInput = {
    create?: XOR<Enumerable<ExplorationXQueryRequestCreateWithoutQueryRequestInput>, Enumerable<ExplorationXQueryRequestUncheckedCreateWithoutQueryRequestInput>>
    connectOrCreate?: Enumerable<ExplorationXQueryRequestCreateOrConnectWithoutQueryRequestInput>
    upsert?: Enumerable<ExplorationXQueryRequestUpsertWithWhereUniqueWithoutQueryRequestInput>
    createMany?: ExplorationXQueryRequestCreateManyQueryRequestInputEnvelope
    set?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    disconnect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    delete?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    connect?: Enumerable<ExplorationXQueryRequestWhereUniqueInput>
    update?: Enumerable<ExplorationXQueryRequestUpdateWithWhereUniqueWithoutQueryRequestInput>
    updateMany?: Enumerable<ExplorationXQueryRequestUpdateManyWithWhereWithoutQueryRequestInput>
    deleteMany?: Enumerable<ExplorationXQueryRequestScalarWhereInput>
  }

  export type auth_group_permissionsCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_groupInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_groupInput>
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
  }

  export type auth_user_groupsCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_groupInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_groupInput>
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
  }

  export type auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_groupInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_groupInput>
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
  }

  export type auth_user_groupsUncheckedCreateNestedManyWithoutAuth_groupInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_groupInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_groupInput>
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
  }

  export type auth_group_permissionsUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_groupInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_groupInput>
    upsert?: Enumerable<auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput>
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    set?: Enumerable<auth_group_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_group_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    update?: Enumerable<auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput>
    updateMany?: Enumerable<auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput>
    deleteMany?: Enumerable<auth_group_permissionsScalarWhereInput>
  }

  export type auth_user_groupsUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_groupInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_groupInput>
    upsert?: Enumerable<auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput>
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    set?: Enumerable<auth_user_groupsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_groupsWhereUniqueInput>
    delete?: Enumerable<auth_user_groupsWhereUniqueInput>
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
    update?: Enumerable<auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput>
    updateMany?: Enumerable<auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput>
    deleteMany?: Enumerable<auth_user_groupsScalarWhereInput>
  }

  export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_groupInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_groupInput>
    upsert?: Enumerable<auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput>
    createMany?: auth_group_permissionsCreateManyAuth_groupInputEnvelope
    set?: Enumerable<auth_group_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_group_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    update?: Enumerable<auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput>
    updateMany?: Enumerable<auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput>
    deleteMany?: Enumerable<auth_group_permissionsScalarWhereInput>
  }

  export type auth_user_groupsUncheckedUpdateManyWithoutAuth_groupNestedInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_groupInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_groupInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_groupInput>
    upsert?: Enumerable<auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput>
    createMany?: auth_user_groupsCreateManyAuth_groupInputEnvelope
    set?: Enumerable<auth_user_groupsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_groupsWhereUniqueInput>
    delete?: Enumerable<auth_user_groupsWhereUniqueInput>
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
    update?: Enumerable<auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput>
    updateMany?: Enumerable<auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput>
    deleteMany?: Enumerable<auth_user_groupsScalarWhereInput>
  }

  export type auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput
    connect?: auth_permissionWhereUniqueInput
  }

  export type auth_groupCreateNestedOneWithoutAuth_group_permissionsInput = {
    create?: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_group_permissionsInput
    connect?: auth_groupWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput
    upsert?: auth_permissionUpsertWithoutAuth_group_permissionsInput
    connect?: auth_permissionWhereUniqueInput
    update?: XOR<auth_permissionUpdateWithoutAuth_group_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>
  }

  export type auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput = {
    create?: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_group_permissionsInput
    upsert?: auth_groupUpsertWithoutAuth_group_permissionsInput
    connect?: auth_groupWhereUniqueInput
    update?: XOR<auth_groupUpdateWithoutAuth_group_permissionsInput, auth_groupUncheckedUpdateWithoutAuth_group_permissionsInput>
  }

  export type auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput>
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
  }

  export type django_content_typeCreateNestedOneWithoutAuth_permissionInput = {
    create?: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutAuth_permissionInput
    connect?: django_content_typeWhereUniqueInput
  }

  export type auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
  }

  export type auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput>
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
  }

  export type auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
  }

  export type auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput>
    upsert?: Enumerable<auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput>
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    set?: Enumerable<auth_group_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_group_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    update?: Enumerable<auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput>
    updateMany?: Enumerable<auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput>
    deleteMany?: Enumerable<auth_group_permissionsScalarWhereInput>
  }

  export type django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput = {
    create?: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutAuth_permissionInput
    upsert?: django_content_typeUpsertWithoutAuth_permissionInput
    connect?: django_content_typeWhereUniqueInput
    update?: XOR<django_content_typeUpdateWithoutAuth_permissionInput, django_content_typeUncheckedUpdateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput>
    upsert?: Enumerable<auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    set?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    update?: Enumerable<auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput>
    updateMany?: Enumerable<auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput>
    deleteMany?: Enumerable<auth_user_user_permissionsScalarWhereInput>
  }

  export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<Enumerable<auth_group_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput>
    upsert?: Enumerable<auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput>
    createMany?: auth_group_permissionsCreateManyAuth_permissionInputEnvelope
    set?: Enumerable<auth_group_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_group_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_group_permissionsWhereUniqueInput>
    update?: Enumerable<auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput>
    updateMany?: Enumerable<auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput>
    deleteMany?: Enumerable<auth_group_permissionsScalarWhereInput>
  }

  export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_permissionInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput>
    upsert?: Enumerable<auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope
    set?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    update?: Enumerable<auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput>
    updateMany?: Enumerable<auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput>
    deleteMany?: Enumerable<auth_user_user_permissionsScalarWhereInput>
  }

  export type auth_user_groupsCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_userInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_userInput>
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
  }

  export type auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_userInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
  }

  export type django_admin_logCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutAuth_userInput>, Enumerable<django_admin_logUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutAuth_userInput>
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    connect?: Enumerable<django_admin_logWhereUniqueInput>
  }

  export type auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_userInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_userInput>
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
  }

  export type auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_userInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
  }

  export type django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutAuth_userInput>, Enumerable<django_admin_logUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutAuth_userInput>
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    connect?: Enumerable<django_admin_logWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type auth_user_groupsUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_userInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_userInput>
    upsert?: Enumerable<auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput>
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    set?: Enumerable<auth_user_groupsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_groupsWhereUniqueInput>
    delete?: Enumerable<auth_user_groupsWhereUniqueInput>
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
    update?: Enumerable<auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput>
    updateMany?: Enumerable<auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput>
    deleteMany?: Enumerable<auth_user_groupsScalarWhereInput>
  }

  export type auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_userInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput>
    upsert?: Enumerable<auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    set?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    update?: Enumerable<auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput>
    updateMany?: Enumerable<auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput>
    deleteMany?: Enumerable<auth_user_user_permissionsScalarWhereInput>
  }

  export type django_admin_logUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutAuth_userInput>, Enumerable<django_admin_logUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutAuth_userInput>
    upsert?: Enumerable<django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput>
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    set?: Enumerable<django_admin_logWhereUniqueInput>
    disconnect?: Enumerable<django_admin_logWhereUniqueInput>
    delete?: Enumerable<django_admin_logWhereUniqueInput>
    connect?: Enumerable<django_admin_logWhereUniqueInput>
    update?: Enumerable<django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput>
    updateMany?: Enumerable<django_admin_logUpdateManyWithWhereWithoutAuth_userInput>
    deleteMany?: Enumerable<django_admin_logScalarWhereInput>
  }

  export type auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<Enumerable<auth_user_groupsCreateWithoutAuth_userInput>, Enumerable<auth_user_groupsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_groupsCreateOrConnectWithoutAuth_userInput>
    upsert?: Enumerable<auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput>
    createMany?: auth_user_groupsCreateManyAuth_userInputEnvelope
    set?: Enumerable<auth_user_groupsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_groupsWhereUniqueInput>
    delete?: Enumerable<auth_user_groupsWhereUniqueInput>
    connect?: Enumerable<auth_user_groupsWhereUniqueInput>
    update?: Enumerable<auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput>
    updateMany?: Enumerable<auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput>
    deleteMany?: Enumerable<auth_user_groupsScalarWhereInput>
  }

  export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<Enumerable<auth_user_user_permissionsCreateWithoutAuth_userInput>, Enumerable<auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput>
    upsert?: Enumerable<auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput>
    createMany?: auth_user_user_permissionsCreateManyAuth_userInputEnvelope
    set?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    disconnect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    delete?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    connect?: Enumerable<auth_user_user_permissionsWhereUniqueInput>
    update?: Enumerable<auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput>
    updateMany?: Enumerable<auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput>
    deleteMany?: Enumerable<auth_user_user_permissionsScalarWhereInput>
  }

  export type django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutAuth_userInput>, Enumerable<django_admin_logUncheckedCreateWithoutAuth_userInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutAuth_userInput>
    upsert?: Enumerable<django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput>
    createMany?: django_admin_logCreateManyAuth_userInputEnvelope
    set?: Enumerable<django_admin_logWhereUniqueInput>
    disconnect?: Enumerable<django_admin_logWhereUniqueInput>
    delete?: Enumerable<django_admin_logWhereUniqueInput>
    connect?: Enumerable<django_admin_logWhereUniqueInput>
    update?: Enumerable<django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput>
    updateMany?: Enumerable<django_admin_logUpdateManyWithWhereWithoutAuth_userInput>
    deleteMany?: Enumerable<django_admin_logScalarWhereInput>
  }

  export type auth_groupCreateNestedOneWithoutAuth_user_groupsInput = {
    create?: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_user_groupsInput
    connect?: auth_groupWhereUniqueInput
  }

  export type auth_userCreateNestedOneWithoutAuth_user_groupsInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_groupsInput
    connect?: auth_userWhereUniqueInput
  }

  export type auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput = {
    create?: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_groupCreateOrConnectWithoutAuth_user_groupsInput
    upsert?: auth_groupUpsertWithoutAuth_user_groupsInput
    connect?: auth_groupWhereUniqueInput
    update?: XOR<auth_groupUpdateWithoutAuth_user_groupsInput, auth_groupUncheckedUpdateWithoutAuth_user_groupsInput>
  }

  export type auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_groupsInput
    upsert?: auth_userUpsertWithoutAuth_user_groupsInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<auth_userUpdateWithoutAuth_user_groupsInput, auth_userUncheckedUpdateWithoutAuth_user_groupsInput>
  }

  export type auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput
    connect?: auth_permissionWhereUniqueInput
  }

  export type auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput
    connect?: auth_userWhereUniqueInput
  }

  export type auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput = {
    create?: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput
    upsert?: auth_permissionUpsertWithoutAuth_user_user_permissionsInput
    connect?: auth_permissionWhereUniqueInput
    update?: XOR<auth_permissionUpdateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput = {
    create?: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput
    upsert?: auth_userUpsertWithoutAuth_user_user_permissionsInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<auth_userUpdateWithoutAuth_user_user_permissionsInput, auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>
  }

  export type django_content_typeCreateNestedOneWithoutDjango_admin_logInput = {
    create?: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutDjango_admin_logInput
    connect?: django_content_typeWhereUniqueInput
  }

  export type auth_userCreateNestedOneWithoutDjango_admin_logInput = {
    create?: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutDjango_admin_logInput
    connect?: auth_userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type django_content_typeUpdateOneWithoutDjango_admin_logNestedInput = {
    create?: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: django_content_typeCreateOrConnectWithoutDjango_admin_logInput
    upsert?: django_content_typeUpsertWithoutDjango_admin_logInput
    disconnect?: boolean
    delete?: boolean
    connect?: django_content_typeWhereUniqueInput
    update?: XOR<django_content_typeUpdateWithoutDjango_admin_logInput, django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>
  }

  export type auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput = {
    create?: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutDjango_admin_logInput
    upsert?: auth_userUpsertWithoutDjango_admin_logInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<auth_userUpdateWithoutDjango_admin_logInput, auth_userUncheckedUpdateWithoutDjango_admin_logInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type auth_permissionCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<Enumerable<auth_permissionCreateWithoutDjango_content_typeInput>, Enumerable<auth_permissionUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<auth_permissionCreateOrConnectWithoutDjango_content_typeInput>
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    connect?: Enumerable<auth_permissionWhereUniqueInput>
  }

  export type django_admin_logCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutDjango_content_typeInput>, Enumerable<django_admin_logUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutDjango_content_typeInput>
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    connect?: Enumerable<django_admin_logWhereUniqueInput>
  }

  export type auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<Enumerable<auth_permissionCreateWithoutDjango_content_typeInput>, Enumerable<auth_permissionUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<auth_permissionCreateOrConnectWithoutDjango_content_typeInput>
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    connect?: Enumerable<auth_permissionWhereUniqueInput>
  }

  export type django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutDjango_content_typeInput>, Enumerable<django_admin_logUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutDjango_content_typeInput>
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    connect?: Enumerable<django_admin_logWhereUniqueInput>
  }

  export type auth_permissionUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<Enumerable<auth_permissionCreateWithoutDjango_content_typeInput>, Enumerable<auth_permissionUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<auth_permissionCreateOrConnectWithoutDjango_content_typeInput>
    upsert?: Enumerable<auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput>
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    set?: Enumerable<auth_permissionWhereUniqueInput>
    disconnect?: Enumerable<auth_permissionWhereUniqueInput>
    delete?: Enumerable<auth_permissionWhereUniqueInput>
    connect?: Enumerable<auth_permissionWhereUniqueInput>
    update?: Enumerable<auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput>
    updateMany?: Enumerable<auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput>
    deleteMany?: Enumerable<auth_permissionScalarWhereInput>
  }

  export type django_admin_logUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutDjango_content_typeInput>, Enumerable<django_admin_logUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutDjango_content_typeInput>
    upsert?: Enumerable<django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput>
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    set?: Enumerable<django_admin_logWhereUniqueInput>
    disconnect?: Enumerable<django_admin_logWhereUniqueInput>
    delete?: Enumerable<django_admin_logWhereUniqueInput>
    connect?: Enumerable<django_admin_logWhereUniqueInput>
    update?: Enumerable<django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput>
    updateMany?: Enumerable<django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput>
    deleteMany?: Enumerable<django_admin_logScalarWhereInput>
  }

  export type auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<Enumerable<auth_permissionCreateWithoutDjango_content_typeInput>, Enumerable<auth_permissionUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<auth_permissionCreateOrConnectWithoutDjango_content_typeInput>
    upsert?: Enumerable<auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput>
    createMany?: auth_permissionCreateManyDjango_content_typeInputEnvelope
    set?: Enumerable<auth_permissionWhereUniqueInput>
    disconnect?: Enumerable<auth_permissionWhereUniqueInput>
    delete?: Enumerable<auth_permissionWhereUniqueInput>
    connect?: Enumerable<auth_permissionWhereUniqueInput>
    update?: Enumerable<auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput>
    updateMany?: Enumerable<auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput>
    deleteMany?: Enumerable<auth_permissionScalarWhereInput>
  }

  export type django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput = {
    create?: XOR<Enumerable<django_admin_logCreateWithoutDjango_content_typeInput>, Enumerable<django_admin_logUncheckedCreateWithoutDjango_content_typeInput>>
    connectOrCreate?: Enumerable<django_admin_logCreateOrConnectWithoutDjango_content_typeInput>
    upsert?: Enumerable<django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput>
    createMany?: django_admin_logCreateManyDjango_content_typeInputEnvelope
    set?: Enumerable<django_admin_logWhereUniqueInput>
    disconnect?: Enumerable<django_admin_logWhereUniqueInput>
    delete?: Enumerable<django_admin_logWhereUniqueInput>
    connect?: Enumerable<django_admin_logWhereUniqueInput>
    update?: Enumerable<django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput>
    updateMany?: Enumerable<django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput>
    deleteMany?: Enumerable<django_admin_logScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type ExplorationXQueryRequestCreateWithoutExplorationInput = {
    position: string
    QueryRequest: QueryRequestCreateNestedOneWithoutExplorationXQueryRequestInput
  }

  export type ExplorationXQueryRequestUncheckedCreateWithoutExplorationInput = {
    exploration_x_query_request_id?: number
    position: string
    query_request_rid: string
  }

  export type ExplorationXQueryRequestCreateOrConnectWithoutExplorationInput = {
    where: ExplorationXQueryRequestWhereUniqueInput
    create: XOR<ExplorationXQueryRequestCreateWithoutExplorationInput, ExplorationXQueryRequestUncheckedCreateWithoutExplorationInput>
  }

  export type ExplorationXQueryRequestCreateManyExplorationInputEnvelope = {
    data: Enumerable<ExplorationXQueryRequestCreateManyExplorationInput>
    skipDuplicates?: boolean
  }

  export type ExplorationXQueryRequestUpsertWithWhereUniqueWithoutExplorationInput = {
    where: ExplorationXQueryRequestWhereUniqueInput
    update: XOR<ExplorationXQueryRequestUpdateWithoutExplorationInput, ExplorationXQueryRequestUncheckedUpdateWithoutExplorationInput>
    create: XOR<ExplorationXQueryRequestCreateWithoutExplorationInput, ExplorationXQueryRequestUncheckedCreateWithoutExplorationInput>
  }

  export type ExplorationXQueryRequestUpdateWithWhereUniqueWithoutExplorationInput = {
    where: ExplorationXQueryRequestWhereUniqueInput
    data: XOR<ExplorationXQueryRequestUpdateWithoutExplorationInput, ExplorationXQueryRequestUncheckedUpdateWithoutExplorationInput>
  }

  export type ExplorationXQueryRequestUpdateManyWithWhereWithoutExplorationInput = {
    where: ExplorationXQueryRequestScalarWhereInput
    data: XOR<ExplorationXQueryRequestUpdateManyMutationInput, ExplorationXQueryRequestUncheckedUpdateManyWithoutExplorationXQueryRequestInput>
  }

  export type ExplorationXQueryRequestScalarWhereInput = {
    AND?: Enumerable<ExplorationXQueryRequestScalarWhereInput>
    OR?: Enumerable<ExplorationXQueryRequestScalarWhereInput>
    NOT?: Enumerable<ExplorationXQueryRequestScalarWhereInput>
    exploration_x_query_request_id?: IntFilter | number
    position?: StringFilter | string
    exploration_rid?: UuidFilter | string
    query_request_rid?: UuidFilter | string
  }

  export type ExplorationCreateWithoutExplorationXQueryRequestInput = {
    exploration_rid: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ExplorationUncheckedCreateWithoutExplorationXQueryRequestInput = {
    exploration_rid: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ExplorationCreateOrConnectWithoutExplorationXQueryRequestInput = {
    where: ExplorationWhereUniqueInput
    create: XOR<ExplorationCreateWithoutExplorationXQueryRequestInput, ExplorationUncheckedCreateWithoutExplorationXQueryRequestInput>
  }

  export type QueryRequestCreateWithoutExplorationXQueryRequestInput = {
    query_request_rid: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    request_date: Date | string
    completion_date?: Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QueryRequestUncheckedCreateWithoutExplorationXQueryRequestInput = {
    query_request_rid: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    request_date: Date | string
    completion_date?: Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QueryRequestCreateOrConnectWithoutExplorationXQueryRequestInput = {
    where: QueryRequestWhereUniqueInput
    create: XOR<QueryRequestCreateWithoutExplorationXQueryRequestInput, QueryRequestUncheckedCreateWithoutExplorationXQueryRequestInput>
  }

  export type ExplorationUpsertWithoutExplorationXQueryRequestInput = {
    update: XOR<ExplorationUpdateWithoutExplorationXQueryRequestInput, ExplorationUncheckedUpdateWithoutExplorationXQueryRequestInput>
    create: XOR<ExplorationCreateWithoutExplorationXQueryRequestInput, ExplorationUncheckedCreateWithoutExplorationXQueryRequestInput>
  }

  export type ExplorationUpdateWithoutExplorationXQueryRequestInput = {
    exploration_rid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ExplorationUncheckedUpdateWithoutExplorationXQueryRequestInput = {
    exploration_rid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type QueryRequestUpsertWithoutExplorationXQueryRequestInput = {
    update: XOR<QueryRequestUpdateWithoutExplorationXQueryRequestInput, QueryRequestUncheckedUpdateWithoutExplorationXQueryRequestInput>
    create: XOR<QueryRequestCreateWithoutExplorationXQueryRequestInput, QueryRequestUncheckedCreateWithoutExplorationXQueryRequestInput>
  }

  export type QueryRequestUpdateWithoutExplorationXQueryRequestInput = {
    query_request_rid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QueryRequestUncheckedUpdateWithoutExplorationXQueryRequestInput = {
    query_request_rid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    request_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    result?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExplorationXQueryRequestCreateWithoutQueryRequestInput = {
    position: string
    Exploration: ExplorationCreateNestedOneWithoutExplorationXQueryRequestInput
  }

  export type ExplorationXQueryRequestUncheckedCreateWithoutQueryRequestInput = {
    exploration_x_query_request_id?: number
    position: string
    exploration_rid: string
  }

  export type ExplorationXQueryRequestCreateOrConnectWithoutQueryRequestInput = {
    where: ExplorationXQueryRequestWhereUniqueInput
    create: XOR<ExplorationXQueryRequestCreateWithoutQueryRequestInput, ExplorationXQueryRequestUncheckedCreateWithoutQueryRequestInput>
  }

  export type ExplorationXQueryRequestCreateManyQueryRequestInputEnvelope = {
    data: Enumerable<ExplorationXQueryRequestCreateManyQueryRequestInput>
    skipDuplicates?: boolean
  }

  export type ExplorationXQueryRequestUpsertWithWhereUniqueWithoutQueryRequestInput = {
    where: ExplorationXQueryRequestWhereUniqueInput
    update: XOR<ExplorationXQueryRequestUpdateWithoutQueryRequestInput, ExplorationXQueryRequestUncheckedUpdateWithoutQueryRequestInput>
    create: XOR<ExplorationXQueryRequestCreateWithoutQueryRequestInput, ExplorationXQueryRequestUncheckedCreateWithoutQueryRequestInput>
  }

  export type ExplorationXQueryRequestUpdateWithWhereUniqueWithoutQueryRequestInput = {
    where: ExplorationXQueryRequestWhereUniqueInput
    data: XOR<ExplorationXQueryRequestUpdateWithoutQueryRequestInput, ExplorationXQueryRequestUncheckedUpdateWithoutQueryRequestInput>
  }

  export type ExplorationXQueryRequestUpdateManyWithWhereWithoutQueryRequestInput = {
    where: ExplorationXQueryRequestScalarWhereInput
    data: XOR<ExplorationXQueryRequestUpdateManyMutationInput, ExplorationXQueryRequestUncheckedUpdateManyWithoutExplorationXQueryRequestInput>
  }

  export type auth_group_permissionsCreateWithoutAuth_groupInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_group_permissionsInput
  }

  export type auth_group_permissionsUncheckedCreateWithoutAuth_groupInput = {
    id?: bigint | number
    permission_id: number
  }

  export type auth_group_permissionsCreateOrConnectWithoutAuth_groupInput = {
    where: auth_group_permissionsWhereUniqueInput
    create: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_group_permissionsCreateManyAuth_groupInputEnvelope = {
    data: Enumerable<auth_group_permissionsCreateManyAuth_groupInput>
    skipDuplicates?: boolean
  }

  export type auth_user_groupsCreateWithoutAuth_groupInput = {
    id?: bigint | number
    auth_user: auth_userCreateNestedOneWithoutAuth_user_groupsInput
  }

  export type auth_user_groupsUncheckedCreateWithoutAuth_groupInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_user_groupsCreateOrConnectWithoutAuth_groupInput = {
    where: auth_user_groupsWhereUniqueInput
    create: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_user_groupsCreateManyAuth_groupInputEnvelope = {
    data: Enumerable<auth_user_groupsCreateManyAuth_groupInput>
    skipDuplicates?: boolean
  }

  export type auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_group_permissionsWhereUniqueInput
    update: XOR<auth_group_permissionsUpdateWithoutAuth_groupInput, auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput>
    create: XOR<auth_group_permissionsCreateWithoutAuth_groupInput, auth_group_permissionsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_group_permissionsWhereUniqueInput
    data: XOR<auth_group_permissionsUpdateWithoutAuth_groupInput, auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput>
  }

  export type auth_group_permissionsUpdateManyWithWhereWithoutAuth_groupInput = {
    where: auth_group_permissionsScalarWhereInput
    data: XOR<auth_group_permissionsUpdateManyMutationInput, auth_group_permissionsUncheckedUpdateManyWithoutAuth_group_permissionsInput>
  }

  export type auth_group_permissionsScalarWhereInput = {
    AND?: Enumerable<auth_group_permissionsScalarWhereInput>
    OR?: Enumerable<auth_group_permissionsScalarWhereInput>
    NOT?: Enumerable<auth_group_permissionsScalarWhereInput>
    id?: BigIntFilter | bigint | number
    group_id?: IntFilter | number
    permission_id?: IntFilter | number
  }

  export type auth_user_groupsUpsertWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_user_groupsWhereUniqueInput
    update: XOR<auth_user_groupsUpdateWithoutAuth_groupInput, auth_user_groupsUncheckedUpdateWithoutAuth_groupInput>
    create: XOR<auth_user_groupsCreateWithoutAuth_groupInput, auth_user_groupsUncheckedCreateWithoutAuth_groupInput>
  }

  export type auth_user_groupsUpdateWithWhereUniqueWithoutAuth_groupInput = {
    where: auth_user_groupsWhereUniqueInput
    data: XOR<auth_user_groupsUpdateWithoutAuth_groupInput, auth_user_groupsUncheckedUpdateWithoutAuth_groupInput>
  }

  export type auth_user_groupsUpdateManyWithWhereWithoutAuth_groupInput = {
    where: auth_user_groupsScalarWhereInput
    data: XOR<auth_user_groupsUpdateManyMutationInput, auth_user_groupsUncheckedUpdateManyWithoutAuth_user_groupsInput>
  }

  export type auth_user_groupsScalarWhereInput = {
    AND?: Enumerable<auth_user_groupsScalarWhereInput>
    OR?: Enumerable<auth_user_groupsScalarWhereInput>
    NOT?: Enumerable<auth_user_groupsScalarWhereInput>
    id?: BigIntFilter | bigint | number
    user_id?: IntFilter | number
    group_id?: IntFilter | number
  }

  export type auth_permissionCreateWithoutAuth_group_permissionsInput = {
    name: string
    codename: string
    django_content_type: django_content_typeCreateNestedOneWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionCreateOrConnectWithoutAuth_group_permissionsInput = {
    where: auth_permissionWhereUniqueInput
    create: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
  }

  export type auth_groupCreateWithoutAuth_group_permissionsInput = {
    name: string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUncheckedCreateWithoutAuth_group_permissionsInput = {
    id?: number
    name: string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupCreateOrConnectWithoutAuth_group_permissionsInput = {
    where: auth_groupWhereUniqueInput
    create: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
  }

  export type auth_permissionUpsertWithoutAuth_group_permissionsInput = {
    update: XOR<auth_permissionUpdateWithoutAuth_group_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput>
    create: XOR<auth_permissionCreateWithoutAuth_group_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_group_permissionsInput>
  }

  export type auth_permissionUpdateWithoutAuth_group_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    django_content_type?: django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateWithoutAuth_group_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_groupUpsertWithoutAuth_group_permissionsInput = {
    update: XOR<auth_groupUpdateWithoutAuth_group_permissionsInput, auth_groupUncheckedUpdateWithoutAuth_group_permissionsInput>
    create: XOR<auth_groupCreateWithoutAuth_group_permissionsInput, auth_groupUncheckedCreateWithoutAuth_group_permissionsInput>
  }

  export type auth_groupUpdateWithoutAuth_group_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupUncheckedUpdateWithoutAuth_group_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_group_permissionsCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    auth_group: auth_groupCreateNestedOneWithoutAuth_group_permissionsInput
  }

  export type auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_group_permissionsCreateOrConnectWithoutAuth_permissionInput = {
    where: auth_group_permissionsWhereUniqueInput
    create: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_group_permissionsCreateManyAuth_permissionInputEnvelope = {
    data: Enumerable<auth_group_permissionsCreateManyAuth_permissionInput>
    skipDuplicates?: boolean
  }

  export type django_content_typeCreateWithoutAuth_permissionInput = {
    app_label: string
    model: string
    django_admin_log?: django_admin_logCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUncheckedCreateWithoutAuth_permissionInput = {
    id?: number
    app_label: string
    model: string
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeCreateOrConnectWithoutAuth_permissionInput = {
    where: django_content_typeWhereUniqueInput
    create: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    auth_user: auth_userCreateNestedOneWithoutAuth_user_user_permissionsInput
  }

  export type auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_user_user_permissionsCreateOrConnectWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsCreateManyAuth_permissionInputEnvelope = {
    data: Enumerable<auth_user_user_permissionsCreateManyAuth_permissionInput>
    skipDuplicates?: boolean
  }

  export type auth_group_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_group_permissionsWhereUniqueInput
    update: XOR<auth_group_permissionsUpdateWithoutAuth_permissionInput, auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput>
    create: XOR<auth_group_permissionsCreateWithoutAuth_permissionInput, auth_group_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_group_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_group_permissionsWhereUniqueInput
    data: XOR<auth_group_permissionsUpdateWithoutAuth_permissionInput, auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput>
  }

  export type auth_group_permissionsUpdateManyWithWhereWithoutAuth_permissionInput = {
    where: auth_group_permissionsScalarWhereInput
    data: XOR<auth_group_permissionsUpdateManyMutationInput, auth_group_permissionsUncheckedUpdateManyWithoutAuth_group_permissionsInput>
  }

  export type django_content_typeUpsertWithoutAuth_permissionInput = {
    update: XOR<django_content_typeUpdateWithoutAuth_permissionInput, django_content_typeUncheckedUpdateWithoutAuth_permissionInput>
    create: XOR<django_content_typeCreateWithoutAuth_permissionInput, django_content_typeUncheckedCreateWithoutAuth_permissionInput>
  }

  export type django_content_typeUpdateWithoutAuth_permissionInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    django_admin_log?: django_admin_logUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeUncheckedUpdateWithoutAuth_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    update: XOR<auth_user_user_permissionsUpdateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput>
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    data: XOR<auth_user_user_permissionsUpdateWithoutAuth_permissionInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput>
  }

  export type auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_permissionInput = {
    where: auth_user_user_permissionsScalarWhereInput
    data: XOR<auth_user_user_permissionsUpdateManyMutationInput, auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_user_user_permissionsInput>
  }

  export type auth_user_user_permissionsScalarWhereInput = {
    AND?: Enumerable<auth_user_user_permissionsScalarWhereInput>
    OR?: Enumerable<auth_user_user_permissionsScalarWhereInput>
    NOT?: Enumerable<auth_user_user_permissionsScalarWhereInput>
    id?: BigIntFilter | bigint | number
    user_id?: IntFilter | number
    permission_id?: IntFilter | number
  }

  export type auth_user_groupsCreateWithoutAuth_userInput = {
    id?: bigint | number
    auth_group: auth_groupCreateNestedOneWithoutAuth_user_groupsInput
  }

  export type auth_user_groupsUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_user_groupsCreateOrConnectWithoutAuth_userInput = {
    where: auth_user_groupsWhereUniqueInput
    create: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_groupsCreateManyAuth_userInputEnvelope = {
    data: Enumerable<auth_user_groupsCreateManyAuth_userInput>
    skipDuplicates?: boolean
  }

  export type auth_user_user_permissionsCreateWithoutAuth_userInput = {
    id?: bigint | number
    auth_permission: auth_permissionCreateNestedOneWithoutAuth_user_user_permissionsInput
  }

  export type auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number
    permission_id: number
  }

  export type auth_user_user_permissionsCreateOrConnectWithoutAuth_userInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_user_permissionsCreateManyAuth_userInputEnvelope = {
    data: Enumerable<auth_user_user_permissionsCreateManyAuth_userInput>
    skipDuplicates?: boolean
  }

  export type django_admin_logCreateWithoutAuth_userInput = {
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    django_content_type?: django_content_typeCreateNestedOneWithoutDjango_admin_logInput
  }

  export type django_admin_logUncheckedCreateWithoutAuth_userInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
  }

  export type django_admin_logCreateOrConnectWithoutAuth_userInput = {
    where: django_admin_logWhereUniqueInput
    create: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput>
  }

  export type django_admin_logCreateManyAuth_userInputEnvelope = {
    data: Enumerable<django_admin_logCreateManyAuth_userInput>
    skipDuplicates?: boolean
  }

  export type auth_user_groupsUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_groupsWhereUniqueInput
    update: XOR<auth_user_groupsUpdateWithoutAuth_userInput, auth_user_groupsUncheckedUpdateWithoutAuth_userInput>
    create: XOR<auth_user_groupsCreateWithoutAuth_userInput, auth_user_groupsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_groupsUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_groupsWhereUniqueInput
    data: XOR<auth_user_groupsUpdateWithoutAuth_userInput, auth_user_groupsUncheckedUpdateWithoutAuth_userInput>
  }

  export type auth_user_groupsUpdateManyWithWhereWithoutAuth_userInput = {
    where: auth_user_groupsScalarWhereInput
    data: XOR<auth_user_groupsUpdateManyMutationInput, auth_user_groupsUncheckedUpdateManyWithoutAuth_user_groupsInput>
  }

  export type auth_user_user_permissionsUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    update: XOR<auth_user_user_permissionsUpdateWithoutAuth_userInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput>
    create: XOR<auth_user_user_permissionsCreateWithoutAuth_userInput, auth_user_user_permissionsUncheckedCreateWithoutAuth_userInput>
  }

  export type auth_user_user_permissionsUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: auth_user_user_permissionsWhereUniqueInput
    data: XOR<auth_user_user_permissionsUpdateWithoutAuth_userInput, auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput>
  }

  export type auth_user_user_permissionsUpdateManyWithWhereWithoutAuth_userInput = {
    where: auth_user_user_permissionsScalarWhereInput
    data: XOR<auth_user_user_permissionsUpdateManyMutationInput, auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_user_user_permissionsInput>
  }

  export type django_admin_logUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: django_admin_logWhereUniqueInput
    update: XOR<django_admin_logUpdateWithoutAuth_userInput, django_admin_logUncheckedUpdateWithoutAuth_userInput>
    create: XOR<django_admin_logCreateWithoutAuth_userInput, django_admin_logUncheckedCreateWithoutAuth_userInput>
  }

  export type django_admin_logUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: django_admin_logWhereUniqueInput
    data: XOR<django_admin_logUpdateWithoutAuth_userInput, django_admin_logUncheckedUpdateWithoutAuth_userInput>
  }

  export type django_admin_logUpdateManyWithWhereWithoutAuth_userInput = {
    where: django_admin_logScalarWhereInput
    data: XOR<django_admin_logUpdateManyMutationInput, django_admin_logUncheckedUpdateManyWithoutDjango_admin_logInput>
  }

  export type django_admin_logScalarWhereInput = {
    AND?: Enumerable<django_admin_logScalarWhereInput>
    OR?: Enumerable<django_admin_logScalarWhereInput>
    NOT?: Enumerable<django_admin_logScalarWhereInput>
    id?: IntFilter | number
    action_time?: DateTimeFilter | Date | string
    object_id?: StringNullableFilter | string | null
    object_repr?: StringFilter | string
    action_flag?: IntFilter | number
    change_message?: StringFilter | string
    content_type_id?: IntNullableFilter | number | null
    user_id?: IntFilter | number
  }

  export type auth_groupCreateWithoutAuth_user_groupsInput = {
    name: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupUncheckedCreateWithoutAuth_user_groupsInput = {
    id?: number
    name: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_groupInput
  }

  export type auth_groupCreateOrConnectWithoutAuth_user_groupsInput = {
    where: auth_groupWhereUniqueInput
    create: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
  }

  export type auth_userCreateWithoutAuth_user_groupsInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutAuth_user_groupsInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutAuth_user_groupsInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
  }

  export type auth_groupUpsertWithoutAuth_user_groupsInput = {
    update: XOR<auth_groupUpdateWithoutAuth_user_groupsInput, auth_groupUncheckedUpdateWithoutAuth_user_groupsInput>
    create: XOR<auth_groupCreateWithoutAuth_user_groupsInput, auth_groupUncheckedCreateWithoutAuth_user_groupsInput>
  }

  export type auth_groupUpdateWithoutAuth_user_groupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_groupUncheckedUpdateWithoutAuth_user_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_groupNestedInput
  }

  export type auth_userUpsertWithoutAuth_user_groupsInput = {
    update: XOR<auth_userUpdateWithoutAuth_user_groupsInput, auth_userUncheckedUpdateWithoutAuth_user_groupsInput>
    create: XOR<auth_userCreateWithoutAuth_user_groupsInput, auth_userUncheckedCreateWithoutAuth_user_groupsInput>
  }

  export type auth_userUpdateWithoutAuth_user_groupsInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutAuth_user_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_permissionCreateWithoutAuth_user_user_permissionsInput = {
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput
    django_content_type: django_content_typeCreateNestedOneWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput = {
    id?: number
    name: string
    content_type_id: number
    codename: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionCreateOrConnectWithoutAuth_user_user_permissionsInput = {
    where: auth_permissionWhereUniqueInput
    create: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_userCreateWithoutAuth_user_user_permissionsInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput
    django_admin_log?: django_admin_logUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutAuth_user_user_permissionsInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_permissionUpsertWithoutAuth_user_user_permissionsInput = {
    update: XOR<auth_permissionUpdateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput>
    create: XOR<auth_permissionCreateWithoutAuth_user_user_permissionsInput, auth_permissionUncheckedCreateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_permissionUpdateWithoutAuth_user_user_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput
    django_content_type?: django_content_typeUpdateOneRequiredWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateWithoutAuth_user_user_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    content_type_id?: IntFieldUpdateOperationsInput | number
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_userUpsertWithoutAuth_user_user_permissionsInput = {
    update: XOR<auth_userUpdateWithoutAuth_user_user_permissionsInput, auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput>
    create: XOR<auth_userCreateWithoutAuth_user_user_permissionsInput, auth_userUncheckedCreateWithoutAuth_user_user_permissionsInput>
  }

  export type auth_userUpdateWithoutAuth_user_user_permissionsInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutAuth_user_user_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput
    django_admin_log?: django_admin_logUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type django_content_typeCreateWithoutDjango_admin_logInput = {
    app_label: string
    model: string
    auth_permission?: auth_permissionCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeUncheckedCreateWithoutDjango_admin_logInput = {
    id?: number
    app_label: string
    model: string
    auth_permission?: auth_permissionUncheckedCreateNestedManyWithoutDjango_content_typeInput
  }

  export type django_content_typeCreateOrConnectWithoutDjango_admin_logInput = {
    where: django_content_typeWhereUniqueInput
    create: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
  }

  export type auth_userCreateWithoutDjango_admin_logInput = {
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutDjango_admin_logInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: Date | string
    auth_user_groups?: auth_user_groupsUncheckedCreateNestedManyWithoutAuth_userInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutDjango_admin_logInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
  }

  export type django_content_typeUpsertWithoutDjango_admin_logInput = {
    update: XOR<django_content_typeUpdateWithoutDjango_admin_logInput, django_content_typeUncheckedUpdateWithoutDjango_admin_logInput>
    create: XOR<django_content_typeCreateWithoutDjango_admin_logInput, django_content_typeUncheckedCreateWithoutDjango_admin_logInput>
  }

  export type django_content_typeUpdateWithoutDjango_admin_logInput = {
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type django_content_typeUncheckedUpdateWithoutDjango_admin_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    app_label?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    auth_permission?: auth_permissionUncheckedUpdateManyWithoutDjango_content_typeNestedInput
  }

  export type auth_userUpsertWithoutDjango_admin_logInput = {
    update: XOR<auth_userUpdateWithoutDjango_admin_logInput, auth_userUncheckedUpdateWithoutDjango_admin_logInput>
    create: XOR<auth_userCreateWithoutDjango_admin_logInput, auth_userUncheckedCreateWithoutDjango_admin_logInput>
  }

  export type auth_userUpdateWithoutDjango_admin_logInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutDjango_admin_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_user_groups?: auth_user_groupsUncheckedUpdateManyWithoutAuth_userNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_permissionCreateWithoutDjango_content_typeInput = {
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsCreateNestedManyWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionUncheckedCreateWithoutDjango_content_typeInput = {
    id?: number
    name: string
    codename: string
    auth_group_permissions?: auth_group_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedCreateNestedManyWithoutAuth_permissionInput
  }

  export type auth_permissionCreateOrConnectWithoutDjango_content_typeInput = {
    where: auth_permissionWhereUniqueInput
    create: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type auth_permissionCreateManyDjango_content_typeInputEnvelope = {
    data: Enumerable<auth_permissionCreateManyDjango_content_typeInput>
    skipDuplicates?: boolean
  }

  export type django_admin_logCreateWithoutDjango_content_typeInput = {
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    auth_user: auth_userCreateNestedOneWithoutDjango_admin_logInput
  }

  export type django_admin_logUncheckedCreateWithoutDjango_content_typeInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    user_id: number
  }

  export type django_admin_logCreateOrConnectWithoutDjango_content_typeInput = {
    where: django_admin_logWhereUniqueInput
    create: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type django_admin_logCreateManyDjango_content_typeInputEnvelope = {
    data: Enumerable<django_admin_logCreateManyDjango_content_typeInput>
    skipDuplicates?: boolean
  }

  export type auth_permissionUpsertWithWhereUniqueWithoutDjango_content_typeInput = {
    where: auth_permissionWhereUniqueInput
    update: XOR<auth_permissionUpdateWithoutDjango_content_typeInput, auth_permissionUncheckedUpdateWithoutDjango_content_typeInput>
    create: XOR<auth_permissionCreateWithoutDjango_content_typeInput, auth_permissionUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type auth_permissionUpdateWithWhereUniqueWithoutDjango_content_typeInput = {
    where: auth_permissionWhereUniqueInput
    data: XOR<auth_permissionUpdateWithoutDjango_content_typeInput, auth_permissionUncheckedUpdateWithoutDjango_content_typeInput>
  }

  export type auth_permissionUpdateManyWithWhereWithoutDjango_content_typeInput = {
    where: auth_permissionScalarWhereInput
    data: XOR<auth_permissionUpdateManyMutationInput, auth_permissionUncheckedUpdateManyWithoutAuth_permissionInput>
  }

  export type auth_permissionScalarWhereInput = {
    AND?: Enumerable<auth_permissionScalarWhereInput>
    OR?: Enumerable<auth_permissionScalarWhereInput>
    NOT?: Enumerable<auth_permissionScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    content_type_id?: IntFilter | number
    codename?: StringFilter | string
  }

  export type django_admin_logUpsertWithWhereUniqueWithoutDjango_content_typeInput = {
    where: django_admin_logWhereUniqueInput
    update: XOR<django_admin_logUpdateWithoutDjango_content_typeInput, django_admin_logUncheckedUpdateWithoutDjango_content_typeInput>
    create: XOR<django_admin_logCreateWithoutDjango_content_typeInput, django_admin_logUncheckedCreateWithoutDjango_content_typeInput>
  }

  export type django_admin_logUpdateWithWhereUniqueWithoutDjango_content_typeInput = {
    where: django_admin_logWhereUniqueInput
    data: XOR<django_admin_logUpdateWithoutDjango_content_typeInput, django_admin_logUncheckedUpdateWithoutDjango_content_typeInput>
  }

  export type django_admin_logUpdateManyWithWhereWithoutDjango_content_typeInput = {
    where: django_admin_logScalarWhereInput
    data: XOR<django_admin_logUpdateManyMutationInput, django_admin_logUncheckedUpdateManyWithoutDjango_admin_logInput>
  }

  export type ExplorationXQueryRequestCreateManyExplorationInput = {
    exploration_x_query_request_id?: number
    position: string
    query_request_rid: string
  }

  export type ExplorationXQueryRequestUpdateWithoutExplorationInput = {
    position?: StringFieldUpdateOperationsInput | string
    QueryRequest?: QueryRequestUpdateOneRequiredWithoutExplorationXQueryRequestNestedInput
  }

  export type ExplorationXQueryRequestUncheckedUpdateWithoutExplorationInput = {
    exploration_x_query_request_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    query_request_rid?: StringFieldUpdateOperationsInput | string
  }

  export type ExplorationXQueryRequestUncheckedUpdateManyWithoutExplorationXQueryRequestInput = {
    exploration_x_query_request_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    query_request_rid?: StringFieldUpdateOperationsInput | string
  }

  export type ExplorationXQueryRequestCreateManyQueryRequestInput = {
    exploration_x_query_request_id?: number
    position: string
    exploration_rid: string
  }

  export type ExplorationXQueryRequestUpdateWithoutQueryRequestInput = {
    position?: StringFieldUpdateOperationsInput | string
    Exploration?: ExplorationUpdateOneRequiredWithoutExplorationXQueryRequestNestedInput
  }

  export type ExplorationXQueryRequestUncheckedUpdateWithoutQueryRequestInput = {
    exploration_x_query_request_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    exploration_rid?: StringFieldUpdateOperationsInput | string
  }

  export type auth_group_permissionsCreateManyAuth_groupInput = {
    id?: bigint | number
    permission_id: number
  }

  export type auth_user_groupsCreateManyAuth_groupInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_group_permissionsUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
  }

  export type auth_group_permissionsUncheckedUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_group_permissionsUncheckedUpdateManyWithoutAuth_group_permissionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_groupsNestedInput
  }

  export type auth_user_groupsUncheckedUpdateWithoutAuth_groupInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsUncheckedUpdateManyWithoutAuth_user_groupsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_group_permissionsCreateManyAuth_permissionInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_user_user_permissionsCreateManyAuth_permissionInput = {
    id?: bigint | number
    user_id: number
  }

  export type auth_group_permissionsUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_group_permissionsNestedInput
  }

  export type auth_group_permissionsUncheckedUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_user?: auth_userUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
  }

  export type auth_user_user_permissionsUncheckedUpdateWithoutAuth_permissionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_user_user_permissionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_groupsCreateManyAuth_userInput = {
    id?: bigint | number
    group_id: number
  }

  export type auth_user_user_permissionsCreateManyAuth_userInput = {
    id?: bigint | number
    permission_id: number
  }

  export type django_admin_logCreateManyAuth_userInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    content_type_id?: number | null
  }

  export type auth_user_groupsUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_group?: auth_groupUpdateOneRequiredWithoutAuth_user_groupsNestedInput
  }

  export type auth_user_groupsUncheckedUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type auth_user_user_permissionsUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    auth_permission?: auth_permissionUpdateOneRequiredWithoutAuth_user_user_permissionsNestedInput
  }

  export type auth_user_user_permissionsUncheckedUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type django_admin_logUpdateWithoutAuth_userInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    django_content_type?: django_content_typeUpdateOneWithoutDjango_admin_logNestedInput
  }

  export type django_admin_logUncheckedUpdateWithoutAuth_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type django_admin_logUncheckedUpdateManyWithoutDjango_admin_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    content_type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type auth_permissionCreateManyDjango_content_typeInput = {
    id?: number
    name: string
    codename: string
  }

  export type django_admin_logCreateManyDjango_content_typeInput = {
    id?: number
    action_time: Date | string
    object_id?: string | null
    object_repr: string
    action_flag: number
    change_message: string
    user_id: number
  }

  export type auth_permissionUpdateWithoutDjango_content_typeInput = {
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUpdateManyWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateWithoutDjango_content_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
    auth_group_permissions?: auth_group_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
    auth_user_user_permissions?: auth_user_user_permissionsUncheckedUpdateManyWithoutAuth_permissionNestedInput
  }

  export type auth_permissionUncheckedUpdateManyWithoutAuth_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    codename?: StringFieldUpdateOperationsInput | string
  }

  export type django_admin_logUpdateWithoutDjango_content_typeInput = {
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    auth_user?: auth_userUpdateOneRequiredWithoutDjango_admin_logNestedInput
  }

  export type django_admin_logUncheckedUpdateWithoutDjango_content_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: NullableStringFieldUpdateOperationsInput | string | null
    object_repr?: StringFieldUpdateOperationsInput | string
    action_flag?: IntFieldUpdateOperationsInput | number
    change_message?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
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