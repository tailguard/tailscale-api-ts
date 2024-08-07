/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionCounts } from './ConnectionCounts';
export type NetworkFlowLog = {
    /**
     * Timestamp of the flow log, in RFC 3339 format.
     */
    logged?: string;
    /**
     * Identifier of the node.
     */
    nodeId?: string;
    /**
     * Time at which flow started, in RFC 3339 format.
     */
    start?: string;
    /**
     * Time at which flow ended, in RFC 3339 format.
     */
    end?: string;
    virtualTraffic?: Array<ConnectionCounts>;
    subnetTraffic?: Array<ConnectionCounts>;
    exitTraffic?: Array<ConnectionCounts>;
    physicalTraffic?: Array<ConnectionCounts>;
};

