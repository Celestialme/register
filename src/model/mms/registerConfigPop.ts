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
import { Button } from './button';

/**
 * the populated register config response object
 */
export interface RegisterConfigPop { 
    id: number;
    name: string;
    api_url: string;
    public_api_url: string;
    /**
     * array of button IDs
     */
    buttons: Array<Button>;
}