import * as Transformer from 'jsonapi-serializer'

// Create serializer/deserializers here to convert the database object to the JSON API Specification.
// This could be done in the Backend For Frontend also but doing this here will require the user to not make many calls to individual microservices for data and its metadata.

export default transform()

function transform () {
  return {
    serialize: async function (Document) {
      return await new Transformer.Serializer(
        'Demo', {
          keyForAttribute: 'camelCase',
          attributes: ['Message']
        }).serialize(Document)
    },

    deserialize: async function (Document) {
      return await new Transformer.Deserializer({ keyForAttribute: 'camelCase' }).deserialize(Document)
    }
  }
}
