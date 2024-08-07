/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A user invite is an active invitation that lets a user join a tailnet
 * with a preassigned [user role](https://tailscale.com/kb/1138/user-roles).
 *
 * Each user invite has a unique ID that is used to identify the invite
 * in API calls. You can find all user invite IDs for a particular tailnet
 * by [listing user invites](#tag/userinvites/get/tailnet/{tailnet}/user-invites).
 *
 */
export type UserInvite = {
    /**
     * The unique identifier for the invite.
     * Supply this value wherever `userInviteId` is indicated in the endpoint.
     *
     */
    id: string;
    /**
     * The tailnet user role to assign to the invited user upon accepting the invite.
     *
     */
    role: UserInvite.role;
    /**
     * The ID of the tailnet to which the user was invited.
     *
     */
    tailnetId: number;
    /**
     * The ID of the user who created the invite.
     *
     */
    inviterId: number;
    /**
     * The email to which the invite was sent.
     * If empty, the invite was not emailed to anyone,
     * but the inviteUrl can be shared manually.
     *
     */
    email?: string;
    /**
     * The last time the invite was attempted to be sent to Email.
     * Only ever set if `email` is not empty.
     *
     */
    lastEmailSentAt?: string;
    /**
     * Included when `email` is not part of the tailnet's domain,
     * or when `email` is empty. It is the link to accept the invite.
     *
     * When included, anyone with this link can accept the invite.
     * It is not restricted to the person to which the invite was emailed.
     *
     * When `email` is part of the tailnet's domain (has the same @domain.com
     * suffix as the tailnet), the user can join the tailnet automatically by
     * logging in with their domain email at https://login.tailscale.com/start.
     * They'll be assigned the specified `role` upon signing in for the first
     * time.
     *
     */
    inviteUrl?: string;
};
export namespace UserInvite {
    /**
     * The tailnet user role to assign to the invited user upon accepting the invite.
     *
     */
    export enum role {
        MEMBER = 'member',
        ADMIN = 'admin',
        IT_ADMIN = 'it-admin',
        NETWORK_ADMIN = 'network-admin',
        BILLING_ADMIN = 'billing-admin',
        AUDITOR = 'auditor',
    }
}

