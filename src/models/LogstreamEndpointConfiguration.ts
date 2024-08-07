/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { logType } from "./logType"
/**
 * The current configuration of a log streaming endpoint.
 */
export type LogstreamEndpointConfiguration = {
    /**
     * The type of log that is streamed to this endpoint.
     */
    readonly logType?: logType
    /**
     * The type of system to which logs are being streamed.
     */
    destinationType?: LogstreamEndpointConfiguration.destinationType
    /**
     * The URL to which log streams are being posted.
     */
    url?: string
    /**
     * The username with which log streams to this endpoint are authenticated.
     */
    user?: string
    /**
     * The token/password with which log streams to this endpoint should be authenticated.
     */
    token?: string
}
export namespace LogstreamEndpointConfiguration {
    /**
     * The type of system to which logs are being streamed.
     */
    export enum destinationType {
        SPLUNK = "splunk",
        ELASTIC = "elastic",
        PANTHER = "panther",
        CRIBL = "cribl",
        DATADOG = "datadog",
        AXIOM = "axiom",
    }
}
