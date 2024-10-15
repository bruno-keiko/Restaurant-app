const data = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Product ${i + 1}`,
  description: `Description ${i + 1}`,
  price: ` ${i + 1}`,
  image: `/images/popular_image.png`,
  popular: i % 2 === 0,
  category: `Category ${i + 1}`,
  ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
}));

const dto = {
  data,
  total: data.length, // data.length,
};

export async function GET() {
  const response = new Promise((resolve) => {
    setTimeout(() => {
      resolve(dto);
    }, 1000);
  });

  const res = await response;

  return Response.json(res);
}
