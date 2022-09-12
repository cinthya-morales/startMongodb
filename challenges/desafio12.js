db.produtos.updateMany({ $and: [
  { nome: { $ne: "McChicken" } }, 
  { ingredientes: { $ne: "Ketchup" } },
] }, { $push: { ingredientes: "Ketchup" } });
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
