import React from "react";
import SelectInput from "../../common/InputComponents/SelectInput";
import TextInput from "../../common/InputComponents/TextInput";

export default function ProductDetail({
  categories,
  product,
  onSave,
  onChange,
}) {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update" : "Add"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        placeHolder="Type product name..."
        error="Error"
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="Error"
      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        placeHolder="Type unit price..."
        error="Error"
      />
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        placeHolder="Type quantity per unit..."
        error="Error"
      />
      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        placeHolder="Type units in stock..."
        error="Error"
      />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
}
