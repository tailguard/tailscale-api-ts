/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A configured PostureIntegration.
 */
export type PostureIntegration = {
    /**
     * The device posture provider.
     *
     * Required on POST requests, ignored on PATCH requests.
     *
     */
    provider?: PostureIntegration.provider;
    /**
     * Identifies which of the provider's clouds to integrate with.
     *
     * - For CrowdStrike Falcon, it will be one of `us-1`, `us-2`, `eu-1` or `us-gov`.
     * - For Microsoft Intune, it will be one of `global` or `us-gov`.
     * - For Jamf Pro, Kandji and Sentinel One, it is the FQDN of your subdomain, for example `mydomain.sentinelone.net`.
     * - For Kolide, this is left blank.
     *
     */
    cloudId?: string;
    /**
     * Unique identifier for your client.
     *
     * - For Microsoft Intune, it will be your application's UUID.
     * - For CrowdStrike Falcon and Jamf Pro, it will be your client id.
     * - For Kandji, Kolide and Sentinel One, this is left blank.
     *
     */
    clientId?: string;
    /**
     * The Microsoft Intune directory (tenant) ID. For other providers, this is left blank.
     */
    tenantId?: string;
    /**
     * The secret (auth key, token, etc.) used to authenticate with the provider.
     *
     * Required when creating a new integration, may be omitted when updating an existing integration, in which case we retain the existing password.
     *
     */
    clientSecret?: string;
    /**
     * A unique identifier for the integration (generated by the system).
     */
    readonly id?: string;
    /**
     * Timestamp of the last time this configuration was updated, in RFC 3339 format.
     */
    readonly configUpdated?: string;
    /**
     * Most recent status for this integration.
     */
    readonly status?: {
        /**
         * Timestamp of the last synchronization with the device posture provider, in RFC 3339 format.
         */
        lastSync?: string;
        /**
         * If the last synchronization failed, this shows the error message associated with the failed synchronization.
         */
        error?: string;
        /**
         * The number of devices known to the provider.
         */
        providerHostCount?: number;
        /**
         * The number of Tailscale nodes that were matched with provider.
         */
        matchedCount?: number;
        /**
         * The number of Tailscale nodes with identifiers for matching.
         */
        possibleMatchedCount?: number;
    };
};
export namespace PostureIntegration {
    /**
     * The device posture provider.
     *
     * Required on POST requests, ignored on PATCH requests.
     *
     */
    export enum provider {
        FALCON = 'falcon',
        INTUNE = 'intune',
        JAMFPRO = 'jamfpro',
        KANDJI = 'kandji',
        KOLIDE = 'kolide',
        SENTINELONE = 'sentinelone',
    }
}

