Object.defineProperty(exports, "__esModule", { value: true });

const {
    PrismaClientKnownRequestError,
    PrismaClientUnknownRequestError,
    PrismaClientRustPanicError,
    PrismaClientInitializationError,
    PrismaClientValidationError,
    NotFoundError,
    decompressFromBase64,
    getPrismaClient,
    sqltag,
    empty,
    join,
    raw,
    Decimal,
    Debug,
    objectEnumValues,
    makeStrictEnum,
    Extensions,
    warnOnce,
    defineDmmfProperty,
} = require("./runtime/library");

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 4.14.0
 * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
 */
Prisma.prismaVersion = {
    client: "4.14.0",
    engine: "d9a4c5988f480fa576d43970d5a23641aa77bc9c",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = () => (val) => val;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
    DbNull: objectEnumValues.classes.DbNull,
    JsonNull: objectEnumValues.classes.JsonNull,
    AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

/**
 * Enums
 */

exports.Prisma.Auth_groupScalarFieldEnum = {
    id: "id",
    name: "name",
};

exports.Prisma.Auth_group_permissionsScalarFieldEnum = {
    id: "id",
    group_id: "group_id",
    permission_id: "permission_id",
};

exports.Prisma.Auth_permissionScalarFieldEnum = {
    id: "id",
    name: "name",
    content_type_id: "content_type_id",
    codename: "codename",
};

exports.Prisma.Auth_userScalarFieldEnum = {
    id: "id",
    password: "password",
    last_login: "last_login",
    is_superuser: "is_superuser",
    username: "username",
    first_name: "first_name",
    last_name: "last_name",
    email: "email",
    is_staff: "is_staff",
    is_active: "is_active",
    date_joined: "date_joined",
};

exports.Prisma.Auth_user_groupsScalarFieldEnum = {
    id: "id",
    user_id: "user_id",
    group_id: "group_id",
};

exports.Prisma.Auth_user_user_permissionsScalarFieldEnum = {
    id: "id",
    user_id: "user_id",
    permission_id: "permission_id",
};

exports.Prisma.Django_admin_logScalarFieldEnum = {
    id: "id",
    action_time: "action_time",
    object_id: "object_id",
    object_repr: "object_repr",
    action_flag: "action_flag",
    change_message: "change_message",
    content_type_id: "content_type_id",
    user_id: "user_id",
};

exports.Prisma.Django_content_typeScalarFieldEnum = {
    id: "id",
    app_label: "app_label",
    model: "model",
};

exports.Prisma.Django_migrationsScalarFieldEnum = {
    id: "id",
    app: "app",
    name: "name",
    applied: "applied",
};

exports.Prisma.Django_sessionScalarFieldEnum = {
    session_key: "session_key",
    session_data: "session_data",
    expire_date: "expire_date",
};

exports.Prisma.ExplorationScalarFieldEnum = {
    exploration_rid: "exploration_rid",
    metadata: "metadata",
};

exports.Prisma.ExplorationXQueryRequestScalarFieldEnum = {
    exploration_x_query_request_id: "exploration_x_query_request_id",
    position: "position",
    exploration_rid: "exploration_rid",
    query_request_rid: "query_request_rid",
};

exports.Prisma.JsonNullValueFilter = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull,
    AnyNull: Prisma.AnyNull,
};

exports.Prisma.JsonNullValueInput = {
    JsonNull: Prisma.JsonNull,
};

exports.Prisma.NullableJsonNullValueInput = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull,
};

exports.Prisma.QueryMode = {
    default: "default",
    insensitive: "insensitive",
};

exports.Prisma.QueryRequestScalarFieldEnum = {
    query_request_rid: "query_request_rid",
    status: "status",
    input: "input",
    request_date: "request_date",
    completion_date: "completion_date",
    result: "result",
};

exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc",
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: "ReadUncommitted",
    ReadCommitted: "ReadCommitted",
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable",
});

exports.Prisma.ModelName = {
    Exploration: "Exploration",
    ExplorationXQueryRequest: "ExplorationXQueryRequest",
    QueryRequest: "QueryRequest",
    auth_group: "auth_group",
    auth_group_permissions: "auth_group_permissions",
    auth_permission: "auth_permission",
    auth_user: "auth_user",
    auth_user_groups: "auth_user_groups",
    auth_user_user_permissions: "auth_user_user_permissions",
    django_admin_log: "django_admin_log",
    django_content_type: "django_content_type",
    django_migrations: "django_migrations",
    django_session: "django_session",
};
/**
 * Create the Client
 */
const config = {
    generator: {
        name: "client",
        provider: {
            fromEnvVar: null,
            value: "prisma-client-js",
        },
        output: {
            value: "/Users/kadhirvelmanickam/Desktop/Projects/uncoverrx/User/packages/uncoverrx-prisma/prisma/src",
            fromEnvVar: null,
        },
        config: {
            engineType: "library",
        },
        binaryTargets: [],
        previewFeatures: [],
        isCustomOutput: true,
    },
    relativeEnvPaths: {
        rootEnvPath: "../../.env",
        schemaEnvPath: "../../.env",
    },
    relativePath: "..",
    clientVersion: "4.14.0",
    engineVersion: "d9a4c5988f480fa576d43970d5a23641aa77bc9c",
    datasourceNames: ["db"],
    activeProvider: "postgresql",
    dataProxy: false,
    postinstall: false,
};

