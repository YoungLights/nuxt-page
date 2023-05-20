import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const article = await prisma.articles.delete({
		where: {
			id: parseInt(body.id)
		}
	})
})