/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contact } from '../models/Contact';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContactsService {
    /**
     * Get contacts
     * Retrieve the tailnet's current contacts.
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
     * @returns any Successful operation. Body contains a map of [Contacts](#model/contact) by type.
     * @throws ApiError
     */
    public static getContacts(
        tailnet: string,
    ): CancelablePromise<{
        account?: Contact;
        support?: Contact;
        security?: Contact;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/contacts',
            path: {
                'tailnet': tailnet,
            },
            errors: {
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Update contact
     * Update the preferences for this type of contact. If the email address has changed, the system will send a verification email to confirm the change.
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
     * @param contactType Type of contact.
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static updateContact(
        tailnet: string,
        contactType: 'account' | 'support' | 'security',
        requestBody?: {
            /**
             * The contact's email address.
             */
            email: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tailnet/{tailnet}/contacts/{contactType}',
            path: {
                'tailnet': tailnet,
                'contactType': contactType,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Resend verification email
     * Resends the verification email for this contact, if and only if verification is still pending.
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
     * @param contactType Type of contact.
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static resendContactVerificationEmail(
        tailnet: string,
        contactType: 'account' | 'support' | 'security',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/contacts/{contactType}/resend-verification-email',
            path: {
                'tailnet': tailnet,
                'contactType': contactType,
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
