/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostureIntegration } from '../models/PostureIntegration';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DevicePostureService {
    /**
     * List all posture integrations
     * List all of the posture integrations for a tailnet.
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
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static getPostureIntegrations(
        tailnet: string,
    ): CancelablePromise<{
        /**
         * List of PostureIntegrations.
         */
        integrations?: Array<PostureIntegration>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/posture/integrations',
            path: {
                'tailnet': tailnet,
            },
            errors: {
                403: `Forbidden.`,
            },
        });
    }
    /**
     * Create a posture integration
     * Create a posture integration, returning the resulting [PostureIntegration](#model/postureintegration).
     *
     * Must include `provider` and `clientSecret`.
     *
     * Currently, only one integration for each provider is supported.
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
     * @param requestBody
     * @returns PostureIntegration Successful operation.
     * @throws ApiError
     */
    public static createPostureIntegration(
        tailnet: string,
        requestBody?: PostureIntegration,
    ): CancelablePromise<PostureIntegration> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/posture/integrations',
            path: {
                'tailnet': tailnet,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden.`,
                409: `Conflict.`,
            },
        });
    }
    /**
     * Update a posture integration
     * Updates the posture integration identified by `{id}`. You may omit the `clientSecret` from your request to retain the previously configured `clientSecret`.
     *
     * @param id Unique identifier for a posture integration.
     * @param requestBody
     * @returns PostureIntegration Successful operation.
     * @throws ApiError
     */
    public static updatePostureIntegration(
        id: string,
        requestBody?: PostureIntegration,
    ): CancelablePromise<PostureIntegration> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posture/integrations/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden.`,
                404: `Not found.`,
            },
        });
    }
    /**
     * Delete a posture integration
     * Delete a specific posture integration.
     *
     * @param id Unique identifier for a posture integration.
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deletePostureIntegration(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posture/integrations/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Forbidden.`,
                404: `Not found.`,
            },
        });
    }
}
