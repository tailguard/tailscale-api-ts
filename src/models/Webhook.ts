/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Webhook = {
    /**
     * ID of the webhook endpoint.
     *
     */
    endpointId?: string;
    /**
     * The endpoint that events are sent to from Tailscale via POST requests.
     *
     */
    endpointUrl?: string;
    /**
     * The provider type for the webhook destination, or an empty string if none are applicable.
     * Outgoing webhook events are sent in the format expected by the provider type if non-empty.
     *
     */
    providerType?: Webhook.providerType;
    /**
     * The login name for the creator of the webhook endpoint.
     *
     */
    creatorLoginName?: string;
    /**
     * The time the webhook endpoint was created.
     *
     */
    created?: string;
    /**
     * The time the webhook endpoint was last modified.
     *
     */
    lastModified?: string;
    /**
     * The list of subscribed events that trigger POST requests to the configured endpoint URL.
     * Learn more about [webhook events](/kb/1213/webhooks#events).
     *
     */
    subscriptions?: Array<'nodeCreated' | 'nodeNeedsApproval' | 'nodeApproved' | 'nodeKeyExpiringInOneDay' | 'nodeKeyExpired' | 'nodeDeleted' | 'policyUpdate' | 'userCreated' | 'userNeedsApproval' | 'userSuspended' | 'userRestored' | 'userDeleted' | 'userApproved' | 'userRoleUpdated' | 'subnetIPForwardingNotEnabled' | 'exitNodeIPForwardingNotEnabled'>;
    /**
     * The webhook secret associated with the endpoint.
     * Only populated on creation or when the secret is rotated.
     *
     * This secret is used for generating the `Tailscale-Webhook-Signature` header in requests sent to the endpoint URL.
     * Learn more about [verifying webhook event signatures](/kb/1213/webhooks#verifying-an-event-signature).
     *
     */
    secret?: string;
};
export namespace Webhook {
    /**
     * The provider type for the webhook destination, or an empty string if none are applicable.
     * Outgoing webhook events are sent in the format expected by the provider type if non-empty.
     *
     */
    export enum providerType {
        SLACK = 'slack',
        MATTERMOST = 'mattermost',
        GOOGLECHAT = 'googlechat',
        DISCORD = 'discord',
    }
}

