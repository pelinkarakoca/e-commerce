import ContentCard from "./ContentCard";
export default function ContentCardsContainer({ contents }) {
  console.log(contents);
  const cards = contents.map((content) => (
    <ContentCard key={content.id} content={content} />
  ));

  // TODO mobile view
  return (
    <div className="mx-auto max-w-7xl py-12 font-mono">
      <div className="mb-12 text-center">
        <h2 className="text-sm uppercase tracking-wide text-primary-red">
          Practice Advice
        </h2>
        <h1 className="text-4xl font-bold">Featured Posts</h1>
        <p className="mt-4 text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex space-x-2"> {cards}</div>
    </div>
  );
}