const fs = require("fs");

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
    warnOnce(
        "bundled-warning-1",
        "Your generated Prisma Client could not immediately find its `schema.prisma`, falling back to finding it via the current working directory.",
    );
    warnOnce(
        "bundled-warning-2",
        "We are interested in learning about your project setup. We'd appreciate if you could take the time to share some information with us.",
    );
    warnOnce("bundled-warning-3", "Please help us by answering a few questions: https://pris.ly/bundler-investigation");
    config.dirname = path.join(process.cwd(), "prisma/src");
    config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
    '{"models":{"Exploration":{"dbName":null,"fields":[{"name":"exploration_rid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"metadata","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"ExplorationXQueryRequest","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ExplorationXQueryRequest","relationName":"ExplorationToExplorationXQueryRequest","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"ExplorationXQueryRequest":{"dbName":null,"fields":[{"name":"exploration_x_query_request_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"position","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"exploration_rid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"query_request_rid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"Exploration","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Exploration","relationName":"ExplorationToExplorationXQueryRequest","relationFromFields":["exploration_rid"],"relationToFields":["exploration_rid"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"QueryRequest","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"QueryRequest","relationName":"ExplorationXQueryRequestToQueryRequest","relationFromFields":["query_request_rid"],"relationToFields":["query_request_rid"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info."},"QueryRequest":{"dbName":null,"fields":[{"name":"query_request_rid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"input","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"request_date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"completion_date","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"result","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"ExplorationXQueryRequest","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ExplorationXQueryRequest","relationName":"ExplorationXQueryRequestToQueryRequest","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"auth_group":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"auth_group_permissions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_group_permissions","relationName":"auth_groupToauth_group_permissions","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"auth_user_groups","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_user_groups","relationName":"auth_groupToauth_user_groups","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"auth_group_permissions":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"group_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"permission_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"auth_permission","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_permission","relationName":"auth_group_permissionsToauth_permission","relationFromFields":["permission_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"auth_group","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_group","relationName":"auth_groupToauth_group_permissions","relationFromFields":["group_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["group_id","permission_id"]],"uniqueIndexes":[{"name":null,"fields":["group_id","permission_id"]}],"isGenerated":false,"documentation":"This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info."},"auth_permission":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content_type_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"codename","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"auth_group_permissions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_group_permissions","relationName":"auth_group_permissionsToauth_permission","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"django_content_type","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"django_content_type","relationName":"auth_permissionTodjango_content_type","relationFromFields":["content_type_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"auth_user_user_permissions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_user_user_permissions","relationName":"auth_permissionToauth_user_user_permissions","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["content_type_id","codename"]],"uniqueIndexes":[{"name":null,"fields":["content_type_id","codename"]}],"isGenerated":false,"documentation":"This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info."},"auth_user":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"last_login","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_superuser","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"first_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"last_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"is_staff","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"is_active","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"date_joined","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"auth_user_groups","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_user_groups","relationName":"auth_userToauth_user_groups","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"auth_user_user_permissions","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_user_user_permissions","relationName":"auth_userToauth_user_user_permissions","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"django_admin_log","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"django_admin_log","relationName":"auth_userTodjango_admin_log","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"auth_user_groups":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"group_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"auth_group","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_group","relationName":"auth_groupToauth_user_groups","relationFromFields":["group_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"auth_user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_user","relationName":"auth_userToauth_user_groups","relationFromFields":["user_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["user_id","group_id"]],"uniqueIndexes":[{"name":null,"fields":["user_id","group_id"]}],"isGenerated":false,"documentation":"This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info."},"auth_user_user_permissions":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"permission_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"auth_permission","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_permission","relationName":"auth_permissionToauth_user_user_permissions","relationFromFields":["permission_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"auth_user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_user","relationName":"auth_userToauth_user_user_permissions","relationFromFields":["user_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["user_id","permission_id"]],"uniqueIndexes":[{"name":null,"fields":["user_id","permission_id"]}],"isGenerated":false,"documentation":"This model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info."},"django_admin_log":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"action_time","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"object_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"object_repr","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"action_flag","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"change_message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content_type_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"django_content_type","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"django_content_type","relationName":"django_admin_logTodjango_content_type","relationFromFields":["content_type_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false},{"name":"auth_user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_user","relationName":"auth_userTodjango_admin_log","relationFromFields":["user_id"],"relationToFields":["id"],"relationOnDelete":"NoAction","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\\\\nThis model has constraints using non-default deferring rules and requires additional setup for migrations. Visit https://pris.ly/d/constraint-deferring for more info."},"django_content_type":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"app_label","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"model","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"auth_permission","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"auth_permission","relationName":"auth_permissionTodjango_content_type","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"django_admin_log","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"django_admin_log","relationName":"django_admin_logTodjango_content_type","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[["app_label","model"]],"uniqueIndexes":[{"name":null,"fields":["app_label","model"]}],"isGenerated":false},"django_migrations":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"app","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"applied","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"django_session":{"dbName":null,"fields":[{"name":"session_key","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"session_data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"expire_date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);

const { warnEnvConflicts } = require("./runtime/library");

warnEnvConflicts({
    rootEnvPath:
        config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath:
        config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "prisma/src/libquery_engine-darwin.dylib.node");
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/src/schema.prisma");
