
document.getElementById('calculateButton').addEventListener('click', function () {
    let totalCost = 0;
  
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      
      const price = parseFloat(product.querySelector('.price').textContent);
      const quantity = parseInt(product.querySelector('.quantity').value) || 0;
  
      
      totalCost += price * quantity;
    });
  
   
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
  });
  