import MongoDBConnector from "../connectors/MongoDBConnector";

class SubjectModel {
  
  public static async create(subject) {
    console.log(subject);
    
    const d = new Date();
    await MongoDBConnector
      .collection("subjects")
      .createIndex({ name: 1 }, { unique: true }, function(err, result) {
      if(err) {
         console.log(err);
   
      } else {
        console.log(result);
     } 
   });
    
   const res = await MongoDBConnector
      .collection("subjects")
      .insertOne({ ...subject, created: d, modified: d });
    return res.ops[0];
  }

  public static async delete(name) {
    const res = await MongoDBConnector
    .collection("subjects")
    .findOneAndDelete({name});

    return  res.value;
  }

  public static async update(title: string, fieldsToUpdate) {
    
    const d = new Date();
    const res = await MongoDBConnector
      .collection("subjects")
      .findOneAndUpdate(
        { title },
        { $set: { ...fieldsToUpdate, created: d, modified: d } },
        { returnOriginal: false },
    );
    return res.value;
  }

  public static async get(name: string) {
    return MongoDBConnector
      .collection("subjects")
      .findOne({ name });
  }
}

export default SubjectModel;