import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const limit = 12;

export const getProducts = async (params: Record<string, string | number>) => {
  try {
    const page = Number.isFinite(+params.page) ? +params.page : 0;
    const offset = page * limit;

    const parseCsv = (value: unknown): string[] =>
      typeof value === 'string'
        ? value
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
        : [];

    const genders = parseCsv(params.genders);
    const types = parseCsv(params.types);
    const brands = parseCsv(params.brands);

    const query: Record<string, string | number> = { limit, offset };

    // Пока только с одним, тк как строку не принимает
    if (genders.length) query.gender = genders[0];
    if (types.length) query.type = types[0];
    if (brands.length) query.brand = brands[0];

    const res = await axiosInstance.get('products', {
      params: query,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const buyProduct = async (productId: number, cityId: number, count: number = 0) => {
  try {
    await axiosInstance.post('products/buy', {
      params: {
        productId: productId,
        count: count,
        cityId: cityId,
      },
    });
    return;
  } catch (err) {
    throw err;
  }
};
