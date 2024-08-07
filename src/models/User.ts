/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Representation of a user within a tailnet.
 *
 */
export type User = {
    /**
     * The unique identifier for the user.
     * Supply this value wherever {userId} is indicated in an endpoint.
     *
     */
    id?: string;
    /**
     * The name of the user.
     *
     */
    displayName?: string;
    /**
     * The emailish login name of the user.
     *
     */
    loginName?: string;
    /**
     * The profile pic URL for the user.
     *
     */
    profilePicUrl?: string;
    /**
     * The tailnet that owns the user.
     *
     */
    tailnetId?: string;
    /**
     * The time the user joined their tailnet.
     *
     */
    created?: string;
    /**
     * The type of relation this user has to the tailnet associated with the request.
     *
     */
    type?: User.type;
    /**
     * The role of the user. Learn more about [user roles](kb/1138/user-roles).
     *
     */
    role?: User.role;
    /**
     * The status of the user.
     *
     */
    status?: User.status;
    /**
     * Number of devices the user owns.
     *
     */
    deviceCount?: number;
    /**
     * The later of either:
     * - The last time any of the user's nodes were connected to the network.
     * - The last time the user authenticated to any tailscale service, including the admin panel.
     *
     */
    lastSeen?: string;
    /**
     * `true` when the user has a node currently connected to the control server.
     *
     */
    currentlyConnected?: boolean;
};
export namespace User {
    /**
     * The type of relation this user has to the tailnet associated with the request.
     *
     */
    export enum type {
        MEMBER = 'member',
        SHARED = 'shared',
    }
    /**
     * The role of the user. Learn more about [user roles](kb/1138/user-roles).
     *
     */
    export enum role {
        OWNER = 'owner',
        MEMBER = 'member',
        ADMIN = 'admin',
        IT_ADMIN = 'it-admin',
        NETWORK_ADMIN = 'network-admin',
        BILLING_ADMIN = 'billing-admin',
        AUDITOR = 'auditor',
    }
    /**
     * The status of the user.
     *
     */
    export enum status {
        ACTIVE = 'active',
        IDLE = 'idle',
        SUSPENDED = 'suspended',
        NEEDS_APPROVAL = 'needs-approval',
        OVER_BILLING_LIMIT = 'over-billing-limit',
    }
}

