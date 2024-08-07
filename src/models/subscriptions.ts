/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The list of subscribed events that trigger POST requests to the configured endpoint URL.
 * Learn more about [webhook events](/kb/1213/webhooks#events).
 *
 */
export type subscriptions = Array<'nodeCreated' | 'nodeNeedsApproval' | 'nodeApproved' | 'nodeKeyExpiringInOneDay' | 'nodeKeyExpired' | 'nodeDeleted' | 'policyUpdate' | 'userCreated' | 'userNeedsApproval' | 'userSuspended' | 'userRestored' | 'userDeleted' | 'userApproved' | 'userRoleUpdated' | 'subnetIPForwardingNotEnabled' | 'exitNodeIPForwardingNotEnabled'>;
