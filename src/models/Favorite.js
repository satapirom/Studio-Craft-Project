import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true,
            ref: "User"
        },
        isFavorited: {
            type: Boolean,
            default: true
        }
    }
);

const Favorite = mongoose.models.Favorite || mongoose.model('Favorite', FavoriteSchema);
export default Favorite;