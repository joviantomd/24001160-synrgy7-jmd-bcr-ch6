import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    {
      id:"1",
      name: "Toyota Supra",
      price: "3500000000",
      category: "small",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114632/ch-5-challenge/Practice_Challenge_5_1_wtdcmx.png",
      start_date: "2024/02/16",
      end_date: "2024/09/15",
      availability: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:"2",
      name: "Skyline GTR",
      price: "1000000000",
      category: "small",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114854/ch-5-challenge/skylineGTR_mppl75.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:"3",
      name: "Lamborghini Aventador",
      price: "12500000000",
      category: "small",
      image: "https://res.cloudinary.com/dsozzm34s/image/upload/v1716114873/ch-5-challenge/Lamborghini-aventador_qvxgnl.jpg",
      start_date: "2024/02/16",
      end_date: "2024/02/16",
      availability: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}
