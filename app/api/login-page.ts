export default async function GET() {
    const res = await fetch('https://localhost:3000/sign-in', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    return Response.json({ data })
}