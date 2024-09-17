import ReviewCardCarousel from "./ReviewCardCarousel";

export const Default = {
  args: {
    reviewers: [
      {
        reviewer: "John",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nobis repellat, tenetur incidunt accusamus quia quisquam architecto, soluta mollitia explicabo reprehenderit asperiores quo aperiam veniam ut excepturi magni? Aliquam, ut?",
        image: "https://avatars.githubusercontent.com/u/110662505?s=80&v=4",
        rate: 3.5,
      },

      {
        reviewer: "Mone",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nobis repellat, tenetur incidunt accusamus quia quisquam architecto, soluta mollitia explicabo reprehenderit asperiores quo aperiam veniam ut excepturi magni? Aliquam, ut?",
        image: "https://avatars.githubusercontent.com/u/110662505?s=80&v=4",
        rate: 3.5,
      },

      {
        reviewer: "Goat",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nobis repellat, tenetur incidunt accusamus quia quisquam architecto, soluta mollitia explicabo reprehenderit asperiores quo aperiam veniam ut excepturi magni? Aliquam, ut?",
        image: "https://avatars.githubusercontent.com/u/110662505?s=80&v=4",
        rate: 3.5,
      },
      {
        reviewer: "fasdf",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nobis repellat, tenetur incidunt accusamus quia quisquam architecto, soluta mollitia explicabo reprehenderit asperiores quo aperiam veniam ut excepturi magni? Aliquam, ut?",
        image: "https://avatars.githubusercontent.com/u/110662505?s=80&v=4",
        rate: 3.5,
      },
      {
        reviewer: "fsda",
        comment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nobis repellat, tenetur incidunt accusamus quia quisquam architecto, soluta mollitia explicabo reprehenderit asperiores quo aperiam veniam ut excepturi magni? Aliquam, ut?",
        image: "https://avatars.githubusercontent.com/u/110662505?s=80&v=4",
        rate: 3.5,
      },
    ],
  },
};

const reviewCardConfig = {
  title: "Atoms/ReviewCardCarousel",
  component: ReviewCardCarousel,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default reviewCardConfig;
