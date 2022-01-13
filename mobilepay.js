function MobilePay(element) {
	var child = element.firstChild;
	while(child != null) {
		element.removeChild(child);
		child = element.firstChild;
	}
	var mobilepay = document.createElement("div");
	var link = document.createElement("a");
	var qrcontainer = document.createElement("div");
	var whitebox = document.createElement("div");
	var qrcode = document.createElement("canvas");
	mobilepay.appendChild(link).appendChild(qrcontainer).appendChild(whitebox).appendChild(qrcode);
	element.appendChild(mobilepay);
	return {
		create: function(phone, amount, comment, lock) {
			var url = "mobilepay://send?phone="+phone+"&amount="+amount+"&comment="+encodeURIComponent(comment)+"&lock="+lock;
			new QRious({
				element: qrcode,
				size: 1000,
				value: url
			});
			link.setAttribute("href", url);
		}
	};
}

