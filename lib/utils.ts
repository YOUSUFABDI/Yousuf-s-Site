import { promises as fs } from "fs"
import path from "path"

export const getCurrentYear = () => {
  const currentYear = new Date()
  return currentYear.getFullYear()
}

export const getProjects = async () => {
  const dataFilePath = path.join(process.cwd(), "/lib/projects.json")

  const data = await fs.readFile(dataFilePath, "utf-8")
  return JSON.parse(data)
}
