/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelCloudNodeAccountRegisterReq
 */
export interface ModelCloudNodeAccountRegisterReq {
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    cloud_account: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    cloud_provider: ModelCloudNodeAccountRegisterReqCloudProviderEnum;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    monitored_account_ids?: { [key: string]: string; } | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    org_acc_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    version?: string;
}


/**
 * @export
 */
export const ModelCloudNodeAccountRegisterReqCloudProviderEnum = {
    Aws: 'aws',
    Gcp: 'gcp',
    Azure: 'azure'
} as const;
export type ModelCloudNodeAccountRegisterReqCloudProviderEnum = typeof ModelCloudNodeAccountRegisterReqCloudProviderEnum[keyof typeof ModelCloudNodeAccountRegisterReqCloudProviderEnum];


/**
 * Check if a given object implements the ModelCloudNodeAccountRegisterReq interface.
 */
export function instanceOfModelCloudNodeAccountRegisterReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_account" in value;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "node_id" in value;

    return isInstance;
}

export function ModelCloudNodeAccountRegisterReqFromJSON(json: any): ModelCloudNodeAccountRegisterReq {
    return ModelCloudNodeAccountRegisterReqFromJSONTyped(json, false);
}

export function ModelCloudNodeAccountRegisterReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudNodeAccountRegisterReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_account': json['cloud_account'],
        'cloud_provider': json['cloud_provider'],
        'monitored_account_ids': !exists(json, 'monitored_account_ids') ? undefined : json['monitored_account_ids'],
        'node_id': json['node_id'],
        'org_acc_id': !exists(json, 'org_acc_id') ? undefined : json['org_acc_id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ModelCloudNodeAccountRegisterReqToJSON(value?: ModelCloudNodeAccountRegisterReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_account': value.cloud_account,
        'cloud_provider': value.cloud_provider,
        'monitored_account_ids': value.monitored_account_ids,
        'node_id': value.node_id,
        'org_acc_id': value.org_acc_id,
        'version': value.version,
    };
}

