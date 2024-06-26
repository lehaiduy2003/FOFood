export function GET(req: Request, { params }: { params: { id: string } }) {
  return Response.json({
    status: 200,
    statusText: { message: `Hello ${params.id}` },
  });
}
