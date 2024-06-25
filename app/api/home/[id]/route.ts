import { useRouter } from "next/router";

export function GET() {
  const router = useRouter();
  return Response.json({
    status: 200,
    body: { message: `Hello ${router.query.id}` },
  });
}
