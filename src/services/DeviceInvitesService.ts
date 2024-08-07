/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceInvite } from '../models/DeviceInvite';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DeviceInvitesService {
    /**
     * List device invites
     * List all share invites for a device.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @returns DeviceInvite Successful operation. Returns array of [DeviceInvite](#model/deviceinvite) objects.
     * @throws ApiError
     */
    public static listDeviceInvites(
        deviceId: string,
    ): CancelablePromise<Array<DeviceInvite>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device/{deviceId}/device-invites',
            path: {
                'deviceId': deviceId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Create device invites
     * Create new share invites for a device.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param requestBody Device invites to create.
     * @returns DeviceInvite Successful operation. Returns array of [DeviceInvite](#model/deviceinvite) objects.
     * @throws ApiError
     */
    public static createDeviceInvites(
        deviceId: string,
        requestBody?: Array<{
            /**
             * Whether the invite can be accepted more than once.
             * When set to `true`, it results in an invite that can be accepted up to 1,000 times.
             *
             */
            multiUse?: boolean;
            /**
             * Whether the invited user can use the device as an exit node when it advertises as one.
             *
             */
            allowExitNode?: boolean;
            /**
             * The email to send the created invite to.
             * If not set, the endpoint generates and returns an invite URL (but doesn't send it out).
             *
             */
            email?: string;
        }>,
    ): CancelablePromise<Array<DeviceInvite>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/device-invites',
            path: {
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Get a device invite
     * Retrieve a specific device invite.
     *
     * @param deviceInviteId ID of the device invite.
     * @returns DeviceInvite Successful operation.
     * @throws ApiError
     */
    public static getDeviceInvite(
        deviceInviteId: string,
    ): CancelablePromise<DeviceInvite> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device-invites/{deviceInviteId}',
            path: {
                'deviceInviteId': deviceInviteId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Delete a device invite
     * Delete a specific device invite.
     *
     * @param deviceInviteId ID of the device invite.
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deleteDeviceInvite(
        deviceInviteId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/device-invites/{deviceInviteId}',
            path: {
                'deviceInviteId': deviceInviteId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Resend a device invite
     * Resend a device invite by email. You can only use this if the specified invite
     * was originally created with an email specified.
     * Refer to [creating device invites for a device](#tag/devices/post/device/{deviceId}/device-invites).
     *
     * Note: Invite resends are rate limited to one per minute.
     *
     * @param deviceInviteId ID of the device invite.
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static resendDeviceInvite(
        deviceInviteId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device-invites/{deviceInviteId}/resend',
            path: {
                'deviceInviteId': deviceInviteId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Accept a device invite
     * Accepts the invitation to share a device into the requesting user's tailnet.
     *
     * Note that device invites cannot be accepted using an API access token generated from an OAuth client as the shared device is scoped to a user.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static acceptDeviceInvite(
        requestBody?: {
            /**
             * The URL of the invite (in the form `https://login.tailscale.com/admin/invite/{code}`) or the `{code}` component of the URL.
             *
             */
            invite: string;
        },
    ): CancelablePromise<{
        /**
         * Information about the device being shared.
         *
         */
        device?: {
            /**
             * The `nodeId` for the device.
             *
             */
            id?: string;
            /**
             * The operating system that the device is running.
             *
             */
            os?: string;
            /**
             * The name of the device.
             *
             */
            name?: string;
            /**
             * The MagicDNS name of the device.
             * Learn more about MagicDNS at https://tailscale.com/kb/1081/.
             *
             */
            fqdn?: string;
            /**
             * The IPv4 address of the device.
             *
             */
            ipv4?: string;
            /**
             * The IPv6 address of the device.
             *
             */
            ipv6?: string;
            /**
             * Specifies whether the invited user is able to use the
             * device as an exit node when the device is advertising as one.
             *
             */
            includeExitNode?: boolean;
        };
        /**
         * The user who create the device share invite.
         *
         */
        sharer?: {
            /**
             * The ID of the user who created the share invite.
             *
             */
            id?: string;
            /**
             * The display name of the user who created the share invite.
             *
             */
            displayName?: string;
            /**
             * The email address of the user who created the share invite.
             *
             */
            loginName?: string;
            /**
             * The profile pic URL for the user who created the share invite.
             *
             */
            profilePicURL?: string;
        };
        /**
         * The user accepting the device share invite.
         *
         */
        acceptedBy?: {
            /**
             * The ID of the user who accepted the share invite.
             *
             */
            id?: string;
            /**
             * The display name of the user who accepted the share invite.
             *
             */
            displayName?: string;
            /**
             * The email address of the user who accepted the share invite.
             *
             */
            loginName?: string;
            /**
             * The profile pic URL for the user who accepted the share invite.
             *
             */
            profilePicURL?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device-invites/-/accept',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                500: `Internal server error.`,
            },
        });
    }
}
