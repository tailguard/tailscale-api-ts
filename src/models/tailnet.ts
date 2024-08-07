/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The tailnet organization name.
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
 */
export type tailnet = string;
