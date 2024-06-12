// import { PrismaClient } from "@prisma/client"

// declare global {
//   namespace NodeJS {
//     interface Global {}
//   }
// }

// interface CustomNodeJsGlobal extends NodeJS.Global {
//   prisma: PrismaClient
// }

// declare const global: CustomNodeJsGlobal

// const prisma = global.prisma || new PrismaClient()

// if (process.env.NODE_ENV === "development") global.prisma = prisma

// export default prisma

import { PrismaClient } from "@prisma/client"
import "server-only"

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export default prisma
