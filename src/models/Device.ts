/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A Tailscale device (sometimes referred to as *node* or *machine*), is any computer or mobile device that joins a tailnet.
 *
 * Each device has a unique ID (`nodeId` in the schema below) that is used to identify the device in API calls.
 * This ID can be found by going to the [Machines](https://login.tailscale.com/admin/machines) page in the admin console,
 * selecting the relevant device, then finding the ID in the Machine Details section.
 * You can also [list all devices](#tag/devices/get/tailnet/{tailnet}/devices) in the tailnet to get their `nodeId` values.
 *
 */
export type Device = {
    /**
     * A list of Tailscale IP addresses for the device,
     * including both IPv4 (formatted as 100.x.y.z)
     * and IPv6 (formatted as fd7a:115c:a1e0:a:b:c:d:e) addresses.
     *
     */
    addresses?: Array<string>;
    /**
     * The legacy identifier for a device; you
     * can supply this value wherever {deviceId} is indicated in the
     * endpoint. Note that although "id" is still accepted, "nodeId" is
     * preferred.
     *
     */
    id?: string;
    /**
     * The preferred identifier for a device;
     * supply this value wherever {deviceId} is indicated in the endpoint.
     *
     */
    nodeId?: string;
    /**
     * The user who registered the node. For untagged nodes,
     * this user is the device owner.
     *
     */
    user?: string;
    /**
     * The MagicDNS name of the device.
     * Learn more about MagicDNS at https://tailscale.com/kb/1081/.
     *
     */
    name?: string;
    /**
     * The machine name in the admin console.
     * Learn more about machine names at https://tailscale.com/kb/1098/.
     *
     */
    hostname?: string;
    /**
     * The version of the Tailscale client
     * software; this is empty for external devices.
     *
     */
    clientVersion?: string;
    /**
     * 'true' if a Tailscale client version
     * upgrade is available. This value is empty for external devices.
     *
     */
    updateAvailable?: boolean;
    /**
     * The operating system that the device is running.
     *
     */
    os?: string;
    /**
     * The date on which the device was added
     * to the tailnet; this is empty for external devices.
     *
     */
    created?: string;
    /**
     * When device was last active on the tailnet.
     *
     */
    lastSeen?: string;
    /**
     * 'true' if the keys for the device will not expire.
     * Learn more at https://tailscale.com/kb/1028/.
     *
     */
    keyExpiryDisabled?: boolean;
    /**
     * The expiration date of the device's auth key.
     * Learn more about key expiry at https://tailscale.com/kb/1028/.
     *
     */
    expires?: string;
    /**
     * 'true' if the device has been authorized to join the tailnet; otherwise, 'false'.
     * Learn more about device authorization at https://tailscale.com/kb/1099/.
     *
     */
    authorized?: boolean;
    /**
     * 'true', indicates that a device is not a member of the tailnet, but is shared in to the tailnet;
     * if 'false', the device is a member of the tailnet.
     * Learn more about node sharing at https://tailscale.com/kb/1084/.
     *
     */
    isExternal?: boolean;
    /**
     * For internal use and is not required for any API operations.
     * This value is empty for external devices.
     *
     */
    machineKey?: string;
    /**
     * Mostly for internal use, required for select operations, such as adding a node to a locked tailnet.
     * Learn about tailnet locks at https://tailscale.com/kb/1226/.
     *
     */
    nodeKey?: string;
    /**
     * 'true' if the device is not allowed to accept any connections over Tailscale, including pings.
     * Learn more in the "Allow incoming connections" section of https://tailscale.com/kb/1072/.
     *
     */
    blocksIncomingConnections?: boolean;
    /**
     * The subnet routes for this device that have been approved by a tailnet admin.
     * Learn more about subnet routes at https://tailscale.com/kb/1019/.
     *
     */
    enabledRoutes?: Array<string>;
    /**
     * The subnets this device requests to expose.
     * Learn more about subnet routes at https://tailscale.com/kb/1019/.
     *
     */
    advertiseRoutes?: Array<string>;
    /**
     * clientConnectivity provides a report on the device's current physical network conditions.
     *
     */
    clientConnectivity?: {
        /**
         * Client's magicsock UDP IP:port endpoints (IPv4 or IPv6).
         *
         */
        endpoints?: Array<string>;
        /**
         * 'true' if the host's NAT mappings vary based on the destination IP.
         *
         */
        mappingVariesByDestIP?: boolean;
        /**
         * Map of DERP server locations and their current latency.
         */
        latency?: Record<string, {
            /**
             * 'true' for the node's preferred DERP server for incoming traffic.
             *
             */
            preferred?: boolean;
            /**
             * Current latency to DERP server.
             *
             */
            latencyMs?: number;
        }>;
        /**
         * Identifies features supported by the client.
         *
         */
        clientSupports?: {
            /**
             * 'true' if your router can route connections
             * from endpoints on your LAN back to your LAN using those endpoints’
             * globally-mapped IPv4 addresses/ports.
             *
             */
            hairPinning?: boolean;
            /**
             * 'true' if the device OS supports IPv6,
             * regardless of whether IPv6 internet connectivity is available.
             *
             */
            ipv6?: boolean;
            /**
             * 'true' if PCP port-mapping service exists on your router.
             *
             */
            pcp?: boolean;
            /**
             * 'true' if NAT-PMP port-mapping service exists on your router.
             *
             */
            pmp?: boolean;
            /**
             * 'true' if UDP traffic is enabled on the current network;
             * if 'false', Tailscale may be unable to make direct connections, and will rely on our DERP servers.
             *
             */
            udp?: boolean;
            /**
             * 'true' if UPnP port-mapping service exists on your router.
             *
             */
            upnp?: boolean;
        };
    };
    /**
     * Lets you assign an identity to a device that is separate from human users, and use it as part of an ACL to restrict access.
     * Once a device is tagged, the tag is the owner of that device.
     * A single node can have multiple tags assigned.
     * This value is empty for external devices.
     * Learn more about tags at https://tailscale.com/kb/1068/.
     *
     */
    tags?: Array<string>;
    /**
     * Indicates an issue with the tailnet lock node-key signature on this device.
     * This field is only populated when tailnet lock is enabled.
     *
     */
    tailnetLockError?: string;
    /**
     * The node's tailnet lock key.
     * Every node generates a tailnet lock key (so the value will be present) even if tailnet lock is not enabled.
     * Learn more about tailnet lock at https://tailscale.com/kb/1226/.
     *
     */
    tailnetLockKey?: string;
    /**
     * Contains extra identifiers from the device when the tailnet it is connected to has device posture identification collection enabled.
     * If the device has not opted-in to posture identification collection, this will contain {"disabled": true}.
     * Learn more about posture identity at https://tailscale.com/kb/1326/device-identity.
     *
     */
    postureIdentity?: {
        serialNumbers?: Array<string>;
        disabled?: boolean;
    };
};

