import db from "../config/db";

class ProductsService {
  public async index() {
    const results = await db
      .from("products")
      .select("*")
      .order("id", { ascending: true })
      .limit(10);

    return results.data;
  }

  public async show(id: number) {
    const results = await db.from("products").select("*").eq("id", id);

    if (!results.data || results.data.length === 0) {
      throw new Error("Product not found.");
    }

    return results.data[0];
  }
}

export default ProductsService;
