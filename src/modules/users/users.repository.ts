import {prisma} from "../../database/prisma";

interface CreateUserInput {
	name?: string,
	email: string,
	passwordHash: string
}

async function createUser(user: CreateUserInput) {
	const createdUser = await prisma.user.create({
		data: {
			name: user.name,
			email: user.email,
			passwordHash: user.passwordHash
		},
		select: {
			userId: true,
			name: true,
			email: true,
			createdAt: true
		}
	});

	return createdUser;
}