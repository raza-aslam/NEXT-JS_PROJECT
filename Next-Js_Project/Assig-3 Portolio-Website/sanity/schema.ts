import { type SchemaTypeDefinition } from 'sanity'
import  profile from "../sanity/profile"
import job from './lib/job'
import Project from './lib/Project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile,job,Project],
}
