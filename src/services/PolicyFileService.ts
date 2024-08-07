/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PolicyFileService {
    /**
     * Get policy file
     * Retrieves the current policy file for the given tailnet;
     * this includes the ACL along with the rules and tests that have been defined.
     *
     * This method can return the policy file as JSON or HuJSON, depending on the Accept header.
     * The response also includes an `ETag` header, which can be optionally included when [setting the policy file](#tag/policyfile/post/tailnet/{tailnet}/acl) to avoid missed updates.
     *
     * Learn more about [policy file ACL syntax](https://tailscale.com/kb/1337/acl-syntax).
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
     * @param accept Response is encoded as JSON if `application/json` is requested, otherwise HuJSON will be returned.
     * @param details Request a detailed description of the tailnet policy file by providing `details=true` in the URL query string.
     * Supplying any other value for `details`, or not sending the param, is treated as sending `details=false`.
     * If using this, do not supply an `Accept` parameter in the header.
     *
     * The response will contain a JSON object with the fields:
     * - `acl`: a base64-encoded string representation of the huJSON format.
     * - `warnings`: array of strings for syntactically valid but nonsensical entries.
     * - `errors`: an array of strings for parsing failures.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static getPolicyFile(
        tailnet: string,
        accept?: string,
        details?: boolean,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/acl',
            path: {
                'tailnet': tailnet,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'details': details,
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
     * Set policy file
     * Sets the ACL for the given tailnet. HuJSON and JSON are both accepted inputs.
     * An `If-Match` header can be set to avoid missed updates.
     *
     * On success, returns the updated ACL in JSON or HuJSON according to the `Accept` header.
     * Otherwise, errors are returned for incorrectly defined ACLs, ACLs with failing tests on attempted updates, and mismatched `If-Match` header and `ETag`.
     *
     * Learn more about [policy file ACL syntax](https://tailscale.com/kb/1337/acl-syntax).
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
     * @param accept Response is encoded as JSON if `application/json` is requested, otherwise HuJSON will be returned.
     * @param ifMatch This is a safety mechanism to avoid overwriting other users' updates to the tailnet policy file.
     *
     * - Set the `If-Match` value to that of the `ETag` header returned in a `GET` request to `/api/v2/tailnet/{tailnet}/acl`.
     * Tailscale compares the `ETag` value in your request to that of the current tailnet file and only replaces the file if there's a match.
     * (A mismatch indicates that another update has been made to the file.) For example: `-H "If-Match: \"e0b2816b418\""`.
     * - Alternately, set the `If-Match` value to `ts-default` to ensure that the policy file is replaced *only if the current policy file is still the untouched default created automatically* for each tailnet.
     * For example: `-H "If-Match: \"ts-default\""`.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static setPolicyFile(
        tailnet: string,
        accept?: string,
        ifMatch?: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/acl',
            path: {
                'tailnet': tailnet,
            },
            headers: {
                'Accept': accept,
                'If-Match': ifMatch,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                412: `If-Match hash mismatch.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Preview rule matches
     * When given a user or IP port to match against,
     * returns the tailnet policy rules that apply to that resource,
     * without saving the policy file to the server.
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
     * @param type Specify for which type of resource (user or IP port) matching rules are to be fetched.
     * Read about [previewing changes in the admin console](https://tailscale.com/kb/1018/#previewing-changes).
     *
     * @param previewFor - If `type` is `user`, provide the email of a valid user with registered machines.
     * - If `type` is `ipport`, provide an IP address + port: `10.0.0.1:80`.
     *
     * The supplied policy file is queried with this parameter to determine which rules match.
     *
     * @param requestBody
     * @returns any The list of rules that apply to the resource.
     * @throws ApiError
     */
    public static previewRuleMatches(
        tailnet: string,
        type: 'user' | 'ipport',
        previewFor: string,
        requestBody?: Record<string, any>,
    ): CancelablePromise<{
        matches: Array<{
            /**
             * Source entities affected by the rule.
             *
             */
            users: Array<string>;
            /**
             * Destinations that can be accessed.
             *
             */
            ports: Array<string>;
            /**
             * The rule's location in the policy file.
             *
             */
            lineNumber: number;
        }>;
        /**
         * Echoes the `type` provided in the request.
         *
         */
        type: string;
        /**
         * Echoes the `previewFor` provided in the request.
         *
         */
        previewFor: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/acl/preview',
            path: {
                'tailnet': tailnet,
            },
            query: {
                'type': type,
                'previewFor': previewFor,
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
     * Validate and test policy file
     * This endpoint works in one of two modes, neither of which modifies your current tailnet policy file:
     *
     * - Run ACL tests: When the request body contains ACL tests as a JSON array,
     * Tailscale runs ACL tests against the tailnet's current policy file.
     * Learn more about [ACL tests](https://tailscale.com/kb/1337/acl-syntax#tests).
     * - Validate a new policy file: When the request body is a JSON object,
     * Tailscale interprets the body as a hypothetical new tailnet policy file with new ACLs,
     * including any new rules and tests.
     * It validates that the policy file is parsable and runs tests to validate the existing rules.
     *
     * In either case, this method does not modify the tailnet policy file in any way.
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
     * @returns any Validation or tests have run. An empty response body implies passing validation or tests.
     * @throws ApiError
     */
    public static validateAndTestPolicyFile(
        tailnet: string,
        requestBody?: string,
    ): CancelablePromise<{
        message?: string;
        data?: Array<Record<string, any>>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/acl/validate',
            path: {
                'tailnet': tailnet,
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
}
