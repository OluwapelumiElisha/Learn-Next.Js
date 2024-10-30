export default function ProductDestails({
  params
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  );
}
