
export default function MovieList({ movies, movieId }) {
  console.log({ movieId });
  const movie = movies;

  return (
    <div>
      {movie
        .filter((data) => data.id !== movieId)
        .map((data) => {
          return (
            <section key={data.id}>
              <h1>{data.rank}</h1>
              <img src={data.image} alt={data.title} />
            </section>
          );
        })}
    </div>
  );
}
