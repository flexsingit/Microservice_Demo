import userSerializer from '../../lib/serializers/serializer'
import { errorsList } from '../../lib/errors/errorsList'

export async function post (req, res) {
  const reqbody = req.swagger.params.reqBody.value
  try {
    // Deserializer to deserialize request data from request body
    // const deserializeData = await userSerializer.deserialize(reqbody)
    console.log(reqbody)
    res.status(201).send(reqbody)
  } catch (err) {
    console.log(err)
    if (err.statusCode) {
      // TODO: do something better here
      // console.log(err)
      res.status(500).json(errorsList.ServiceError)
    }
  }
}

export async function getAll (req, res) {
  try {
    const msg = { 'Message': 'Hello' }
    // send data for serialization according to JSON API Specification //
    const serializedUserResponse = await userSerializer.serialize(msg)
    console.log('Hello')
    res.status(200).json(serializedUserResponse)
  } catch (err) {
    // TODO: do something better here
    // console.log(err)
    res.status(500).json(errorsList.ServiceError)
  }
}

export async function get (req, res) {
  try {
    const slug = req.swagger.params.slug.value
    const msg = `Hello {${slug}}`
    console.log(msg)
    res.status(200).json(msg)
  } catch (error) {
    // TODO: do something better here
    // console.log(err)
    res.status(500).json(errorsList.ServiceError)
  }
}
