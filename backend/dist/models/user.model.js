"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    created_user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    updated_user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    deleted_user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    deleted_at: {
        type: Date
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.model.js.map