/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Key } from '../models/Key';
import type { KeyCapabilities } from '../models/KeyCapabilities';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KeysService {
    /**
     * List tailnet keys
     * Returns a list of active auth keys and API access tokens. The set of keys returned depends on the access token used to make the request:
     * - If the API call is made with a user-owned API access token, this returns only the keys owned by that user.
     * - If the API call is made with an access token derived from an OAuth client, this returns all keys owned directly by the tailnet.
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
     * @returns any Successful operation. The `keys` field is an array of [Key](#model/key) objects with `id` and `description` populated.
     * @throws ApiError
     */
    public static listTailnetKeys(
        tailnet: string,
    ): CancelablePromise<{
        /**
         * A list of the active keys.
         */
        keys?: Array<Key>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/keys',
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
     * Create auth key
     * Creates a new [auth key](https://tailscale.com/kb/1085/) in the specified tailnet.
     * The key will be associated with the user who owns the API access token used to make this call,
     * or, if the call is made with an access token derived from an OAuth client, the key will be owned by the tailnet.
     *
     * Returns a JSON object with the supplied capabilities in addition to the generated key.
     * The key should be recorded and kept safe and secure because it wields the capabilities specified in the request.
     * The identity of the key is embedded in the key itself and can be used to perform operations on the key (e.g., revoking it or retrieving information about it).
     * The full key can no longer be retrieved after the initial response.
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
     * @param requestBody At a minimum, the request POST body must have a `capabilities` object with a `devices` object,
     * though it can be an empty JSON object.
     * With nothing else supplied, such a request generates a single-use key with no tags.
     *
     * @returns Key Successful operation. Returns a [Key](#model/key) object.
     * @throws ApiError
     */
    public static createAuthKey(
        tailnet: string,
        requestBody?: {
            capabilities: KeyCapabilities;
            /**
             * Specifies the duration in seconds until the key should expire. Defaults to 90 days if not supplied.
             *
             */
            expirySeconds?: number;
            /**
             * A short string specifying the purpose of the key. Can be a maximum of 50 alphanumeric characters. Hyphens and spaces are also allowed.
             *
             */
            description?: string;
        },
    ): CancelablePromise<Key> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/keys',
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
     * Get key
     * Returns a JSON object with information about a specific api access token or auth key, such as its creation and expiration dates and its capabilities.
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
     * @param keyId The id of the key.
     * The key ID can be found in the [admin console](https://login.tailscale.com/admin/settings/keys).
     *
     * @returns Key Successful operation. Returns a [Key](#model/key) object.
     *
     * Response for a revoked (deleted) or expired key will have an `invalid` field set to true.
     *
     * @throws ApiError
     */
    public static getKey(
        tailnet: string,
        keyId: string,
    ): CancelablePromise<Key> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/keys/{keyId}',
            path: {
                'tailnet': tailnet,
                'keyId': keyId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Delete key
     * Deletes a specific api access token or auth key.
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
     * @param keyId The id of the key.
     * The key ID can be found in the [admin console](https://login.tailscale.com/admin/settings/keys).
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deleteKey(
        tailnet: string,
        keyId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tailnet/{tailnet}/keys/{keyId}',
            path: {
                'tailnet': tailnet,
                'keyId': keyId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
}
