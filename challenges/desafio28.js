db.produtos.find({ ingredientes: { $size: 4 } }, { _id: 0, nome: 1, ingredientes: 1 }).count();