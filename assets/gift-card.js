document.addEventListener("DOMContentLoaded", () => {
  let config = {
    qrCode: "#QrCode",
    printButton: "#PrintGiftCard",
    giftCardCode: "#GiftCardDigits",
  };

  let qrCode = config.qrCode;

  new QRCode(qrCode[0], {
    text: qrCode.attr("data-identifier"),
    width: 120,
    height: 120,
    imageAltText: theme.strings.qrImageAlt,
  });

  document.querySelector(config.printButton).addEventListener("click", (e) => {
    window.print();
  });

  document
    .querySelector(config.giftCardCode)
    .addEventListener("focus", this.select);
});
