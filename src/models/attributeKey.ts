/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The name of the posture attribute to set.
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
 */
export type attributeKey = string;
