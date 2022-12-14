/**
 * MMS
 * Merchandise Management System -  API first approach
 *
 * OpenAPI spec version: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * device stati
 */
export interface RegisterDevices { 
    /**
     * error number: 0..OK, 1..not connected
     */
    scanner: number;
    pt: number;
    rfid: number;
}