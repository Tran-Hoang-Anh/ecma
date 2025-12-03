// ========================================
// BÀI 4: ASYNC/AWAIT SỬ DỤNG API
// ========================================

// Hàm fetch user từ API theo id
async function getUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error(`Error fetching user ${userId}: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getOrder(orderId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: orderId, userId: 1, productIds: [101, 102] });
    }, 500);
  });
}

async function getProducts(productIds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productIds.map(id => ({ id, name: `Product ${id}` })));
    }, 500);
  });
}

// BÀI 4 – PHẦN 1: processOrder sử dụng async/await
async function processOrder(orderId) {
  try {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);

    return { order, user, products };
  } catch (error) {
    console.error("Error processing order:", error);
    return null;
  }
}

processOrder(123).then(result => console.log("Process Order Result:", result));

// BÀI 4 – PHẦN 2: safeApiCall xử lý lỗi
async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message || error };
  }
}

(async () => {
  const response = await safeApiCall(getUser, 1);
  console.log("Safe API Call Result:", response);

  const errorResponse = await safeApiCall(getUser, 9999);
  console.log("Safe API Call Error Example:", errorResponse);
})();
