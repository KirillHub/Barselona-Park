import mongoose from 'mongoose';
const ApartmentSchema = new mongoose.Schema({
    apartmentName: {
        type: String,
        unique: true,
    },
    summerPrice: {
        type: String,
        require: true,
    },
    winterPrice: {
        type: String,
        require: true,
    },
    sortIndex: {
        type: String,
        require: true,
        unique: true,
    },
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
            type: String,
            require: true,
        },
        sleepingPlaces: {
            type: String,
            require: true,
        },
        squareMeters: {
            type: String,
            require: true,
        },
        floor: {
            type: String,
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
}, {
    timestamps: true,
});
export default mongoose.model('Apartment', ApartmentSchema);
//# sourceMappingURL=apartment.js.map