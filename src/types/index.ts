// Tipos TypeScript para el proyecto
export interface Project {
  name: string
  context: string
  description: string
  repo: string
  tech: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

export interface Language {
  name: string
  level: string
}
