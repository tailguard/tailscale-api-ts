/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConfigurationAuditLog = {
    /**
     * Timestamp of the audit log event, in RFC 3339 format.
     */
    eventTime: string;
    /**
     * The type of log (always "CONFIG").
     */
    type: ConfigurationAuditLog.type;
    /**
     * Timestamp recording the time that the audit log rate limiter enqueued the record to be logged at a future time, in RFC 3339 format.
     */
    deferredAt?: string;
    /**
     * Identifier assigned to one or more audit log events, all of which are the result of a single operation.
     */
    eventGroupID: string;
    /**
     * The initiator of the action that generated the event, typically an API or user interface, like the Tailscale admin panel.
     */
    origin: ConfigurationAuditLog.origin;
    /**
     * The person who caused the action related to this event.
     */
    actor: {
        /**
         * The ID (user ID or node ID) of the actor.
         */
        id?: string;
        /**
         * The entity type of the actor.
         */
        type?: ConfigurationAuditLog.type;
        /**
         * The login name of the actor at time of the action.
         */
        loginName?: string;
        /**
         * The display name of the actor at time of the action.
         */
        displayName?: string;
        /**
         * Indicates the tags owning a node. Its value is only set if `type` is `NODE`.
         */
        tags?: Array<string>;
    };
    /**
     * The object of this event's action.
     */
    target: {
        /**
         * The unique ID (user id, tailnet SID, or node id) of the target.
         */
        id?: string;
        /**
         * Name of the entity at time of the action.
         */
        name?: string;
        /**
         * The entity type of Target.
         */
        type?: ConfigurationAuditLog.type;
        /**
         * Indicates whether the target is ephemeral. Its value should only be set if `type` is `NODE``.
         */
        isEphemeral?: boolean;
        /**
         * The property name on this target which was updated by the event. When empty, the event didn't update any fields on this target.
         */
        property?: ConfigurationAuditLog.property;
    };
    /**
     * The type of change attempted against the `target`.
     */
    action: ConfigurationAuditLog.action;
    /**
     * The value of `target.property`` prior to the event.
     */
    old?: (string | number | boolean | Record<string, any>);
    /**
     * The value of `target.property` after the event.
     */
    new?: (string | number | boolean | Record<string, any>);
    /**
     * Additional information about the event, such as a client-provided reason, if it exists.
     */
    actionDetails?: string;
    /**
     * Provided when the configuration change failed to be completed. It is a user-presentable reason for the failure.
     */
    error?: string;
};
export namespace ConfigurationAuditLog {
    /**
     * The type of log (always "CONFIG").
     */
    export enum type {
        CONFIG = 'CONFIG',
    }
    /**
     * The initiator of the action that generated the event, typically an API or user interface, like the Tailscale admin panel.
     */
    export enum origin {
        ADMIN_CONSOLE = 'ADMIN_CONSOLE',
        CONFIG_API = 'CONFIG_API',
        CONTROL = 'CONTROL',
        IDENTITY_PROVIDER = 'IDENTITY_PROVIDER',
        NODE = 'NODE',
        SUPPORT_REQUEST = 'SUPPORT_REQUEST',
        STRIPE = 'STRIPE',
        SECURITY_NOTIFICATION = 'SECURITY_NOTIFICATION',
        LEGAL_NOTIFICATION = 'LEGAL_NOTIFICATION',
    }
    /**
     * The property name on this target which was updated by the event. When empty, the event didn't update any fields on this target.
     */
    export enum property {
        ACL = 'ACL',
        ACL_TAGS = 'ACL_TAGS',
        ACCOUNT_EMAIL = 'ACCOUNT_EMAIL',
        ADDRESS = 'ADDRESS',
        ALLOWED_IPS = 'ALLOWED_IPS',
        AUTO_APPROVED_ROUTES = 'AUTO_APPROVED_ROUTES',
        ATTRIBUTES = 'ATTRIBUTES',
        BILLING_OWNER = 'BILLING_OWNER',
        COLLECT_SERVICES = 'COLLECT_SERVICES',
        COLLECT_POSTURE_IDENTITY = 'COLLECT_POSTURE_IDENTITY',
        MULLVAD_VPN = 'MULLVAD_VPN',
        DNS_CONFIG = 'DNS_CONFIG',
        EMAIL = 'EMAIL',
        EXIT_NODE = 'EXIT_NODE',
        FEATURE = 'FEATURE',
        FILE_SHARING = 'FILE_SHARING',
        HTTPS = 'HTTPS',
        KEY_EXPIRY_TIME = 'KEY_EXPIRY_TIME',
        KEY_EXPIRY = 'KEY_EXPIRY',
        LOG_EXIT_FLOWS = 'LOG_EXIT_FLOWS',
        LOGSTREAM_ENDPOINT = 'LOGSTREAM_ENDPOINT',
        MAGIC_DNS = 'MAGIC_DNS',
        MACHINE_AUTH_NEEDED = 'MACHINE_AUTH_NEEDED',
        MACHINE_APPROVAL_NEEDED = 'MACHINE_APPROVAL_NEEDED',
        USER_APPROVAL_REQUIRED = 'USER_APPROVAL_REQUIRED',
        MACHINE_NAME = 'MACHINE_NAME',
        MAX_KEY_DURATION = 'MAX_KEY_DURATION',
        NETWORK_FLOW_LOGGING = 'NETWORK_FLOW_LOGGING',
        GEOSTEERING = 'GEOSTEERING',
        NODE_SHARE = 'NODE_SHARE',
        TAILNET_INVITE = 'TAILNET_INVITE',
        PAYMENT_INFO = 'PAYMENT_INFO',
        POSTURE_IDENTITY = 'POSTURE_IDENTITY',
        POSTURE_INTEGRATION = 'POSTURE_INTEGRATION',
        USER_ROLE = 'USER_ROLE',
        SCIM = 'SCIM',
        SECURITY_EMAIL = 'SECURITY_EMAIL',
        STRIPE_CUSTOMER_ID = 'STRIPE_CUSTOMER_ID',
        SUBSCRIPTION = 'SUBSCRIPTION',
        SUBSCRIBED_EVENTS = 'SUBSCRIBED_EVENTS',
        SUPPORT_EMAIL = 'SUPPORT_EMAIL',
        SECRET = 'SECRET',
        TCD = 'TCD',
        TKA = 'TKA',
        AUTH_PROVIDER = 'AUTH_PROVIDER',
    }
    /**
     * The type of change attempted against the `target`.
     */
    export enum action {
        LOGIN = 'LOGIN',
        LOGOUT = 'LOGOUT',
        CREATE = 'CREATE',
        UPDATE = 'UPDATE',
        DELETE = 'DELETE',
        CANCEL = 'CANCEL',
        REVOKE = 'REVOKE',
        APPROVE = 'APPROVE',
        SUSPEND = 'SUSPEND',
        RESTORE = 'RESTORE',
        ENABLE = 'ENABLE',
        DISABLE = 'DISABLE',
        ACCEPT = 'ACCEPT',
        EXPIRED = 'EXPIRED',
        PUSH_USER = 'PUSH_USER',
        PUSH_GROUP = 'PUSH_GROUP',
        VERIFY = 'VERIFY',
        JOIN_WAITLIST = 'JOIN_WAITLIST',
        INVITE = 'INVITE',
        JOIN = 'JOIN',
        LEAVE = 'LEAVE',
        RESEND = 'RESEND',
        MIGRATE_AUTH_PROVIDER = 'MIGRATE_AUTH_PROVIDER',
    }
}

