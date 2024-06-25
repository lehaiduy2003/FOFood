import { useParams } from "next/navigation";

export default async function GET() {
  const params = useParams();
  return { message: `Hello ${params.id}` };
}
