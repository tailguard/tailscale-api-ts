/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Settings for a tailnet.
 *
 */
export type TailnetSettings = {
    /**
     * Whether [device approval](/kb/1099/device-approval) is enabled for the tailnet.
     *
     */
    devicesApprovalOn?: boolean;
    /**
     * Whether [auto updates](/kb/1067/update#auto-updates) are enabled for devices that belong to this tailnet.
     *
     */
    devicesAutoUpdatesOn?: boolean;
    /**
     * The [key expiry](/kb/1028/key-expiry) duration for devices on this tailnet.
     *
     */
    devicesKeyDurationDays?: number;
    /**
     * Whether [user approval](/kb/1239/user-approval) is enabled for this tailnet.
     *
     */
    usersApprovalOn?: boolean;
    /**
     * Which user roles are allowed to [join external tailnets](/kb/1271/invite-any-user).
     *
     */
    usersRoleAllowedToJoinExternalTailnets?: TailnetSettings.usersRoleAllowedToJoinExternalTailnets;
    /**
     * Whether [network flog logs](/kb/1219/network-flow-logs) are enabled for the tailnet.
     *
     */
    networkFlowLoggingOn?: boolean;
    /**
     * Whether [regional routing](/kb/1115/high-availability#regional-routing) is enabled for the tailnet.
     *
     */
    regionalRoutingOn?: boolean;
    /**
     * Whether [identity collection](/kb/1326/device-identity) is enabled for [device posture](/kb/1288/device-posture) integrations for the tailnet.
     *
     */
    postureIdentityCollectionOn?: boolean;
};
export namespace TailnetSettings {
    /**
     * Which user roles are allowed to [join external tailnets](/kb/1271/invite-any-user).
     *
     */
    export enum usersRoleAllowedToJoinExternalTailnets {
        NONE = 'none',
        ADMIN = 'admin',
        MEMBER = 'member',
    }
}

