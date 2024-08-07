/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A tailnet contact.
 */
export type Contact = {
    /**
     * The contact's email address.
     */
    email?: string;
    /**
     * The email address used when contact's email address has not been verified.
     */
    fallbackEmail?: string;
    /**
     * Indicates whether the contact's email address still needs to be verified.
     */
    needsVerification?: boolean;
};

