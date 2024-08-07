/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DnsPreferences } from '../models/DnsPreferences';
import type { DnsSearchPaths } from '../models/DnsSearchPaths';
import type { SplitDns } from '../models/SplitDns';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DnsService {
    /**
     * List DNS nameservers
     * Lists the global DNS nameservers for a tailnet.
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
    public static listDnsNameservers(
        tailnet: string,
    ): CancelablePromise<{
        /**
         * DNS nameservers.
         *
         */
        dns?: Array<string>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/dns/nameservers',
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
     * Set DNS nameservers
     * Replaces the list of global DNS nameservers for the given tailnet with the list supplied in the request.
     *
     * Note that changing the list of DNS nameservers may also affect the status of MagicDNS (if MagicDNS is on; learn about [MagicDNS](https://tailscale.com/kb/1081)).
     * If all nameservers have been removed, MagicDNS will be automatically disabled (until explicitly turned back on by the user).
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
     * @returns any Succesful operation.
     * @throws ApiError
     */
    public static setDnsNameservers(
        tailnet: string,
        requestBody?: {
            /**
             * DNS nameservers.
             *
             */
            dns?: Array<string>;
        },
    ): CancelablePromise<{
        /**
         * DNS nameservers.
         *
         */
        dns?: Array<string>;
        /**
         * Whether MagicDNS is active for this tailnet.
         *
         */
        magicDNS?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/dns/nameservers',
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
     * Get DNS preferences
     * Retrieves the DNS preferences that are currently set for the given tailnet.
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
     * @returns DnsPreferences Succesful operation.
     * @throws ApiError
     */
    public static getDnsPreferences(
        tailnet: string,
    ): CancelablePromise<DnsPreferences> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/dns/preferences',
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
     * Set DNS preferences
     * Set the DNS preferences for a tailnet; specifically, the MagicDNS setting.
     * Note that MagicDNS is dependent on DNS servers.
     * Learn about [MagicDNS](https://tailscale.com/kb/1081).
     *
     * If there is at least one DNS server, then MagicDNS can be enabled.
     * Otherwise, it returns an error.
     *
     * Note that removing all nameservers will turn off MagicDNS.
     * To reenable it, nameservers must be added back, and MagicDNS must be explicitly turned on.
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
     * @returns DnsPreferences Succesful operation.
     * @throws ApiError
     */
    public static setDnsPreferences(
        tailnet: string,
        requestBody?: DnsPreferences,
    ): CancelablePromise<DnsPreferences> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/dns/preferences',
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
     * List DNS search paths
     * Retrieves the list of search paths, also referred to as *search domains*, that is currently set for the given tailnet.
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
     * @returns DnsSearchPaths Successful operation.
     * @throws ApiError
     */
    public static listDnsSearchPaths(
        tailnet: string,
    ): CancelablePromise<DnsSearchPaths> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/dns/searchpaths',
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
     * Set DNS search paths
     * Replaces the list of search paths for the given tailnet.
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
     * @returns DnsSearchPaths Successful operation.
     * @throws ApiError
     */
    public static setDnsSearchPaths(
        tailnet: string,
        requestBody?: DnsSearchPaths,
    ): CancelablePromise<DnsSearchPaths> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/dns/searchpaths',
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
     * Get split DNS
     * Retrieves the split DNS settings, which is a map from domains to lists of nameservers, that is currently set for the given tailnet.
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
     * @returns SplitDns Succesful operation.
     * @throws ApiError
     */
    public static getSplitDns(
        tailnet: string,
    ): CancelablePromise<SplitDns> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/dns/split-dns',
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
     * Update split DNS
     * Performs partial updates of the split DNS settings for a given tailnet.
     * Only domains specified in the request map will be modified.
     * Setting the value of a mapping to `null` clears the nameservers for that domain.
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
     * @returns SplitDns Succesful operation.
     * @throws ApiError
     */
    public static updateSplitDns(
        tailnet: string,
        requestBody?: SplitDns,
    ): CancelablePromise<SplitDns> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tailnet/{tailnet}/dns/split-dns',
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
     * Set split DNS
     * Replaces the split DNS settings for a given tailnet.
     * Setting the value of a mapping to `null` clears the nameservers for that domain.
     * Sending an empty object clears nameservers for all domains.
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
     * @returns SplitDns Succesful operation.
     * @throws ApiError
     */
    public static setSplitDns(
        tailnet: string,
        requestBody?: SplitDns,
    ): CancelablePromise<SplitDns> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tailnet/{tailnet}/dns/split-dns',
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
}
