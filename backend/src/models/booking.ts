import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    apartmentName: {
      type: Number,
      unique: true,
    },

    sortIndex: {
      type: Number,
      require: true,
      unique: true,
    },

    reservations: {
      type: Array,
      of: Object,

      fullName: {
        type: String,
        required: true,
      },

      phoneNumber: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
      },

      dates: {
        type: Array,
        of: String,
      },

      numberOfPeople: {
        type: Number,
        required: true,
      },

      numberOfChildren: {
        type: Number,
        required: true,
      },

      bookingPrice: {
        type: Number,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },

      checkInDay: {
        type: String,
        require: true,
      },

      checkOutDay: {
        type: String,
        require: true,
      },

      canceled: {
        type: Boolean,
        required: true,
      },

      timestamps: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", BookingSchema);
