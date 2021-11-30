export const composeEntityGetters = <TEntity extends Record<string, string>>(
  records: TEntity[]
) => ({
  getAll: (): TEntity[] => records,
  getBy: (val: string, by = "id"): TEntity | undefined =>
    records.find((record) => record[by] === val),
  getAllBy: (val: string, by = "id"): TEntity[] | undefined =>
    records.filter((record) => record[by] === val)
});
