/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserInvite } from '../models/UserInvite';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserInvitesService {
    /**
     * List user invites
     * List all open (not yet accepted) user invites to the tailnet.
     * @param tailnet The tailnet organization name.
     *
     * When specifying a tailnet in the API, you can:
     *
     * - Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.
     * This is the best option for most users.
     * Your API calls would start:
     *
     * ```sh
     * curl "https://api.tailscale.com/api/v2/tailnet/-/..."
     * ```
     *
     * - Provide the **organization** name found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**
     * page of the Tailscale admin console (not to be confused with the "tailnet name" found in the DNS tab).
     *
     * For example, if your organization name is `alice@example.com`, your API calls would start:
     *
     * ```sh
     * curl "https://api.tailscale.com/api/v2/tailnet/alice@example.com/..."
     * ```
     *
     * Learn more about [tailnet organization names](https://tailscale.com/kb/1217/tailnet-name#organization-name).
     *
     * @returns UserInvite Successful operation.
     * @throws ApiError
     */
    public static listUserInvites(
        tailnet: string,
    ): CancelablePromise<Array<UserInvite>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/user-invites',
            path: {
                'tailnet': tailnet,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Create user invites
     * Create, and optionally email out, new user invites to join the tailnet.
     * @param tailnet The tailnet organization name.
     *
     * When specifying a tailnet in the API, you can:
     *
     * - Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.
     * This is the best option for most users.
     * Your API calls would start:
     *
     * ```sh
     * curl "https://api.tailscale.com/api/v2/tailnet/-/..."
     * ```
     *
     * - Provide the **organization** name found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**
     * page of the Tailscale admin console (not to be confused with the "tailnet name" found in the DNS tab).
     *
     * For example, if your organization name is `alice@example.com`, your API calls would start:
     *
     * ```sh
     * curl "https://api.tailscale.com/api/v2/tailnet/alice@example.com/..."
     * ```
     *
     * Learn more about [tailnet organization names](https://tailscale.com/kb/1217/tailnet-name#organization-name).
     *
     * @param requestBody
     * @returns UserInvite Successful operation.
     * @throws ApiError
     */
    public static createUserInvites(
        tailnet: string,
        requestBody?: Array<{
            /**
             * Optionally specifies a user role to assign the invited user.
             *
             */
            role?: 'member' | 'admin' | 'it-admin' | 'network-admin' | 'billing-admin' | 'auditor';
            /**
             * Optionally specifies the email to send the created invite.
             * If not set, the endpoint generates and returns an invite URL, but does not email it out.
             *
             */
            email?: string;
        }>,
    ): CancelablePromise<Array<UserInvite>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/user-invites',
            path: {
                'tailnet': tailnet,
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
     * Get a user invite
     * Retrieve a specific user invite.
     *
     * @param userInviteId ID of the user invite.
     * @returns UserInvite Successful operation.
     * @throws ApiError
     */
    public static getUserInvite(
        userInviteId: string,
    ): CancelablePromise<UserInvite> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user-invites/{userInviteId}',
            path: {
                'userInviteId': userInviteId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Delete a user invite
     * Deletes a specific user invite.
     *
     * @param userInviteId ID of the user invite.
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deleteUserInvite(
        userInviteId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user-invites/{userInviteId}',
            path: {
                'userInviteId': userInviteId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Resend a user invite
     * Resend a user invite by email. You can only use this if the specified invite
     * was originally created with an email specified.
     * Refer to [creating user invites for a tailnet](#tag/userinvites/post/tailnet/{tailnet}/user-invites).
     *
     * Note: Invite resends are rate limited to one per minute.
     *
     * @param userInviteId ID of the user invite.
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static resendUserInvite(
        userInviteId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user-invites/{userInviteId}/resend',
            path: {
                'userInviteId': userInviteId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
}
