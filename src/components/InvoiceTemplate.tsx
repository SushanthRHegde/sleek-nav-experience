import React from "react";
import Navbar from "./Navbar";

interface InvoiceItem {
	description: string;
	category: string;
	quantity: number;
	rate: number;
	tax: number;
	total: number;
}

const InvoiceTemplate = () => {
	const invoiceItems: InvoiceItem[] = [
		{
			description: "Landing Page Webdesign",
			category: "Webdesign",
			quantity: 20,
			rate: 100,
			tax: 20,
			total: 2000,
		},
		{
			description: "Weekly Meetings",
			category: "Consultation",
			quantity: 5,
			rate: 100,
			tax: 20,
			total: 500,
		},
		{
			description: "Figma Design System",
			category: "Webdesign",
			quantity: 10,
			rate: 100,
			tax: 20,
			total: 1000,
		},
	];

	// Calculate subtotal dynamically
	const subtotal = invoiceItems.reduce((acc, item) => acc + item.total, 0);

	// Calculate discount and tax based on subtotal
	const discount = subtotal * 0.1; // 10% discount
	const tax = (subtotal - discount) * 0.2; // 20% tax

	// Calculate final amount
	const finalAmount = subtotal - discount + tax;

	return (
		<div className="min-h-screen flex items-center justify-center bg-black p-4">
			<Navbar />
			<div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl shadow-2xl p-5 w-full max-w-lg mx-auto">
				{/* Header */}
				<div className="mt-17 mb-12"></div>
				<div className="flex justify-between mb-0">
					<div>
						<h1 className="text-lg font-bold text-white">INVOICE</h1>
						<p className="text-xs text-gray-400">COMPANY LLC</p>
					</div>
					<div className="text-right">
						<p className="text-xs text-gray-400">#2023-00</p>
						<p className="text-xs text-gray-400">INVOICE NUMBER</p>
					</div>
				</div>
				{/* From/To Section */}
				<div className="grid grid-cols-2 gap-4 mb-4">
					<div>
						<h2 className="text-red-500 text-xs mb-1">FROM</h2>
						<h3 className="font-semibold text-white text-xs">My Company</h3>
						<p className="text-xs text-gray-400">Sample House</p>
						<p className="text-xs text-gray-400">20 New Main Street</p>
						<p className="text-xs text-gray-400">London W125 235 England</p>
						<p className="text-xs text-gray-400 mt-1">
							VAT Number: 567 3252 20
						</p>
					</div>
					<div>
						<h2 className="text-red-500 text-xs mb-1">TO</h2>
						<h3 className="font-semibold text-white text-xs">Transport LLC</h3>
						<p className="text-xs text-gray-400">2300 N Street,</p>
						<p className="text-xs text-gray-400">EW Suite 200 Washington DC</p>
						<p className="text-xs text-gray-400">20037, United States</p>
						<p className="text-xs text-gray-400 mt-1">EIN Number: 22-2143333</p>
					</div>
				</div>
				{/* Payment Details */}
				<div className="grid grid-cols-2 gap-4 mb-4">
					<div className="space-y-1">
						<div className="flex justify-between text-xs">
							<span className="text-gray-400">Payment method:</span>
							<span className="text-white">Wire Transfer</span>
						</div>
						<div className="flex justify-between text-xs">
							<span className="text-gray-400">Completion date:</span>
							<span className="text-white">01.16.2023.</span>
						</div>
					</div>
					<div className="space-y-1">
						<div className="flex justify-between text-xs">
							<span className="text-gray-400">Issue date:</span>
							<span className="text-white">01.16.2023.</span>
						</div>
						<div className="flex justify-between text-xs">
							<span className="text-gray-400">Due date:</span>
							<span className="text-white">01.24.2023.</span>
						</div>
					</div>
				</div>
				{/* Invoice Items */}
				<div className="mb-4">
					<div className="grid grid-cols-5 gap-2 mb-2 text-xs text-gray-400">
						<div className="col-span-2">DESCRIPTION</div>
						<div>QUANTITY</div>
						<div>RATE</div>
						<div className="text-right">TOTAL</div>
					</div>

					{invoiceItems.map((item, index) => (
						<div
							key={index}
							className="grid grid-cols-5 gap-2 bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-2 rounded-lg mb-1"
						>
							<div className="col-span-2">
								<p className="font-semibold text-white text-xs">
									{item.description}
								</p>
								<p className="text-xs text-gray-400">{item.category}</p>
							</div>
							<div className="text-xs text-white">{item.quantity} hours</div>
							<div className="text-xs text-white">${item.rate} USD</div>
							<div className="text-right text-xs text-white">
								${item.total} USD
							</div>
						</div>
					))}
				</div>
				{/* Notes and Totals */}
				<div className="grid grid-cols-2 gap-4 mb-4">
					<div>
						<h3 className="text-gray-400 text-xs mb-1">NOTES</h3>
						<p className="text-xs text-gray-400">
							January invoice for the branding and webdesign work that we have
							conducted.
						</p>
					</div>
					<div className="space-y-1">
						<div className="flex justify-between text-xs">
							<span className="text-gray-400">SUBTOTAL</span>
							<span className="text-white">${subtotal} USD</span>
						</div>
						<div className="flex justify-between text-xs">
							<span className="text-gray-400">DISCOUNT (10%)</span>
							<span className="text-white">${discount} USD</span>
						</div>
						<div className="flex justify-between text-xs">
							<span className="text-gray-400">TAX (20%)</span>
							<span className="text-white">${tax} USD</span>
						</div>
						<div className="flex justify-between text-sm font-bold text-red-500">
							<span>FINAL AMOUNT</span>
							<span>$ {finalAmount} USD</span>
						</div>
					</div>
				</div>
				{/* Payment Information */}
				<div className="border-t border-gray-800 pt-4">
					<h3 className="text-gray-400 text-xs mb-2">PAYMENT INFORMATION</h3>
					<div className="grid grid-cols-3 gap-4">
						<div>
							<h4 className="font-semibold text-white text-xs mb-1">
								Account details
							</h4>
							<p className="text-xs text-gray-400">
								Account holder: US Company
							</p>
							<p className="text-xs text-gray-400">Account number:</p>
							<p className="text-xs text-gray-400">92000235788882367</p>
						</div>
						<div>
							<h4 className="font-semibold text-white text-xs mb-1">
								Bank address
							</h4>
							<p className="text-xs text-gray-400">
								20 N. 25th Street, Fifth Floor
							</p>
							<p className="text-xs text-gray-400">New York NY 10010</p>
							<p className="text-xs text-gray-400">United States</p>
						</div>
						<div>
							<h4 className="font-semibold text-white text-xs mb-1">
								Questions and contact
							</h4>
							<p className="text-xs text-gray-400">name@owndomain.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceTemplate;
