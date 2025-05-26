export default async function Page({ params }: { params: Promise<{ hash: string }> }) {
    const { hash } = await params;

    return <div>{hash}</div>;
}
