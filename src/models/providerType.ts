/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
