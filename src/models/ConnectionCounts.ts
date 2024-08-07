/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConnectionCounts = {
    /**
     * IP protocol name (or number if no name used).
     */
    proto?: ConnectionCounts.proto;
    /**
     * Source addr:port.
     */
    src?: string;
    /**
     * Destination addr:port.
     */
    dst?: string;
    /**
     * Number of packets sent.
     */
    txPkts?: number;
    /**
     * Number of bytes sent.
     */
    txBytes?: number;
    /**
     * Number of packets received.
     */
    rxPkts?: number;
    /**
     * Number of bytes received.
     */
    rxBytes?: number;
};
export namespace ConnectionCounts {
    /**
     * IP protocol name (or number if no name used).
     */
    export enum proto {
        AH = 'ah',
        DCCP = 'dccp',
        EGP = 'egp',
        ESP = 'esp',
        GRE = 'gre',
        ICMP = 'icmp',
        IGMP = 'igmp',
        IGP = 'igp',
        IPV4 = 'ipv4',
        IPV6_ICMP = 'ipv6-icmp',
        SCTP = 'sctp',
        TCP = 'tcp',
        UDP = 'udp',
    }
}

