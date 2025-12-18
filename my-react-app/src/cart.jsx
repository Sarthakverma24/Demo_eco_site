import React from 'react';
import { 
  ShoppingCart, 
  Minus, 
  Plus, 
  Trash2, 
  FileText, 
  Tag 
} from 'lucide-react';

const CartPage = ({ cartItems, updateQuantity, removeItem }) => {
  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = 0; // Placeholder as per screenshot (Tax Inclusive)
  const total = subtotal + tax;

  // Empty State View
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 font-heading">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any VR gear yet.</p>
        <button 
          onClick={() => window.location.reload()} // Or pass a navigation handler prop
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  // Active Cart View
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 font-body">
      {/* Page Title */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <ShoppingCart className="w-8 h-8 text-gray-900" />
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
          Shopping Cart ({cartItems.length} Item{cartItems.length !== 1 ? 's' : ''})
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-heading font-bold text-xl text-gray-900 mb-6">Your Cart Items</h2>
          
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-sm">
              {/* Product Image */}
              <div className="w-24 h-24 bg-gray-50 rounded-lg shrink-0 flex items-center justify-center p-2 border border-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-1 truncate">{item.name}</h3>
                <p className="text-xs text-gray-500 font-medium mb-1">Tax Inclusive</p>
                <p className="text-xs text-gray-400">SKU: {item.sku}</p>
              </div>

              {/* Price & Actions */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 sm:gap-6 mt-4 sm:mt-0">
                <span className="font-heading font-bold text-xl text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                
                <div className="flex items-center gap-4">
                  {/* Quantity Control */}
                  <div className="flex items-center border border-gray-200 rounded-lg h-9">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-l-lg transition-colors disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <div className="w-10 h-full flex items-center justify-center text-sm font-bold text-gray-900 border-x border-gray-200">
                      {item.quantity}
                    </div>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-r-lg transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24">
            <h2 className="font-heading font-bold text-xl text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-medium">Amount</span>
                <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-medium">Discount</span>
                <span className="font-bold text-gray-900">$0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-medium">Tax</span>
                <span className="font-bold text-gray-900">$0.00</span>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-200 my-4"></div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-heading font-bold text-lg text-gray-900">Total Amount</span>
              <span className="font-heading font-black text-2xl text-gray-900">${total.toFixed(2)}</span>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3 mb-6 cursor-pointer hover:bg-gray-100 transition-colors">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-bold text-gray-700">Tax Details</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                 <Tag className="w-4 h-4 text-gray-900" />
                 <span className="font-bold text-sm text-gray-900">Apply Coupon</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter coupon code" 
                  className="flex-1 h-11 px-4 bg-white border border-gray-300 rounded-lg text-sm outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                />
                <button className="bg-gray-200 text-gray-700 font-bold px-6 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                  Apply
                </button>
              </div>
            </div>

            <button className="w-full bg-red-600 text-white font-bold font-heading py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 active:scale-[0.98]">
              PROCESS TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;