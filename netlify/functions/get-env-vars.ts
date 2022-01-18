import { Handler } from '@netlify/functions';

const handler: Handler = async () => {
  const apiKey: any = process.env['API_KEY'];
  const envVar: any = process.env['ENV_VAR'];
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey: apiKey, envVar: envVar }),
  };
};

export { handler };
