/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A device invite is an invitation that shares a device with an external
 * user (a user not in the device's tailnet).
 *
 * Each device invite has a unique ID that is used to identify the invite
 * in API calls. You can find all device invite IDs for a particular device
 * by [listing all device invites](#tag/devices/post/device/{deviceId}/device-invites)
 * for a device.
 *
 */
export type DeviceInvite = {
    /**
     * The unique identifier for the invite.
     * Supply this value wherever {deviceInviteId} is indicated in the endpoint.
     *
     */
    id?: string;
    /**
     * The creation time of the invite.
     *
     */
    created?: string;
    /**
     * The ID of the tailnet to which the shared device belongs.
     *
     */
    tailnetId?: number;
    /**
     * The ID of the device being shared.
     *
     */
    deviceId?: number;
    /**
     * The ID of the user who created the share invite.
     *
     */
    sharerId?: number;
    /**
     * Specifies whether this device invite can be accepted
     * more than once.
     *
     */
    multiUse?: boolean;
    /**
     * Specifies whether the invited user is able to use the
     * device as an exit node when the device is advertising as one.
     *
     */
    allowExitNode?: boolean;
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
     * The link to accept the invite.
     * Anyone with this link can accept the invite.
     * It is not restricted to the person to which the invite was emailed.
     *
     */
    inviteUrl?: string;
    /**
     * `true` when the share invite has been accepted.
     *
     */
    accepted?: boolean;
    /**
     * Set when the invite has been accepted.
     * It holds information about the user who accepted the share invite.
     *
     */
    acceptedBy?: {
        /**
         * The ID of the user who accepted the share invite.
         *
         */
        id?: number;
        /**
         * The login name of the user who accepted the share invite.
         *
         */
        loginName?: string;
        /**
         * The profile pic URL for the user who accepted the share invite.
         *
         */
        profilePicUrl?: string;
    };
};

