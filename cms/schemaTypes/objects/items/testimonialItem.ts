import {defineField, defineType} from 'sanity'

export const testimonialItem = defineType({
  name: 'testimonialItem',
  type: 'object',
  fields: [
    //Testimonial
    defineField({
      name: 'testimonial',
      type: 'text',
    }),
    //Author
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        //Avatar
        defineField({
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
        }),
        //Name
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        //Company
        defineField({
          name: 'company',
          title: 'Company',
          type: 'string',
        }),
        //Role
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
        }),
      ],
    }),
  ],
})
