import { Knex } from "knex";
import { getByEmail } from "../src/repositories/userRepository";
import { encryptPassword } from "../middlewares/authPassword";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const passwordsuperAdmin = await encryptPassword("superadmin1234");
    const passwordAdmin = await encryptPassword("admin1234");
    const passwordUser = await encryptPassword("user1234")

    // Inserts seed entries
    await knex("users").insert([
        { id: 999, 
          name:"superadmin",
          role: "superadmin",
          email: "superadmin@super.com",
          password: passwordsuperAdmin
        },
        { id: 888, 
          name:"admin",
          role: "admin",
          email: "admin@admin.com",
          password: passwordAdmin
        },
        { id: 777, 
          name:"member",
          role: "user",
          email: "user@user.com",
          password: passwordUser
        }
    ]);
};
