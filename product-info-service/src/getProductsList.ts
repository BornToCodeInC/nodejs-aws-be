import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import products from './productService.json';

export const getProductsList: APIGatewayProxyHandler = async () => {
    const headers: any = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    };
    let statusCode: number = 200;
    let body: string = '';
    try {
        body = JSON.stringify(products, null, 2);
    } catch (e) {
        body = JSON.stringify(e, null, 2);
        statusCode = 500;
    }

    return {
        statusCode,
        body,
        headers,
    };
}