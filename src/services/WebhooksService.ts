/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { providerType } from '../models/providerType';
import type { subscriptions } from '../models/subscriptions';
import type { Webhook } from '../models/Webhook';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhooksService {
    /**
     * List webhooks
     * List all webhooks for a tailnet.
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
     * @returns any Successful operation. The `webhooks` field is an array of [Webhook](#model/Webhook) objects.
     * @throws ApiError
     */
    public static listWebhooks(
        tailnet: string,
    ): CancelablePromise<{
        webhooks?: Array<Webhook>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/webhooks',
            path: {
                'tailnet': tailnet,
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
     * Create a webhook
     * Create a webhook within a tailnet.
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
     * @returns Webhook Successful operation. Returns a [Webhook](#model/Webhook) object.
     * @throws ApiError
     */
    public static createWebhook(
        tailnet: string,
        requestBody?: {
            /**
             * The endpoint that events are sent to from Tailscale via POST requests.
             *
             */
            endpointUrl: string;
            providerType?: providerType;
            subscriptions: subscriptions;
        },
    ): CancelablePromise<Webhook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tailnet/{tailnet}/webhooks',
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
    /**
     * Get webhook
     * Retrieve a specific webhook.
     *
     * @param endpointId ID for the webhook endpoint.
     *
     * @returns Webhook Successful operation. Returns a [Webhook](#model/Webhook) object.
     * @throws ApiError
     */
    public static getWebhook(
        endpointId: string,
    ): CancelablePromise<Webhook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks/{endpointId}',
            path: {
                'endpointId': endpointId,
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
     * Update webhook
     * Update a specific webhook.
     *
     * @param endpointId ID for the webhook endpoint.
     *
     * @param requestBody
     * @returns Webhook Successful operation. Returns a [Webhook](#model/Webhook) object.
     * @throws ApiError
     */
    public static updateWebhook(
        endpointId: string,
        requestBody?: {
            subscriptions?: subscriptions;
        },
    ): CancelablePromise<Webhook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/webhooks/{endpointId}',
            path: {
                'endpointId': endpointId,
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
     * Delete webhook
     * Delete a specific webhook.
     *
     * @param endpointId ID for the webhook endpoint.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deleteWebhook(
        endpointId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhooks/{endpointId}',
            path: {
                'endpointId': endpointId,
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
     * Test a webhook
     * Test a specific webhook by sending out a test event to the endpoint URL.
     * This endpoint queues the event which is sent out asynchronously.
     *
     * If your webhook is configured correctly, within a few seconds your webhook endpoint should receive an event with type of "test".
     *
     * @param endpointId ID for the webhook endpoint.
     *
     * @returns any Successfully queued test event.
     * @throws ApiError
     */
    public static testWebhook(
        endpointId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhooks/{endpointId}/test',
            path: {
                'endpointId': endpointId,
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
     * Rotate webhook secret
     * Rotate and generate a new secret for a specific webhook.
     *
     * This secret is used for generating the `Tailscale-Webhook-Signature` header in requests sent to the endpoint URL.
     * Learn more about [verifying webhook event signatures](/kb/1213/webhooks#verifying-an-event-signature).
     *
     * @param endpointId ID for the webhook endpoint.
     *
     * @returns Webhook Successful operation. Returns a [Webhook](#model/Webhook) object with a new secret.
     * @throws ApiError
     */
    public static rotateWebhookSecret(
        endpointId: string,
    ): CancelablePromise<Webhook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhooks/{endpointId}/rotate',
            path: {
                'endpointId': endpointId,
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
