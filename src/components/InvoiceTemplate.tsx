const InvoiceTemplate = () => {
  return (
    <div className="p-8 glass-card rounded-lg max-w-2xl mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-6">Invoice #INV-2024-001</h2>
      <div className="space-y-6">
        <div className="flex justify-between mb-8">
          <div>
            <h3 className="font-semibold mb-2">From:</h3>
            <p className="text-gray-300">Your Company Name</p>
            <p className="text-gray-400">123 Business Street</p>
            <p className="text-gray-400">City, Country</p>
          </div>
          <div className="text-right">
            <h3 className="font-semibold mb-2">To:</h3>
            <p className="text-gray-300">Client Name</p>
            <p className="text-gray-400">456 Client Avenue</p>
            <p className="text-gray-400">City, Country</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
            <span>Service 1</span>
            <span>$500.00</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
            <span>Service 2</span>
            <span>$300.00</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg font-semibold">
            <span>Total</span>
            <span>$800.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplate;