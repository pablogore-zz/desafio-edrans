import MongoDBConnector from "../connectors/MongoDBConnector";

class CareerModel {
  
  public static async create(career) {
    console.log(career);
    
    const d = new Date();
    await MongoDBConnector
      .collection("careers")
      .createIndex({ name: 1 }, { unique: true }, function(err, result) {
      if(err) {
         console.log(err);
   
      } else {
        console.log(result);
     } 
   });
    
   const res = await MongoDBConnector
      .collection("careers")
      .insertOne({ ...career, created: d, modified: d });
    return res.ops[0];
  }

  public static async delete(name) {
    const res = await MongoDBConnector
    .collection("careers")
    .findOneAndDelete({name});

    return  res.value;
  }

  public static async update(name: string, fieldsToUpdate) {
    
    const d = new Date();
    const res = await MongoDBConnector
      .collection("careers")
      .findOneAndUpdate(
        { name },
        { $set: { ...fieldsToUpdate, created: d, modified: d } },
        { returnOriginal: false },
    );
    return res.value;
  }

  public static async get(name: string) {
    return MongoDBConnector
      .collection("careers")
      .findOne({ name });
  }
}

export default CareerModel;