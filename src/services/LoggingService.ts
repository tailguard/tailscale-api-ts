/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationAuditLog } from "../models/ConfigurationAuditLog"
import type { LogstreamEndpointConfiguration } from "../models/LogstreamEndpointConfiguration"
import type { LogstreamEndpointPublishingStatus } from "../models/LogstreamEndpointPublishingStatus"
import type { logType } from "../models/logType"
import type { NetworkFlowLog } from "../models/NetworkFlowLog"
import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"
export class LoggingService {
    /**
     * List configuration audit logs
     * List all configuration audit logs for a tailnet.
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
     * @param start The start of the time window for which to retrieve logs, in RFC 3339 format.
     * @param end The end of the time window for which to retrieve logs, in RFC 3339 format.
     * @param actor List of filters on actors, either exact actor IDs or a wildcard search on login name or display name indicated as `~search`.
     * @param target List of target elements for which to filter, attempts to match any part of any of the targets to any of the given strings.
     * @param event List of events for which to filter.
     * @returns any Successful operation. The `logs` field contains an array of [ConfigurationAuditLog](#model/configurationauditlog) objects.
     * @throws ApiError
     */
    public static listConfigurationAuditLogs(
        tailnet: string,
        start: string,
        end: string,
        actor?: Array<string>,
        target?: Array<string>,
        event?: Array<
            | "ADMIN_CONSOLE.LOGIN"
            | "ADMIN_CONSOLE.LOGOUT"
            | "API_KEY.CREATE"
            | "API_KEY.EXPIRED"
            | "API_KEY.REVOKE"
            | "BILLING.CANCEL.SUBSCRIPTION"
            | "BILLING.CREATE.SUBSCRIPTION"
            | "BILLING.UPDATE.ADDRESS"
            | "BILLING.UPDATE.BILLING_OWNER"
            | "BILLING.UPDATE.EMAIL"
            | "BILLING.UPDATE.PAYMENT_INFO"
            | "BILLING.UPDATE.STRIPE_CUSTOMER_ID"
            | "BILLING.UPDATE.SUBSCRIPTION"
            | "FAILED_REQUEST.UPDATE"
            | "GROUP.PUSH_GROUP.ATTRIBUTES"
            | "INVITE.ACCEPT.FEATURE"
            | "INVITE.ACCEPT.NODE_SHARE"
            | "INVITE.ACCEPT.TAILNET_INVITE"
            | "INVITE.CREATE.FEATURE"
            | "INVITE.CREATE.NODE_SHARE"
            | "INVITE.CREATE.TAILNET_INVITE"
            | "INVITE.DELETE.NODE_SHARE"
            | "INVITE.DELETE.TAILNET_INVITE"
            | "INVITE.RESEND.NODE_SHARE"
            | "INVITE.RESEND.TAILNET_INVITE"
            | "NODE.APPROVE"
            | "NODE.CREATE"
            | "NODE.CREATE.ATTRIBUTES"
            | "NODE.DELETE"
            | "NODE.DELETE.ATTRIBUTES"
            | "NODE.DISABLE.KEY_EXPIRY"
            | "NODE.ENABLE.KEY_EXPIRY"
            | "NODE.EXPIRED.KEY_EXPIRY_TIME"
            | "NODE.LOGIN"
            | "NODE.LOGOUT"
            | "NODE.REVOKE"
            | "NODE.UPDATE.ACL_TAGS"
            | "NODE.UPDATE.ALLOWED_IPS"
            | "NODE.UPDATE.ATTRIBUTES"
            | "NODE.UPDATE.AUTO_APPROVED_ROUTES"
            | "NODE.UPDATE.EXIT_NODE"
            | "NODE.UPDATE.KEY_EXPIRY_TIME"
            | "NODE.UPDATE.MACHINE_NAME"
            | "NODE.UPDATE.POSTURE_IDENTITY"
            | "NODE.UPDATE.TKA"
            | "SHARE.CREATE"
            | "SHARE.DELETE"
            | "SHARE.UPDATE"
            | "TAILNET.ACCEPT.FEATURE"
            | "TAILNET.CREATE"
            | "TAILNET.CREATE.LOGSTREAM_ENDPOINT"
            | "TAILNET.CREATE.POSTURE_INTEGRATION"
            | "TAILNET.CREATE.TKA"
            | "TAILNET.DELETE.LOGSTREAM_ENDPOINT"
            | "TAILNET.DELETE.POSTURE_INTEGRATION"
            | "TAILNET.DELETE.TKA"
            | "TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY"
            | "TAILNET.DISABLE.COLLECT_SERVICES"
            | "TAILNET.DISABLE.FILE_SHARING"
            | "TAILNET.DISABLE.GEOSTEERING"
            | "TAILNET.DISABLE.HTTPS"
            | "TAILNET.DISABLE.LOG_EXIT_FLOWS"
            | "TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED"
            | "TAILNET.DISABLE.MAGIC_DNS"
            | "TAILNET.DISABLE.MULLVAD_VPN"
            | "TAILNET.DISABLE.NETWORK_FLOW_LOGGING"
            | "TAILNET.DISABLE.SCIM"
            | "TAILNET.DISABLE.TKA"
            | "TAILNET.DISABLE.USER_APPROVAL_REQUIRED"
            | "TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY"
            | "TAILNET.ENABLE.COLLECT_SERVICES"
            | "TAILNET.ENABLE.FILE_SHARING"
            | "TAILNET.ENABLE.GEOSTEERING"
            | "TAILNET.ENABLE.HTTPS"
            | "TAILNET.ENABLE.LOG_EXIT_FLOWS"
            | "TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED"
            | "TAILNET.ENABLE.MAGIC_DNS"
            | "TAILNET.ENABLE.MULLVAD_VPN"
            | "TAILNET.ENABLE.NETWORK_FLOW_LOGGING"
            | "TAILNET.ENABLE.SCIM"
            | "TAILNET.ENABLE.TKA"
            | "TAILNET.ENABLE.USER_APPROVAL_REQUIRED"
            | "TAILNET.JOIN"
            | "TAILNET.JOIN_WAITLIST.FEATURE"
            | "TAILNET.LEAVE"
            | "TAILNET.UPDATE.ACCOUNT_EMAIL"
            | "TAILNET.UPDATE.ACL"
            | "TAILNET.UPDATE.DNS_CONFIG"
            | "TAILNET.UPDATE.LOGSTREAM_ENDPOINT"
            | "TAILNET.UPDATE.MAX_KEY_DURATION"
            | "TAILNET.UPDATE.POSTURE_INTEGRATION"
            | "TAILNET.UPDATE.SECURITY_EMAIL"
            | "TAILNET.UPDATE.SUPPORT_EMAIL"
            | "TAILNET.UPDATE.TCD"
            | "TAILNET.UPDATE.TKA"
            | "TAILNET.VERIFY.ACCOUNT_EMAIL"
            | "TAILNET.VERIFY.SECURITY_EMAIL"
            | "TAILNET.VERIFY.SUPPORT_EMAIL"
            | "USER.APPROVE"
            | "USER.CREATE"
            | "USER.DELETE"
            | "USER.INVITE"
            | "USER.PUSH_USER.ATTRIBUTES"
            | "USER.RESEND.TAILNET_INVITE"
            | "USER.RESTORE"
            | "USER.SUSPEND"
            | "USER.UPDATE.USER_ROLE"
            | "WEBHOOK_ENDPOINT.CREATE"
            | "WEBHOOK_ENDPOINT.DELETE"
            | "WEBHOOK_ENDPOINT.UPDATE.SECRET"
            | "WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS"
            | "WEB_INTERFACE.LOGIN"
            | "WEB_INTERFACE.LOGOUT"
        >
    ): CancelablePromise<{
        /**
         * Version of audit logs response.
         */
        version?: string
        /**
         * The tailnet on which the logged configuration changes were made.
         */
        tailnet?: string
        /**
         * Matching log entries, ordered chronologically.
         */
        logs?: Array<ConfigurationAuditLog>
    }> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/tailnet/{tailnet}/logging/configuration",
            path: {
                tailnet: tailnet,
            },
            query: {
                start: start,
                end: end,
                actor: actor,
                target: target,
                event: event,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
            },
        })
    }
    /**
     * List network flow logs
     * List all network flow logs for a tailnet.
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
     * @param start The start of the time window for which to retrieve logs, in RFC 3339 format.
     * @param end The end of the time window for which to retrieve logs, in RFC 3339 format.
     * @returns any Successful operation. The `logs` field contains an array of [NetworkFlowLog](#model/networkflowlog) objects.
     * @throws ApiError
     */
    public static listNetworkFlowLogs(
        tailnet: string,
        start: string,
        end: string
    ): CancelablePromise<{
        /**
         * Matching log entries, ordered chronologically.
         */
        logs?: Array<NetworkFlowLog>
    }> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/tailnet/{tailnet}/logging/network",
            path: {
                tailnet: tailnet,
            },
            query: {
                start: start,
                end: end,
            },
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
                502: `Bad gateway.`,
            },
        })
    }
    /**
     * Get log streaming status
     * Retrieve the log streaming status for the provided log type.
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
     * @param logType The type of log.
     * @returns LogstreamEndpointPublishingStatus Successful operation.
     * @throws ApiError
     */
    public static getLogStreamingStatus(
        tailnet: string,
        logType: logType
    ): CancelablePromise<LogstreamEndpointPublishingStatus> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/tailnet/{tailnet}/logging/{logType}/stream/status",
            path: {
                tailnet: tailnet,
                logType: logType,
            },
            errors: {
                403: `Forbidden.`,
                404: `Not found.`,
                502: `Bad gateway.`,
            },
        })
    }
    /**
     * Get log streaming configuration
     * Retrieve the log streaming configuration for the provided log type.
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
     * @param logType The type of log.
     * @returns LogstreamEndpointConfiguration Successful operation.
     * @throws ApiError
     */
    public static getLogStreamingConfiguration(
        tailnet: string,
        logType: logType
    ): CancelablePromise<LogstreamEndpointConfiguration> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/tailnet/{tailnet}/logging/{logType}/stream",
            path: {
                tailnet: tailnet,
                logType: logType,
            },
            errors: {
                403: `Forbidden.`,
                404: `Not found.`,
            },
        })
    }
    /**
     * Set log streaming configuration
     * Set the log streaming configuration for the provided log type.
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
     * @param logType The type of log.
     * @param requestBody The [LogstreamEndpointConfiguration](#model/logstreamendpointconfiguration) to set.
     * `logType` is specified in the request URL rather than the body.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static setLogStreamingConfiguration(
        tailnet: string,
        logType: logType,
        requestBody?: LogstreamEndpointConfiguration
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/tailnet/{tailnet}/logging/{logType}/stream",
            path: {
                tailnet: tailnet,
                logType: logType,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad request.`,
                403: `Forbidden.`,
                404: `Not found.`,
            },
        })
    }
    /**
     * Disable log streaming
     * Delete the log streaming configuration for the provided log type.
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
     * @param logType The type of log.
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static disableLogStreaming(
        tailnet: string,
        logType: logType
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/tailnet/{tailnet}/logging/{logType}/stream",
            path: {
                tailnet: tailnet,
                logType: logType,
            },
            errors: {
                403: `Forbidden.`,
                404: `Not found.`,
            },
        })
    }
}
