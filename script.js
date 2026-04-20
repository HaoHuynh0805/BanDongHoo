const STORAGE = {
    PRODUCTS: 'hao_ultimate_products',
    CART: 'hao_ultimate_cart',
    ORDERS: 'hao_ultimate_orders'
};

// 20 sản phẩm đồng hồ cao cấp (đủ các thương hiệu nổi tiếng)
const products = [
    { id: "p1", name: "Rolex Submariner Hulk", brand: "Rolex", price: 480000000, image: "https://images.unsplash.com/photo-1585123334904-845d60e6b2f9?w=600&h=400&fit=crop", description: "Mặt xanh lục, viền xanh, thép 904L.", badge: null, stock: 8, rating: 5, originalPrice: null },
    { id: "p2", name: "Rolex Daytona Rainbow", brand: "Rolex", price: 950000000, image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=400&fit=crop", description: "Vàng hồng, đá quý cầu vồng.", badge: "sale", stock: 3, rating: 5, originalPrice: 1200000000 },
    { id: "p3", name: "Omega Speedmaster Moonwatch", brand: "Omega", price: 210000000, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=400&fit=crop", description: "Di sản mặt trăng.", badge: null, stock: 12, rating: 4, originalPrice: null },
    { id: "p4", name: "Omega Seamaster 300M", brand: "Omega", price: 125000000, image: "https://images.unsplash.com/photo-1585123334904-845d60e6b2f9?w=600&h=400&fit=crop", description: "James Bond edition.", badge: null, stock: 20, rating: 4, originalPrice: null },
    { id: "p5", name: "Patek Philippe Nautilus", brand: "Patek", price: 1800000000, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=400&fit=crop", description: "Biểu tượng thể thao.", badge: "new", stock: 2, rating: 5, originalPrice: null },
    { id: "p6", name: "Patek Philippe Aquanaut", brand: "Patek", price: 890000000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop", description: "Cao su cao cấp.", badge: null, stock: 5, rating: 5, originalPrice: null },
    { id: "p7", name: "Audemars Piguet Royal Oak", brand: "Audemars", price: 1450000000, image: "https://images.unsplash.com/photo-1585123334904-845d60e6b2f9?w=600&h=400&fit=crop", description: "Bát giác huyền thoại.", badge: null, stock: 4, rating: 5, originalPrice: null },
    { id: "p8", name: "Audemars Piguet Code 11.59", brand: "Audemars", price: 720000000, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=400&fit=crop", description: "Mặt số enamel.", badge: null, stock: 6, rating: 4, originalPrice: null },
    { id: "p9", name: "Hào Vintage Chronograph", brand: "Hào", price: 45000000, image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=400&fit=crop", description: "Cổ điển, lên dây cót.", badge: null, stock: 10, rating: 4, originalPrice: null },
    { id: "p10", name: "Hào Diamond Ice", brand: "Hào", price: 387000000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop", description: "Đính kim cương.", badge: null, stock: 3, rating: 5, originalPrice: null },
    { id: "p11", name: "Rolex GMT-Master II Pepsi", brand: "Rolex", price: 520000000, image: "https://images.unsplash.com/photo-1585123334904-845d60e6b2f9?w=600&h=400&fit=crop", description: "Viền đỏ xanh.", badge: null, stock: 7, rating: 5, originalPrice: null },
    { id: "p12", name: "Omega Constellation", brand: "Omega", price: 198000000, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=400&fit=crop", description: "Griffes, dây vàng thép.", badge: null, stock: 9, rating: 4, originalPrice: null },
    { id: "p13", name: "Hào Skeleton Art", brand: "Hào", price: 276000000, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=400&fit=crop", description: "Lộ máy tinh xảo.", badge: "new", stock: 8, rating: 5, originalPrice: null },
    { id: "p14", name: "IWC Portuguese Chrono", brand: "IWC", price: 320000000, image: "https://images.unsplash.com/photo-1585123334904-845d60e6b2f9?w=600&h=400&fit=crop", description: "Bộ máy tự động.", badge: null, stock: 6, rating: 4, originalPrice: null },
    { id: "p15", name: "Cartier Santos", brand: "Cartier", price: 280000000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop", description: "Thiết kế vuông.", badge: null, stock: 7, rating: 4, originalPrice: null },
    { id: "p16", name: "Hublot Big Bang Unico", brand: "Hublot", price: 450000000, image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=400&fit=crop", description: "Carbon, thể thao.", badge: null, stock: 5, rating: 4, originalPrice: null },
    { id: "p17", name: "Richard Mille RM 11-03", brand: "Richard Mille", price: 1850000000, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=400&fit=crop", description: "Siêu xe đeo tay.", badge: null, stock: 1, rating: 5, originalPrice: null },
    { id: "p18", name: "Jaeger-LeCoultre Reverso", brand: "Jaeger", price: 350000000, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=400&fit=crop", description: "Mặt lật biểu tượng.", badge: null, stock: 4, rating: 5, originalPrice: null },
    { id: "p19", name: "Vacheron Constantin Classic", brand: "Vacheron", price: 650000000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop", description: "Kinh điển, thủ công.", badge: null, stock: 3, rating: 5, originalPrice: null },
    { id: "p20", name: "Hào Emperor Tourbillon", brand: "Hào", price: 1250000000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop", description: "Tourbillon bay, vàng 18K.", badge: "new", stock: 5, rating: 5, originalPrice: null }
];

function initData() {
    if (!localStorage.getItem(STORAGE.PRODUCTS)) localStorage.setItem(STORAGE.PRODUCTS, JSON.stringify(products));
    if (!localStorage.getItem(STORAGE.CART)) localStorage.setItem(STORAGE.CART, JSON.stringify([]));
    if (!localStorage.getItem(STORAGE.ORDERS)) localStorage.setItem(STORAGE.ORDERS, JSON.stringify([]));
}
initData();

function getProducts() { return JSON.parse(localStorage.getItem(STORAGE.PRODUCTS)); }
function saveProducts(p) { localStorage.setItem(STORAGE.PRODUCTS, JSON.stringify(p)); }
function getCart() { return JSON.parse(localStorage.getItem(STORAGE.CART)); }
function saveCart(c) { localStorage.setItem(STORAGE.CART, JSON.stringify(c)); updateCartCount(); }
function getOrders() { return JSON.parse(localStorage.getItem(STORAGE.ORDERS)); }
function saveOrders(o) { localStorage.setItem(STORAGE.ORDERS, JSON.stringify(o)); }

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((s,i)=>s+i.quantity,0);
    document.querySelectorAll('#cartCount').forEach(el => { if(el) el.innerText = total; });
}

function addToCart(product, qty=1) {
    let cart = getCart();
    const exist = cart.find(i => i.productId === product.id);
    if(exist) exist.quantity += qty;
    else cart.push({ productId: product.id, name: product.name, price: product.price, image: product.image, quantity: qty });
    saveCart(cart);
    showToast(`✨ ${product.name} đã thêm vào giỏ!`);
}

function showToast(msg) {
    let toast = document.getElementById('toastMsg');
    if(!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.className = 'toast-luxury';
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.display = 'block';
    setTimeout(() => toast.style.display = 'none', 2500);
}

function getProductById(id) {
    return getProducts().find(p => p.id === id);
}

function isAdminLoggedIn() {
    return sessionStorage.getItem('hao_admin_logged') === 'true';
}
function adminLogin(password) {
    if (password === 'admin123') {
        sessionStorage.setItem('hao_admin_logged', 'true');
        return true;
    }
    return false;
}
function adminLogout() {
    sessionStorage.removeItem('hao_admin_logged');
}

window.getProducts = getProducts;
window.saveProducts = saveProducts;
window.getCart = getCart;
window.saveCart = saveCart;
window.getOrders = getOrders;
window.saveOrders = saveOrders;
window.addToCart = addToCart;
window.showToast = showToast;
window.getProductById = getProductById;
window.updateCartCount = updateCartCount;
window.isAdminLoggedIn = isAdminLoggedIn;
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
