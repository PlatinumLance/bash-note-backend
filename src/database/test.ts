import bcrypt from "bcrypt";
import {prisma} from "./prisma";
import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function createHashedPassword(password: string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function createSuperUser() {
    rl.question("Enter your password: ", async password => {
        const hashedPassword = await createHashedPassword(password);

        const user = await prisma.user.create({
            data: {
                email: "master_user@email.com",
                name: "Platinum",
                passwordHash: hashedPassword,
            }
        });

        console.log("Created user: ", user);
    });
}

await createSuperUser();