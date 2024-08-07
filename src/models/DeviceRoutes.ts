/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeviceRoutes = {
    /**
     * The subnets this device requests to expose.
     *
     */
    advertisedRoutes: Array<string>;
    /**
     * The subnet routes for this device that have been approved by a tailnet admin.
     *
     */
    enabledRoutes: Array<string>;
};

