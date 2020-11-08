import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import products from './productService.json';

export const getProductById: APIGatewayProxyHandler = async (event, _context) => {
    const headers: any = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    };
    let statusCode: number = 200;
    let body: string = '';
    try {
        const product: any | undefined = products.find((product: any): boolean => product.id === event.pathParameters?.productId);
        body = product ? JSON.stringify(product, null, 2) : JSON.stringify({ message: 'Not Found' });
        if (!product) {
            statusCode = 404;
        }
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