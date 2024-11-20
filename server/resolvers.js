const Location = require('./models/Location');
const Hostel = require('./models/Hostel');

const resolvers = {
  Query: {
    locations: async () => {
      return await Location.find();
    },
    hostels: async (_, { locationId }) => {
      return await Hostel.find({ locationId });
    },

    hostelCounts: async () => {
      const locations = await Location.find();
      const counts = await Promise.all(
        locations.map(async (location) => {
          const count = await Hostel.countDocuments({ locationId: location.id });
          return {
            locationId: location.id,
            locationName: location.name,
            hostelCount: count,
          };
        })
      );
      return counts;
    },

  },
  Mutation: {
    addLocation: async (_, { name, image }) => {
      const location = new Location({ name, image });
      await location.save();
      return location;
    },
    addHostel: async (_, { name, image, locationId }) => {
      const hostel = new Hostel({ name, image, locationId });
      await hostel.save();
      return hostel;
    },
  },

};

module.exports = resolvers;
