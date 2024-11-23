// // Using Mongoose
// import mongoose from 'mongoose';
// // const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/trainer_db';
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });
// const User = mongoose.model('User', userSchema);
// async function main() {
//     try {
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connected to MongoDB\n');
//         //first User
//         const user = new User({
//             name: 'Vinith',
//             age: 25
//         });
//         await user.save();
//         console.log('User saved:', user);
//         const users = await User.find({});
//         console.log('Found users:', users);
//         //second user
//         const newUser1 = new User({
//             name: 'Jeevitha',
//             age: 30
//         });
//         await newUser1.save();
//         console.log('User created:', newUser1);
//         //third user
//         const newUser2 = new User({
//             name: 'Akshay',
//             age: 20
//         });
//         await newUser2.save();
//         console.log('User created:', newUser2);
//         //Read user by name
//         const user1 = await User.findOne({
//             _id: '6732a156b1e9119ee65dcf1c'
//         });
//         console.log('User found:', user1);
//         //update a document
//         const updateUser = await User.updateOne({
//             _id: '6732a156b1e9119ee65dcf1c'
//         }, {
//             $set: {
//                 name: "Emily Martin"
//             }
//         });
//         console.log('User updated:', updateUser);
//         const users_updated = await User.find({});
//         console.log('Found users:', users_updated);
//         //delete user 
//         const deleteUser = await User.deleteMany({
//             name: 'Emily'
//         });
//         const newUsers4 = await User.find({});
//         console.log("users after deletions: ", newUsers4);
//     } finally {
//         await mongoose.disconnect();
//     }
// }
// main().catch(console.error);


import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/trainer_db';

// Define the nested schema for Address
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipCode: String
});

// Define the Course schema for storing multiple courses
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    duration: Number // in hours, for example
});

// Update the User schema to include nested Address and an array of Courses
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: addressSchema,
    courses: [courseSchema]
});

const User = mongoose.model('User', userSchema);

async function main() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB\n');

        // Example of creating a user with nested data
        const user = new User({
            name: 'Vinith',
            age: 25,
            address: {
                street: '123 Main St',
                city: 'Cityville',
                state: 'CA',
                zipCode: '12345'
            },
            courses: [{
                    title: 'Math 101',
                    description: 'Basic Math Course',
                    duration: 40
                },
                {
                    title: 'Science 201',
                    description: 'Intermediate Science',
                    duration: 60
                }
            ]
        });

        await user.save();
        console.log('User saved:', user);

        // Querying all users to see nested data
        const users = await User.find({});
        console.log('Found users:', users);

        // Updating a user
        const updateUser = await User.updateOne({
            _id: user._id
        }, {
            $set: {
                'address.city': 'New City'
            }
        });
        console.log('User updated:', updateUser);

        const updatedUsers = await User.find({});
        console.log('Users after update:', updatedUsers);

        // Deleting a user
        const deleteUser = await User.deleteOne({
            name: 'Vinith'
        });
        console.log('User deleted:', deleteUser);

        const remainingUsers = await User.find({});
        console.log("Remaining users:", remainingUsers);

    } finally {
        await mongoose.disconnect();
    }
}

main().catch(console.error);