import prisma from "./prisma";

// to see all the words
export async function getWords() {
    try {
        const words = await prisma.cricket_table.findMany()
        return words 
    } catch (error) {
        return { error }
    }
}

// main single meaning page /dictionary/word
export async function getWord(name: any) {
    try {
        const singleWord = await prisma.cricket_table.findFirst({
            where: {
                name: name,
            },
        })
        return singleWord
    } catch (error) {
        return { error }
    }
}



// retrn an array
export async function getArray(country: any) {
    console.log(country)
    try {
        const singleWord = await prisma.cricket_table.findMany({
            where: {
               country: {startsWith: country}
            },
        })
        return singleWord
    } catch (error) {
        return { error }
    }
}





// filtering words with 1st letter
export async function getBy1stLetter(firstLetter1: any) {
    try {
        const matchedWords = await prisma.cricket_table.findMany({
            where: {
                name: {
                    startsWith: firstLetter1,
                },
            },
        })
        return matchedWords
    } catch (error) {
        return { error }
    }
}


// full search with matching word -------------
export async function getTheSearchResult(searchQ: any) {
    try {
        const matchedWords = await prisma.cricket_table.findMany({
            where: {
                name: {
                    contains: searchQ,
                },
            },
        })
        return matchedWords
    } catch (error) {
        return { error }
    }
}