/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Device } from '../models/Device';
import type { DevicePostureAttributes } from '../models/DevicePostureAttributes';
import type { DeviceRoutes } from '../models/DeviceRoutes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DevicesService {
    /**
     * List tailnet devices
     * Lists the devices in a tailnet.
     * @param tailnet The tailnet organization name.
     *
     * When specifying a tailnet in the API, you can:
     *
     * - Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.
     * This is the best option for most users.
     * Your API calls would start:
     *
     * ```sh
     * curl "https://api.tailscale.com/api/v2/tailnet/-/..."
     * ```
     *
     * - Provide the **organization** name found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**
     * page of the Tailscale admin console (not to be confused with the "tailnet name" found in the DNS tab).
     *
     * For example, if your organization name is `alice@example.com`, your API calls would start:
     *
     * ```sh
     * curl "https://api.tailscale.com/api/v2/tailnet/alice@example.com/..."
     * ```
     *
     * Learn more about [tailnet organization names](https://tailscale.com/kb/1217/tailnet-name#organization-name).
     *
     * @param fields Optionally controls whether the response returns **all** fields or only a predefined subset of fields.
     * Currently, there are two supported options:
     *
     * - **`all`:** return all fields in the response
     * - **`default`:** return all fields **except**:
     * - `enabledRoutes`
     * - `advertisedRoutes`
     * - `clientConnectivity` (which contains the following fields: `mappingVariesByDestIP`, `derp`, `endpoints`, `latency`, and `clientSupports`)
     *
     * If the `fields` parameter is not supplied, then the default (limited fields) option is used.
     *
     * @returns any Successful operation. The `devices` field contains an array of [Device](#model/device) objects.
     * @throws ApiError
     */
    public static listTailnetDevices(
        tailnet: string,
        fields?: 'all' | 'default',
    ): CancelablePromise<{
        devices?: Array<Device>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tailnet/{tailnet}/devices',
            path: {
                'tailnet': tailnet,
            },
            query: {
                'fields': fields,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Get a device
     * Retrieve the details for the specified device.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @returns Device Successful operation. Returns a [Device](#model/device) object.
     * @throws ApiError
     */
    public static getDevice(
        deviceId: string,
    ): CancelablePromise<Device> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device/{deviceId}',
            path: {
                'deviceId': deviceId,
            },
            errors: {
                400: `Bad request.`,
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Delete a device
     * Deletes the device from its tailnet.
     * The device must belong to the requesting user's tailnet.
     * Deleting devices shared with the tailnet is not supported.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deleteDevice(
        deviceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/device/{deviceId}',
            path: {
                'deviceId': deviceId,
            },
            errors: {
                400: `Bad request.`,
                500: `Internal server error.`,
                501: `Not implemented.`,
            },
        });
    }
    /**
     * Expire a device's key
     * Mark a device's node key as expired.
     * This will require the device to re-authenticate in order to connect to the tailnet.
     * The device must belong to the requesting user's tailnet.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static expireDeviceKey(
        deviceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/expire',
            path: {
                'deviceId': deviceId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * List device routes
     * Retrieve the list of subnet routes that a device is advertising,
     * as well as those that are enabled for it.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @returns DeviceRoutes Successful operation. Returns a [DeviceRoutes](#model/deviceroutes) object.
     * @throws ApiError
     */
    public static listDeviceRoutes(
        deviceId: string,
    ): CancelablePromise<DeviceRoutes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device/{deviceId}/routes',
            path: {
                'deviceId': deviceId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Set device routes
     * Set a device's enabled subnet routes by replacing the existing list of subnet routes with the supplied parameters.
     * [Advertised routes](https://tailscale.com/kb/1019/subnets#advertise-subnet-routes) cannot be set through the API, since they must be set directly on the device.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param requestBody
     * @returns DeviceRoutes Successful operation. Returns a [DeviceRoutes](#model/deviceroutes) object.
     * @throws ApiError
     */
    public static setDeviceRoutes(
        deviceId: string,
        requestBody: {
            /**
             * The new list of enabled subnet routes.
             *
             */
            routes?: Array<string>;
        },
    ): CancelablePromise<DeviceRoutes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/routes',
            path: {
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Authorize device
     * This call marks a device as authorized or revokes its authorization for tailnets where device authorization is required,
     * according to the authorized field in the payload.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static authorizeDevice(
        deviceId: string,
        requestBody?: {
            /**
             * - If `true`, authorize a new device or re-authorize a previously deauthorized device.
             * - If `false`, deauthorize an authorized device.
             *
             */
            authorized: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/authorized',
            path: {
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Set device name
     * When a device is added to a tailnet, its Tailscale [device name](https://tailscale.com/kb/1098/machine-names) (also sometimes referred to as machine name) is generated from its OS hostname.
     * The device name is the canonical name for the device on your tailnet.
     *
     * Device name changes immediately get propogated through your tailnet, so be aware that any existing [Magic DNS](https://tailscale.com/kb/1081/magicdns) URLs using the old name will no longer work.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static setDeviceName(
        deviceId: string,
        requestBody?: {
            /**
             * The new name for the device.
             *
             * This can be provided as either the fully qualified domain name for the device (e.g. "nodename.your-domain.ts.net")
             * or just the base name (e.g. "nodename").
             *
             * If `name` is unset or provided empty, the device's name is reset to be
             * generated from its OS hostname.
             *
             */
            name: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/name',
            path: {
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Set device tags
     * Tags let you assign an identity to a device that is separate from human users, and use that identity as part of an ACL to restrict access.
     * Tags are similar to role accounts, but more flexible.
     *
     * Tags are created in the tailnet policy file by defining the tag and an owner of the tag.
     * Once a device is tagged, the tag is the owner of that device.
     * A single node can have multiple tags assigned.
     *
     * Consult the policy file for your tailnet in the [admin console](https://login.tailscale.com/admin/acls) for the list of tags that have been created for your tailnet.
     * Learn more about [tags](https://tailscale.com/kb/1068/).
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static setDeviceTags(
        deviceId: string,
        requestBody?: {
            /**
             * The new list of tags for the device.
             *
             */
            tags?: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/tags',
            path: {
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Update device key
     * When a device is added to a tailnet, its key expiry is set according to the tailnet's key expiry setting.
     * If the key is not refreshed and expires, the device can no longer communicate with other devices in the tailnet.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static updateDeviceKey(
        deviceId: string,
        requestBody?: {
            /**
             * - If `true`, disable the device's key expiry. The original key expiry time is still maintained. Upon re-enabling, the key will expire at that original time.
             * - If `false`, enable the device's key expiry. Sets the key to expire at the original expiry time prior to disabling. The key may already have expired. In that case, the device must be re-authenticated.
             *
             */
            keyExpiryDisabled: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/key',
            path: {
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Set device IPv4 address
     * When a device is added to a tailnet, its Tailscale IPv4 address is set at random either from the CGNAT range,
     * or a subset of the CGNAT range specified by an [ip pool](https://tailscale.com/kb/1304/ip-pool).
     * This endpoint can be used to replace the existing IPv4 address with a specific value.
     *
     * This action will break any existing connections to this machine.
     * You will need to reconnect to this machine using the new IP address.
     * You may also need to flush your DNS cache.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param requestBody
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static setDeviceIp(
        deviceId: string,
        requestBody?: {
            /**
             * The new IPv4 address for the device.
             *
             */
            ipv4: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/ip',
            path: {
                'deviceId': deviceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Get device posture attributes
     * Retrieve all posture attributes for the specified device.
     * This returns a JSON object of all the key-value pairs of posture attributes for the device.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @returns DevicePostureAttributes Successful operation. Returns a [DevicePostureAttributes](#model/devicepostureattributes) object.
     * @throws ApiError
     */
    public static getDevicePostureAttributes(
        deviceId: string,
    ): CancelablePromise<DevicePostureAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/device/{deviceId}/attributes',
            path: {
                'deviceId': deviceId,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Set custom device posture attributes
     * Create or update a custom posture attribute on the specified device.
     * User-managed attributes must be in the custom namespace,
     * which is indicated by prefixing the attribute key with `custom:`.
     *
     * Custom device posture attributes are available for the Personal and Enterprise plans.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param attributeKey The name of the posture attribute to set.
     * This must be prefixed with `custom`:
     *
     * Keys have a maximum length of 50 characters including the namespace,
     * and can only contain letters, numbers, underscores, and colon.
     *
     * Keys are case-sensitive. Keys must be unique,
     * but are checked for uniqueness in a case-insensitive manner.
     * For example, `custom:MyAttribute` and `custom:myattribute` cannot both be set within a single tailnet.
     *
     * All values for a given key need to be of the same type,
     * which is determined when the first value is written for a given key.
     * For example, `custom:myattribute` cannot have a numeric value (`8`7) for one node and a string value (`"78"`)
     * for another node within the same tailnet.
     *
     * @param requestBody
     * @returns DevicePostureAttributes Successful operation. Returns a [DevicePostureAttributes](#model/devicepostureattributes) object.
     * @throws ApiError
     */
    public static setCustomDevicePostureAttributes(
        deviceId: string,
        attributeKey: string,
        requestBody: Record<string, (string | number | boolean)>,
    ): CancelablePromise<DevicePostureAttributes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/device/{deviceId}/attributes/{attributeKey}',
            path: {
                'deviceId': deviceId,
                'attributeKey': attributeKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
    /**
     * Delete custom device posture attributes
     * Delete a posture attribute from the specified device.
     * This is only applicable to user-managed posture attributes in the custom namespace,
     * which is indicated by prefixing the attribute key with `custom:`.
     *
     * @param deviceId ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.
     *
     * @param attributeKey The name of the posture attribute to set.
     * This must be prefixed with `custom`:
     *
     * Keys have a maximum length of 50 characters including the namespace,
     * and can only contain letters, numbers, underscores, and colon.
     *
     * Keys are case-sensitive. Keys must be unique,
     * but are checked for uniqueness in a case-insensitive manner.
     * For example, `custom:MyAttribute` and `custom:myattribute` cannot both be set within a single tailnet.
     *
     * All values for a given key need to be of the same type,
     * which is determined when the first value is written for a given key.
     * For example, `custom:myattribute` cannot have a numeric value (`8`7) for one node and a string value (`"78"`)
     * for another node within the same tailnet.
     *
     * @returns any Successful operation.
     * @throws ApiError
     */
    public static deleteCustomDevicePostureAttributes(
        deviceId: string,
        attributeKey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/device/{deviceId}/attributes/{attributeKey}',
            path: {
                'deviceId': deviceId,
                'attributeKey': attributeKey,
            },
            errors: {
                404: `Not found.`,
                500: `Internal server error.`,
            },
        });
    }
}
