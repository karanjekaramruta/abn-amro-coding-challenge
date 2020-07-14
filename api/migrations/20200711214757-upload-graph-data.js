module.exports = {
  up(db) {
    return db.collection("users").insertOne(
      {
        data: [
          {
            name: "A",
            description: "This is a description of A",
            parent: "",
          },
          {
            name: "B",
            description: "This is a description of B",
            parent: "A",
          },
          {
            name: "C",
            description: "This is a description of C",
            parent: "A",
          },
          {
            name: "E",
            description: "This is a description of C",
            parent: "C",
          },
          {
            name: "D",
            description: "This is a description of D",
            parent: "A",
          },
          {
            name: "B-1",
            description: "This is a description of B-1",
            parent: "B",
          },
          {
            name: "B-2",
            description: "This is a description of B-2",
            parent: "B",
          },
          {
            name: "B-3",
            description: "This is a description of B-3",
            parent: "B",
          },
          {
            name: "B-4",
            description: "This is a description of B-3",
            parent: "B-3",
          },
        ]
      }

    );
  },

  down(db) {
    return db
      .collection("users")
      .updateOne({ name: "A" }, { $set: { parent: "B" } });
  },
};
