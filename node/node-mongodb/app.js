const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const dbName = "tes";
const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db(dbName);
    const collection = database.collection("mahasiswa");

    // Insert data
    // const newMhs = { nama: "Ujang", nip: 8131628 };
    // const mhs = await collection.insertOne(newMhs);

    // Insert data many
    // const newMhs = [
    //   {
    //     nama: "Supardi",
    //     nip: 9123823,
    //   },
    //   {
    //     nama: "Nunung",
    //     nip: 9127389,
    //   },
    //   {
    //     nama: "Bordecay",
    //     nip: 8123798,
    //   },
    // ];
    // const mhs = await collection.insertMany(newMhs);
    // const mhsIds = mhs.insertedIds;

    // for (let id of Object.values(mhsIds)) {
    //   console.log(`Mahasiswa ${id} telah ditambahkan`);
    // }

    // Query document
    // const query = { nama: "Romelih" };
    // const mhs = await collection.findOne(query);

    // Query all documents with specific fields to return
    // const projectFields = { _id: 0, nama: 1 };
    // const query = collection.find().project(projectFields);
    // for await (const mhs of query) {
    //   console.log(mhs.nama);
    // }

    // Update / edit document
    // const filter = { nama: "Romelih" };
    // const update = await collection.updateOne(filter, {
    //   $set: { nama: "Romey" },
    // });

    // console.log(update);

    // Delete document
    const filter = { nama: "Ujang" };
    const mhs = await collection.deleteOne(filter);

    if (mhs.deletedCount === 1) {
      console.log(`Berhasil menghapus ${mhs.deletedCount} mahasiswa`);
    } else {
      console.log(`Tidak ada mahasiswa yang sesuai`);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

// client.connect((error, client) => {
//   if (error) {
//     console.log("koneksi gagal");
//   }
//   console.log("koneksi berhasil");
// });
