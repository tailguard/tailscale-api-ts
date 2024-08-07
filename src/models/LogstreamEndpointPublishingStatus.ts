/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Latest status of log stream publishing for a specific type of log.
 */
export type LogstreamEndpointPublishingStatus = {
    /**
     * Timestamp of the most recent publishing activity, in RFC 3339 format.
     */
    lastActivity: string;
    /**
     * The most recent error (if any).
     */
    lastError: string;
    /**
     * The size of the largest single request body.
     */
    maxBodySize: number;
    /**
     * Total bytes published across all requests.
     */
    numBytesSent: number;
    /**
     * The total number of entries published.
     */
    numEntriesSent: number;
    /**
     * The number of spoofed entries published. A spoofed entry is one that failed to validate because we did not see receive a matching flow log from the other side of the connection.
     */
    numSpoofedEntries: number;
    /**
     * The total number of requests made to the streaming endpoint.
     */
    numTotalRequests: number;
    /**
     * The total number of requests to the streaming endpoint that have failed.
     */
    numFailedRequests: number;
    /**
     * The exponentially weighted moving average rate at which data is being streamed to the endpoint, in bytes per second.
     */
    rateBytesSent: number;
    /**
     * The exponentially weighted moving average rate at which entries are being sent to the endpoint, in entries per second.
     */
    rateEntriesSent: number;
    /**
     * The exponentially weighted moving average rate at which requests are being made to the endpoint, in requests per second.
     */
    rateTotalRequests: number;
    /**
     * The exponentially weighted moving average rate at which requests are failing, in requests per second.
     */
    rateFailedRequests: number;
};

