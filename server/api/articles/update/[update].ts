import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
	const {update} = event.context.params
	const body = await readBody(event)
	const article = await prisma.articles.update({
		where: {
			id: parseInt(update)
		}, 
		data: {
			title: body.title,
			author: body.author,
			text: body.text
		}
	})
})