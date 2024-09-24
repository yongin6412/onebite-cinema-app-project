export default function MoviePage({ params }: { params: { id: string } }) {
  return <div>movie : {params.id}</div>;
}
