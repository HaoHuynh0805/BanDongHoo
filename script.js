// script.js - 12 luxury watches with detailed images (text + watch icon)
const STORAGE = {
    PRODUCTS: 'hao_ultimate_products',
    CART: 'hao_ultimate_cart',
    ORDERS: 'hao_ultimate_orders'
};

// Hàm tạo ảnh placehold với text tên sản phẩm + icon đồng hồ (dùng emoji)
function getWatchImage(name, bgColor, textColor) {
    // Thay thế tên sản phẩm có dấu cách thành %20
    const encodedName = encodeURIComponent(name);
    // Thêm biểu tượng đồng hồ ⌚ vào đầu text
    const displayText = `⌚ ${name}`;
    return `https://placehold.co/600x400/${bgColor}/${textColor}?text=${encodeURIComponent(displayText)}&font=playfair`;
}

const products = [
    { id: "p1", name: "Hào Emperor Tourbillon", brand: "Hào", price: 1250000000, image: getWatchImage("Hào Emperor Tourbillon", "1A1A1A", "C5A059"), description: "Tourbillon bay, vỏ vàng 18K, dây cá sấu thật. Số lượng giới hạn 50 chiếc.", badge: "new", stock: 5, rating: 5, originalPrice: null },
    { id: "p2", name: "Rolex Submariner Hulk", brand: "Rolex", price: 480000000, image: getWatchImage("Rolex Submariner Hulk", "2C6E2C", "C5A059"), description: "Mặt xanh lục, viền xanh, thép 904L, đẳng cấp.", badge: null, stock: 8, rating: 5, originalPrice: null },
    { id: "p3", name: "Rolex Daytona Rainbow", brand: "Rolex", price: 950000000, image: getWatchImage("Rolex Daytona Rainbow", "8B5A2B", "C5A059"), description: "Vàng hồng, đá quý cầu vồng trên bezel, siêu phẩm.", badge: "sale", stock: 3, rating: 5, originalPrice: 1200000000 },
    { id: "p4", name: "Omega Speedmaster Moonwatch", brand: "Omega", price: 210000000, image: getWatchImage("Omega Speedmaster Moonwatch", "1A2B3C", "C5A059"), description: "Di sản mặt trăng, calibre 3861.", badge: null, stock: 12, rating: 4, originalPrice: null },
    { id: "p5", name: "Patek Philippe Nautilus", brand: "Patek", price: 1800000000, image: getWatchImage("Patek Philippe Nautilus", "34568B", "C5A059"), description: "Biểu tượng thể thao sang trọng.", badge: "new", stock: 2, rating: 5, originalPrice: null },
    { id: "p6", name: "Audemars Piguet Royal Oak", brand: "Audemars", price: 1450000000, image: getWatchImage("Audemars Piguet Royal Oak", "2E2E2E", "C5A059"), description: "Bát giác huyền thoại, vát cạnh thủ công.", badge: null, stock: 4, rating: 5, originalPrice: null },
    { id: "p7", name: "Hào Ocean King GMT", brand: "Hào", price: 189000000, image: getWatchImage("Hào Ocean King GMT", "2C3E50", "C5A059"), description: "Chống nước 500m, ceramic bezel, GMT.", badge: "sale", stock: 15, rating: 4, originalPrice: 250000000 },
    { id: "p8", name: "Omega Seamaster 300M", brand: "Omega", price: 125000000, image: getWatchImage("Omega Seamaster 300M", "0F2F3F", "C5A059"), description: "James Bond edition.", badge: null, stock: 20, rating: 4, originalPrice: null },
    { id: "p9", name: "Cartier Santos", brand: "Cartier", price: 280000000, image: getWatchImage("Cartier Santos", "8B4513", "C5A059"), description: "Thiết kế vuông, dây thép.", badge: null, stock: 7, rating: 4, originalPrice: null },
    { id: "p10", name: "IWC Portuguese Chrono", brand: "IWC", price: 320000000, image: getWatchImage("IWC Portuguese Chrono", "1A2B3C", "C5A059"), description: "Bộ máy tự động, mặt số bạc.", badge: null, stock: 6, rating: 4, originalPrice: null },
    { id: "p11", name: "Hào Skeleton Art", brand: "Hào", price: 276000000, image: getWatchImage("Hào Skeleton Art", "303030", "C5A059"), description: "Lộ máy tinh xảo.", badge: "new", stock: 9, rating: 5, originalPrice: null },
    { id: "p12", name: "Richard Mille RM 11-03", brand: "Richard Mille", price: 1850000000, image: getWatchImage("Richard Mille RM 11-03", "FFD700", "1A1A1A"), description: "Siêu xe đeo tay.", badge: null, stock: 1, rating: 5, originalPrice: null }
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