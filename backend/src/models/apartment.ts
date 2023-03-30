import mongoose from 'mongoose';

const ApartmentSchema = new mongoose.Schema(
  {
    apartmentName: {
      type: Number,
      unique: true,
    },

    summerPrice: {
      type: Number,
      require: true,
    },

    winterPrice: {
      type: Number,
      require: true,
    },

    sortIndex: {
      type: Number,
      require: true,
      unique: true,
    },

		reservations: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Reservation',
		}],

    about: {
      type: Object,
      viev: {
        type: String,
        require: true,
      },

      balcony: {
        type: String,
        require: true,
      },

      rooms: {
        type: Number,
        require: true,
      },

      sleepingPlaces: {
        type: Number,
        require: true,
      },

      squareMeters: {
        type: Number,
        require: true,
      },

      floor: {
        type: Number,
        require: true,
      },

      description: {
        type: [String],
        require: true,
      },
    },

    images: {
      type: Array,

      id: {
        type: String,
        require: true,
      },
      image: {
        type: String,
        require: true,
      },

      alt: {
        type: String,
        require: true,
      },
    },

    services: {
      type: Object,
      stove: {
        type: Boolean,
        required: true,
      },

      dishwasher: {
        type: Boolean,
        required: true,
      },

      coffeeMachine: {
        type: Boolean,
        required: true,
      },

      conditioner: {
        type: Boolean,
        required: true,
      },

      wifi: {
        type: Boolean,
        required: true,
      },
      washer: {
        type: Boolean,
        required: true,
      },

      microwave: {
        type: Boolean,
        required: true,
      },

      hairDryer: {
        type: Boolean,
        required: true,
      },

      iron: {
        type: Boolean,
        required: true,
      },

      towels: {
        type: Boolean,
        required: true,
      },
    },

    meta: {
      type: Object,

      title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      keywords: {
        type: String,
        require: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Apartment', ApartmentSchema);
