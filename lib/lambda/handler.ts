
export async function handler(event: string, context: string) {
  console.log('Stage Name is: ' + process.env.stage);
  return {
    body: 'Hello Devops from a Lambda Function',
    statusCode: 200,
  };
}
