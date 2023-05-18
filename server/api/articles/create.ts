import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
	const body = await readBody(e)
	const article = await prisma.articles.create({
		data: {
			title: body.title, 
			author: body.author, 
			text: body.text
		}
	})
})