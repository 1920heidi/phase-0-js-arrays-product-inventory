// Product inventory array
const products = [
  "Laptop",
  "Phone",
  "Headphones",
  "Monitor"
];
// Function for product information
function logFirstProduct() {
  if (products.length > 0) {
    console.log(products[0]);
  } else {
    console.log("No products available.");
  }
}

// Function to add a new product
function addProduct(productName) {
  if (productName) {
    products.push(productName); }
    else {
      console.log("Product name cannot be empty.");
    } 
  }

// Function to update a product's name
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length && newName) {
    products[index] = newName;
  } else{
    console.log("Invalid product name.");
  }
}

  // Function to remove the last product
function removeLastProduct() {
  if (products.length > 0) {
    products.pop(); 
  }else {
    console.log("No products to remove.");
  } 
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
