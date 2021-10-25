/*
Function Name: modifySchema

A Helper function that takes in a pages schema object and:
- Replaces all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
- Initalizes local schema objec
- Modify breadcrumb list
- Desctrutures the schema object and creates a new object with the name removed

*/

export const modifySchema = (schema, title, slug) => {
  const schemaObject = JSON.parse(schema)
  // Replaces all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
  schemaObject.seo.schema.raw = schemaObject.seo.schema.raw.replace(
    /\"\//g,
    '"https://thepmgrp.com/'
  )
  // Initalizes local schema object

  // Modify breadcrumb list

  console.log(title)
  console.log(slug)
}
