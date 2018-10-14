import MongoDBConnector from "../connectors/MongoDBConnector";

class StudentModel {
  
  public static async create(student) {
    console.log(student);
    
    const d = new Date();
    await MongoDBConnector
      .collection("students")
      .createIndex({ email: 1 }, { unique: true }, function(err, result) {
      if(err) {
         console.log(err);
   
      } else {
        console.log(result);
     } 
   });
    
   const res = await MongoDBConnector
      .collection("students")
      .insertOne({ ...student, created: d, modified: d });
    return res.ops[0];
  }

  public static async delete(email) {
    const res = await MongoDBConnector
    .collection("students")
    .findOneAndDelete({email});

    return  res.value;
  }

  public static async update(email: string, fieldsToUpdate) {
    
    const d = new Date();
    const res = await MongoDBConnector
      .collection("students")
      .findOneAndUpdate(
        { email },
        { $set: { ...fieldsToUpdate, created: d, modified: d } },
        { returnOriginal: false },
    );
    return res.value;
  }

  public static async get(email: string) {
    return MongoDBConnector
      .collection("students")
      .findOne({ email });
  }
}

export default StudentModel;