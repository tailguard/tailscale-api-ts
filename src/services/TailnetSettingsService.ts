/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TailnetSettings } from '../models/TailnetSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TailnetSettingsService {
    /**
     * Get tailnet settings
     * Retrieve the settings for a specific tailnet.
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
     * @returns TailnetSettings Successful operation. Returns a [tailnet settings](#model/tailnetsettings) object.
     * @throws ApiError
     */
    public static getTailnetSettings(
        tailnet: string,
    ): CancelablePromise<TailnetSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/settings',
            path: {
                'tailnet': tailnet,
            },
            errors: {
                400: `Bad request.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Update tailnet settings
     * Update the settings for a specific tailnet.
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
     * @returns TailnetSettings Successful operation. Returns a [tailnet settings](#model/tailnetsettings) object.
     * @throws ApiError
     */
    public static updateTailnetSettings(
        tailnet: string,
        requestBody?: TailnetSettings,
    ): CancelablePromise<TailnetSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tailnet/{tailnet}/settings',
            path: {
                'tailnet': tailnet,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
}
