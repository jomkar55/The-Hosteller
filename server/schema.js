const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    image: String!
  }

  type Hostel {
    id: ID!
    name: String!
    image: String!
    locationId: ID!
  }
  type HostelCount {
    locationId: ID!
    locationName: String!
    hostelCount: Int!
  }
  type Query {
    locations: [Location]
    hostels(locationId: ID!): [Hostel]
       hostelCounts: [HostelCount] 
  }

  type Mutation {
    addLocation(name: String!, image: String!): Location
    addHostel(name: String!, image: String!, locationId: ID!): Hostel
  }
`;

module.exports = typeDefs;
