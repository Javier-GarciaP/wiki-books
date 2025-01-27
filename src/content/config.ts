import { z, defineCollection } from 'astro:content'

const book = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        bookcover: z.string(),
        publicationdate: z.string(),
        keywords: z.array(z.string()),
        publisher: z.string(),
        ISBN: z.number(),
        averagerating: z.number(), 
        numberofreviews: z.number(),
        numberofpages: z.number(),
        readingage: z.string(),
        authorbiography: z.string(),
    })
})

const author = defineCollection({
    schema: z.object({
        name: z.string(),
        birthPlace: z.string(),
        socialMedia: z.array(z.string()),
        highlights: z.array(z.string()),
    
    })
})

export const collectin =  {
    book: book,
    author: author
}