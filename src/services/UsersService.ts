/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * List users
     * List all users of a tailnet.
     *
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
     * @param type Allows for filtering the output by user type.
     *
     * @param role Allows for filtering the output by user role. Learn more about [user roles](kb/1138/user-roles).
     *
     * @returns any Successful operation. The `users` field is an array of [User](#model/user) objects.
     * @throws ApiError
     */
    public static listUsers(
        tailnet: string,
        type: 'member' | 'shared' | 'all' = 'member',
        role: 'owner' | 'member' | 'admin' | 'it-admin' | 'network-admin' | 'billing-admin' | 'auditor' | 'all' = 'all',
    ): CancelablePromise<{
        users?: Array<User>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/users',
            path: {
                'tailnet': tailnet,
            },
            query: {
                'type': type,
                'role': role,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Get a user
     * Retrieve details about the specified user.
     *
     * @param userId ID of the user.
     *
     * @returns User Successful operation. Returns a [User](#model/user) object.
     * @throws ApiError
     */
    public static getUser(
        userId: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Update user role
     * Update the role for the specified user.
     *
     * Learn more about [user roles](kb/1138/user-roles).
     *
     * @param userId ID of the user.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static updateUserRole(
        userId: string,
        requestBody?: {
            /**
             * The role of the user. Learn more about [user roles](kb/1138/user-roles).
             *
             */
            role?: 'owner' | 'member' | 'admin' | 'it-admin' | 'network-admin' | 'billing-admin' | 'auditor';
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{userId}/role',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Approve a user
     * Approve a pending user's access to the tailnet.
     * This is a no-op if user approval has not been enabled for the tailnet, or if the user is already approved.
     *
     * User approval can be managed using the [tailnet settings endpoints](#tag/tailnetsettings).
     *
     * Learn more about [user approval](/kb/1239/user-approval) and [enabling user approval for your network](/kb/1239/user-approval#enable-user-approval-for-your-network).
     *
     * @param userId ID of the user.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static approveUser(
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{userId}/approve',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Suspend a user
     * > ⓘ This endpoint is available for the [Personal and Enterprise plans](/pricing).
     *
     * Suspends a user from their tailnet. Learn more about [suspending users](/kb/1145/remove-team-members#suspending-users).
     *
     * @param userId ID of the user.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static suspendUser(
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{userId}/suspend',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Restore a user
     * > ⓘ This endpoint is available for the [Personal and Enterprise plans](/pricing).
     *
     * Restores a suspended user's access to their tailnet. Learn more about [restoring users](/kb/1145/remove-team-members#restoring-users).
     *
     * @param userId ID of the user.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static restoreUser(
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{userId}/restore',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Delete a user
     * > ⓘ This endpoint is available for the [Personal and Enterprise plans](/pricing).
     *
     * Delete a user from their tailnet. Learn more about [deleting users](/kb/1145/remove-team-members#deleting-users).
     *
     * @param userId ID of the user.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deleteUser(
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{userId}/delete',
            path: {
                'userId': userId,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
}
