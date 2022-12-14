/**
 * MMS
 * Merchandise Management System -  API first approach
 *
 * OpenAPI spec version: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * discount
 */
export interface Discount { 
    /**
     * different fix price in cent for that product
     */
    fix?: number;
    /**
     * the discount rate in percent
     */
    rate?: number;
    /**
     * short info about type of discount
     */
    text?: string;
}