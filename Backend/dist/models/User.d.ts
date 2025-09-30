import mongoose from "mongoose";
declare const User: mongoose.Model<{
    email: string;
    password: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    email: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    password: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    password: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    email: string;
    password: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=User.d.ts.map