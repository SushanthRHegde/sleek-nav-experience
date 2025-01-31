const CartTemplate = () => {
  return (
    <div className="p-8 glass-card rounded-lg max-w-2xl mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-6">Abandoned Cart Reminder</h2>
      <div className="space-y-6">
        <div className="p-6 bg-white/5 rounded-lg">
          <h3 className="text-xl mb-4">Don't Miss Out!</h3>
          <p className="text-gray-300 mb-4">
            We noticed you left some items in your cart. Here's what you're missing:
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
              <span>Product Name</span>
              <span>$99.99</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
              <span>Another Product</span>
              <span>$49.99</span>
            </div>
          </div>
          <button className="w-full py-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg">
            Complete Your Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTemplate;