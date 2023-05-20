import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {
	const { articleId } = event.context.params
	const article = await prisma.articles.findUnique({where: {id: parseInt(articleId)}})
	return article
})