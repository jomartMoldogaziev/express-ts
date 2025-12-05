"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = async (req, res) => {
    try {
        const data = [
            {
                name: "Sample User",
                description: "This is a sample user item."
            }
        ];
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.error("Error in getTodos:", e);
    }
};
exports.default = { getUsers };
//# sourceMappingURL=user.controller.js.map