import Grid from 'components/grid';

export default function Loading() {
  return (
    <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return <Grid.Item key={index} className="animate-pulse rounded-xl bg-neutral-100" />;
        })}
    </Grid>
  );
}
