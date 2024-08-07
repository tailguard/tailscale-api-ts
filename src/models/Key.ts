/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeyCapabilities } from './KeyCapabilities';
/**
 * An API access token or Auth Key.
 *
 */
export type Key = {
    id?: string;
    created?: string;
    expires?: string;
    revoked?: string;
    capabilities?: KeyCapabilities;
    description?: string;
    /**
     * Response for a revoked (deleted) or expired key will have an `invalid` field set to true.
     *
     */
    invalid?: boolean;
};

